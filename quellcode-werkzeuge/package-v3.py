from pathlib import Path
import base64,re,zipfile,json
r=Path('dist')
def datauri(p,typ):return 'data:'+typ+';base64,'+base64.b64encode(p.read_bytes()).decode()
figures={p.name:datauri(p,'image/svg+xml') for p in (r/'assets').glob('*.svg')}
(r/'runtime-data.js').write_text('window.FIGURE_DATA='+json.dumps(figures)+';window.WORKSHOP_STYLE='+json.dumps((r/'style.css').read_text())+';')
index=(r/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+(r/'style.css').read_text()+'</style>')
engine=re.sub(r'export \{[^}]+\};','',(r/'assets/chess.mjs').read_text());engine=re.sub(r'//# sourceMappingURL=.*','',engine)
app=re.sub(r'^import .*?;\n','',(r/'app.js').read_text());app=app.replace("fetch('./assets/puzzles.json').then(r=>{if(!r.ok)throw Error();return r.json()})",'Promise.resolve('+(r/'assets/puzzles.json').read_text()+')')
vendors={}  # Offline-Datei ohne Zusatzbibliotheken: Word-Export und Dokumentimport sind in der Oberfläche nicht aktiv.
prelude='window.PLANNER_LICENSE='+json.dumps((r/'LICENSES.html').read_text())+';\n'+'window.PLANNER_START='+json.dumps((r/'START.html').read_text())+';\n'+'window.VENDOR_DATA='+json.dumps(vendors)+';\n'+ '\n'.join((r/f).read_text() for f in ['runtime-data.js','planner-core.js','curriculum.js','lesson-units.js','next-topics.js','quality.js','labyrinth.js','method-catalog.js','teaching-support.js','praxis.js','diplom-lessons.js','jahresplan-data.js','raster.js','jahresplan.js','teacher-board.js','method-cards.js','method-previews.js','method-materials.js','method-print.js','planner-ui.js'])
bundle=prelude+'\n'+engine+'\n'+app
index=index[:index.index('<script src="runtime-data.js">')]+'<script type="module">'+bundle+'</script></body></html>'
index=index.replace('assets/Chess_nlt45.svg',figures['Chess_nlt45.svg'])
licensebody=re.sub(r'^.*?</style>','',(r/'LICENSES.html').read_text()).replace('</html>','')
index=index.replace('<p><a href="LICENSES.html" target="_blank">Alle Einzelquellen, Mitwirkenden und Softwarelizenzen</a></p>','<details><summary>Alle Einzelquellen und Lizenzdetails</summary>'+licensebody+'</details>')
ONLINE='https://edmundbruns.github.io/schachstunde/'
for old,new in [('<a href="SchachStunde.zip" download="SchachStunde.zip">','<a href="'+ONLINE+'SchachStunde.zip" target="_blank" rel="noopener">'),('<a href="SchachStunde.html" download="SchachStunde.html">','<a href="'+ONLINE+'SchachStunde.html" target="_blank" rel="noopener">'),('<a href="START.html" target="_blank" rel="noopener">Kurzanleitung</a>','<a href="#" id="startguide">Kurzanleitung</a>')]:
 assert old in index,old
 index=index.replace(old,new)
for mp3 in (r/'assets/jahresplan').glob('*.mp3'):
 index=index.replace('assets/jahresplan/'+mp3.name,datauri(mp3,'audio/mpeg'))
(r/'SchachStunde.html').write_text(index)
(r/'Ludgerus-Schachwerkstatt.html').write_text('<!doctype html><html lang="de"><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=SchachStunde.html"><title>SchachStunde</title><p>Die Datei heißt jetzt <a href="SchachStunde.html">SchachStunde.html</a>.</p></html>')
with zipfile.ZipFile(r/'SchachStunde.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in r.rglob('*'):
  if p.is_file() and p.suffix!='.zip' and p.name!='Ludgerus-Schachwerkstatt.html':z.write(p,p.name if p.name in ['SchachStunde.html','LICENSES.html','START.html','PRUEFBERICHT.md'] else 'website/'+str(p.relative_to(r)))
 z.write(r/'LICENSES.html','website/LICENSES.html')
 z.write(r/'START.html','website/START.html')
 for p in Path('.').iterdir():
  if p.name in ['package-v3.py','dependencies.py','fetch.py','validate.mjs','test-simple.mjs','test-units.mjs','test-labyrinth.mjs','test-support.mjs','test-pdf.mjs','test-fachlich.mjs','test-entry.mjs','test-storage.mjs','test-positions.mjs','test-tactics.mjs','test-time.mjs','test-diplom.mjs','test-keyboard.cjs','engine-check.mjs','fetch-puzzles.py','select-puzzles.mjs','run-tests.sh','gen-docs.mjs','test-jahresplan.mjs']:z.write(p,'quellcode-werkzeuge/'+p.name)
  if p.name=='jp' and p.is_dir():
   for q in p.rglob('*'):
    if q.is_file() and q.suffix in ('.mjs','.json'):z.write(q,'quellcode-werkzeuge/'+str(q))
