// Erzeugt die PDF-Kopiervorlagen (Materialvorlagen/<id>.pdf, <id>-loesung.pdf) und die Vorschaubilder (assets/previews/<id>.webp).
// Aufruf: lokaler Server auf dist (Port 8765), dann NODE_PATH=$(npm root -g) node gen-materials.cjs. © Dr. Edmund Bruns
const {chromium}=require('playwright');const fs=require('fs');const {execFileSync}=require('child_process');
const D='/home/claude/work/SchachStunde/website/';
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.goto('http://localhost:8765/');await p.waitForTimeout(800);
fs.mkdirSync(D+'assets/previews',{recursive:true});fs.mkdirSync(D+'Materialvorlagen',{recursive:true});
for(const f of fs.readdirSync(D+'Materialvorlagen'))if(f.endsWith('.pdf'))fs.unlinkSync(D+'Materialvorlagen/'+f);
const ids=await p.evaluate(()=>window.MethodCards.map(c=>c.id));const map={};
for(const id of ids){const html=await p.evaluate(id=>window.MethodMaterials.document(id),id);const q=await b.newPage({viewport:{width:1200,height:900}});await q.setContent(html,{waitUntil:'load'});
 await q.addStyleTag({content:'.mm-no-print{display:none!important}'});await q.evaluate(()=>{fit()});
 const teacher=await q.evaluate(()=>document.querySelectorAll('.mm-teacher').length);
 await q.evaluate(()=>document.body.classList.add('onlykids'));await q.pdf({path:D+'Materialvorlagen/'+id+'.pdf',preferCSSPageSize:true});
 if(teacher){await q.evaluate(()=>{document.body.classList.remove('onlykids');document.querySelectorAll('.mm-page:not(.mm-teacher)').forEach(x=>x.style.display='none')});await q.pdf({path:D+'Materialvorlagen/'+id+'-loesung.pdf',preferCSSPageSize:true});await q.evaluate(()=>document.querySelectorAll('.mm-page').forEach(x=>x.style.display=''))}
 await q.evaluate(()=>document.querySelectorAll('.mm-page').forEach(x=>{x.style.margin='0'}));
 const el=await q.$('.mm-page:not(.mm-teacher)');const png='/tmp/pv_'+id+'.png';await el.screenshot({path:png});
 execFileSync('python3',['-c',`from PIL import Image;im=Image.open('${png}').convert('RGB');im.thumbnail((900,900));im.save('${D}assets/previews/${id}.webp','WEBP',quality=72)`]);
 map[id]='assets/previews/'+id+'.webp';await q.close()}
fs.writeFileSync(D+'method-previews.js','/* Vorschaubilder der ersten Seite der tatsächlichen Schach-Kopiervorlagen (assets/previews). Erzeugt von gen-materials.cjs. */\nwindow.MethodPreviews=(()=>{const ids='+JSON.stringify(Object.keys(map))+';const o={};for(const id of ids){const rel="assets/previews/"+id+".webp";try{o[id]=new URL(rel,document.baseURI).href}catch(e){o[id]=rel}};return o})();\n');
console.log('Vorlagen und Vorschaubilder:',ids.length);await b.close()})();
