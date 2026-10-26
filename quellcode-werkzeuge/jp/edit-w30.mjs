// Woche 30 „Die Eröffnungsregeln“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w29.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import {Chess} from '../dist/assets/chess.mjs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
// Stellung nach Zügen aus der Grundstellung, damit keine Stellung von Hand getippt wird
const nach=z=>{const g=new Chess();for(const m of z.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],zug:f[1]}};
const Z=(frage,zuege,targets,antwort,hilfe,extra={})=>{const {fen,zug}=nach(zuege);return T(frage,fen,targets,antwort,hilfe,{...(zug==='b'?{zug:'b'}:{}),...extra})};
const ZE=(frage,zuege,targets,antwort,hilfe,extra={})=>{const g=new Chess();for(const m of zuege.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');
 return T(frage,f[0],targets,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[3]!=='-'?{ep:f[3]}:{}),zuege,...extra})};
// Deutsche Notation in die von chess.js übersetzen
const EN=s=>s.replace(/^0-0-0/,'O-O-O').replace(/^0-0/,'O-O').replace(/^[KDTLS]/,c=>({K:'K',D:'Q',T:'R',L:'B',S:'N'})[c]).replace(/=?([DTLS])(?=[+#]?$)/,(m,c)=>'='+({D:'Q',T:'R',L:'B',S:'N'})[c]);
// NZ: Stellung aus Zügen (oder FEN mit Zusatzangaben), deutscher Zug, Ziel: 'von', 'nach', 'beide' oder 'rochade'
const NZ=(frage,quelle,zug,ziel,antwort,hilfe,extra={})=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle);if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);
 const f=g.fen().split(' ');const m=g.move(EN(zug));if(!m)throw Error('Zug nicht möglich: '+zug);
 const t=ziel==='von'?[m.from]:ziel==='nach'?[m.to]:ziel==='beide'?[m.from,m.to]:m.flags.includes('k')?[m.to,'f'+m.to[1]]:[m.to,'d'+m.to[1]];
 if(ziel==='rochade'&&!/[kq]/.test(m.flags))throw Error('keine Rochade: '+zug);
 return T(frage,f[0],t,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...(viaZuege&&quelle?{zuege:quelle}:{}),...extra})};
// Offene Schreibaufgabe: Zug wird geprüft, Lösung ist die deutsche Notation
const SCHREIB=(frage,quelle,zug,antwort,hilfe)=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle);if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);
 const f=g.fen().split(' ');const mv=g.move(EN(zug));if(!mv)throw Error('Zug nicht möglich: '+zug);return T(frage,f[0],undefined,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(viaZuege&&quelle?{zuege:quelle}:{}),pfeil:[mv.from,mv.to]})};
URLS.diplomOnline=URLS.diplomOnline||'https://ludgerus-schachdiplom.netlify.app/';
const KEINS=' Wenn keins, drücke „Prüfen“ ohne Markierung.',KEINE=' Wenn keine, drücke „Prüfen“ ohne Markierung.';
const POS=quelle=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle.includes(' ')?quelle:quelle+' w - - 0 1');if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],extra:{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...(viaZuege&&quelle?{zuege:quelle}:{})}}};
const P=(frage,quelle,antwort,hilfe,pruef,extra={})=>{const p=POS(quelle);return T(frage,p.fen,null,antwort,hilfe,{...p.extra,...extra,pruef})};
// Fesselungen mit chess.js berechnen
const G=q=>{const p=POS(q);return {g:new Chess(p.fen+' '+(p.extra.zug||'w')+' - - 0 1'),p}};
const VAL={p:1,n:3,b:3,r:5,q:9,k:100};
const sqOf=(g,f)=>g.board().flat().filter(x=>x&&f(x)).map(x=>x.square);
// gefesselte Figuren der Farbe c: an den König (ziel 'k') oder an eine wertvollere Figur (ziel 'q' = Dame)
function pins(g,c,ziel='k'){const opp=c==='w'?'b':'w',out=[],pinner=[];const ziele=sqOf(g,x=>x.color===c&&x.type===(ziel==='k'?'k':'q'));
 for(const z of ziele)for(const s of sqOf(g,x=>x.color===c&&x.type!=='k'&&x.square!==z)){const before=new Set(g.attackers(z,opp));const pc=g.get(s);g.remove(s);const neu=g.attackers(z,opp).filter(a=>!before.has(a)&&'brq'.includes(g.get(a).type));g.put(pc,s);if(neu.length&&(ziel==='k'||neu.every(a=>VAL[g.get(a).type]<VAL.q))){out.push(s);pinner.push(...neu)}}
 return {gefesselt:[...new Set(out)],fessler:[...new Set(pinner)]}}
// Züge der Seite am Zug mit Langschrittlern, die eine neue Fesselung an den gegnerischen König schaffen
function fesselZuege(g,typen='bqr'){const c=g.turn(),opp=c==='w'?'b':'w',vorher=new Set(pins(g,opp).gefesselt),out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);if(!g.inCheck()){const r=pins(g,opp);if(r.fessler.includes(m.to)&&r.gefesselt.some(x=>!vorher.has(x)))out.add(m.to)}g.undo()}return [...out]}
// Bauern der Seite am Zug, die eine Figur auf sq mit einem Zug angreifen können
function bauernAngriff(g,sq){const out=new Set();for(const m of g.moves({verbose:true}).filter(m=>m.piece==='p')){g.move(m);const h=new Chess(g.fen());const att=h.attackers(sq,m.color);if(att.includes(m.to))out.add(m.from);g.undo()}return [...out]}
const schlaeger=(g,sq)=>[...new Set(g.moves({verbose:true}).filter(m=>m.to===sq).map(m=>m.from))];
const X=(frage,q,fn,antwort,hilfe,extra={})=>{const {g,p}=G(q);return T(frage,p.fen,fn(g),antwort,hilfe,{...p.extra,...extra})};
const LI=id=>'Lichess-Puzzle '+id+' (CC0), https://lichess.org/training/'+id;
// Gabel: Zug, nach dem die gezogene Figur mindestens zwei lohnende Ziele angreift (König, wertvollere oder ungedeckte Figur) und selbst sicher steht
function ziele(g,sq){const p=g.get(sq),opp=p.color==='w'?'b':'w';return sqOf(g,x=>x.color===opp).filter(t=>g.attackers(t,p.color).includes(sq))}
function lohnend(g,sq){const p=g.get(sq),opp=p.color==='w'?'b':'w';return ziele(g,sq).filter(t=>{const z=g.get(t);return z.type==='k'||VAL[z.type]>VAL[p.type]||!g.attackers(t,opp).length})}
function gabelZuege(g,typen='pnbrqk'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);const h=new Chess(g.fen().replace(/ [wb] /,' '+c+' '));const l=lohnend(h,m.to);const feinde=g.attackers(m.to,opp),freunde=h.attackers(m.to,c).filter(x=>x!==m.to);
  const sicher=!feinde.length||(freunde.length&&feinde.every(a=>VAL[g.get(a).type]>=VAL[m.piece]));if(l.length>=2&&sicher)out.add(m.to);g.undo()}return [...out]}
// Spieß: Langschrittler greift eine wertvolle Figur an, dahinter steht auf derselben Linie eine weitere gegnerische Figur, die nach dem Ausweichen fällt
const RICHT={r:[[1,0],[-1,0],[0,1],[0,-1]],b:[[1,1],[1,-1],[-1,1],[-1,-1]]};RICHT.q=[...RICHT.r,...RICHT.b];
const F2=s=>[s.charCodeAt(0)-97,+s[1]-1],SQ=(x,y)=>String.fromCharCode(97+x)+(y+1);
function linie(g,von,typ){const out=[];for(const [dx,dy] of RICHT[typ]){let [x,y]=F2(von);const hit=[];while(true){x+=dx;y+=dy;if(x<0||y<0||x>7||y>7)break;const p=g.get(SQ(x,y));if(p){hit.push(SQ(x,y));if(hit.length===2)break}}if(hit.length===2)out.push(hit)}return out}
function spiess(g,sq){const p=g.get(sq),opp=p.color==='w'?'b':'w';return linie(g,sq,p.type).filter(([a,b])=>{const X=g.get(a),Y=g.get(b);if(X.color!==opp||Y.color!==opp)return false;if(!(X.type==='k'||VAL[X.type]>VAL[Y.type]))return false;if(X.type!=='k'&&g.attackers(sq,opp).includes(a)&&VAL[X.type]<=VAL[p.type])return false;const def=g.attackers(b,opp).filter(q=>q!==a);return !def.length||VAL[Y.type]>VAL[p.type]})}
function spiessZuege(g,typen='brq'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);const feinde=g.attackers(m.to,opp),freunde=g.attackers(m.to,c).filter(x=>x!==m.to);const sicher=!feinde.length||(freunde.length&&feinde.every(a=>VAL[g.get(a).type]>=VAL[m.piece]));if(sicher&&spiess(g,m.to).length)out.add(m.to);g.undo()}return [...out]}
const hinten=(g,sq)=>spiess(g,sq).map(([a,b])=>b);
// Abzug: Eine Figur zieht weg und öffnet einer eigenen Langschrittlerin die Linie
const ksq=(g,c)=>sqOf(g,x=>x.type==='k'&&x.color===c)[0];
function abzug(g,von,modus='schach'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>!von||m.from===von)){g.move(m);const chk=g.inCheck()?g.attackers(ksq(g,opp),c):[];const disc=chk.some(s=>s!==m.to),dbl=chk.length>=2;
  let ok=false;if(modus==='schach')ok=disc;else if(modus==='doppel')ok=dbl;else if(modus==='gewinn'&&disc&&!g.moves({verbose:true}).some(x=>x.to===m.to)){const h=new Chess(g.fen().replace(/ [wb] /,' '+c+' '));ok=sqOf(h,x=>x.color===opp&&x.type!=='k').some(t=>h.attackers(t,c).includes(m.to)&&(VAL[h.get(t).type]>VAL[m.piece]||!h.attackers(t,opp).length))}
  if(ok)out.add(m.to);g.undo()}return [...out]}
const zwischen=(g,a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b),dx=Math.sign(x2-x1),dy=Math.sign(y2-y1),out=[];let x=x1+dx,y=y1+dy;while(x!==x2||y!==y2){if(g.get(SQ(x,y)))out.push(SQ(x,y));x+=dx;y+=dy}return out};
const LZ=(frage,fen,zug,antwort,hilfe,id)=>T(frage,fen.split(' ')[0],[zug.slice(2,4)],antwort,hilfe,{...(fen.split(' ')[1]==='b'?{zug:'b'}:{}),leer:true,quelle:LI(id)});
// Mattdrohung: Was könnte der Gegner setzen, wenn ich nichts tue? (Zugrecht tauschen)
const tausch=g=>{const p=g.fen().split(' ');p[1]=p[1]==='w'?'b':'w';p[3]='-';return p.join(' ')};
const drohung=g=>{try{const h=new Chess(tausch(g));if(h.inCheck())return [];return h.moves({verbose:true}).filter(m=>m.san.includes('#'))}catch(e){return []}};
const mattFelder=g=>[...new Set(drohung(g).map(m=>m.to))],mattVon=g=>[...new Set(drohung(g).map(m=>m.from))];
const strecke=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);if(!(x1===x2||y1===y2||Math.abs(x2-x1)===Math.abs(y2-y1)))return [];const dx=Math.sign(x2-x1),dy=Math.sign(y2-y1),out=[];let x=x1+dx,y=y1+dy;while(x!==x2||y!==y2){out.push(SQ(x,y));x+=dx;y+=dy}return out};
const nebenan=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);return Math.max(Math.abs(x1-x2),Math.abs(y1-y2))===1};
// Abwehrzüge gegen ein Matt in einem Zug, sortiert nach Art: schlagen, decken, dazwischen, luft (Fluchtfeld schaffen), koenig, sonst
function abwehr(g,art='alle',von=null){const c=g.turn(),thr=drohung(g);if(!thr.length)return [];const k=ksq(g,c);
 const zw=new Set(thr.filter(m=>'brq'.includes(m.piece)).flatMap(m=>strecke(m.from,m.to))),mf=new Set(thr.map(m=>m.to)),out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>!von||m.from===von)){g.move(m);let ok;
  if(g.inCheck())ok=!g.isCheckmate()&&g.moves({verbose:true}).every(r=>{g.move(r);const frei=!drohung(g).length&&!g.isCheckmate();g.undo();return frei});
  else ok=!g.moves().some(x=>x.includes('#'));
  let deckt=false;if(ok){const h=new Chess(tausch(g));deckt=[...mf].some(t=>h.attackers(t,c).includes(m.to))}g.undo();if(!ok)continue;
  const typ=m.piece==='k'?'koenig':m.captured?'schlagen':zw.has(m.to)?'dazwischen':deckt?'decken':nebenan(m.from,k)?'luft':'sonst';
  if(art==='alle'||art===typ)out.add(m.to)}return [...out]}
// Eröffnung: unentwickelte Leichtfiguren und Bauernzüge ins Zentrum
const unentwickelt=(g,c)=>{const r=c==='w'?'1':'8';return [['b','n'],['g','n'],['c','b'],['f','b']].map(([f,t])=>f+r).filter(s=>{const p=g.get(s);return p&&p.color===c&&p.type===(s[0]==='b'||s[0]==='g'?'n':'b')})};
const zentrum=g=>[...new Set(g.moves({verbose:true}).filter(m=>m.piece==='p'&&['d4','e4','d5','e5'].includes(m.to)).map(m=>m.to))];
// Stellung mit vollständiger FEN (Rochaderechte bleiben erhalten)
const XF=(frage,fen,fn,antwort,hilfe,extra={})=>{const g=new Chess(fen),f=fen.split(' ');return T(frage,f[0],[...new Set(fn(g))],antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...extra})};
const bauernAbwehr=g=>sqOf(g,x=>x.type==='p'&&x.color===g.turn()).flatMap(s=>abwehr(g,'alle',s));
const greiftDameAn=g=>{const c=g.turn(),out=new Set();for(const s of sqOf(g,x=>x.color===c&&x.type!=='q'&&x.type!=='k'))for(const t of abwehr(g,'alle',s)){const m=g.move({from:s,to:t,promotion:'q'});const h=new Chess(tausch(g));if(sqOf(h,x=>x.type==='q'&&x.color!==c).some(d=>h.attackers(d,c).includes(t)))out.add(t);g.undo()}return [...out]};
F[30]={thema:'Die Eröffnungsregeln',
 lernziel:'Ich kann die Eröffnungsregeln anwenden und das Schäfermatt abwehren.',
 leitfrage:'Was tue ich in den ersten Zügen, damit meine Figuren gut stehen und mein König sicher ist?',
 vorwissen:'Rochade (Woche 14), Notation (Woche 19), ein Matt abwehren (Woche 29).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Eröffnungsregeln in kindgerechter Form nach dem Ludgerus-Schachdiplom Gold 2, Lichess-Partien zu den Puzzles cfpZR, 7MRYn, jzXfh, RIbCv, PuENE, 4YgRE, h48XX und 8RqML (CC0, Thema „opening“, über die Lichess-Schnittstelle abgerufen, jeweils die Stellung vor dem Fehler oder das Matt danach), übrige Aufgaben eigene Aufgaben. Drohungen, Abwehrzüge, Rochade und Entwicklung mit chess.js berechnet',
 phasen:[
 {name:'Einstieg',titel:'Zentrum, Entwicklung, Rochade',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Zentrumsfelder zeigen, unentwickelte Figuren finden, prüfen, was vor der Rochade noch weg muss, Springer zur Mitte, Schäfermatt erkennen.',
   'Bei W5 fragen: „Warum ist f7 am Anfang so schwach?“ Ziel nennen: „Heute lernt ihr die Eröffnungsregeln und wie ihr das Schäfermatt sicher abwehrt.“'],
  kinder:'Ich kenne die vier Zentrumsfelder und weiß, welche Figuren ich entwickeln muss.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Die fünf Eröffnungsregeln und das Schäfermatt',
  ablauf:['Plakat „Die Eröffnungsregeln“ aufhängen. Am Lehrbrett E1: Zentrum mit einem Bauern besetzen. E2: Eine Leichtfigur entwickeln und dabei angreifen.',
   'E3: Die Dame kommt zu früh und wird mit einem Bauernzug verjagt. E4: Das Schäfermatt droht. Die Kinder suchen alle Abwehrzüge. Frage: „Warum ist Sh6 oder De7 besser als ein Bauernzug, der nichts deckt?“',
   'E5: Wohin zieht der König bei der Rochade? E6: eine echte Partie, in der die Rochade das Matt verhindert hätte. Merksatz: „Zentrum, Figuren raus, König in Sicherheit, Dame bleibt zu Hause.“'],
  kinder:'Ich erkläre die Eröffnungsregeln und wehre das Schäfermatt ab.',
  links:[{art:'druck',label:'Plakat: Die Eröffnungsregeln',was:'eroeffnung'},{art:'feld',label:'Lehrbrett: Eröffnung E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Eröffnungs-Duell zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Beide spielen die ersten acht Züge einer Partie und schreiben mit. Nach jedem Zug sagt der Partner, welche Regel der Zug erfüllt. Wer zuerst rochiert und alle vier Leichtfiguren entwickelt hat, bekommt einen Punkt. Danach wechseln die Rollen und die Farben.',
   'Allein: Arbeitsblatt A1 bis A6, darunter zwei echte Aufgaben aus Lichess-Partien. Vergleich am Lehrbrett.'],
  kinder:'Ich entwickle meine Figuren und rochiere in den ersten Zügen.',
  links:[{art:'druck',label:'Arbeitsblatt: Die Eröffnungsregeln',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'},{art:'druck',label:'Partieformular zum Mitschreiben',was:'partieformular'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Bauern fressen statt entwickeln, die Dame zieht zu oft, der König bleibt in der Mitte. Die Aufgaben stammen aus echten Partien, in denen genau das zum Matt führte.',
   'Bei jeder Aufgabe fragen: „Welche Eröffnungsregel wurde hier verletzt?“'],
  kinder:'Ich erkenne Eröffnungsfehler und weiß, welche Regel hilft.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welche Figur entwickelst du als Nächstes, und wann rochierst du?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich wende die Eröffnungsregeln ohne Hilfe an.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Regel-Bingo“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Eine Partie mit 10 Zügen. Für jede erfüllte Regel (Zentrumsbauer, vier Leichtfiguren entwickelt, Rochade, Dame bleibt bis Zug 6 zu Hause) gibt es einen Punkt. Wer hat nach 10 Zügen mehr Punkte? Danach wechseln die Rollen und die Farben.',
   'Rückblick: „Welche Regel vergisst du am leichtesten?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um Opfer und das Damiano-Matt.'],
  kinder:'Ich spiele eine Eröffnung nach den Regeln.',
  links:[{art:'druck',label:'Plakat: Die Eröffnungsregeln',was:'eroeffnung'},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold 2)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Die fünf Regeln als Karten neben das Brett legen. Nach jedem Zug wird die passende Karte umgedreht.',
  zusatz:'Eine eigene Partie der letzten Wochen nachspielen und markieren, wo eine Eröffnungsregel verletzt wurde. Oder die Abwehr gegen das Schäfermatt auch für Weiß üben.',
  kuerzen:'Die Partnerübung auf sechs Züge kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur 8 Züge.'},
 nachher:'Wer holt die Dame noch zu früh heraus? Wer rochiert spät oder gar nicht? Diese Kinder spielen in Woche 31 die ersten Züge zuerst laut kommentiert.',
 feld:{
 W:[T('Klicke die vier Zentrumsfelder an.',START,['d4','e4','d5','e5'],'d4, e4, d5 und e5. Wer das Zentrum beherrscht, hat mehr Platz für seine Figuren.',['Sie liegen genau in der Mitte des Bretts.','Zwei auf der 4. und zwei auf der 5. Reihe.'],{leer:true}),
  X('Klicke alle weißen Springer und Läufer an, die noch nicht entwickelt sind.','e4 e5 Nf3 Nc6',g=>unentwickelt(g,'w'),'b1, c1 und f1. Nur der Springer f3 ist schon im Spiel.',['Welche Figuren stehen noch auf ihrem Startfeld?','Springer und Läufer heißen Leichtfiguren.']),
  X('Weiß möchte kurz rochieren. Klicke die Figuren an, die vorher noch wegziehen müssen.','e4 e5',g=>['f1','g1'],'Der Läufer f1 und der Springer g1. Zwischen König und Turm müssen alle Felder frei sein.',['Welche Felder liegen zwischen e1 und h1?','Dort darf nichts stehen.']),
  T('Regel: Springer zur Mitte. Klicke die beiden Felder an, auf die die weißen Springer am besten ziehen.',START,['c3','f3'],'c3 und f3. Von dort greifen sie das Zentrum an. Am Rand (a3, h3) erreichen sie weniger Felder.',['Welche Springerfelder liegen näher an der Mitte?','Springer am Rand bringt Kummer und Schand.'],{leer:true}),
  X('Weiß droht Matt in einem Zug. Klicke das Feld an, auf dem Weiß mattsetzen würde.','e4 e5 Bc4 Nc6 Qh5',g=>mattFelder(g),'f7. Dxf7 wäre Matt, der Läufer c4 deckt die Dame. Das ist das Schäfermatt.',['Welches Feld greifen Dame und Läufer gemeinsam an?','Wer deckt f7 außer dem König?'],{leer:true}),
  P('Schwarz hat die Drohung übersehen. Klicke alle Felder an, auf denen Weiß jetzt mattsetzt.','e4 e5 Bc4 Nc6 Qh5 Nf6','f7. Dxf7 ist Matt. Der Springer f6 greift die Dame zwar an, deckt aber f7 nicht.',['Was griff die Dame vorher schon an?','Hilft Sf6 gegen diese Drohung?'],{matt:true},{leer:true})],
 E:[X('Regel 1, Zentrum: Klicke alle Felder an, auf die ein weißer Bauer ziehen kann, um ein Zentrumsfeld zu besetzen.',START,g=>zentrum(g),'d4 und e4. Die Bauern d2 und e2 besetzen mit dem Doppelschritt das Zentrum und öffnen den Läufern den Weg.',['Welche Zentrumsfelder erreicht ein Bauer im ersten Zug?','Doppelschritt nicht vergessen.'],{leer:true}),
  X('Regel 2, Entwicklung mit Angriff: Klicke das Feld an, auf das ein weißer Springer zieht und dabei den Bauern e5 angreift.','e4 e5',g=>[...new Set(g.moves({verbose:true}).filter(m=>m.piece==='n').filter(m=>{g.move(m);const h=new Chess(tausch(g));const ja=h.attackers('e5','w').includes(m.to);g.undo();return ja}).map(m=>m.to))],'f3. Sf3 entwickelt den Springer zur Mitte und greift e5 an. Schwarz muss reagieren.',['Welche Springerfelder greifen e5 an?','Welches erreicht ein Springer im ersten Zug?'],{leer:true}),
  X('Regel 3, Dame bleibt zu Hause: Die weiße Dame ist früh gekommen. Schwarz wehrt Dxf7# ab und greift dabei die Dame an. Klicke das Feld an.','e4 e5 Qh5 Nc6 Bc4',g=>greiftDameAn(g),'g6. Der Bauer sperrt die Diagonale h5 bis f7 und greift die Dame an. Sie muss schon wieder ziehen, Schwarz gewinnt Zeit.',['Welcher Zug greift die Dame h5 an?','Sperrt er auch den Weg nach f7?'],{leer:true}),
  X('Schäfermatt abwehren: Weiß droht Dxf7#. Markiere alle Felder, auf die Schwarz ziehen kann, um das Matt zu verhindern.','e4 e5 Bc4 Nc6 Qh5',g=>abwehr(g),'d5, e7, f6, g5, g6, h4 und h6. De7, Df6 und Sh6 decken f7, g6 sperrt die Diagonale der Dame, d5 die des Läufers. Dg5 und Dh4 bieten den Damentausch an. Am besten sind Züge, die f7 decken und eine Figur entwickeln: Sh6 oder De7.',['Wer kann f7 decken?','Kann eine Figur die Diagonale sperren?'],{leer:true}),
  P('Regel 4, König in Sicherheit: Markiere das Feld, auf das der weiße König bei der Rochade zieht.','e4 e5 Nf3 Nc6 Bc4 Bc5','g1. Der König zieht zwei Felder Richtung Turm, der Turm springt nach f1. Hinter den Bauern f2, g2, h2 steht er sicher.',['Der Weg zum Turm h1 ist frei.','Der König zieht zwei Felder.'],{rochade:true},{leer:true}),
  XF('Echte Partie: Schwarz schlug mit dxc4 den Läufer und wurde mit Dxf7# mattgesetzt. Markiere alle Felder, auf die der schwarze König stattdessen ziehen konnte, um das Matt zu verhindern.','rnbqk2r/ppp1bppp/8/3pN3/2B5/3P4/PPP2QPP/RNB1K2R b KQkq - 0 7',g=>abwehr(g,'koenig'),'g8. Mit der Rochade steht der König auf g8, und der Turm f8 deckt f7. Nach Dxf7+ schlägt der Turm die Dame.',['Darf Schwarz noch rochieren?','Wo steht der König nach der Rochade?'],{leer:true,quelle:LI('cfpZR')})],
 A:[X('Weiß hat e4 gespielt. Klicke alle Felder an, auf die ein schwarzer Bauer ziehen kann, um ein Zentrumsfeld zu besetzen.','e4',g=>zentrum(g),'d5 und e5. Beide Doppelschritte besetzen ein Zentrumsfeld.',['Welche Zentrumsfelder erreicht ein schwarzer Bauer?','Doppelschritt von der 7. Reihe.'],{leer:true}),
  X('Klicke alle weißen Springer und Läufer an, die noch nicht entwickelt sind.','e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5 O-O d6',g=>unentwickelt(g,'w'),'b1 und c1. Sf3, Lc4 und die Rochade sind schon gemacht. Als Nächstes Sc3 und Lg5 oder Le3.',['Welche Leichtfiguren stehen noch auf der 1. Reihe?','Der Turm zählt nicht.']),
  X('Weiß droht Dxf7#. Wehre das Matt ab und entwickle dabei einen Springer: Klicke das Feld an.','e4 e5 Bc4 Nc6 Qh5',g=>abwehr(g,'alle','g8'),'h6. Sh6 deckt f7 und entwickelt den Springer. Sf6 würde f7 nicht decken.',['Von welchem Feld deckt ein Springer f7?','Welches erreicht der Springer g8?'],{leer:true}),
  NZ('Schwarz spielt 0-0. Markiere die Felder, auf denen König und Turm danach stehen.','e4 e5 Nf3 Nc6 Bc4 Bc5 O-O Nf6 d3','0-0','rochade','g8 und f8. Bei der kurzen Rochade zieht der König nach g8, der Turm springt nach f8.',['0-0 ist die kurze Rochade.','Der König zieht zwei Felder Richtung Turm h8.']),
  XF('Echte Partie: Schwarz spielte Lb4 und wurde mit Dxf7# mattgesetzt. Markiere alle Felder, auf die ein schwarzer Springer oder Läufer stattdessen ziehen konnte, um das Matt zu verhindern.','1r1qkbnr/3b1ppp/2n5/3Qp3/2B5/2N1P3/PP3PPP/R1B1K2R b KQk - 2 13',g=>[...abwehr(g,'alle','g8'),...abwehr(g,'alle','d7')],'e6 und h6. Le6 sperrt die Diagonale c4 bis f7, Sh6 deckt f7. In der Partie folgte nach Lb4 Dxf7#.',['Wer kann f7 decken?','Kann eine Figur die Diagonale c4 bis f7 sperren?'],{leer:true,quelle:LI('7MRYn')}),
  XF('Echte Partie: Schwarz spielte Sd7 und wurde mit Df7# mattgesetzt. Klicke das Feld an, auf das der Läufer c8 ziehen konnte, um das Matt zu verhindern.','rnbqkb1r/ppp4p/6p1/4Np2/2QPp3/2P5/P1P2PPP/R1B1KB1R b KQkq - 1 9',g=>abwehr(g,'alle','c8'),'e6. Le6 sperrt die Diagonale c4 bis f7 und verhindert das Matt. Aber Vorsicht: Der Läufer ist ungedeckt, Weiß schlägt Dxe6+. Besser verteidigt De7, die Dame deckt dann f7. In der Partie folgte nach Sd7 Df7#.',['Welche Felder liegen zwischen c4 und f7?','Welches erreicht der Läufer c8?'],{leer:true,quelle:LI('jzXfh')})],
 S:[P('Fehler 1: Bauern fressen statt entwickeln. Schwarz hat dxc4 gespielt. Klicke alle Felder an, auf denen Weiß jetzt mattsetzt.','rnbqk2r/ppp1bppp/8/4N3/2p5/3P4/PPP2QPP/RNB1K2R w KQkq - 0 8','f7. Dxf7 ist Matt, der Springer e5 deckt die Dame. Mit der Rochade wäre der König sicher gewesen.',['Welche weißen Figuren greifen f7 an?','Wer deckt f7?'],{matt:true},{leer:true,quelle:LI('cfpZR')}),
  X('Fehler 2: Die Dame zieht zu oft. Weiß droht schon wieder Dxf7#. Markiere alle Felder, auf die der Springer g8 ziehen kann, um das Matt zu verhindern.','e4 e5 Qh5 Nc6 Bc4 g6 Qf3',g=>abwehr(g,'alle','g8'),'f6 und h6. Sf6 sperrt die f-Linie, Sh6 deckt f7. Die weiße Dame hat schon dreimal gezogen, Schwarz entwickelt dabei seine Springer.',['Welche Linie nutzt die Dame jetzt?','Wo sperrt oder deckt der Springer?'],{leer:true}),
  XF('Fehler 3: Der König bleibt in der Mitte. Echte Partie: Weiß spielte Tc1 und wurde mit Dxf2# mattgesetzt. Markiere alle Felder, auf die ein weißer Springer stattdessen ziehen konnte, um das Matt zu verhindern.','rnb1kb1r/pp3ppp/3p4/1NqP4/4n3/5N2/PP1B1PPP/R2QKB1R w KQkq - 9 12',g=>[...abwehr(g,'alle','b5'),...abwehr(g,'alle','f3')],'d4. Ein Springer auf d4 sperrt die Diagonale c5 bis f2. In der Partie folgte nach Tc1 Dxf2#. Nach einer Rochade hätte der Turm f1 das Feld f2 gedeckt.',['Welches Feld neben dem König ist schwach?','Wer kann es decken oder die Dame vertreiben?'],{leer:true,quelle:LI('8RqML')}),
  Z('Fehler 4: Die Dame zu früh. Klicke die schwarze Figur an, die mit Gewinn die weiße Dame angreift.','e4 e5 Qh5 Nc6 Bc4 g6 Qf3 Nf6 Qb3',['c6'],'Der Springer c6. Sd4 greift die Dame b3 an und droht Sxc2+. Die weiße Dame zieht zum vierten Mal, Schwarz ist besser entwickelt.',['Welche schwarze Figur kann mit einem Zug die Dame angreifen?','Welche droht dabei noch mehr?']),
  XF('Fehler 5: Gier. Echte Partie: Weiß schlug mit fxg4 den Springer und wurde mit Dh4# mattgesetzt. Markiere alle Felder, auf die ein weißer Bauer stattdessen ziehen konnte, um das Matt zu verhindern.','r2qk2r/pp1n1ppp/3p4/3P1b2/2P1p1n1/P4P2/3BP2P/R2QKBNR w KQkq - 0 12',g=>bauernAbwehr(g),'e3 und h4. Nach e3 kann der König nach e2 fliehen, h4 besetzt das Mattfeld. In der Partie folgte nach fxg4 Dh4#.',['Welche Diagonale nutzt die Dame d8?','Welcher Bauer sperrt sie oder macht Luft?'],{leer:true,quelle:LI('RIbCv')}),
  XF('Fehler 6: Echte Partie: Schwarz schlug mit Sxc4 den Läufer und wurde mit Dxh7# mattgesetzt. Markiere alle Felder, auf die Schwarz stattdessen ziehen konnte, um das Matt zu verhindern.','rnbq1rk1/pppp1ppp/3n4/6N1/2B1p3/2P4Q/PPP2PPP/R1B1K2R b KQ - 1 9',g=>abwehr(g),'e8, g5, h5 und h6. Dxg5 schlägt den Springer, der h7 deckt. h6 oder h5 sperren die h-Linie. Te8 macht f8 für den König frei. In der Partie folgte nach Sxc4 Dxh7#.',['Welche Figuren greifen h7 an?','Schlagen, decken oder Luft machen.'],{leer:true,quelle:LI('PuENE')})],
 L:[X('Klicke alle schwarzen Springer und Läufer an, die noch nicht entwickelt sind.','e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4',g=>unentwickelt(g,'b'),'Der Läufer c8. Die beiden Springer und der Läufer c5 sind schon entwickelt.',['Welche Leichtfiguren stehen noch auf der 8. Reihe?','Der Turm zählt nicht.']),
  P('Schwarz hat Sf6 gespielt. Klicke alle Felder an, auf denen Weiß jetzt mattsetzt.','e4 e5 Qh5 Nc6 Bc4 Nf6','f7. Dxf7 ist das Schäfermatt, der Läufer c4 deckt die Dame.',['Welches Feld greifen Dame und Läufer an?','Deckt Sf6 dieses Feld?'],{matt:true},{leer:true}),
  X('Weiß droht Dxf7#. Markiere alle Felder, auf die der Springer g8 ziehen kann, um das Matt zu verhindern.','e4 e5 Bc4 Bc5 Qf3',g=>abwehr(g,'alle','g8'),'f6 und h6. Sf6 sperrt die f-Linie, Sh6 deckt f7.',['Welche Linie nutzt die Dame f3?','Wo sperrt oder deckt der Springer?'],{leer:true}),
  P('Markiere das Feld, auf das der schwarze König bei der Rochade zieht.','e4 e5 Nf3 Nf6 Bc4 Bc5 d3','g8. Der Weg zum Turm h8 ist frei, kein Feld ist angegriffen.',['Welche Felder überquert der König?','Der König zieht zwei Felder.'],{rochade:true},{leer:true}),
  XF('Echte Partie: Schwarz spielte c6 und wurde mit Df7# mattgesetzt. Markiere alle Felder, auf die die schwarze Dame stattdessen ziehen konnte, um das Matt zu verhindern.','rnbq3r/ppp4k/3p2pp/2bQ4/3N4/4B3/PPP2PPP/RN3RK1 b - - 1 12',g=>abwehr(g,'alle','d8'),'d7, e7, e8, f6, f8 und g8. Von all diesen Feldern deckt die Dame f7. In der Partie folgte nach c6 Df7#.',['Welche Felder decken f7?','Wohin kann die Dame d8 ziehen?'],{leer:true,quelle:LI('4YgRE')}),
  XF('Echte Partie: Weiß spielte Sg5 und wurde mit Df2# mattgesetzt. Markiere alle Felder, auf die Weiß stattdessen ziehen konnte, um das Matt zu verhindern.','r1b1k2r/pp3ppp/1qn1p3/4P3/6P1/5Nb1/PBPPB1P1/1R1Q1K1R w kq - 2 14',g=>abwehr(g),'d4 und e1. Sd4, Ld4 oder d4 sperren die Diagonale b6 bis f2, De1 deckt f2. In der Partie folgte nach Sg5 Df2#.',['Welche schwarzen Figuren greifen f2 an?','Sperren oder decken.'],{leer:true,quelle:LI('h48XX')})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 30 geschrieben');
