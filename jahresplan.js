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
const planRow=w=>(D.plan||[]).find(x=>x[0]===+w)||[];const title=w=>D.fixed[w]?.thema||planRow(w)[1]||'';
const ICON={video:'▶',audio:'🔊',blatt:'📄',druck:'🖨',feld:'♟',info:'ℹ'};
const FILES='abcdefgh';
const PIECE={k:'König',q:'Dame',r:'Turm',b:'Läufer',n:'Springer',p:'Bauer'};
function placement(fen){const m={};if(!fen)return m;fen.split(' ')[0].split('/').forEach((row,ri)=>{let f=0;for(const c of row){if(/\d/.test(c))f+=+c;else{m[FILES[f]+(8-ri)]=c;f++}}});return m}
const img=c=>{const t=c.toLowerCase(),w=c===c.toUpperCase();const src=(window.FIGURE_DATA||{})[`Chess_${t}${w?'l':'d'}t45.svg`];return src?`<img alt="" src="${src}">`:''};
const pieceName=c=>(c===c.toUpperCase()?'weißer ':'schwarzer ')+PIECE[c.toLowerCase()];
// ---------- Übersicht ----------
function overviewHTML(){
 const row=w=>{const F=D.fixed[w];const ziel=F?.lernziel||planRow(w)[2]||'';return `<tr><td>${w}</td><td>${F?`<button type="button" class="linklike" data-jpweek="${w}">${esc(title(w))}</button>`:esc(title(w))}</td><td>${esc(ziel)}${F?'':' <span class="muted">(Stunde folgt)</span>'}</td></tr>`};
 return `<div id="jp-overview"><p>So planen erfahrene Kolleginnen und Kollegen ein Schuljahr Schach-AG: 36 Termine, jeder mit Inhalt für ca. 45 Minuten, für Grundschule und Oberschule. Gruppen mit Vorkenntnissen beginnen in Woche 12. Ein Klick auf eine Stunde zeigt ihren festen Ablauf mit Video, Arbeitsblättern und Lehrbrett. Ab Woche 3 endet jede Stunde mit einem kurzen Minispiel. Ein Thema darf in jüngeren Gruppen auch zwei Termine dauern.</p>${D.year.map(([name,[a,b]],k)=>`<h4>${k+1}. ${esc(name)} (Woche ${a} bis ${b})</h4><table class="yeartable"><thead><tr><th>Woche</th><th>Stunde</th><th>Lernziel</th></tr></thead><tbody>${Array.from({length:b-a+1},(_,i)=>row(a+i)).join('')}</tbody></table>`).join('')}<p class="muted">Eigene Stunden mit freier Auswahl planst du unter „Schachstunde planen“.</p></div>`}
// ---------- Stunde ----------
function linkHTML(l,pi,li){const ic=`<span aria-hidden="true">${ICON[l.art]||''}</span> `;
 if(l.url)return `<a class="jp-link" href="${esc(l.url)}" target="_blank" rel="noopener">${ic}${esc(l.label)}</a>`;
 return `<button type="button" class="jp-link" data-jplink="${pi}|${li}">${ic}${esc(l.label)}</button>`}
const AFTER=[['Fast alle können es selbstständig.','Kurz wiederholen, dann weitergehen.'],['Einige brauchen noch Unterstützung.','Hilfe bereitlegen und gezielt mit diesen Kindern üben.'],['Viele machen denselben Fehler.','Den Punkt anders erklären und üben, den nächsten Inhalt reduzieren.']];
function hintsHTML(F,br,cls='jp-hints'){const H=F.hinweise;if(!H)return '';return `<p${cls?` class="${cls}"`:''}><b>Hilfe:</b> ${esc(H.hilfe)}${br}<b>Zusatz:</b> ${esc(H.zusatz)}${H.kuerzen?`${br}<b>Wenn die Zeit knapp wird:</b> ${esc(H.kuerzen)}`:''}</p>`}
function afterHTML(F,cls=''){if(!F.nachher)return '';return `<div class="${cls?'':'jp-after'}"><h4>Für dich nach der Stunde</h4><p>Was klappt schon? Was greifen wir wieder auf? ${esc(F.nachher)}</p><table${cls?` class="${cls}"`:''}><thead><tr><th>Beobachtung im Lerncheck</th><th>Für die nächste Stunde</th></tr></thead><tbody>${AFTER.map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody></table></div>`}
function weekHTML(w){const F=D.fixed[w];
 const rows=F.phasen.map((p,pi)=>`<tr><th scope="row">${NR[pi]} Phase<span class="jp-phname">(${esc(p.name)})</span></th><td><b>${esc(p.titel)}</b>${p.ablauf.map(a=>`<p>${esc(a)}</p>`).join('')}<p class="jp-kids">Ergebnis: ${esc(p.kinder)}</p></td><td class="jp-links">${p.links.map((x,li)=>linkHTML(x,pi,li)).join('')}</td></tr>`).join('');
 return `<div class="jp-week"><div class="row"><button type="button" id="jpback">← Zum Jahresplan</button>${D.fixed[w-1]?`<button type="button" data-jpweek="${w-1}">← Woche ${w-1}</button>`:''}${D.fixed[w+1]?`<button type="button" data-jpweek="${w+1}">Woche ${w+1} →</button>`:''}</div>
 <table class="jp-meta"><tbody><tr><th>Thema (Woche ${w})</th><td><b>${esc(F.thema)}</b></td></tr><tr><th>Lernziel</th><td>„${esc(F.lernziel)}“</td></tr><tr><th>Leitfrage</th><td>${esc(F.leitfrage)}</td></tr>${F.vorwissen?`<tr><th>Vorwissen</th><td>${esc(F.vorwissen)}</td></tr>`:''}<tr><th>Umfang</th><td>${esc(F.umfang)}</td></tr></tbody></table>
 <table class="jp-flow"><thead><tr><th>Phase</th><th>So läuft die Stunde</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table>${hintsHTML(F,'<br>')}${afterHTML(F)}
 ${F.geschichte?`<details class="jp-story"><summary>Geschichte „${esc(F.geschichte.titel)}“ zum Vorlesen</summary>${F.geschichte.text.map(t=>`<p>${esc(t)}</p>`).join('')}</details>`:''}
 <p class="muted">Quellen: ${esc(F.quelle)}.</p><div class="row"><button type="button" class="primary" id="jpprint">Stunde drucken / PDF</button></div></div>`}
// ---------- Geschichte anhören ----------
let player=null;
function speak(F,btn){const label=on=>btn.innerHTML=`<span aria-hidden="true">${on?'⏹':'🔊'}</span> ${on?'Anhören stoppen':'Geschichte anhören'}`;
 if(player&&!player.paused){player.pause();player.currentTime=0;label(false);return}
 if(F.audio){player=player||new Audio(F.audio);player.onended=()=>label(false);player.play().then(()=>label(true)).catch(()=>alertBox('Die Audiodatei konnte nicht abgespielt werden.'));return}
 alertBox('Für diese Stunde gibt es keine Audiodatei.')}
function alertBox(t){const s=document.getElementById('jpnote');if(s)s.textContent=t}
// ---------- Lehrbrett für Feldaufgaben (Aussehen wie das Lehrbrett) ----------
let FB=null;
function fbOpen(w,set,von,bis){const F=D.fixed[w];let list=F.feld[set].map((t,i)=>({...t,label:set+(i+1)}));list=list.slice((von||1)-1,bis||undefined);FB={w,list,i:0,marks:new Set(),undo:[],shown:false,msg:'',kind:'info',hints:0};fbRender()}
function boardMarkup(t,o){const pos=placement(t.fen),m=o.marks||new Set(),sol=o.sol||new Set(),fill=o.fill||{},lab=o.label||{};const btn=!!o.interactive;
 const letters='<div class="file-labels">'+[...FILES].map(f=>btn?`<button type="button" class="jp-lab" data-jpfile="${f}" aria-label="${f}-Linie markieren">${f}</button>`:`<span>${f}</span>`).join('')+'</div>';
 const nums='<div class="rank-labels">'+[8,7,6,5,4,3,2,1].map(r=>btn?`<button type="button" class="jp-lab" data-jprank="${r}" aria-label="Reihe ${r} markieren">${r}</button>`:`<span>${r}</span>`).join('')+'</div>';
 let h=`<div class="boardframe"><div></div>${letters}<div></div>${nums}<div class="arrowboard"><div class="board">`;
 for(let r=8;r>=1;r--)for(const f of FILES){const sq=f+r;let dark=(FILES.indexOf(f)+r)%2===1;if(t.flip)dark=!dark;const p=pos[sq];
  const cls=`sq ${dark?'dark':''} ${m.has(sq)?'marked':''} ${sol.has(sq)?'solution':''}`;const st=fill[sq]?` style="box-shadow:inset 0 0 0 100px ${fill[sq]}"`:'';const tx=lab[sq]?`<em class="jp-sqlabel">${esc(lab[sq])}</em>`:'';
  h+=btn?`<button type="button" class="${cls}" data-bsq="${sq}" aria-pressed="${m.has(sq)}" aria-label="${sq}, ${p?pieceName(p):'leer'}">${p?img(p):''}</button>`:`<span class="${cls}"${st}>${p?img(p):''}${tx}</span>`}
 return h+`</div></div>${nums}<div></div>${letters}<div></div></div>`}
function fbRender(){const t=FB.list[FB.i];const host=document.getElementById('plannerbody');
 host.innerHTML=`<div class="jp-fb"><h2>Lehrbrett</h2><div class="training"><div><div id="movefeedback" class="movefeedback ${FB.kind}" role="status" aria-live="polite">${esc(FB.msg||'Felder anklicken zum Markieren.')}</div><div id="teacherboard">${boardMarkup(t,{interactive:true,marks:FB.marks,sol:FB.shown&&t.targets?new Set(t.targets):null})}</div>
 <div class="row"><button type="button" id="fbundo" ${FB.undo.length?'':'disabled'}>← Zurück</button><button type="button" id="fbclear">Markierungen löschen</button></div><p class="muted">Ein Klick auf eine Zahl oder einen Buchstaben am Rand markiert die ganze Reihe oder Linie.</p></div>
 <aside class="side"><section class="boardcontext"><button type="button" id="fbback">← Zurück zu Woche ${FB.w}</button>${FB.list.length>1?`<div class="row taskchoices">${FB.list.map((x,i)=>`<button type="button" data-fbtask="${i}" aria-pressed="${i===FB.i}">${esc(x.label)}</button>`).join('')}</div>`:''}</section>
 <h3>${esc(t.label)}</h3><p class="jp-fbq">${esc(t.frage)}</p>
 <div class="row"><button type="button" class="primary" id="fbcheck">Prüfen</button><button type="button" id="fbhint" ${FB.hints>=2?'disabled':''}>Hilfe ${Math.min(FB.hints+1,2)}</button><button type="button" id="fbsol">Lösung zeigen</button>${FB.i<FB.list.length-1?'<button type="button" id="fbnext">Nächste Aufgabe →</button>':''}</div>
 ${t.hilfe.slice(0,FB.hints).map((h,i)=>`<p class="jp-hint">Hilfe ${i+1}: ${esc(h)}</p>`).join('')}</aside></div></div>`;
 const set=(msg,kind)=>{FB.msg=msg;FB.kind=kind||'info'};
 const toggle=sqs=>{FB.undo.push(new Set(FB.marks));const all=sqs.every(q=>FB.marks.has(q));for(const q of sqs)all?FB.marks.delete(q):FB.marks.add(q);FB.shown=false;set('');fbRender()};
 const fresh=i=>{FB.i=i;FB.marks=new Set();FB.undo=[];FB.shown=false;FB.hints=0;set('');fbRender()};
 host.querySelectorAll('[data-bsq]').forEach(b=>b.onclick=()=>toggle([b.dataset.bsq]));
 host.querySelectorAll('[data-jprank]').forEach(b=>b.onclick=()=>toggle([...FILES].map(f=>f+b.dataset.jprank)));
 host.querySelectorAll('[data-jpfile]').forEach(b=>b.onclick=()=>toggle([1,2,3,4,5,6,7,8].map(r=>b.dataset.jpfile+r)));
 host.querySelectorAll('[data-fbtask]').forEach(b=>b.onclick=()=>fresh(+b.dataset.fbtask));
 document.getElementById('fbundo').onclick=()=>{if(FB.undo.length){FB.marks=FB.undo.pop();FB.shown=false;set('Letzte Markierung zurückgenommen.');fbRender()}};
 document.getElementById('fbclear').onclick=()=>{FB.undo.push(new Set(FB.marks));FB.marks=new Set();FB.shown=false;set('Alle Markierungen gelöscht.');fbRender()};
 document.getElementById('fbhint').onclick=()=>{if(FB.hints<2)FB.hints++;fbRender()};
 document.getElementById('fbsol').onclick=()=>{FB.shown=true;set('Lösung: '+t.antwort);fbRender()};
 const nx=document.getElementById('fbnext');if(nx)nx.onclick=()=>fresh(FB.i+1);
 document.getElementById('fbcheck').onclick=()=>{if(!t.targets){set('Offene Aufgabe: Besprecht eure Markierungen. Beispiel: '+t.antwort);fbRender();return}
  const want=new Set(t.targets),got=FB.marks;const hit=[...got].filter(q=>want.has(q)).length,extra=[...got].filter(q=>!want.has(q)).length,miss=want.size-hit;
  if(!miss&&!extra)set('✓ Richtig! '+t.antwort,'good');else if(!want.size)set('✗ Hier wird nichts markiert. Lösche die Markierungen und überlege noch einmal.','bad');
  else set(`✗ Noch nicht ganz: ${hit} von ${want.size} richtig`+(extra?`, ${extra} Feld${extra>1?'er':''} zu viel`:'')+'. Versuche es noch einmal oder nimm eine Hilfe.','bad');fbRender()};
 document.getElementById('fbback').onclick=()=>{const w=FB.w;FB=null;show(w)}}
// ---------- Drucken (im Stil der SchachStunde-Arbeitsblätter) ----------
const head=(t,sub,fields)=>`<div class="ws-head"><div><h1>${esc(t)}</h1><p>${esc(sub)}</p></div>${fields?'<div class="ws-fields"><span>Name<i></i></span><span>Datum<i class="s"></i></span></div>':''}</div>`;
const PCSS='<style>.ws-page .ws-head h1{white-space:normal!important;font-size:13.5pt!important;line-height:1.2!important}.ws-page .ws-head>div:first-child{flex:1;min-width:0}.jp-sqlabel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:700 7.5pt system-ui;color:#8a1f4f;white-space:nowrap;z-index:2;text-shadow:0 0 2px #fff,0 0 2px #fff}.jp-heft .ws-grid{grid-template-columns:1fr 1fr;gap:3mm}.jp-heft .ws-card-body{display:block}.jp-heft .ws-diag{display:flex;justify-content:center;padding-top:4mm}.jp-heft .boardframe{width:50mm!important;grid-template-rows:12px minmax(0,1fr) 12px!important}.jp-heft .file-labels{align-items:end}.ws-page .sq.solution{box-shadow:inset 0 0 0 100px rgba(232,140,40,.6)!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.jp-heft .ws-card p{margin:1.5mm 0 0;font-size:8.3pt;line-height:1.3}.jp-heft .ws-card{break-inside:avoid}.jp-poster li{font-size:15pt;margin:4mm 0}.jp-poster h2{font-size:18pt}.jp-story p{font-size:12pt;line-height:1.6}.sq{position:relative;overflow:visible}.jp-heft .board{overflow:visible}</style>';
const paper=q=>q.replace(/(^|\. )Markiere ((?:alle |das |die beiden )Feld[^,.]*)([,.])/g,'$1Kreuze $2 an$3').replace(/Klicke (.*?) an\b/g,'Kreise $1 ein').replace(/klicke (.*?) an\b/g,'kreise $1 ein').replace(/drücke „Prüfen“ ohne Markierung/,'schreibe „alles richtig“').replace(/^Markiere /,'Male aus: ').replace(/^Zeige /,'Kreise ein: ');
const diag=(t,o)=>`<div class="ws-diag">${boardMarkup(t,o||{})}</div>`;
const card=(label,t,prompt)=>`<div class="ws-card"><div class="ws-card-head"><b>${esc(label)}</b></div><div class="ws-card-body">${diag(t)}<p>${esc(prompt)}</p><div class="ws-line"></div></div></div>`;
function printFeld(B,w,set,titleText,sub){const F=D.fixed[w],list=F.feld[set];
 return B.sheetCSS(titleText)+PCSS+`<section class="ws-page jp-heft">${head(titleText,sub,true)}<div class="ws-grid">${list.map((t,i)=>card(set+(i+1),t,paper(t.frage))).join('')}</div></section><section class="ws-page jp-heft">${head('Lösungen: '+titleText,'Woche '+w+' · für die Lehrkraft')}<div class="ws-grid">${list.map((t,i)=>`<div class="ws-card"><div class="ws-card-head"><b>${esc(set+(i+1))}</b></div><div class="ws-card-body">${diag(t,{sol:new Set(t.targets||[])})}<p>${esc(t.antwort)}</p></div></div>`).join('')}</div><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printHeft(B,w){const F=D.fixed[w],K=F.arbeitsheft;
 const c=(k,sol)=>{const s=sol&&k.loesung;return `<div class="ws-card"><div class="ws-card-head"><b>${esc(k.titel)}</b></div><div class="ws-card-body">${diag({},{fill:s?s.fill:(k.aufgabe?{}:k.fill),label:s?s.label:(k.aufgabe?{}:k.label)})}<p>${esc(s?s.text:k.text)}</p>${k.aufgabe&&!s?'<div class="ws-line"></div><div class="ws-line"></div>':''}</div></div>`};
 return B.sheetCSS('Arbeitsheft Schachbrett')+PCSS+`<section class="ws-page jp-heft">${head('Arbeitsheft Schachbrett','Woche '+w,true)}<div class="ws-grid">${K.map(k=>c(k,false)).join('')}</div></section><section class="ws-page jp-heft">${head('Lösungen: Arbeitsheft Schachbrett','Woche '+w+' · für die Lehrkraft')}<div class="ws-grid">${K.filter(k=>k.loesung).map(k=>c(k,true)).join('')}</div><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printRegeln(B,w){const F=D.fixed[w];return B.sheetCSS('AG-Regeln')+PCSS+`<section class="ws-page jp-poster">${head('Unsere Schach-AG','Regeln und Rituale')}<h2>Unsere Regeln</h2><ol>${F.regeln.map(r=>`<li>${esc(r)}</li>`).join('')}</ol>${F.regelnSpaeter?`<p style="font-size:12pt">${esc(F.regelnSpaeter)}</p>`:''}<h2>Unsere Rituale</h2><table class="ws-table"><tbody>${F.rituale.map(([a,b])=>`<tr><td><b>${esc(a)}</b></td><td>${esc(b)}</td></tr>`).join('')}</tbody></table><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printGeschichte(B,w){const F=D.fixed[w],Q=F.feld.S;
 return B.sheetCSS('Geschichte')+PCSS+`<section class="ws-page jp-story">${head(F.geschichte.titel,'Geschichte zum Vorlesen · Woche '+w)}${F.geschichte.text.map(t=>`<p>${esc(t)}</p>`).join('')}<p class="ws-src">${esc(F.geschichte.hinweis||'')} © Dr. Edmund Bruns</p></section>
 <section class="ws-page jp-heft">${head('Fragen zur Geschichte „'+F.geschichte.titel+'“','Arbeitsblatt Woche '+w,true)}<div class="ws-grid">${Q.map((t,i)=>card('S'+(i+1),t,paper(t.frage))).join('')}</div></section>
 <section class="ws-page">${head('Lösungen: Fragen zur Geschichte','Woche '+w+' · für die Lehrkraft')}<ol>${Q.map(t=>`<li>${esc(t.antwort)}</li>`).join('')}</ol><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printAufbaukarte(B,w){const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';const k=()=>`<div class="ws-card"><div class="ws-card-head"><b>Aufbaukarte: So steht die Grundstellung</b></div><div class="ws-card-body">${diag({fen:START})}<p><b>Rechts unten ist hell.</b> Die Dame steht auf ihrer Farbe.</p><p>Von links nach rechts: Turm, Springer, Läufer, Dame, König, Läufer, Springer, Turm. Davor acht Bauern.</p></div></div>`;
 return B.sheetCSS('Aufbaukarte')+PCSS+`<section class="ws-page jp-heft">${head('Aufbaukarten','Woche '+w+' · ausschneiden, eine Karte pro Paar')}<div class="ws-grid">${k()+k()+k()+k()}</div><p class="ws-cut">✂ Entlang der Rahmen ausschneiden.</p></section>`}
function printBeobachtung(B,w){const rows=Array.from({length:16},()=>'<tr><td style="height:9mm"></td><td></td><td></td><td></td><td></td></tr>').join('');
 return B.sheetCSS('Beobachtungsbogen')+PCSS+`<section class="ws-page">${head('Beobachtungsbogen Lerncheck','Woche '+w+' · Grundstellung ohne Vorlage')}<table class="ws-table"><thead><tr><th style="width:38%">Name</th><th>Brett richtig</th><th>Figuren richtig</th><th>allein</th><th>mit Hilfe / weiter üben</th></tr></thead><tbody>${rows}</tbody></table><p>Ankreuzen. Bei Fehlern einen konkreten Tipp geben, zum Beispiel „Schau auf die Farbe unter deiner Dame“, dann korrigieren lassen.</p><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printStunde(B,w){const F=D.fixed[w];
 const rows=F.phasen.map((p,i)=>`<tr><td><b>${NR[i]} Phase</b><br>(${esc(p.name)})</td><td><b>${esc(p.titel)}</b>${p.ablauf.map(a=>`<br>${esc(a)}`).join('')}<br><i>Ergebnis: ${esc(p.kinder)}</i></td><td>${p.links.map(x=>esc(x.label)).join('<br>')}</td></tr>`).join('');
 const sets=Object.entries(F.feld).map(([s,list])=>`<h2 class="ws-part">Lehrbrett ${esc(s)}</h2><ol>${list.map(t=>`<li><b>${esc(t.frage)}</b><br>${esc(t.antwort)}</li>`).join('')}</ol>`).join('');
 return B.sheetCSS('Woche '+w)+PCSS+`<section class="ws-page">${head('Woche '+w+': '+F.thema,F.umfang)}<p><b>Lernziel:</b> „${esc(F.lernziel)}“<br><b>Leitfrage:</b> ${esc(F.leitfrage)}${F.vorwissen?`<br><b>Vorwissen:</b> ${esc(F.vorwissen)}`:''}</p><table class="ws-table"><thead><tr><th>Phase</th><th>Ablauf</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table>${hintsHTML(F,'<br>','')}${afterHTML(F,'ws-table')}</section><section class="ws-page">${head('Aufgaben und Lösungen','Woche '+w+' · für die Lehrkraft')}${sets}<p class="ws-src">Quellen: ${esc(F.quelle)}. © Dr. Edmund Bruns</p></section>`}
// ---------- Ablauf ----------
let B0=null;
function show(w){const B=B0,F=D.fixed[w];document.getElementById('plannerbody').innerHTML=weekHTML(w)+'<p id="jpnote" role="status"></p>';
 document.querySelectorAll('[data-jplink]').forEach(b=>b.onclick=()=>{const [pi,li]=b.dataset.jplink.split('|').map(Number);const x=F.phasen[pi].links[li];
  if(x.art==='feld')fbOpen(w,x.set,x.von,x.bis);
  else if(x.art==='audio')speak(F,b);
  else if(x.art==='druck'){const k=x.was;const html=k.startsWith('feld:')?printFeld(B,w,k.slice(5),k==='feld:L'?'Lerncheck':x.label.replace(/^Arbeitsblatt:\s*/,''),'Woche '+w+(k==='feld:L'?' · allein lösen':'')):({regeln:()=>printRegeln(B,w),geschichte:()=>printGeschichte(B,w),arbeitsheft:()=>printHeft(B,w),aufbaukarte:()=>printAufbaukarte(B,w),beobachtung:()=>printBeobachtung(B,w)}[k]||(()=>''))();if(html)B.printContent(html)}});
 document.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek));
 document.getElementById('jpback').onclick=()=>{try{window.speechSynthesis?.cancel()}catch(e){}B.back();setTimeout(()=>document.getElementById('px-year')?.scrollIntoView(),0)};
 document.getElementById('jpprint').onclick=()=>B.printContent(printStunde(B,w));scrollTo(0,0)}
function mount(B){B0=B;const sec=document.getElementById('px-year');if(!sec)return;sec.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek))}
window.Jahresplan={mount,show,overviewHTML,data:D,_fb:()=>FB};
})();
