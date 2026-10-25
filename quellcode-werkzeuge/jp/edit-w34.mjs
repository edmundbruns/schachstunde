// Woche 34 „Einfache Bauernendspiele“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w33.mjs, dann diese Datei.
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
URLS.lichessPawnEndgame='https://lichess.org/training/pawnEndgame';
// Quadratregel: Ecken des Quadrats und Königszüge ins Quadrat (Bauer auf sq, Quadrat zur Seite des gegnerischen Königs)
function quadrat(g,sq){const p=g.get(sq),[x,y0]=F2(sq);let y=y0;if(p.color==='w'&&y===1)y=2;if(p.color==='b'&&y===6)y=5;const n=p.color==='w'?7-y:y;const k=ksq(g,p.color==='w'?'b':'w');const dx=F2(k)[0]>=x?1:-1;
 const xs=[...Array(n+1).keys()].map(i=>x+dx*i).filter(v=>v>=0&&v<8),ys=p.color==='w'?[...Array(n+1).keys()].map(i=>y+i):[...Array(n+1).keys()].map(i=>y-i);
 return {felder:xs.flatMap(a=>ys.map(b=>SQ(a,b))),ecken:[SQ(x,ys[0]),SQ(x,ys[ys.length-1]),SQ(x+dx*n<0?0:x+dx*n>7?7:x+dx*n,ys[0]),SQ(x+dx*n<0?0:x+dx*n>7?7:x+dx*n,ys[ys.length-1])]}}
const insQuadrat=(g,sq)=>{const q=new Set(quadrat(g,sq).felder);return [...new Set(g.moves({verbose:true}).filter(m=>m.piece==='k'&&q.has(m.to)).map(m=>m.to))]};
const SF=' Gewinn- und Remiszüge mit Stockfish geprüft.';
F[34]={thema:'Einfache Bauernendspiele',
 lernziel:'Ich kann mit der Opposition einen Bauern zur Umwandlung führen.',
 leitfrage:'Wann läuft ein Bauer allein durch, und wann braucht er die Hilfe seines Königs?',
 vorwissen:'Freibauern und Umwandlung (Woche 13), Patt (Woche 16), Matt mit einem Turm (Woche 33).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Quadratregel, Opposition und Schlüsselfelder in kindgerechter Form, Lichess-Puzzles rUGv4, FlNMo, aFQ6y, wKBg6, cA3yH, Mqw2G, QCASA, sNlgj, S3w68 und 8icmv (CC0, Thema „pawnEndgame“, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Quadrat und Opposition mit chess.js berechnet, Gewinn- und Remiszüge mit Stockfish geprüft',
 phasen:[
 {name:'Einstieg',titel:'Bauer gegen König',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Freibauer erkennen, das Quadrat des Bauern zeichnen, Opposition stellen, die Schlüsselfelder zeigen, ein Wettlauf aus einer echten Partie.',
   'Bei W2 fragen: „Wie erkennst du, ohne zu zählen, ob der König den Bauern noch einholt?“ Ziel nennen: „Heute lernt ihr, wann ein Bauer durchläuft und wie der König ihm hilft.“'],
  kinder:'Ich erkenne mit dem Quadrat, ob ein König den Bauern einholt.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Quadrat, König vor den Bauern, Opposition, Schlüsselfelder',
  ablauf:['Plakat „Einfache Bauernendspiele“ aufhängen. Am Lehrbrett E1: Die Quadratregel. Nur der Königszug ins Quadrat hält den Bauern auf.',
   'E2: Der König geht vor seinen Bauern, nicht dahinter. E3: Der Verteidiger hält mit der Opposition remis. Frage: „Warum muss der König genau gegenüber stehen und nicht daneben?“',
   'E4: Erreicht der König ein Schlüsselfeld, gewinnt er. E5: Der Bauer läuft zur Umwandlung, wenn der König ihn begleitet. E6: eine echte Partie. Merksatz: „Erst der König, dann der Bauer. Wer die Opposition hat, entscheidet.“'],
  kinder:'Ich erkläre Quadrat, Opposition und Schlüsselfelder.',
  links:[{art:'druck',label:'Plakat: Einfache Bauernendspiele',was:'bauernendspiel'},{art:'feld',label:'Lehrbrett: Bauernendspiel E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'König und Bauer gegen König zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A hat König und einen Bauern auf e2, Kind B nur den König auf e8. Kind A versucht umzuwandeln, Kind B sucht die Opposition. Danach wechseln die Rollen. Wer gewinnt, und warum?',
   'Allein: Arbeitsblatt A1 bis A6, darunter drei echte Aufgaben aus Lichess-Partien. Vergleich am Lehrbrett.'],
  kinder:'Ich führe einen Bauern mit dem König zur Umwandlung oder halte als Verteidiger remis.',
  links:[{art:'druck',label:'Arbeitsblatt: Einfache Bauernendspiele',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Der Randbauer gewinnt nicht, die falsche Seite hat die Opposition, der Bauer läuft dem König davon. Dazu drei echte Partien.',
   'Bei jeder Aufgabe fragen: „Wer hat hier die Opposition, und wer ist am Zug?“'],
  kinder:'Ich erkenne, wann ein Bauernendspiel remis ist.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Läuft der Bauer allein durch, oder braucht er den König?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich löse einfache Bauernendspiele ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Wettlauf“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jedes Kind hat König und zwei Bauern. Wer zuerst eine Dame bekommt, gewinnt. Vor jedem Bauernzug sagt das Kind laut, ob der gegnerische König im Quadrat steht. Danach wechseln die Rollen und die Farben.',
   'Rückblick: „Was ist die Opposition, und wann brauchst du sie?“ Aufräum-Ritual. Ausblick: Nächstes Mal ist das Gold-Diplom mit Abschlusstest.'],
  kinder:'Ich nutze Quadrat und Opposition in einer Partie.',
  links:[{art:'druck',label:'Plakat: Einfache Bauernendspiele',was:'bauernendspiel'},{art:'blatt',label:'Mehr Bauernendspiele auf Lichess (online)',url:URLS.lichessPawnEndgame},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Das Quadrat mit vier Bauernsteinen in den Ecken auf das Brett legen. Bei der Opposition ein Lineal zwischen die Könige legen: Genau ein Feld muss frei sein.',
  zusatz:'Die Stellung König e3, Bauer e2 gegen König e7 mit beiden Seiten am Zug durchspielen. Oder Lichess-Aufgaben zu Bauernendspielen lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer zählt noch, statt das Quadrat zu nutzen? Wer zieht den Bauern zu früh? Das wiederholst du in Woche 35 vor dem Gold-Diplom.',
 feld:{
 W:[T('Wiederholung Woche 13: Klicke den weißen Freibauern an.',{g1:'K',g8:'k',b3:'P',e4:'P',h3:'P',c5:'p',h7:'p'},null,'Der Bauer e4. b3 hält der Bauer c5 auf, h3 der Bauer h7.',['Prüfe drei Linien: die eigene und die beiden daneben.','Nur Bauern vor ihm zählen.'],{pruef:{freibauer:'w'}}),
  X('Die Quadratregel: Klicke die vier Ecken des Quadrats für den Bauern a4 an.','8/8/8/8/P7/5k2/8/K7',g=>quadrat(g,'a4').ecken,'a4, e4, e8 und a8. Vom Bauern bis zum Umwandlungsfeld sind es vier Felder, also ist das Quadrat vier Felder breit.',['Zähle die Felder bis zur 8. Reihe.','So breit ist auch das Quadrat.'],{leer:true}),
  X('Opposition: Klicke das Feld an, auf das der weiße König zieht, damit die Könige direkt gegenüberstehen.','8/4k3/8/8/4K3/8/8/8',g=>g.moves({verbose:true}).filter(m=>m.piece==='k'&&m.to[0]==='e'&&m.to[1]==='5').map(m=>m.to),'e5. Zwischen den Königen ist genau ein Feld frei. Wer jetzt ziehen muss, muss ausweichen.',['Auf welcher Linie steht der schwarze König?','Genau ein Feld Abstand.'],{leer:true}),
  T('Schlüsselfelder: Erreicht der weiße König eines dieser Felder, gewinnt er immer. Klicke die drei Schlüsselfelder des Bauern e4 an.','7k/8/8/8/4P3/8/4K3/8',['d6','e6','f6'],'d6, e6 und f6. Die Schlüsselfelder liegen zwei Reihen vor dem Bauern, auf seiner Linie und den beiden Nachbarlinien.',['Zwei Reihen vor dem Bauern.','Drei Felder nebeneinander.'],{leer:true}),
  X('Schwarz am Zug. Markiere alle Felder, auf die der König ziehen kann und danach im Quadrat des Bauern b4 steht.'+KEINS,'8/8/8/8/1P6/8/7k/K7 b - - 0 1',g=>insQuadrat(g,'b4'),'Keins. Das Quadrat reicht von b4 bis f8. Der König h2 erreicht die f-Linie nicht rechtzeitig, der Bauer läuft durch.',['Zeichne das Quadrat b4, f4, f8, b8.','Kann der König mit einem Zug hineinziehen?'],{leer:true}),
  LZ('Echte Partie: Weiß gewinnt den Wettlauf. Klicke das Feld an, auf das der Bauer zieht.','8/6p1/8/1K4p1/P7/5k2/8/8 w - - 1 56','a4a5','a5. Der schwarze König steht nicht im Quadrat des Bauern. So ging die Partie weiter: g4 a6 g3 a7 g2 a8D+.',['Steht der schwarze König im Quadrat?','Wer wandelt zuerst um?'],'rUGv4')],
 E:[X('1. Quadratregel: Schwarz am Zug. Klicke das Feld an, auf das der König zieht, um den Bauern a4 aufzuhalten.','8/8/8/8/P7/5k2/8/K7 b - - 0 1',g=>insQuadrat(g,'a4'),'e4. Nur von e4 steht der König im Quadrat a4 bis e8 und holt den Bauern ein. Jeder andere Zug verliert.'+SF,['Zeichne das Quadrat des Bauern.','Welches Königsfeld liegt darin?'],{leer:true}),
  T('2. Erst der König: Weiß am Zug gewinnt. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.','8/8/3k4/8/8/3K4/3P4/8',['c4','d4','e4'],'c4, d4 und e4. Der König geht vor seinen Bauern und erobert Platz. Bleibt er hinten, wird es remis.'+SF,['Der König gehört vor den Bauern.','Welche Felder liegen vor dem Bauern?'],{leer:true}),
  T('3. Opposition halten: Schwarz am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann, damit Schwarz remis hält.','8/3k4/8/3PK3/8/8/8/8',['e7'],'e7. Jetzt stehen sich die Könige gegenüber, Weiß muss ausweichen. Jeder andere Zug verliert.'+SF,['Wo steht der weiße König?','Stell dich ihm genau gegenüber.'],{zug:'b',leer:true}),
  T('4. Schlüsselfelder: Weiß am Zug. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.','4k3/8/8/4K3/4P3/8/8/8',['d6','e6','f6'],'d6, e6 und f6. Das sind die Schlüsselfelder des Bauern e4. Von dort gewinnt Weiß immer.'+SF,['Welche Felder liegen zwei Reihen vor dem Bauern?','Erreicht der König eines davon?'],{leer:true}),
  T('5. Zur Umwandlung: Weiß am Zug gewinnt. Klicke das Feld an, auf das Weiß zieht.','3k4/8/3PK3/8/8/8/8/8',['d7'],'d7. Der König e6 deckt den Bauern. Schwarz muss Kc7 spielen, dann folgt Ke7 und d8D.'+SF,['Deckt der weiße König den Bauern auf d7?','Wohin kann der schwarze König?'],{leer:true}),
  LZ('Echte Partie: Schwarz am Zug. Der König holt den weißen Bauern. Klicke das Feld an, auf das der König zieht.','4K3/8/4k3/7p/7P/8/8/8 b - - 0 77','e6f5','f5. Der König läuft zum Bauern h4. So ging die Partie weiter: Ke7 Kg4 Kd6 Kxh4, danach läuft der Bauer h5.',['Welcher weiße Bauer ist ungeschützt?','Der König greift ihn an.'],'FlNMo')],
 A:[X('Klicke die vier Ecken des Quadrats für den schwarzen Bauern a6 an.','8/8/p7/6K1/8/1k5P/8/8',g=>quadrat(g,'a6').ecken,'a6, a1, f6 und f1. Der Bauer braucht fünf Züge bis a1, also ist das Quadrat fünf Felder breit.',['Zähle die Felder bis zur 1. Reihe.','So breit ist auch das Quadrat.'],{leer:true}),
  LZ('Echte Partie: Schwarz am Zug gewinnt den Wettlauf. Klicke das Feld an, auf das der Bauer zieht.','8/8/p7/6K1/8/1k5P/8/8 b - - 1 50','a6a5','a5. Der weiße König steht nicht im Quadrat. So ging die Partie weiter: h4 a4 h5 a3.',['Steht der weiße König im Quadrat?','Wer ist schneller?'],'aFQ6y'),
  T('Erst der König: Weiß am Zug gewinnt. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.','8/8/4k3/8/8/4K3/4P3/8',['d4','e4','f4'],'d4, e4 und f4. Der König geht vor seinen Bauern. Nach Kd3 oder Kf3 hat Schwarz die Opposition.'+SF,['Der König gehört vor den Bauern.','Welche Felder liegen auf der 4. Reihe?'],{leer:true}),
  T('Opposition halten: Schwarz am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann, damit Schwarz remis hält.','8/5k2/8/4KP2/8/8/8/8',['e7'],'e7. Die Könige stehen sich gegenüber, Weiß kommt nicht weiter. Jeder andere Zug verliert.'+SF,['Wo steht der weiße König?','Stell dich ihm gegenüber.'],{zug:'b',leer:true}),
  LZ('Echte Partie: Schwarz am Zug. Der weiße König ist zu weit weg. Klicke das Feld an, auf das der Bauer zieht.','8/8/K4k2/6p1/8/1P6/8/8 b - - 1 50','g5g4','g4. Der weiße König ist weit weg. So ging die Partie weiter: b4 g3 b5 g2 b6 g1D.',['Wer wandelt zuerst um?','Zähle die Züge beider Bauern.'],'wKBg6'),
  LZ('Echte Partie: Weiß gewinnt den Bauern h6. Klicke das Feld an, auf das der König zieht.','8/8/3k1K1p/3P2p1/6P1/8/8/8 w - - 1 59','f6g6','g6. Der König greift den ungedeckten Bauern h6 an. So ging die Partie weiter: Kxd5 Kxh6, danach fällt auch g5.',['Welcher schwarze Bauer ist ungeschützt?','Der König greift ihn an.'],'cA3yH')],
 S:[T('Fehler 1: Der Randbauer. Weiß am Zug. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.'+KEINS,'k7/8/1K6/P7/8/8/8/8',[],'Keins. Mit einem Randbauern kommt der schwarze König in die Ecke, Weiß kann nur remis spielen oder patt setzen.'+SF,['Wohin kann der schwarze König fliehen?','Gibt es eine Ecke, aus der er nicht herauskommt?'],{leer:true}),
  T('Fehler 2: Wer am Zug ist, entscheidet. Weiß am Zug. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.'+KEINS,'8/8/4k3/8/4K3/4P3/8/8',[],'Keins. Schwarz hat die Opposition, Weiß muss ausweichen. Wäre Schwarz am Zug, würde Weiß gewinnen.'+SF,['Wer hat die Opposition?','Was passiert, wenn Weiß ausweichen muss?'],{leer:true}),
  T('Fehler 3: Der Bauer läuft vor dem König. Weiß am Zug. Markiere alle Felder, auf die Weiß ziehen kann, damit Weiß gewinnt.'+KEINS,'8/8/4k3/8/4P3/4K3/8/8',[],'Keins. Der Bauer steht vor dem eigenen König, Schwarz blockiert ihn. Erst der König, dann der Bauer.'+SF,['Steht der König vor oder hinter dem Bauern?','Kann der schwarze König den Bauern blockieren?'],{leer:true}),
  LZ('Echte Partie: Schwarz am Zug gewinnt einen Bauern. Klicke das Feld an, auf das der König zieht.','8/8/8/p1k2K1p/P6P/8/8/8 b - - 2 47','c5b4','b4. Der König greift a4 an und schlägt ihn im nächsten Zug. So ging die Partie weiter: Kg5 Kxa4.',['Welcher weiße Bauer ist ungeschützt?','Der König greift ihn an.'],'Mqw2G'),
  LZ('Echte Partie: Schwarz am Zug. Der weiße König steht nicht im Quadrat. Klicke das Feld an, auf das der Bauer zieht.','8/8/8/1K4p1/1P6/2P4k/P7/8 b - - 0 53','g5g4','g4. Der Bauer läuft durch, der weiße König kommt nicht rechtzeitig. So ging die Partie weiter: c4 g3 c5 g2 c6 g1D.',['Steht der weiße König im Quadrat?','Zähle die Züge bis g1.'],'QCASA'),
  LZ('Echte Partie: Schwarz am Zug. Klicke das Feld an, auf das der König zieht.','8/8/2K5/8/p7/Pk6/1P6/8 b - - 6 43','b3b2','b2. Der König schlägt den Bauern b2 und holt danach auch a3. Wer ungeschützte Bauern stehen lässt, verliert sie.',['Welcher weiße Bauer ist ungeschützt?','Der König darf schlagen.'],'sNlgj')],
 L:[X('Schwarz am Zug. Klicke das Feld an, auf das der König zieht, um den Bauern h4 aufzuhalten.','8/8/8/8/7P/2k5/8/K7 b - - 0 1',g=>insQuadrat(g,'h4'),'d4. Nur von d4 steht der König im Quadrat h4 bis d8.'+SF,['Zeichne das Quadrat des Bauern.','Welches Königsfeld liegt darin?'],{leer:true}),
  T('Klicke die drei Schlüsselfelder des Bauern d4 an.','7k/8/8/8/3P4/8/3K4/8',['c6','d6','e6'],'c6, d6 und e6. Zwei Reihen vor dem Bauern, auf seiner Linie und den beiden Nachbarlinien.',['Zwei Reihen vor dem Bauern.','Drei Felder nebeneinander.'],{leer:true}),
  T('Weiß am Zug gewinnt. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.','8/8/2k5/8/8/2K5/2P5/8',['b4','c4','d4'],'b4, c4 und d4. Der König geht vor seinen Bauern.'+SF,['Der König gehört vor den Bauern.','Welche Felder liegen auf der 4. Reihe?'],{leer:true}),
  T('Schwarz am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann, damit Schwarz remis hält.','8/2k5/8/1KP5/8/8/8/8',['b7'],'b7. Die Könige stehen sich gegenüber. Jeder andere Zug verliert.'+SF,['Wo steht der weiße König?','Stell dich ihm gegenüber.'],{zug:'b',leer:true}),
  LZ('Echte Partie: Weiß am Zug gewinnt den Wettlauf. Klicke das Feld an, auf das der Bauer zieht.','8/6k1/8/2P2pp1/8/5PK1/8/8 w - - 0 44','c5c6','c6. Der schwarze König steht nicht im Quadrat. So ging die Partie weiter: Kf7 c7, und der Bauer wandelt um.',['Steht der schwarze König im Quadrat?','Zähle die Züge bis c8.'],'S3w68'),
  LZ('Echte Partie: Schwarz am Zug gewinnt einen Bauern. Klicke das Feld an, auf das der König zieht.','8/8/kp2K2p/6p1/P5P1/8/7P/8 b - - 10 41','a6a5','a5. Der König greift den Bauern a4 an. So ging die Partie weiter: Kd5 Kxa4.',['Welcher weiße Bauer ist ungeschützt?','Der König greift ihn an.'],'8icmv')]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 34 geschrieben');
