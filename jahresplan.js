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
const ICON={video:'▶',audio:'🔊',blatt:'📄',druck:'🖨',feld:'♟',spiel:'♚',info:'ℹ'};
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
const navHTML=w=>`<div class="row jp-nav"><button type="button" class="jpback">← Zum Jahresplan</button>${D.fixed[w-1]?`<button type="button" data-jpweek="${w-1}">← Woche ${w-1}</button>`:''}${D.fixed[w+1]?`<button type="button" data-jpweek="${w+1}">Woche ${w+1} →</button>`:''}</div>`;
function weekHTML(w){const F=D.fixed[w];
 const rows=F.phasen.map((p,pi)=>`<tr><th scope="row">${NR[pi]} Phase<span class="jp-phname">(${esc(p.name)})</span></th><td><b>${esc(p.titel)}</b>${p.ablauf.map(a=>`<p>${esc(a)}</p>`).join('')}<p class="jp-kids">Ergebnis: ${esc(p.kinder)}</p></td><td class="jp-links">${p.links.map((x,li)=>linkHTML(x,pi,li)).join('')}</td></tr>`).join('');
 return `<div class="jp-week">${navHTML(w)}
 <table class="jp-meta"><tbody><tr><th>Thema (Woche ${w})</th><td><b>${esc(F.thema)}</b></td></tr><tr><th>Lernziel</th><td>„${esc(F.lernziel)}“</td></tr><tr><th>Leitfrage</th><td>${esc(F.leitfrage)}</td></tr>${F.vorwissen?`<tr><th>Vorwissen</th><td>${esc(F.vorwissen)}</td></tr>`:''}<tr><th>Umfang</th><td>${esc(F.umfang)}</td></tr></tbody></table>
 <table class="jp-flow"><thead><tr><th>Phase</th><th>So läuft die Stunde</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table>${hintsHTML(F,'<br>')}${afterHTML(F)}
 ${F.geschichte?`<details class="jp-story"><summary>Geschichte „${esc(F.geschichte.titel)}“ zum Vorlesen</summary>${F.geschichte.text.map(t=>`<p>${esc(t)}</p>`).join('')}</details>`:''}
 <p class="muted">Quellen: ${esc(F.quelle)}.</p><div class="row"><button type="button" class="primary" id="jpprint" aria-expanded="false">Stunde drucken / PDF</button></div><div id="jpprintpick" hidden></div>${navHTML(w)}</div>`}
// ---------- Geschichte anhören ----------
let player=null;
function speak(F,btn){const label=on=>btn.innerHTML=`<span aria-hidden="true">${on?'⏹':'🔊'}</span> ${on?'Anhören stoppen':'Geschichte anhören'}`;
 if(player&&!player.paused){player.pause();player.currentTime=0;label(false);return}
 if(F.audio){player=player||new Audio(F.audio);player.onended=()=>label(false);player.play().then(()=>label(true)).catch(()=>alertBox('Die Audiodatei konnte nicht abgespielt werden.'));return}
 alertBox('Für diese Stunde gibt es keine Audiodatei.')}
function alertBox(t){const s=document.getElementById('jpnote');if(s)s.textContent=t}
// ---------- Lehrbrett für Feldaufgaben (Aussehen wie das Lehrbrett) ----------
let FB=null;
function fbOpen(w,set,von,bis){const y=scrollY;const F=D.fixed[w];let list=F.feld[set].map((t,i)=>({...t,label:set+(i+1)}));list=list.slice((von||1)-1,bis||undefined);FB={w,y,list,i:0,marks:new Set(),undo:[],shown:false,msg:'',kind:'info',hints:0};fbRender();topOfBody()}
const topOfBody=()=>{const h=document.getElementById('plannerbody');if(h)h.scrollIntoView({block:'start'})};
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
 document.getElementById('fbback').onclick=()=>{const {w,y}=FB;FB=null;show(w,y)}}
// ---------- Drucken (im Stil der SchachStunde-Arbeitsblätter) ----------
const head=(t,sub,fields)=>`<div class="ws-head"><div><h1>${esc(t)}</h1><p>${esc(sub)}</p></div>${fields?'<div class="ws-fields"><span>Name<i></i></span><span>Datum<i class="s"></i></span></div>':''}</div>`;
const PCSS='<style>.ws-page .ws-head h1{white-space:normal!important;font-size:13.5pt!important;line-height:1.2!important}.ws-page .ws-head>div:first-child{flex:1;min-width:0}.jp-sqlabel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:700 7.5pt system-ui;color:#8a1f4f;white-space:nowrap;z-index:2;text-shadow:0 0 2px #fff,0 0 2px #fff}.jp-heft .ws-grid{grid-template-columns:1fr 1fr;gap:3mm}.jp-heft .ws-card-body{display:block}.jp-heft .ws-diag{display:flex;justify-content:center;padding-top:4mm}.jp-heft .boardframe{width:50mm!important;grid-template-rows:12px minmax(0,1fr) 12px!important}.jp-heft .file-labels{align-items:end}.jp-cut .ws-grid{gap:0!important;border-top:1.5px dashed #444;border-left:1.5px dashed #444}.jp-cut .ws-card{border:0!important;border-right:1.5px dashed #444!important;border-bottom:1.5px dashed #444!important;border-radius:0!important;box-shadow:none!important;padding:3mm 4mm 4mm}.jp-cut .boardframe{width:46mm!important}.jp-cut .ws-card p{text-align:center}.ws-page .sq.solution{box-shadow:inset 0 0 0 100px rgba(232,140,40,.6)!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.jp-heft .ws-card p{margin:1.5mm 0 0;font-size:8.3pt;line-height:1.3}.jp-heft .ws-card{break-inside:avoid}.jp-poster li{font-size:15pt;margin:4mm 0}.jp-poster h2{font-size:18pt}.jp-story p{font-size:12pt;line-height:1.6}.sq{position:relative;overflow:visible}.jp-heft .board{overflow:visible}</style>';
const paper=q=>q.replace(/(^|[.?!] )Markiere ((?:alle |das |die )[^,.]*?Feld[^,.]*)([,.])/g,'$1Kreuze $2 an$3').replace(/Klicke (.*?) an\b/g,'Kreise $1 ein').replace(/klicke (.*?) an\b/g,'kreise $1 ein').replace(/drücke „Prüfen“ ohne Markierung/,'schreibe „alles richtig“').replace(/^Markiere /,'Male aus: ').replace(/^Zeige /,'Kreise ein: ');
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
function printAufbaukarte(B,w){const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';const k=()=>`<div class="ws-card"><div class="ws-card-body">${diag({fen:START})}<p><b>Rechts unten ist hell. Die Dame steht auf ihrer Farbe.</b></p><p>Turm, Springer, Läufer, Dame, König, Läufer, Springer, Turm. Davor acht Bauern.</p></div></div>`;
 return B.sheetCSS('Aufbaukarte')+PCSS+`<section class="ws-page jp-heft jp-cut">${head('Aufbaukarten','Woche '+w+' · eine Karte pro Paar')}<div class="ws-grid">${Array.from({length:6},k).join('')}</div><p class="ws-cut">✂ Entlang der gestrichelten Linien ausschneiden.</p></section>`}
function printWerte(B,w){const R=[['p','Bauer','1'],['n','Springer','3'],['b','Läufer','3'],['r','Turm','5'],['q','Dame','9'],['k','König','unbezahlbar']];
 return B.sheetCSS('Figurenwerte')+PCSS+`<section class="ws-page jp-poster">${head('Was sind die Figuren wert?','Plakat · Woche '+w)}<table class="ws-table jp-werte"><tbody>${R.map(([c,n,v])=>`<tr><td style="width:22mm">${img(c.toUpperCase())}</td><td style="font-size:20pt"><b>${n}</b></td><td style="font-size:24pt;text-align:right"><b>${v}</b></td></tr>`).join('')}</tbody></table><h2>Tauschen: erst rechnen, dann schlagen</h2><ol><li>Was bekomme ich, wenn ich schlage?</li><li>Wer kann zurückschlagen, und was verliere ich dann?</li><li>Bekomme ich mehr, als ich verliere, ist es ein guter Tausch.</li></ol><p class="ws-src">© Dr. Edmund Bruns</p></section><style>.jp-werte img{width:16mm;height:16mm}</style>`}
const FAIR=[['Handschlag','Vor und nach jeder Partie geben wir uns die Hand.'],['Berührt, geführt','Wer eine eigene Figur berührt, muss mit ihr ziehen. Wer eine gegnerische Figur berührt, muss sie schlagen, wenn das geht.'],['Losgelassen ist gezogen','Steht die Figur auf dem neuen Feld und ist losgelassen, gilt der Zug.'],['Zurechtrücken','Wer eine Figur nur gerade hinstellen will, sagt vorher: „Ich rücke zurecht.“'],['Leise spielen','Wir sprechen leise und sagen dem Gegner keine Züge vor.'],['Gewinnen und verlieren','Wer verliert, gratuliert. Wer gewinnt, freut sich leise und bedankt sich.'],['Bei Streit','Stopp, Hand heben, die Lehrkraft entscheidet.']];
function printFairplay(B,w){return B.sheetCSS('Fairplay')+PCSS+`<section class="ws-page jp-poster">${head('Fairplay am Schachbrett','Plakat · Woche '+w)}<table class="ws-table"><tbody>${FAIR.map(([a,b])=>`<tr><td style="width:55mm;font-size:15pt"><b>${a}</b></td><td style="font-size:14pt">${b}</td></tr>`).join('')}</tbody></table><h2>So läuft eine Partie</h2><ol><li>Brett richtig hinlegen: rechts unten ist hell. Figuren aufbauen.</li><li>Handschlag. Weiß beginnt, dann wird abwechselnd gezogen.</li><li>Ziel ist das Matt. Wer mattgesetzt wird, hat verloren.</li><li>Handschlag, Figuren zurück in die Grundstellung.</li></ol><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printErgebnisliste(B,w){const rows=Array.from({length:16},()=>'<tr><td style="height:9mm"></td><td></td><td></td><td></td><td></td></tr>').join('');
 return B.sheetCSS('Ergebnisliste')+PCSS+`<section class="ws-page">${head('Spielstunde: Ergebnisliste','Woche '+w+' · Aufsteiger-Runde')}<p><b>So geht die Aufsteiger-Runde:</b> Nach jeder Partie rückt, wer gewonnen hat, einen Tisch nach rechts. Wer verloren hat, rückt einen Tisch nach links. Bei Remis bleiben beide sitzen. In der nächsten Partie wechselt die Farbe.</p><table class="ws-table"><thead><tr><th style="width:40%">Name</th><th>Partie 1</th><th>Partie 2</th><th>Partie 3</th><th>Punkte</th></tr></thead><tbody>${rows}</tbody></table><p>Eintragen: 1 für einen Sieg, ½ für Remis, 0 für eine Niederlage. Gezählt wird auch: Partie fair zu Ende gespielt? ✓</p><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printBeobachtung(B,w){const rows=Array.from({length:16},()=>'<tr><td style="height:9mm"></td><td></td><td></td><td></td><td></td></tr>').join('');
 return B.sheetCSS('Beobachtungsbogen')+PCSS+`<section class="ws-page">${head('Beobachtungsbogen Lerncheck','Woche '+w+' · Grundstellung ohne Vorlage')}<table class="ws-table"><thead><tr><th style="width:38%">Name</th><th>Brett richtig</th><th>Figuren richtig</th><th>allein</th><th>mit Hilfe / weiter üben</th></tr></thead><tbody>${rows}</tbody></table><p>Ankreuzen. Bei Fehlern einen konkreten Tipp geben, zum Beispiel „Schau auf die Farbe unter deiner Dame“, dann korrigieren lassen.</p><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printStunde(B,w){const F=D.fixed[w];
 const rows=F.phasen.map((p,i)=>`<tr><td><b>${NR[i]} Phase</b><br>(${esc(p.name)})</td><td><b>${esc(p.titel)}</b>${p.ablauf.map(a=>`<br>${esc(a)}`).join('')}<br><i>Ergebnis: ${esc(p.kinder)}</i></td><td>${p.links.map(x=>esc(x.label)).join('<br>')}</td></tr>`).join('');
 return B.sheetCSS('Woche '+w)+PCSS+`<section class="ws-page">${head('Woche '+w+': '+F.thema,F.umfang)}<p><b>Lernziel:</b> „${esc(F.lernziel)}“<br><b>Leitfrage:</b> ${esc(F.leitfrage)}${F.vorwissen?`<br><b>Vorwissen:</b> ${esc(F.vorwissen)}`:''}</p><table class="ws-table"><thead><tr><th>Phase</th><th>Ablauf</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table>${hintsHTML(F,'<br>','')}${afterHTML(F,'ws-table')}</section>`}
function printUebersicht(B,w){const F=D.fixed[w];
 const sets=Object.entries(F.feld).map(([s,list])=>`<h2 class="ws-part">Lehrbrett ${esc(s)}</h2><ol>${list.map(t=>`<li><b>${esc(t.frage)}</b><br>${esc(t.antwort)}</li>`).join('')}</ol>`).join('');
 return B.sheetCSS('Woche '+w)+PCSS+`<section class="ws-page">${head('Aufgaben und Lösungen','Woche '+w+' · für die Lehrkraft')}${sets}<p class="ws-src">Quellen: ${esc(F.quelle)}. © Dr. Edmund Bruns</p></section>`}
// Ein Druckstück je Material-Link; „Stunde drucken“ sammelt alle
function druckHTML(B,w,x){const k=x.was;if(k.startsWith('feld:'))return printFeld(B,w,k.slice(5),k==='feld:L'?'Lerncheck':x.label.replace(/^Arbeitsblatt:\s*/,''),'Woche '+w+(k==='feld:L'?' · allein lösen':''));
 return ({regeln:()=>printRegeln(B,w),geschichte:()=>printGeschichte(B,w),arbeitsheft:()=>printHeft(B,w),aufbaukarte:()=>printAufbaukarte(B,w),beobachtung:()=>printBeobachtung(B,w),werte:()=>printWerte(B,w),fairplay:()=>printFairplay(B,w),ergebnisliste:()=>printErgebnisliste(B,w)}[k]||(()=>''))()}
function materials(w){const F=D.fixed[w],seen=new Set(),out=[{id:'stunde',label:'Stundenverlauf (für die Lehrkraft)',html:B=>printStunde(B,w)},{id:'uebersicht',label:'Alle Lehrbrett-Aufgaben mit Lösungen (für die Lehrkraft)',html:B=>printUebersicht(B,w)}],ext=[];
 F.phasen.forEach(p=>p.links.forEach(x=>{if(x.art==='druck'&&!seen.has(x.was)){seen.add(x.was);out.push({id:x.was,label:x.label,html:B=>druckHTML(B,w,x)})}else if(x.art==='blatt'&&x.url)ext.push(x)}));return {out,ext}}
let printY=null;
function printKeep(B,html){printY=scrollY;const prev=window.plannerReturn;window.plannerReturn=()=>{window.plannerReturn=prev;if(document.querySelector('.jp-week')&&printY!==null){const y=printY;printY=null;requestAnimationFrame(()=>scrollTo(0,y));return true}return prev?prev():false};B.printContent(html)}
function pickHTML(w){const {out,ext}=materials(w);return `<div class="jp-pick"><h4>Was möchtest du drucken?</h4><p class="muted">Alle Materialien dieser Stunde. Wähle aus, was du brauchst. Alles kommt in eine Druckdatei.</p>${out.map(m=>`<label><input type="checkbox" data-jpmat="${esc(m.id)}" checked> ${esc(m.label)}</label>`).join('')}${ext.length?`<p class="muted">Außerdem separat zu öffnen: ${ext.map(x=>`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join(', ')}.</p>`:''}<div class="row"><button type="button" class="primary" id="jppickgo">Auswahl drucken / PDF</button><button type="button" id="jppickall">Alle auswählen</button><button type="button" id="jppicknone">Keine auswählen</button></div></div>`}
// ---------- Königliche Rettung: alle gegen die Lehrkraft ----------
// Fragen der Kinder als Satz verstehen: Teile mit „oder“ vereinigen, mit „und“ schneiden, „nicht“ kehrt um
const ALL=[...FILES].flatMap(f=>[1,2,3,4,5,6,7,8].map(r=>f+r));
const fi=q=>FILES.indexOf(q[0]),rk=q=>+q[1],hell=q=>(fi(q)+rk(q))%2===0;
const ORD={erst:1,zweit:2,dritt:3,viert:4,'fünft':5,fuenft:5,sechst:6,siebt:7,siebent:7,acht:8};
function diagBetween(a,b){const df=fi(b)-fi(a),dr=rk(b)-rk(a);if(Math.abs(df)!==Math.abs(dr)||!df)return null;const out=[];for(let i=0;i<=Math.abs(df);i++)out.push(FILES[fi(a)+i*Math.sign(df)]+(rk(a)+i*Math.sign(dr)));return out}
function features(part){let s=' '+part+' ';const found=[];const take=(re,fn)=>{s=s.replace(re,(...m)=>{const r=fn(m);if(r){found.push(r);return ' '}return m[0]})};
 const sel=(desc,pred)=>({desc,set:new Set(ALL.filter(pred))});
 take(/(?:diagonale|schräge)\D*?([a-h][1-8])\s*(?:bis|nach|und|-|zu)?\s*([a-h][1-8])/g,m=>{const d=diagBetween(m[1],m[2]);return d&&{desc:'Diagonale '+m[1]+' bis '+m[2],set:new Set(d)}});
 take(/lange[nr]? diagonale[n]?/g,()=>({desc:'lange Diagonalen',set:new Set([...diagBetween('a1','h8'),...diagBetween('h1','a8')])}));
 take(/linien? ([a-h]) ?(?:bis|-) ?([a-h])\b/g,m=>sel(m[1]+'- bis '+m[2]+'-Linie',q=>q[0]>=m[1]&&q[0]<=m[2]));
 take(/reihen? ([1-8])\.? ?(?:bis|-) ?([1-8])\b/g,m=>sel(m[1]+'. bis '+m[2]+'. Reihe',q=>rk(q)>=+m[1]&&rk(q)<=+m[2]));
 take(/links (?:von|neben) (?:der )?([a-h])[- ]?linie/g,m=>sel('links von der '+m[1]+'-Linie',q=>q[0]<m[1]));
 take(/rechts (?:von|neben) (?:der )?([a-h])[- ]?linie/g,m=>sel('rechts von der '+m[1]+'-Linie',q=>q[0]>m[1]));
 take(/(oberhalb|über|ueber|unterhalb|unter) (?:der )?([1-8])\.? ?reihe/g,m=>{const n=+m[2],up=/ob|über|ueber/.test(m[1]);return sel((up?'oberhalb':'unterhalb')+' der '+n+'. Reihe',q=>up?rk(q)>n:rk(q)<n)});
 take(/\b([a-h])[- ]linie\b|\blinie ([a-h])\b|\b([a-h])linie\b/g,m=>{const f=m[1]||m[2]||m[3];return sel(f+'-Linie',q=>q[0]===f)});
 take(/\b([1-8])\.? ?reihe\b|\breihe ([1-8])\b/g,m=>{const n=+(m[1]||m[2]);return sel(n+'. Reihe',q=>rk(q)===n)});
 take(/grundreihe/g,()=>sel('Grundreihen',q=>rk(q)===1||rk(q)===8));
 take(/erweiterte[nm]? zentrum/g,()=>sel('erweitertes Zentrum',q=>q[0]>='c'&&q[0]<='f'&&rk(q)>=3&&rk(q)<=6));
 take(/zentrum\w*|mittelfeld\w*|\bmitte\b/g,()=>sel('Zentrum',q=>/^[de][45]$/.test(q)));
 take(/damen(?:flügel|fluegel|seite)/g,()=>sel('Damenflügel',q=>q[0]<='d'));
 take(/königs(?:flügel|fluegel|seite)|koenigs(?:fluegel|seite)/g,()=>sel('Königsflügel',q=>q[0]>='e'));
 take(/eck\w*/g,()=>sel('Eckfelder',q=>/^[ah][18]$/.test(q)));
 take(/rand\w*/g,()=>sel('Randfelder',q=>/^[ah]|[18]$/.test(q)));
 take(/obere[nrs]? hälfte|\boben\b/g,()=>sel('obere Hälfte',q=>rk(q)>=5));
 take(/untere[nrs]? hälfte|\bunten\b/g,()=>sel('untere Hälfte',q=>rk(q)<=4));
 take(/linke[nrs]? hälfte|\blinks\b/g,()=>sel('linke Hälfte',q=>q[0]<='d'));
 take(/rechte[nrs]? hälfte|\brechts\b/g,()=>sel('rechte Hälfte',q=>q[0]>='e'));
 take(/\bhell\w*|\bweiß\w*|\bweiss\w*/g,()=>sel('helle Felder',hell));
 take(/\bdunk(?:el|l)\w*|\bschwarz\w*/g,()=>sel('dunkle Felder',q=>!hell(q)));
 take(/\b([a-h])([1-8])\b/g,m=>({desc:m[1]+m[2],set:new Set([m[1]+m[2]])}));
 return found}
function parseFrage(text){let s=String(text||'').toLowerCase().replace(/[?!,;:„“"()]/g,' ');
 s=s.replace(/\b(erst|zweit|dritt|viert|fünft|fuenft|sechst|siebent|siebt|acht)e[nrsm]?\b/g,(m,w)=>ORD[w]+'.').replace(/\s+/g,' ');
 const teile=s.split(/\boder\b/),parts=[],unklar=[];let set=new Set();
 for(const t of teile){const und=t.split(/\bund\b|\bsowie\b/);let inter=null,descs=[];
  for(const u of und){const neg=/\b(nicht|kein\w*)\b/.test(u);const f=features(u);if(!f.length){if(/[a-zäöü]{3}/.test(u.replace(/\b(steht|stehen|ist|liegt|befindet|sich|er|der|die|das|den|dem|des|könig|koenig|auf|einem|einer|eine|ein|einen|im|in|am|an|feld|felder|feldern|nicht|vielleicht|denn|da|so)\b/g,'')))unklar.push(u.trim());continue}
   let x=f.reduce((acc,g)=>acc?new Set([...acc].filter(q=>g.set.has(q))):new Set(g.set),null);const d=f.map(g=>g.desc).join(' und ');
   if(neg){x=new Set(ALL.filter(q=>!x.has(q)));descs.push('nicht '+d)}else descs.push(d);
   inter=inter?new Set([...inter].filter(q=>x.has(q))):x}
  if(inter){parts.push(descs.join(' und '));for(const q of inter)set.add(q)}}
 return {ok:parts.length>0,set,text:parts.join(' oder '),unklar}}
const LISTE=['Steht der König auf einem hellen Feld?','Steht der König auf dem Damenflügel?','Steht der König in der oberen Hälfte?','Steht der König im Zentrum?','Steht der König auf einem Randfeld?','Steht der König auf der e-Linie?','Steht der König auf der 4. Reihe?','Steht der König links von der e-Linie?','Steht der König oberhalb der 4. Reihe?','Steht der König auf einer der langen Diagonalen?','Steht der König auf einem Zentrumsfeld oder am Damenflügel?','Steht der König auf einem dunklen Feld und nicht am Rand?'];
let RT=null;
function rtOpen(w){RT={w,y:scrollY,king:ALL[Math.floor(Math.random()*64)],gone:new Set(),undo:[],n:0,log:[],found:false,raten:false,auto:false,frage:'',plan:null,msg:'Der König hat sich versteckt. Die Kinder stellen eine Ja/Nein-Frage.',kind:'info'};rtRender();topOfBody()}
function rtRender(){const R=RT,host=document.getElementById('plannerbody');const t={fen:R.found?placementFen(R.king):''};
 const board=boardMarkup(t,{interactive:true,marks:R.plan?R.plan.set:new Set(),sol:R.found?new Set([R.king]):null}).replace(/data-bsq="([a-h][1-8])"/g,(m,q)=>m+(R.gone.has(q)?' data-gone="1"':''));
 host.innerHTML=`<div class="jp-fb jp-rt"><h2>Königliche Rettung</h2><div class="training"><div><div id="movefeedback" class="movefeedback ${R.kind}" role="status" aria-live="polite">${esc(R.msg)}</div><div id="teacherboard">${board}</div>
 <div class="row"><button type="button" id="rtundo" ${R.undo.length?'':'disabled'}>← Zurück</button><button type="button" id="rtclear">Streichungen löschen</button></div><p class="muted">${R.raten?'Ratemodus: Klicke das Feld an, auf dem ihr den König vermutet. Jeder Rateversuch zählt als Frage.':'Klicke Felder an, um sie zu streichen. Ein Klick auf eine Zahl oder einen Buchstaben streicht die ganze Reihe oder Linie.'}</p></div>
 <aside class="side"><section class="boardcontext"><button type="button" id="rtback">← Zurück zu Woche ${R.w}</button></section>
 <p>Alle gegen die Lehrkraft: Der König hat sich auf einem Feld versteckt. Die Kinder stellen nacheinander Ja/Nein-Fragen und streichen nach jeder Antwort die Felder, auf denen er nicht stehen kann.</p>
 <p class="jp-rtcount"><b>Fragen: ${R.n}</b> · noch möglich: ${64-R.gone.size} Felder</p>
 <label for="rtfrage">Frage der Kinder</label><div class="row jp-rtin"><input type="text" id="rtfrage" value="${esc(R.frage)}" placeholder="Frage eintippen und Enter drücken" autocomplete="off" ${R.found?'disabled':''}><button type="button" class="primary" id="rtshow" ${R.found?'disabled':''}>Felder zeigen</button></div>
 ${R.plan?`<p class="jp-rtplan">Verstanden als: <b>${esc(R.plan.text)}</b> · ${R.plan.set.size} Felder grün markiert.${R.plan.unklar.length?` Nicht verstanden: „${esc(R.plan.unklar.join('“, „'))}“.`:''} Stimmt das?</p><div class="row"><button type="button" class="primary" id="rtanswer">Antwort zeigen</button><button type="button" id="rtcancel">Frage ändern</button></div>`:''}
 <details class="jp-rtlist"><summary>Frage aus einer Liste wählen</summary><select id="rtq" aria-label="Frage aus der Liste"><option value="">Bitte wählen …</option>${LISTE.map(f=>`<option>${esc(f)}</option>`).join('')}</select></details>
 <div class="row"><button type="button" id="rtguess" aria-pressed="${R.raten}" ${R.found?'disabled':''}>${R.raten?'Raten beenden':'Feld raten'}</button></div>
 <label class="jp-rtauto"><input type="checkbox" id="rtauto" ${R.auto?'checked':''}> Felder nach der Antwort automatisch streichen</label>
 ${R.log.length?`<ol class="jp-rtlog">${R.log.map(l=>`<li>${esc(l)}</li>`).join('')}</ol>`:''}
 <details><summary>Lehrkraft: König selbst verstecken</summary><p class="muted">Feld verdeckt eingeben, zum Beispiel e4. Das Feld wird nicht angezeigt.</p><div class="row"><input type="password" id="rtsecret" maxlength="2" size="4" autocomplete="off" aria-label="Versteck-Feld"><button type="button" id="rthide">Verstecken</button></div></details>
 <details><summary>Welche Wörter versteht das Lehrbrett?</summary><p class="muted">Felder wie e4, Linie (e-Linie, Linien a bis c), Reihe (4. Reihe, vierte Reihe, Reihen 1 bis 3), hell, dunkel, Zentrum, erweitertes Zentrum, Rand, Ecke, Grundreihe, Damenflügel, Königsflügel, obere, untere, linke, rechte Hälfte, links oder rechts von der d-Linie, oberhalb oder unterhalb der 4. Reihe, lange Diagonale, Diagonale a1 bis h8. Verbinden mit „und“, „oder“, „nicht“.</p></details>
 <div class="row"><button type="button" id="rtnew">Neues Spiel (zufälliges Versteck)</button></div>
 <p class="jp-hint">Tipp: Gute Fragen streichen viele Felder auf einmal. Am besten bleibt nach der Antwort nur noch die Hälfte übrig.</p></aside></div></div>`;
 host.querySelectorAll('[data-bsq]').forEach(b=>{if(b.dataset.gone)b.classList.add('gone');b.onclick=()=>R.raten?rtGuess(b.dataset.bsq):rtStrike([b.dataset.bsq])});
 host.querySelectorAll('[data-jprank]').forEach(b=>b.onclick=()=>rtStrike([...FILES].map(f=>f+b.dataset.jprank)));
 host.querySelectorAll('[data-jpfile]').forEach(b=>b.onclick=()=>rtStrike([1,2,3,4,5,6,7,8].map(r=>b.dataset.jpfile+r)));
 const $=id=>document.getElementById(id);
 const zeigen=()=>{R.frage=$('rtfrage').value;const p=parseFrage(R.frage);if(!p.ok){R.plan=null;R.msg='Diese Frage verstehe ich nicht. Nutzt Wörter wie Linie, Reihe, hell, Zentrum, Damenflügel, Rand oder ein Feld wie e4.';R.kind='bad'}else{R.plan=p;R.msg='Die Felder der Frage sind grün markiert. Stimmt die Markierung, zeigt die Antwort.';R.kind='info'}rtRender();$('rtfrage')?.focus()};
 $('rtshow').onclick=zeigen;$('rtfrage').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();zeigen()}};
 $('rtq').onchange=e=>{if(!e.target.value)return;$('rtfrage').value=e.target.value;zeigen()};
 if($('rtcancel'))$('rtcancel').onclick=()=>{R.plan=null;R.msg='Frage ändern und erneut „Felder zeigen“.';R.kind='info';rtRender();$('rtfrage').focus()};
 if($('rtanswer'))$('rtanswer').onclick=()=>{const p=R.plan,ja=p.set.has(R.king);R.n++;const q=R.frage.trim().replace(/\s*\?*$/,'?');R.log.push(q+' '+(ja?'Ja.':'Nein.'));R.msg='Frage '+R.n+': '+q+' '+(ja?'Ja.':'Nein.')+(R.auto?'':' Streicht jetzt die Felder, auf denen er nicht stehen kann.');R.kind=ja?'good':'bad';
  if(R.auto){R.undo.push(new Set(R.gone));for(const x of ALL)if(p.set.has(x)!==ja)R.gone.add(x)}R.plan=null;R.frage='';rtRender()};
 $('rtauto').onchange=e=>{R.auto=e.target.checked};
 $('rtundo').onclick=()=>{if(R.undo.length){R.gone=R.undo.pop();rtRender()}};
 $('rtclear').onclick=()=>{R.undo.push(new Set(R.gone));R.gone=new Set();rtRender()};
 $('rtguess').onclick=()=>{R.raten=!R.raten;R.plan=null;rtRender()};
 $('rtnew').onclick=()=>{const {w,y}=R;rtOpen(w);RT.y=y};
 $('rthide').onclick=()=>{const v=$('rtsecret').value.trim().toLowerCase();if(!/^[a-h][1-8]$/.test(v)){R.msg='Bitte ein Feld wie e4 eingeben.';R.kind='bad';rtRender();return}Object.assign(R,{king:v,gone:new Set(),undo:[],n:0,log:[],found:false,raten:false,plan:null,frage:'',msg:'Der König hat sich versteckt. Die Kinder stellen eine Ja/Nein-Frage.',kind:'info'});rtRender()};
 $('rtback').onclick=()=>{const {w,y}=R;RT=null;show(w,y)}}
function placementFen(sq){const rows=[];for(let r=8;r>=1;r--){let s='',e=0;for(const f of FILES){if(f+r===sq){if(e){s+=e;e=0}s+='K'}else e++}if(e)s+=e;rows.push(s)}return rows.join('/')}
function rtStrike(sqs){const R=RT;R.undo.push(new Set(R.gone));const all=sqs.every(q=>R.gone.has(q));for(const q of sqs)all?R.gone.delete(q):R.gone.add(q);rtRender()}
function rtGuess(q){const R=RT;R.n++;if(q===R.king){R.found=true;R.raten=false;R.msg=`👑 Gefunden! Der König stand auf ${q}. Ihr habt ${R.n} Fragen gebraucht.`;R.kind='good';R.log.push('Raten: '+q+'? Ja, gefunden!')}else{R.undo.push(new Set(R.gone));R.gone.add(q);R.msg=`Nicht auf ${q}. Das Feld ist gestrichen.`;R.kind='bad';R.log.push('Raten: '+q+'? Nein.')}rtRender()}
// ---------- Ablauf ----------
let B0=null;
function show(w,y){const B=B0,F=D.fixed[w];document.getElementById('plannerbody').innerHTML=weekHTML(w)+'<p id="jpnote" role="status"></p>';
 document.querySelectorAll('[data-jplink]').forEach(b=>b.onclick=()=>{const [pi,li]=b.dataset.jplink.split('|').map(Number);const x=F.phasen[pi].links[li];
  if(x.art==='feld')fbOpen(w,x.set,x.von,x.bis);
  else if(x.art==='spiel'&&x.was==='rettung')rtOpen(w);
  else if(x.art==='audio')speak(F,b);
  else if(x.art==='druck'){const html=druckHTML(B,w,x);if(html)printKeep(B,html)}});
 document.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek));
 document.querySelectorAll('.jpback').forEach(b=>b.onclick=()=>{try{player&&player.pause()}catch(e){}B.back();setTimeout(()=>document.getElementById('px-year')?.scrollIntoView(),0)});
 const pick=document.getElementById('jpprintpick'),pb=document.getElementById('jpprint');
 pb.onclick=()=>{const open=pick.hidden;pick.hidden=!open;pb.setAttribute('aria-expanded',String(open));if(open&&!pick.innerHTML){pick.innerHTML=pickHTML(w);
  const boxes=()=>[...pick.querySelectorAll('[data-jpmat]')];
  document.getElementById('jppickall').onclick=()=>boxes().forEach(c=>c.checked=true);
  document.getElementById('jppicknone').onclick=()=>boxes().forEach(c=>c.checked=false);
  document.getElementById('jppickgo').onclick=()=>{const ids=boxes().filter(c=>c.checked).map(c=>c.dataset.jpmat);if(!ids.length){alertBox('Bitte mindestens ein Material auswählen.');return}
   const html=materials(w).out.filter(m=>ids.includes(m.id)).map(m=>m.html(B).replace(/<style>[\s\S]*?<\/style>/g,'')).join('');printKeep(B,B.sheetCSS('Woche '+w)+PCSS+html)}}};
 if(y!=null)requestAnimationFrame(()=>scrollTo(0,y));else document.querySelector('.jp-week')?.scrollIntoView({block:'start'})}
function mount(B){B0=B;const sec=document.getElementById('px-year');if(!sec)return;sec.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek))}
window.Jahresplan={mount,show,overviewHTML,data:D,_fb:()=>FB,_rt:()=>RT,_parse:parseFrage};
})();
