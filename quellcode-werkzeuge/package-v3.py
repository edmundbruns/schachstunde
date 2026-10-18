from pathlib import Path
import base64,re,zipfile,json
r=Path('dist')
def datauri(p,typ):return 'data:'+typ+';base64,'+base64.b64encode(p.read_bytes()).decode()
figures={p.name:datauri(p,'image/svg+xml') for p in (r/'assets').glob('*.svg')}
(r/'runtime-data.js').write_text('window.FIGURE_DATA='+json.dumps(figures)+';window.WORKSHOP_STYLE='+json.dumps((r/'style.css').read_text())+';')
index=(r/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+(r/'style.css').read_text()+'</style>')
engine=re.sub(r'export \{[^}]+\};','',(r/'assets/chess.mjs').read_text());engine=re.sub(r'//# sourceMappingURL=.*','',engine)
app=re.sub(r'^import .*?;\n','',(r/'app.js').read_text());app=app.replace("fetch('./assets/puzzles.json').then(r=>{if(!r.ok)throw Error();return r.json()})",'Promise.resolve('+(r/'assets/puzzles.json').read_text()+')')
vendors={p.name:base64.b64encode(p.read_bytes()).decode() for p in (r/'vendor').iterdir() if p.suffix in ['.js','.mjs']}
prelude='window.PLANNER_LICENSE='+json.dumps((r/'LICENSES.html').read_text())+';\n'+'window.VENDOR_DATA='+json.dumps(vendors)+';\n'+ '\n'.join((r/f).read_text() for f in ['runtime-data.js','planner-core.js','curriculum.js','lesson-units.js','next-topics.js','quality.js','labyrinth.js','method-catalog.js','teaching-support.js','teacher-board.js','planner-ui.js'])
bundle=prelude+'\n'+engine+'\n'+app
index=index[:index.index('<script src="runtime-data.js">')]+'<script type="module">'+bundle+'</script></body></html>'
index=index.replace('assets/Chess_nlt45.svg',figures['Chess_nlt45.svg'])
licensebody=re.sub(r'^.*?</style>','',(r/'LICENSES.html').read_text()).replace('</html>','')
index=index.replace('<p><a href="LICENSES.html" target="_blank">Alle Einzelquellen, Mitwirkenden und Softwarelizenzen</a></p>','<details><summary>Alle Einzelquellen und Lizenzdetails</summary>'+licensebody+'</details>')
(r/'Ludgerus-Schachwerkstatt.html').write_text(index)
with zipfile.ZipFile(r/'Ludgerus-Schachwerkstatt.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in r.rglob('*'):
  if p.is_file() and p.suffix!='.zip':z.write(p,p.name if p.name in ['Ludgerus-Schachwerkstatt.html','LICENSES.html','START.md','PRUEFBERICHT.md'] else 'website/'+str(p.relative_to(r)))
 z.write(r/'LICENSES.html','website/LICENSES.html')
 for p in Path('.').iterdir():
  if p.name in ['package-v3.py','dependencies.py','fetch.py','validate.mjs','test-simple.mjs','test-units.mjs','test-labyrinth.mjs','test-support.mjs','test-pdf.mjs','test-fachlich.mjs']:z.write(p,'quellcode-werkzeuge/'+p.name)
