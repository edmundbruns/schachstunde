/* Praxiswissen › Jahresplan: feste Stunden erfahrener Kolleginnen und Kollegen (Inhalt für ca. 45 Minuten).
   Keine Auswahl: Jede Stunde ist vorgegeben, rechts stehen Video, Audio, Arbeitsblätter und Lehrbrett.
   Lehrbrett für Feldaufgaben: Felder anklicken, Markierungen löschen, prüfen, Hilfen und Lösung.
   Daten: jahresplan-data.js (window.JahresplanData). © Dr. Edmund Bruns */
(function(){
const D=window.JahresplanData;if(!D)return;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
if(window.Praxis&&D.collect){window.Praxis.COLLECT=window.Praxis.COLLECT||{};for(const [k,v] of Object.entries(D.collect))window.Praxis.COLLECT['jp:'+k]=v}
const NR=['1.','2.','3.','4.','5.','6.'];
const lesson=w=>D.lessons.find(l=>l.week===+w);
const title=w=>D.fixed[w]?.thema||lesson(w)?.title||(D.later.find(x=>x[0]===+w)||[])[1]||'';
const ICON={video:'▶',audio:'🔊',blatt:'📄',druck:'🖨',feld:'♟',info:'ℹ'};
const FILES='abcdefgh';
const PIECE={k:'König',q:'Dame',r:'Turm',b:'Läufer',n:'Springer',p:'Bauer'};
function placement(fen){const m={};if(!fen)return m;fen.split(' ')[0].split('/').forEach((row,ri)=>{let f=0;for(const c of row){if(/\d/.test(c))f+=+c;else{m[FILES[f]+(8-ri)]=c;f++}}});return m}
const img=c=>{const t=c.toLowerCase(),w=c===c.toUpperCase();const src=(window.FIGURE_DATA||{})[`Chess_${t}${w?'l':'d'}t45.svg`];return src?`<img alt="" src="${src}">`:''};
const pieceName=c=>(c===c.toUpperCase()?'weißer ':'schwarzer ')+PIECE[c.toLowerCase()];
// ---------- Übersicht ----------
function overviewHTML(){
 const row=w=>{const F=D.fixed[w];const ziel=F?.lernziel||lesson(w)?.ziel||'';return `<tr><td>${w}</td><td>${F?`<button type="button" class="linklike" data-jpweek="${w}">${esc(title(w))}</button>`:esc(title(w))}</td><td>${esc(ziel)}${F?'':' <span class="muted">(Stunde folgt)</span>'}</td></tr>`};
 return `<div id="jp-overview"><p>So planen erfahrene Kolleginnen und Kollegen ein Schuljahr Schach-AG: 36 Termine, jeder mit Inhalt für ca. 45 Minuten, für Grundschule und Oberschule. Gruppen mit Vorkenntnissen beginnen in Woche 12. Ein Klick auf eine Stunde zeigt ihren festen Ablauf mit Video, Arbeitsblättern und Lehrbrett.</p>${D.year.map(([name,[a,b]],k)=>`<h4>${k+1}. ${esc(name)} (Woche ${a} bis ${b})</h4><table class="yeartable"><thead><tr><th>Woche</th><th>Stunde</th><th>Lernziel</th></tr></thead><tbody>${Array.from({length:b-a+1},(_,i)=>row(a+i)).join('')}</tbody></table>`).join('')}<p class="muted">Eigene Stunden mit freier Auswahl planst du unter „Schachstunde planen“.</p></div>`}
// ---------- Stunde ----------
function linkHTML(l,pi,li){const ic=`<span aria-hidden="true">${ICON[l.art]||''}</span> `;
 if(l.url)return `<a class="jp-link" href="${esc(l.url)}" target="_blank" rel="noopener">${ic}${esc(l.label)}</a>`;
 return `<button type="button" class="jp-link" data-jplink="${pi}|${li}">${ic}${esc(l.label)}</button>`}
function weekHTML(w){const F=D.fixed[w];
 const rows=F.phasen.map((p,pi)=>`<tr><th scope="row">${NR[pi]} Phase<span class="jp-phname">(${esc(p.name)})</span></th><td><b>${esc(p.titel)}</b>${p.ablauf.map(a=>`<p>${esc(a)}</p>`).join('')}<p class="jp-kids">Kinder: ${esc(p.kinder)}</p></td><td class="jp-links">${p.links.map((x,li)=>linkHTML(x,pi,li)).join('')}</td></tr>`).join('');
 return `<div class="jp-week"><div class="row"><button type="button" id="jpback">← Zum Jahresplan</button>${D.fixed[w-1]?`<button type="button" data-jpweek="${w-1}">← Woche ${w-1}</button>`:''}${D.fixed[w+1]?`<button type="button" data-jpweek="${w+1}">Woche ${w+1} →</button>`:''}</div>
 <table class="jp-meta"><tbody><tr><th>Thema (Woche ${w})</th><td><b>${esc(F.thema)}</b></td></tr><tr><th>Lernziel</th><td>„${esc(F.lernziel)}“</td></tr><tr><th>Leitfrage</th><td>${esc(F.leitfrage)}</td></tr><tr><th>Umfang</th><td>${esc(F.umfang)}</td></tr></tbody></table>
 <table class="jp-flow"><thead><tr><th>Phase</th><th>So läuft die Stunde</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table>
 ${F.geschichte?`<details class="jp-story"><summary>Geschichte „${esc(F.geschichte.titel)}“ zum Vorlesen</summary>${F.geschichte.text.map(t=>`<p>${esc(t)}</p>`).join('')}</details>`:''}
 <p class="muted">Quellen: ${esc(F.quelle)}.</p><div class="row"><button type="button" class="primary" id="jpprint">Stunde drucken / PDF</button></div></div>`}
// ---------- Vorlesen ----------
let speaking=false;
function speak(F,btn){const S=window.speechSynthesis;if(!S||typeof SpeechSynthesisUtterance==='undefined'){alertBox('Dein Browser kann nicht vorlesen. Den Text findest du unter „Geschichte zum Vorlesen“.');return}
 if(speaking){S.cancel();speaking=false;btn.innerHTML='<span aria-hidden="true">🔊</span> Geschichte anhören';return}
 const u=new SpeechSynthesisUtterance(F.geschichte.titel+'. '+F.geschichte.text.join(' '));u.lang='de-DE';u.rate=0.92;const v=S.getVoices().find(x=>/^de/i.test(x.lang));if(v)u.voice=v;
 u.onend=()=>{speaking=false;btn.innerHTML='<span aria-hidden="true">🔊</span> Geschichte anhören'};speaking=true;btn.innerHTML='<span aria-hidden="true">⏹</span> Vorlesen stoppen';S.cancel();S.speak(u)}
function alertBox(t){const s=document.getElementById('jpnote');if(s)s.textContent=t}
// ---------- Lehrbrett für Feldaufgaben ----------
let FB=null;
function fbOpen(w,set,start,bis){const F=D.fixed[w];let list=F.feld[set].map((t,i)=>({...t,label:set+(i+1)}));if(bis)list=list.slice(0,bis);FB={w,list,i:start||0,marks:new Set(),shown:false,msg:'',kind:'info',hints:0};fbRender()}
function fbBoard(t,interactive){const pos=placement(t.fen);const m=interactive?FB.marks:new Set();const sol=interactive&&FB.shown&&t.targets?new Set(t.targets):new Set();
 let h='<div class="jp-board'+''+'" role="grid" aria-label="Schachbrett">';
 for(let r=8;r>=1;r--){h+=interactive?`<button type="button" class="jp-lab jp-rank" data-jprank="${r}" aria-label="Reihe ${r} markieren">${r}</button>`:`<span class="jp-lab">${r}</span>`;
  for(const f of FILES){const sq=f+r,dark=(FILES.indexOf(f)+r)%2===1;const isDark=t.flip?!dark:dark;const p=pos[sq];
   const cls='jp-sq'+(isDark?' dark':'')+(m.has(sq)?' marked':'')+(sol.has(sq)?' sol':'');
   h+=interactive?`<button type="button" class="${cls}" data-labsq="${sq}" aria-pressed="${m.has(sq)}" aria-label="${sq}${p?', '+pieceName(p):''}">${p?img(p):''}</button>`:`<span class="${cls}">${p?img(p):''}</span>`}}
 h+='<span></span>'+[...FILES].map(f=>interactive?`<button type="button" class="jp-lab jp-file" data-jpfile="${f}" aria-label="${f}-Linie markieren">${f}</button>`:`<span class="jp-lab">${f}</span>`).join('')+'</div>';return h}
function fbRender(){const t=FB.list[FB.i];const host=document.getElementById('plannerbody');
 host.innerHTML=`<div class="jp-fb"><div class="row"><button type="button" id="fbback">← Zurück zu Woche ${FB.w}</button></div><h3>Lehrbrett</h3><div class="jp-fbgrid"><div>${fbBoard(t,true)}</div><div class="jp-fbside">
 ${FB.list.length>1?`<div class="row taskchoices">${FB.list.map((x,i)=>`<button type="button" data-fbtask="${i}" aria-pressed="${i===FB.i}">${esc(x.label)}</button>`).join('')}</div>`:''}
 <p class="jp-fbq"><b>${esc(t.label)}:</b> ${esc(t.frage)}</p><p class="muted">Felder anklicken zum Markieren. Ein Klick auf eine Zahl oder einen Buchstaben am Rand markiert die ganze Reihe oder Linie.</p>
 <div class="row"><button type="button" class="primary" id="fbcheck">Prüfen</button><button type="button" id="fbclear">Markierungen löschen</button></div>
 <div class="row"><button type="button" id="fbhint">${FB.hints<2?'Hilfe '+(FB.hints+1):'Keine weitere Hilfe'}</button><button type="button" id="fbsol">Lösung zeigen</button>${FB.i<FB.list.length-1?'<button type="button" id="fbnext">Nächste Aufgabe →</button>':''}</div>
 ${t.hilfe.slice(0,FB.hints).map((h,i)=>`<p class="jp-hint">Hilfe ${i+1}: ${esc(h)}</p>`).join('')}
 <p id="fbmsg" class="movefeedback ${FB.kind}" role="status">${esc(FB.msg||'Markiere die gesuchten Felder.')}</p></div></div></div>`;
 const toggle=sqs=>{const all=sqs.every(q=>FB.marks.has(q));for(const q of sqs)all?FB.marks.delete(q):FB.marks.add(q);FB.shown=false;FB.msg='';FB.kind='info';fbRender()};
 host.querySelectorAll('[data-labsq]').forEach(b=>b.onclick=()=>toggle([b.dataset.labsq]));
 host.querySelectorAll('[data-jprank]').forEach(b=>b.onclick=()=>toggle([...FILES].map(f=>f+b.dataset.jprank)));
 host.querySelectorAll('[data-jpfile]').forEach(b=>b.onclick=()=>toggle([1,2,3,4,5,6,7,8].map(r=>b.dataset.jpfile+r)));
 host.querySelectorAll('[data-fbtask]').forEach(b=>b.onclick=()=>{FB.i=+b.dataset.fbtask;FB.marks=new Set();FB.shown=false;FB.msg='';FB.kind='info';FB.hints=0;fbRender()});
 document.getElementById('fbclear').onclick=()=>{FB.marks=new Set();FB.shown=false;FB.msg='Alle Markierungen gelöscht.';FB.kind='info';fbRender()};
 document.getElementById('fbhint').onclick=()=>{if(FB.hints<2)FB.hints++;fbRender()};
 document.getElementById('fbsol').onclick=()=>{FB.shown=true;FB.msg='Lösung: '+t.antwort;FB.kind='info';fbRender()};
 const nx=document.getElementById('fbnext');if(nx)nx.onclick=()=>{FB.i++;FB.marks=new Set();FB.shown=false;FB.msg='';FB.kind='info';FB.hints=0;fbRender()};
 document.getElementById('fbcheck').onclick=()=>{if(!t.targets){FB.msg='Offene Aufgabe: Besprecht eure Markierungen. Beispiel: '+t.antwort;FB.kind='info';fbRender();return}
  const want=new Set(t.targets),got=FB.marks;const hit=[...got].filter(q=>want.has(q)).length,extra=[...got].filter(q=>!want.has(q)).length,miss=want.size-hit;
  if(!miss&&!extra){FB.msg='✓ Richtig! '+t.antwort;FB.kind='good'}else if(!want.size){FB.msg='✗ Hier ist alles richtig aufgebaut. Lösche die Markierungen.';FB.kind='bad'}
  else{FB.msg=`✗ Noch nicht ganz: ${hit} von ${want.size} richtig`+(extra?`, ${extra} Feld${extra>1?'er':''} zu viel`:'')+'. Versuche es noch einmal oder nimm eine Hilfe.';FB.kind='bad'}fbRender()};
 document.getElementById('fbback').onclick=()=>{const w=FB.w;FB=null;show(w)}}
// ---------- Drucken ----------
const head=(t,sub,fields)=>`<div class="ws-head"><div><h1>${esc(t)}</h1><p>${esc(sub)}</p></div>${fields?'<div class="ws-fields"><span>Name<i></i></span><span>Datum<i class="s"></i></span></div>':''}</div>`;
const PCSS='<style>.jp-board{display:grid;grid-template-columns:14px repeat(8,1fr);width:62mm;font:8pt system-ui;gap:0}.jp-board .jp-lab{display:flex;align-items:center;justify-content:center;color:#556}.jp-sq{aspect-ratio:1;background:#eef1f6;display:flex;align-items:center;justify-content:center;border:0}.jp-sq.dark{background:#8d9fc7}.jp-sq img{width:88%;height:88%}.jp-print-img{display:block;max-width:100%;max-height:118mm;margin:4mm auto;border:1px solid #d5dbe6}.jp-poster li{font-size:15pt;margin:4mm 0}.jp-poster h2{font-size:18pt}.jp-qcard{border:1px solid #d5dbe6;border-radius:6px;padding:3mm;margin:0 0 4mm;display:grid;grid-template-columns:64mm 1fr;gap:4mm;break-inside:avoid}</style>';
const paper=q=>q.replace(/Klicke (.*?) an\b/g,'Kreise $1 ein').replace(/drücke „Prüfen“ ohne Markierung/,'schreibe „alles richtig“').replace(/^Markiere /,'Male aus: ').replace(/^Zeige /,'Kreise ein: ');
function printFeld(B,w,set,titleText,sub){const F=D.fixed[w],list=F.feld[set];
 const cards=list.map((t,i)=>`<div class="jp-qcard">${fbBoard(t,false)}<div><p><b>${esc(set+(i+1))}:</b> ${esc(paper(t.frage))}</p><p class="ws-label">Meine Antwort:</p><div class="ws-line"></div><div class="ws-line"></div></div></div>`).join('');
 return B.sheetCSS(titleText)+PCSS+`<section class="ws-page">${head(titleText,sub,true)}${cards}</section><section class="ws-page">${head('Lösungen',titleText+' · für die Lehrkraft')}<ol>${list.map(t=>`<li>${esc(t.antwort)}</li>`).join('')}</ol><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printRegeln(B,w){const F=D.fixed[w];return B.sheetCSS('AG-Regeln')+PCSS+`<section class="ws-page jp-poster">${head('Unsere Schach-AG','Regeln und Rituale')}<h2>Unsere Regeln</h2><ol>${F.regeln.map(r=>`<li>${esc(r)}</li>`).join('')}</ol><h2>Unsere Rituale</h2><table class="ws-table"><tbody>${F.rituale.map(([a,b])=>`<tr><td><b>${esc(a)}</b></td><td>${esc(b)}</td></tr>`).join('')}</tbody></table><p class="ws-src">Nach dem AG-Konzept von edmundbruns.com · © Dr. Edmund Bruns</p></section>`}
function printGeschichte(B,w){const F=D.fixed[w];return B.sheetCSS('Geschichte')+PCSS+`<section class="ws-page">${head(F.geschichte.titel,'Geschichte zum Vorlesen · Woche '+w)}${F.geschichte.text.map(t=>`<p style="font-size:12pt;line-height:1.6">${esc(t)}</p>`).join('')}<h2 class="ws-part">Fragen zur Geschichte</h2><ol>${F.feld.S.map(t=>`<li>${esc(t.frage)}<br><i>${esc(t.antwort)}</i></li>`).join('')}</ol><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printHeft(B,w){const F=D.fixed[w],imgs=F.arbeitsheftData||F.arbeitsheft;let h='';for(let i=0;i<imgs.length;i+=2)h+=`<section class="ws-page">${i===0?head('Arbeitsheft Schachbrett','Woche '+w,true):''}${imgs.slice(i,i+2).map(s=>`<img class="jp-print-img" alt="Seite aus dem Arbeitsheft Schachbrett" src="${s}">`).join('')}</section>`;return B.sheetCSS('Arbeitsheft Schachbrett')+PCSS+h}
function printStunde(B,w){const F=D.fixed[w];
 const rows=F.phasen.map((p,i)=>`<tr><td><b>${NR[i]} Phase</b><br>(${esc(p.name)})</td><td><b>${esc(p.titel)}</b>${p.ablauf.map(a=>`<br>${esc(a)}`).join('')}<br><i>Kinder: ${esc(p.kinder)}</i></td><td>${p.links.map(x=>esc(x.label)).join('<br>')}</td></tr>`).join('');
 const sets=Object.entries(F.feld).map(([s,list])=>`<h2 class="ws-part">Lehrbrett ${esc(s)}</h2><ol>${list.map(t=>`<li><b>${esc(t.frage)}</b><br>${esc(t.antwort)}</li>`).join('')}</ol>`).join('');
 return B.sheetCSS('Woche '+w)+PCSS+`<section class="ws-page">${head('Woche '+w+': '+F.thema,F.umfang)}<p><b>Lernziel:</b> „${esc(F.lernziel)}“<br><b>Leitfrage:</b> ${esc(F.leitfrage)}</p><table class="ws-table"><thead><tr><th>Phase</th><th>Ablauf</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table></section><section class="ws-page">${head('Aufgaben und Lösungen','Woche '+w+' · für die Lehrkraft')}${sets}<p class="ws-src">Quellen: ${esc(F.quelle)}. © Dr. Edmund Bruns</p></section>`}
// ---------- Ablauf ----------
let B0=null;
function show(w){const B=B0,F=D.fixed[w];document.getElementById('plannerbody').innerHTML=weekHTML(w)+'<p id="jpnote" role="status"></p>';
 document.querySelectorAll('[data-jplink]').forEach(b=>b.onclick=()=>{const [pi,li]=b.dataset.jplink.split('|').map(Number);const x=F.phasen[pi].links[li];
  if(x.art==='feld')fbOpen(w,x.set,0,x.bis);
  else if(x.art==='audio')speak(F,b);
  else if(x.art==='druck'){const m={regeln:()=>printRegeln(B,w),geschichte:()=>printGeschichte(B,w),arbeitsheft:()=>printHeft(B,w),grundstellung:()=>printFeld(B,w,'G','Fehler in der Grundstellung','Arbeitsblatt Woche '+w),lerncheck:()=>printFeld(B,w,'L','Lerncheck','Woche '+w+' · allein lösen')}[x.was];if(m)B.printContent(m())}});
 document.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek));
 document.getElementById('jpback').onclick=()=>{try{window.speechSynthesis?.cancel()}catch(e){}B.back();setTimeout(()=>document.getElementById('px-year')?.scrollIntoView(),0)};
 document.getElementById('jpprint').onclick=()=>B.printContent(printStunde(B,w));scrollTo(0,0)}
function mount(B){B0=B;const sec=document.getElementById('px-year');if(!sec)return;sec.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek))}
window.Jahresplan={mount,show,overviewHTML,data:D,_fb:()=>FB};
})();
