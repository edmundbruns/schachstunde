// Lernfortschrittsraster: Eintragen, Auswertung in der Woche, Excel-Export und -Import (auch alte Tabellen). © Dr. Edmund Bruns
// Aufruf: Server in dist auf Port 8765, dann NODE_PATH=$(npm root -g) node test-raster.cjs [alte-tabelle.xlsx]
const {chromium}=require('playwright');const assert=require('assert');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({acceptDownloads:true,viewport:{width:1280,height:900}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8765/index.html');await p.waitForTimeout(600);await p.evaluate(()=>localStorage.removeItem('schachstunde-raster-v1'));await p.reload();await p.waitForTimeout(600);
await p.click('#praxis');await p.waitForTimeout(300);await p.click('#jprasterov');
for(const n of ['Mia','Ben','Ali','Lea','Tom']){await p.click('#rsadd');const ins=p.locator('[data-rsname]');await ins.last().fill(n);await ins.last().dispatchEvent('change')}
// Woche 3: 4 verstanden, 1 nicht
const kids=await p.locator('[data-rsname]').evaluateAll(a=>a.map(x=>x.dataset.rsname));
for(const [i,k] of kids.entries()){const n=i<4?3:1;for(let j=0;j<n;j++)await p.click(`[data-rskid="${k}"][data-rsw="3"]`)}
assert.match(await p.textContent('.rstable tfoot'),/✓4 ~0 ✗1/);
const [dl]=await Promise.all([p.waitForEvent('download'),p.click('#rsxlsx')]);const out='/tmp/raster-test.xlsx';await dl.saveAs(out);
// Woche 3 zeigt die Auswertung und markiert die erste Zeile (80 % verstanden)
await p.click('[data-rsweek="3"]');await p.waitForTimeout(200);assert.match(await p.textContent('.jp-eval'),/4 verstanden, 0 teilweise, 1 nicht/);
assert.equal(await p.locator('.jp-after tr.jp-hit td').first().textContent(),'Fast alle können es selbstständig.');
// Lernstand-Knopf in der Lerncheck-Phase und zurück an dieselbe Stelle
const lb=p.locator('[data-jpraster]');await lb.scrollIntoViewIfNeeded();const y=await p.evaluate(()=>scrollY);await lb.click();await p.waitForTimeout(150);assert.equal(await p.locator('th.rsfocus').count(),1);await p.click('#rsback');await p.waitForTimeout(150);assert.equal(await p.evaluate(()=>scrollY),y);
// Export wieder einlesen
await p.click('[data-jpraster]');await p.setInputFiles('#rsin',out);await p.waitForTimeout(500);assert.match(await p.textContent('#rsnote'),/5 Kinder und 10 Spalten/);assert.match(await p.textContent('.rstable tfoot'),/✓4 ~0 ✗1/);
// Alte Tabelle (Spalten Schachbrett, Bauer, Turm …) einlesen
const alt=process.argv[2];let altInfo='';if(alt&&fs.existsSync(alt)){await p.setInputFiles('#rsin',alt);await p.waitForTimeout(500);altInfo=await p.textContent('#rsnote');assert.match(altInfo,/20 Kinder/)}
assert.deepEqual(errs,[]);await b.close();console.log('Raster: Eintragen, Auswertung, Rücksprung, Excel-Export und -Import geprüft'+(altInfo?'; alte Tabelle: '+altInfo:''))})().catch(e=>{console.error(e);process.exit(1)});
