// Woche 29 „Verteidigen: fünf Möglichkeiten, ein Matt abwehren“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w28.mjs, dann diese Datei.
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
F[29]={thema:'Verteidigen: fünf Möglichkeiten, ein Matt abwehren',
 lernziel:'Ich kann eine Drohung erkennen und die passende Verteidigung wählen.',
 leitfrage:'Der Gegner droht Matt. Welche fünf Möglichkeiten habe ich, und welche passt hier?',
 vorwissen:'Schach abwehren (Woche 8), Gegenangriff (Woche 27), Matt mit Dame und Turm (Woche 17 und 28).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Fünf Abwehrmöglichkeiten in kindgerechter Form, Lichess-Partien zu den Puzzles Ua9A6, LJSkx, F8dll, 13z8b, G82gS, 2vcoA, tOkbo und aA6wL (CC0, jeweils die Stellung vor dem Fehler, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Drohungen und Abwehrzüge mit chess.js berechnet',
 phasen:[
 {name:'Einstieg',titel:'Was droht der Gegner?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Mattfeld und Matt drohende Figur finden, Schach abwehren wiederholen, ein Grundreihenmatt aus Sicht des Angreifers, erste Abwehrzüge.',
   'Vor jeder Aufgabe die Frage stellen: „Was würde der Gegner tun, wenn er jetzt noch einmal ziehen dürfte?“ Ziel nennen: „Heute lernt ihr fünf Möglichkeiten, ein Matt abzuwehren.“'],
  kinder:'Ich erkenne, wo der Gegner mattsetzen will.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Schlagen, decken, dazwischenziehen, Luft machen, König wegziehen',
  ablauf:['Plakat „Ein Matt abwehren“ aufhängen. Am Lehrbrett E1 bis E5 je eine Möglichkeit: den Angreifer schlagen, das Mattfeld decken, eine Figur dazwischenziehen, dem König ein Fluchtfeld schaffen, den König vorher wegziehen.',
   'Nach jeder Aufgabe fragen: „Woran erkennst du, dass das Matt jetzt weg ist?“ E6: Manchmal ist die beste Abwehr ein eigenes Matt. Merksatz: „Erst die Drohung sehen, dann die passende Abwehr wählen. Matt geht vor.“'],
  kinder:'Ich nenne die fünf Möglichkeiten und zeige zu jeder ein Beispiel.',
  links:[{art:'druck',label:'Plakat: Ein Matt abwehren',was:'verteidigen'},{art:'feld',label:'Lehrbrett: Abwehr E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Drohung und Abwehr zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A baut eine Grundreihen-Drohung auf (König mit drei Bauern, gegnerischer Turm auf der offenen Linie). Kind B findet zwei verschiedene Abwehrzüge und nennt die Art. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6, darunter zwei Stellungen aus echten Lichess-Partien, in denen die Abwehr verpasst wurde. Vergleich am Lehrbrett.'],
  kinder:'Ich finde zu einer Drohung mehrere Abwehrzüge.',
  links:[{art:'druck',label:'Arbeitsblatt: Ein Matt abwehren',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Dazwischenziehen auf ein angegriffenes Feld, Luft auf der falschen Seite, eine Figur schlagen und die Drohung übersehen. Dazu drei echte Partien, in denen die Abwehr verpasst wurde.',
   'Bei jeder Aufgabe fragen: „Warum hilft dieser Zug nicht?“'],
  kinder:'Ich prüfe vor jedem eigenen Zug, was der Gegner droht.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Was droht hier, und welche der fünf Möglichkeiten nutzt du?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich wehre ein Matt ohne Hilfe ab.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Drohung, Abwehr“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Kind A stellt eine Mattdrohung auf, Kind B hat 30 Sekunden für eine Abwehr und nennt die Art. Für jede richtige Art gibt es einen Punkt, für eine neue Art zwei. Danach wechseln die Rollen.',
   'Rückblick: „Welche der fünf Möglichkeiten vergisst du am leichtesten?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um die Eröffnungsregeln und das Schäfermatt.'],
  kinder:'Ich nenne zu einer Drohung die passende Abwehr.',
  links:[{art:'druck',label:'Plakat: Ein Matt abwehren',was:'verteidigen'},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Die Drohung zuerst mit einem Pfeil zeigen oder kurz ausführen und zurücknehmen. Dann die fünf Möglichkeiten vom Plakat der Reihe nach durchgehen.',
  zusatz:'Eine Stellung bauen, in der alle fünf Abwehrmöglichkeiten funktionieren. Oder in eigenen Partien nach jedem gegnerischen Zug laut fragen: „Was droht?“',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer fragt schon von selbst „Was droht?“? Wer kennt nur eine oder zwei Abwehrarten? Das Grundreihenmatt in Woche 32 greift die Luft und das Decken wieder auf.',
 feld:{
 W:[X('Schwarz droht Matt in einem Zug. Klicke das Feld an, auf dem Schwarz mattsetzen würde.','4r1k1/5ppp/8/8/8/8/5PPP/6K1',g=>mattFelder(g),'e1. Te1 wäre Matt: Der König kommt nicht von der Grundreihe weg, die eigenen Bauern sperren ihn ein.',['Wenn Schwarz jetzt ziehen dürfte, was würde der Turm tun?','Schau auf die 1. Reihe.'],{leer:true}),
  X('Schwarz droht Matt in einem Zug. Klicke die schwarze Figur an, die mattsetzen würde.','r5k1/5ppp/3b4/8/7q/8/5PPP/R4RK1',g=>mattVon(g),'Die Dame h4. Dxh2 wäre Matt, der Läufer d6 deckt die Dame.',['Welches Feld neben dem weißen König ist schwach?','Wer deckt die Dame dort?']),
  P('Wiederholung Woche 8: Schach! Klicke alle weißen Figuren an, die das Schach abwehren können.','4k3/8/8/b7/8/8/8/R1N1K3','Der König e1 (wegziehen) und der Turm a1 (er schlägt den Läufer a5). Der Springer c1 erreicht kein Feld zwischen a5 und e1.',['Welche Figur gibt Schach?','Wegziehen, dazwischenziehen oder schlagen.'],{abwehr:true},{schach:true}),
  P('Jetzt bist du der Angreifer: Klicke alle Felder an, auf denen Weiß mattsetzt.','6k1/5ppp/8/8/8/8/5PPP/4R1K1','e8. Te8 ist Matt, die eigenen Bauern sperren den schwarzen König ein.',['Die 8. Reihe ist offen.','Hat der König ein Fluchtfeld?'],{matt:true},{leer:true}),
  X('Schwarz droht Te1#. Markiere alle Felder, auf die ein weißer Bauer ziehen kann, damit der König ein Fluchtfeld bekommt.','4r1k1/5ppp/8/8/8/8/5PPP/6K1',g=>abwehr(g,'luft'),'f3, f4, g3, g4, h3 und h4. Jeder Bauernzug öffnet dem König ein Feld auf der 2. Reihe.',['Welche Felder neben dem König sind von eigenen Bauern besetzt?','Zieht ein Bauer, wird ein Feld frei.'],{leer:true}),
  X('Schwarz droht Te1#. Markiere alle Felder, auf die der Turm a3 ziehen kann, um das Matt zu verhindern.','4r1k1/5ppp/8/8/8/R7/5PPP/6K1',g=>abwehr(g,'alle','a3'),'a1, a8 und e3. Auf a1 deckt der Turm das Mattfeld, auf e3 stellt er sich dazwischen, auf a8 fesselt er den Turm e8 an den König.',['Welche Felder decken e1?','Wo sperrt der Turm die e-Linie?'],{leer:true})],
 E:[X('1. Angreifer schlagen: Schwarz droht Dxh2#. Klicke das Feld an, auf das der Läufer zieht.','r5k1/5ppp/3b4/6B1/7q/8/5PPP/R4RK1',g=>abwehr(g,'schlagen'),'h4. Lxh4 schlägt die Dame. Ohne Angreifer gibt es kein Matt.',['Welche Figur will mattsetzen?','Kann der Läufer sie schlagen?'],{leer:true}),
  X('2. Mattfeld decken: Schwarz droht Te1#. Markiere alle Felder, auf denen der Springer das Mattfeld e1 deckt.','4r1k1/5ppp/8/8/3N4/8/5PPP/6K1',g=>abwehr(g,'decken','d4'),'c2 und f3. Von beiden Feldern greift der Springer e1 an. Schlägt der Turm dort, schlägt der Springer zurück.',['Von welchen Feldern greift ein Springer e1 an?','Welche davon erreicht der Springer d4?'],{leer:true}),
  X('3. Dazwischenziehen: Schwarz droht Te1#. Klicke das Feld an, auf das der Läufer zieht, um die e-Linie zu sperren.','4r1k1/5ppp/8/8/8/8/5PPP/2B3K1',g=>abwehr(g,'dazwischen','c1'),'e3. Der Läufer stellt sich zwischen Turm und Grundreihe, er ist sicher. Ld2 wäre auch eine Abwehr: Er deckt e1.',['Welche Felder liegen zwischen e8 und e1?','Welches erreicht der Läufer c1?'],{leer:true}),
  X('4. Fluchtfeld schaffen: Schwarz droht Dxh2#. Markiere alle Felder, auf die der Turm f1 ziehen kann, um dem König Luft zu machen.','r5k1/5ppp/3b4/8/7q/8/5PPP/R4RK1',g=>abwehr(g,'luft','f1'),'b1, c1, d1 und e1. Zieht der Turm weg, kann der König nach f1 fliehen. Dxh2+ ist dann nur Schach.',['Welches Feld neben dem König ist von einer eigenen Figur besetzt?','Wenn sie wegzieht, wird es frei.'],{leer:true}),
  X('5. König wegziehen: Schwarz droht Te1#. Markiere alle Felder, auf die der weiße König ziehen kann, um das Matt zu verhindern.','4r1k1/5ppp/8/8/8/8/5PPP/6K1',g=>abwehr(g,'koenig'),'f1. Nach Te1+ schlägt der König den Turm. Auf h1 wäre Te1 trotzdem Matt.',['Welche Felder kann der König erreichen?','Kann er auf dem neuen Feld den Turm schlagen?'],{leer:true}),
  P('Matt geht vor: Schwarz droht Txd1#. Aber Weiß ist am Zug. Klicke alle Felder an, auf denen Weiß selbst mattsetzt.','3r2k1/5ppp/8/8/8/8/5PPP/3R2K1','d8. Txd8 ist Matt. Wer zuerst mattsetzt, braucht sich nicht zu verteidigen.',['Prüfe vor der Abwehr eigene Mattzüge.','Die 8. Reihe ist offen.'],{matt:true},{leer:true})],
 A:[X('Weiß droht Matt in einem Zug. Klicke das Feld an, auf dem Weiß mattsetzen würde.','5rk1/5ppp/8/6N1/8/3Q4/8/6K1 b - - 0 1',g=>mattFelder(g),'h7. Dxh7 wäre Matt, der Springer g5 deckt die Dame, der Turm f8 versperrt das Fluchtfeld.',['Welche weiße Figur unterstützt die Dame?','Schau auf die Diagonale der Dame.'],{leer:true}),
  X('Weiß droht Dxh7#. Schlage den Angreifer: Klicke das Feld an, auf das der Läufer zieht.','5rk1/4bppp/8/6N1/8/3Q4/8/6K1 b - - 0 1',g=>abwehr(g,'schlagen'),'g5. Lxg5 schlägt den Springer, der die Dame decken würde. Dxh7+ ist dann nur Schach, der König schlägt die Dame.',['Wer deckt die Dame auf h7?','Kann der Läufer ihn schlagen?'],{leer:true}),
  X('Weiß droht Dxh7#. Decke das Mattfeld: Klicke das Feld an, auf das der Springer zieht.','5rk1/3n1ppp/8/6N1/8/3Q4/8/6K1 b - - 0 1',g=>abwehr(g,'decken','d7'),'f6. Der Springer f6 deckt h7. Schlägt die Dame dort, schlägt der Springer zurück.',['Von welchen Feldern deckt ein Springer h7?','Welches erreicht der Springer d7?'],{leer:true}),
  X('Weiß droht Dxh7#. Ziehe dazwischen: Klicke das Feld an, auf das der Läufer zieht.','2b2rk1/5ppp/8/6N1/8/3Q4/8/6K1 b - - 0 1',g=>abwehr(g,'dazwischen','c8'),'f5. Der Läufer sperrt die Diagonale d3 bis h7. Auch die Bauernzüge f5 und g6 sperren sie.',['Welche Felder liegen zwischen d3 und h7?','Welches erreicht der Läufer c8?'],{leer:true}),
  X('Echte Partie: Schwarz droht Dxg2#. In der Partie spielte Weiß Kh2 und wurde mattgesetzt. Markiere alle Felder, auf die Weiß ziehen konnte, um das Matt zu verhindern.','4r1k1/pp3ppp/2r3q1/3p4/3N4/2P1P2b/PP3PP1/1R1Q1RK1 w - - 0 18',g=>abwehr(g),'f3, g3 und g4. Df3 und Dg4 decken g2, die Bauernzüge g3 und g4 sperren die g-Linie. In der Partie folgte nach Kh2 Dxg2#.',['Wo will die Dame g6 mattsetzen?','Decken oder dazwischenziehen.'],{leer:true,quelle:LI('Ua9A6')}),
  X('Echte Partie: Schwarz droht Dxh2#. In der Partie spielte Weiß e4 und wurde mattgesetzt. Markiere alle Felder, auf die Weiß ziehen konnte, um das Matt zu verhindern.','r3k2r/1ppn1pp1/p2b1n1p/3pq3/1P6/P1N1PB2/1BPP1PPP/R2Q1RK1 w kq - 3 12',g=>abwehr(g),'e1 und g3. g3 sperrt die Diagonale des Läufers d6. Te1 macht f1 frei, dann kann der König fliehen. In der Partie folgte nach e4 Dxh2#.',['Welche Linie nutzt der Läufer d6?','Welches Feld neben dem König ist besetzt?'],{leer:true,quelle:LI('LJSkx')})],
 S:[T('Fehler 1: Dazwischenziehen, aber sicher. Schwarz droht Te1#. Klicke das Feld an, auf dem sich der Springer sicher dazwischenstellt.','4r1k1/5ppp/8/8/3N4/8/5PPP/6K1',['e2'],'e2. Auf e6 schlägt der Bauer f7 den Springer, dann droht Te1# wieder.',['Welche Felder der e-Linie erreicht der Springer?','Wer kann ihn dort schlagen?'],{leer:true}),
  X('Fehler 2: Luft auf der falschen Seite. Schwarz droht Te1#. Markiere alle Felder, auf die ein weißer Bauer ziehen kann, damit der König wirklich ein Fluchtfeld bekommt.','4r1k1/2b2ppp/8/8/8/8/5PPP/6K1',g=>abwehr(g,'luft'),'f3, f4, g3 und g4. Nach h3 oder h4 wäre h2 frei, aber der Läufer c7 greift h2 an.',['Welches Feld greift der Läufer c7 an?','Ist das neue Fluchtfeld sicher?'],{leer:true}),
  X('Fehler 3: Die Drohung übersehen. Echte Partie: Weiß spielte Dxf3 und wurde mattgesetzt. Markiere alle Felder, auf die Weiß stattdessen ziehen konnte, um das Matt zu verhindern.','rn2k2r/ppp2ppp/3bpn2/1N5q/2B5/3PBb2/PPP2PPP/R2Q1RK1 w kq - 0 10',g=>abwehr(g),'d6, e1, f4, g3, h3 und h4. Sxd6+ schlägt den Läufer mit Schach. Lf4 und g3 sperren seine Diagonale, h3 und h4 sperren die h-Linie der Dame, Te1 macht f1 frei. In der Partie folgte nach Dxf3 Dxh2#.',['Was droht die Dame h5 mit dem Läufer d6?','Schlagen, dazwischenziehen oder Luft machen.'],{leer:true,quelle:LI('F8dll')}),
  X('Fehler 4: Erst die Drohung, dann schlagen. Echte Partie: Schwarz schlug mit hxg4 den Turm und wurde mattgesetzt. Markiere alle Felder, auf die Schwarz stattdessen ziehen konnte.','3q1r1k/4Np2/1p1r2p1/p5Qp/2P3RP/6P1/P7/4R1K1 b - - 0 37',g=>abwehr(g),'e7, g7 und h7. Dxe7 schlägt den Springer, der g8 deckt. Kg7 oder Kh7 bringen den König vom Mattfeld weg und decken h6. In der Partie folgte nach hxg4 Dh6#.',['Wo will die weiße Dame mattsetzen?','König wegziehen oder den Angreifer schlagen.'],{leer:true,quelle:LI('13z8b')}),
  X('Fehler 5: Echte Partie: Weiß spielte Sec3 und wurde mattgesetzt. Markiere alle Felder, auf die Weiß stattdessen ziehen konnte, um das Matt zu verhindern.','rn2k2r/pbppb1pp/1p2p3/4Pp2/2BP1Pq1/8/PPP1N1P1/RNBQ1RK1 w kq - 0 12',g=>abwehr(g),'d5, f2, f3 und g3. Ld5 oder d5 sperren die Diagonale des Läufers b7, der die Dame decken würde. Tf2 deckt g2, Sg3 und g3 sperren die g-Linie, Kf2 bringt den König weg, Tf3 macht f1 frei. In der Partie folgte nach Sec3 Dxg2#.',['Wo will die Dame g4 mattsetzen?','Wer kann g2 decken?'],{leer:true,quelle:LI('G82gS')}),
  X('Fehler 6: Echte Partie: Schwarz spielte f6 und wurde mattgesetzt. Markiere alle Felder, auf die ein schwarzer Springer oder Bauer ziehen konnte, um das Matt zu verhindern.','r2qkb1r/pp2pppp/2p5/4N3/2QPnBP1/4P2P/PP3P2/R3K2R b KQkq - 1 13',g=>[...abwehr(g,'alle','e4'),...abwehr(g,'alle','e7')],'d6, e6 und g5. Sd6 und Sg5 decken f7, e6 sperrt die Diagonale der Dame c4. In der Partie folgte nach f6 Dxf7#.',['Wo will die Dame c4 mattsetzen?','f6 deckt das Feld f7 nicht.'],{leer:true,quelle:LI('2vcoA')})],
 L:[X('Schwarz droht Matt in einem Zug. Klicke alle Felder an, auf denen Schwarz mattsetzen würde.','6k1/5ppp/8/8/7n/5q2/5P1P/6K1',g=>mattFelder(g),'d1 und g2. Dg2 wäre Matt, denn der Springer h4 deckt die Dame. Dd1 wäre Matt über die 1. Reihe.',['Welche Felder neben dem König deckt der Springer h4?','Schau auch auf die 1. Reihe.'],{leer:true}),
  X('Schwarz droht Dg2#. Schlage den Angreifer: Klicke das Feld an, auf das der Läufer zieht.','6k1/5ppp/8/8/7n/5q2/4BP1P/6K1',g=>abwehr(g,'schlagen'),'f3. Lxf3 schlägt die Dame.',['Welche Figur will mattsetzen?','Kann der Läufer sie erreichen?'],{leer:true}),
  X('Schwarz droht Dg2# und Dxd1#. Klicke das Feld an, auf das der Springer zieht, um beide Mattfelder zu decken.','6k1/5ppp/8/8/7n/5q2/5P1P/3N2K1',g=>abwehr(g,'decken','d1'),'e3. Von e3 deckt der Springer g2 und d1.',['Von welchen Feldern deckt ein Springer g2?','Welches erreicht der Springer d1?'],{leer:true}),
  X('Weiß droht Te8#. Markiere alle Felder, auf die ein schwarzer Bauer ziehen kann, damit der König ein sicheres Fluchtfeld bekommt.','6k1/5ppp/8/8/8/8/1B6/4R1K1 b - - 0 1',g=>abwehr(g,'luft'),'f5, f6, h5 und h6. Nach g6 oder g5 wäre g7 frei, aber der Läufer b2 greift g7 an.',['Welches Feld greift der Läufer b2 an?','Ist das neue Fluchtfeld sicher?'],{leer:true}),
  X('Echte Partie: Schwarz droht Tf4#. Markiere alle Felder, auf die der Springer c5 ziehen kann, um das Matt zu verhindern.','8/1R3pk1/r6p/2NpPKp1/3r2P1/8/6P1/8 w - - 0 37',g=>abwehr(g,'alle','c5'),'d3 und e4. Sd3 deckt f4, Se4 sperrt die 4. Reihe zwischen d4 und f4.',['Welche Felder decken f4?','Wo sperrt der Springer die 4. Reihe?'],{leer:true,quelle:LI('tOkbo')}),
  X('Echte Partie: Weiß droht Tcf7#. Markiere alle Felder, auf die der Turm d4 ziehen kann, um das Matt zu verhindern.','4rk2/2R3Rp/6P1/p7/3r1p2/1P3P2/6PK/8 b - - 0 32',g=>abwehr(g,'alle','d4'),'d7. Td7 sperrt die 7. Reihe zwischen c7 und f7. In der Partie folgte nach hxg6 Tcf7#.',['Auf welcher Reihe will Weiß mattsetzen?','Kann der Turm dazwischenziehen?'],{leer:true,quelle:LI('aA6wL')})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 29 geschrieben');
