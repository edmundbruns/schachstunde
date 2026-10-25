// Schritt 6: Tastatur am Lehrbrett (Playwright, Chromium). Aufruf: node test-keyboard.cjs [URL]
const {chromium}=require('playwright');const assert=require('assert');const URL=process.argv[2]||'http://localhost:8765/index.html';
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1366,height:900}});p.on('dialog',d=>d.accept());await p.goto(URL);await p.waitForTimeout(1200);
await p.evaluate(()=>window.workshopAPI.planner.openForm());await p.click('[data-level="Grundkenntnisse"]');await p.click('[data-topic="fork"]');await p.click('text=Stundenplan erstellen');await p.waitForTimeout(800);await p.click('[data-board="0"]');await p.waitForTimeout(900);
const act=()=>p.evaluate(()=>document.activeElement?.dataset?.bsq||document.activeElement?.tagName);
await p.focus('[data-bsq="b5"]');await p.keyboard.press('Enter');await p.waitForTimeout(500);assert.equal(await act(),'b5','Enter auf b5: Fokus bleibt auf b5');
await p.keyboard.press('ArrowRight');assert.equal(await act(),'c5');await p.keyboard.press('ArrowUp');assert.equal(await act(),'c6');await p.keyboard.press('ArrowDown');await p.keyboard.press('ArrowLeft');assert.equal(await act(),'b5');
const tab0=await p.evaluate(()=>[...document.querySelectorAll('[data-bsq]')].filter(x=>x.tabIndex===0).map(x=>x.dataset.bsq));assert.deepEqual(tab0,['b5'],'nur ein Feld in der Tab-Reihenfolge');
const load=async fen=>{await p.evaluate(f=>{document.querySelectorAll('details.boardextras').forEach(d=>d.open=true);document.querySelector('#fenvalue').value=f;document.querySelector('#importfen').click()},fen);await p.waitForTimeout(400)};
await load('4k3/8/8/8/8/8/8/4RK2 w - - 0 1');assert(/regelwidrige Stellung.*im Schach/.test(await p.textContent('#boardnotice')),'FEN-Warnung');
await load('kaputt');const bad=await p.textContent('#boardnotice');assert(/nicht lesbar/.test(bad)&&!/Invalid/.test(bad),'deutsche FEN-Meldung');
let dialogs=0;p.on('dialog',()=>dialogs++);await load('7k/P7/8/8/8/8/8/K7 w - - 0 1');await p.click('[data-bsq="a7"]');await p.waitForTimeout(350);await p.click('[data-bsq="a8"]');await p.waitForTimeout(350);
assert.equal(await p.locator('[data-promo]').count(),4,'vier Figurenknöpfe');await p.click('[data-promo="n"]');await p.waitForTimeout(600);assert.equal(dialogs,0,'kein prompt');
assert(/Springer/.test(await p.getAttribute('[data-bsq="a8"]','aria-label')),'Springer auf a8');
const p2=await b.newPage({viewport:{width:1366,height:900}});p2.on('dialog',d=>d.accept());await p2.goto(URL);await p2.waitForTimeout(1200);await p2.evaluate(()=>window.workshopAPI.planner.openForm());await p2.click('[data-level="Anfänger"]');await p2.click('[data-topic="moves"]');await p2.click('text=Stundenplan erstellen');await p2.waitForTimeout(800);
const idx=await p2.evaluate(()=>[...document.querySelectorAll('[data-board]')].findIndex(x=>/Übung/.test(x.closest('tr')?.textContent||'')));await p2.click(`[data-board="${idx}"] >> nth=0`).catch(async()=>{await p2.evaluate(i=>document.querySelectorAll('[data-board]')[i].click(),idx)});await p2.waitForTimeout(900);
const labels=await p2.$$eval('[data-loadtask]',xs=>xs.map(x=>x.textContent));assert.deepEqual(labels.slice(0,4),['Aufgabe 3','Aufgabe 4','Aufgabe 5','Aufgabe 6'],'Nummern wie auf dem Arbeitsblatt: '+labels);
await b.close();console.log('Tastatur: Enter auf b5 lässt den Fokus auf b5, Pfeiltasten wandern, ein Feld in der Tab-Reihenfolge; FEN-Warnung, deutsche FEN-Meldung und Umwandlung per Figurenknopf geprüft; Aufgabennummern am Lehrbrett wie auf dem Arbeitsblatt.')})().catch(e=>{console.error(e);process.exit(1)});
