// Woche 27 „Gegenangriff statt Flucht“ (Beginn Gold) als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w26.mjs, dann diese Datei.
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
URLS.lichessIntermezzo='https://lichess.org/training/intermezzo';
// Gegenangriff: Figuren in Gefahr und sichere Fluchtzüge mit Angriff berechnen
const angegriffen=(g,c)=>{const opp=c==='w'?'b':'w';return sqOf(g,x=>x.color===c&&x.type!=='k').filter(s=>g.attackers(s,opp).length)};
// in Gefahr: angegriffen und ungedeckt oder von einer billigeren Figur angegriffen
const gefahr=(g,c)=>{const opp=c==='w'?'b':'w';return sqOf(g,x=>x.color===c&&x.type!=='k').filter(s=>{const a=g.attackers(s,opp);if(!a.length)return false;const v=VAL[g.get(s).type];return !g.attackers(s,c).length||a.some(q=>VAL[g.get(q).type]<v)})};
// Zielfelder der Figur auf von, auf denen sie sicher steht und je nach ziel angreift: 'q' Dame, 'r' Turm, 'schach' oder nur 'sicher'
function flucht(g,von,ziel='sicher'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>m.from===von)){g.move(m);const feinde=g.attackers(m.to,opp);const h=new Chess(g.fen().replace(/ [wb] /,' '+c+' ').replace(/ [a-h][36] /,' - '));const freunde=h.attackers(m.to,c).filter(x=>x!==m.to);
  let ok=!feinde.length||(freunde.length&&feinde.every(a=>VAL[g.get(a).type]>=VAL[m.piece]));
  if(ziel==='schach')ok=ok&&g.inCheck();else if(ziel!=='sicher')ok=ok&&sqOf(h,x=>x.color===opp&&x.type===ziel).some(t=>h.attackers(t,c).includes(m.to));
  if(ok)out.add(m.to);g.undo()}return [...out]}
// Züge mit Figuren der Typen typen, nach denen die gegnerische Figur auf sq an ihren König gefesselt ist
function fesselt(g,typen,sq){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);if(!g.inCheck()&&pins(g,opp).gefesselt.includes(sq))out.add(m.to);g.undo()}return [...out]}
// Zug mit festem Zielfeld, von Stockfish als klar bester Zug bestätigt
const ZZ=(frage,fen,zug,antwort,hilfe)=>T(frage,fen.split(' ')[0],[zug.slice(2,4)],antwort,hilfe,{...(fen.split(' ')[1]==='b'?{zug:'b'}:{}),leer:true});
F[27]={thema:'Gegenangriff statt Flucht',
 lernziel:'Ich kann eine bedrohte Figur mit einem Gegenangriff retten.',
 leitfrage:'Meine Figur ist angegriffen. Muss sie einfach weglaufen, oder kann ich zurückschlagen, bevor der Gegner zuschlägt?',
 vorwissen:'Angreifen und decken (Woche 6), Figurenwerte (Woche 7), Fesselung, Gabel und Spieß (Woche 22 bis 24).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Gold 1 „Gegenangriff“ (Idee), Lichess-Puzzles QnBjC, nwSIs, HfeBs, aybFM, va3wY, AYLAr, jePqo und CPtae (CC0, Thema „intermezzo“, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Gefahr, sichere Felder und Fesselungen mit chess.js berechnet, die besten Züge mit Stockfish geprüft',
 phasen:[
 {name:'Einstieg',titel:'Angegriffen oder in Gefahr?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: angegriffene Figuren finden, Figuren in Gefahr erkennen, Gabel und Fesselung wiederholen, sichere Felder für einen bedrohten Springer suchen.',
   'Bei W6 fragen: „Der Springer muss weg. Gibt es ein Feld, auf dem er sicher steht und selbst etwas angreift?“ Ziel nennen: „Heute lernt ihr den Gegenangriff. Eure Figur flieht nicht nur, sie greift dabei an.“'],
  kinder:'Ich erkenne, welche meiner Figuren wirklich in Gefahr ist.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Flucht mit Schach, Angriff auf die Dame, Angreifer fesseln',
  ablauf:['Plakat „Gegenangriff statt Flucht“ aufhängen. Am Lehrbrett E1 und E2: Die bedrohte Figur zieht mit Schach weg und greift dabei einen Turm an. Der Gegner muss zuerst den König retten.',
   'E3: Die bedrohte Figur bleibt stehen, eine andere Figur fesselt den Angreifer. E4: Der Springer flieht und greift die Dame an. Frage: „Warum muss der Gegenangriff mindestens so viel wert sein wie meine bedrohte Figur?“',
   'E5 und E6: echte Partien. Der Gegner hat geschlagen, aber zuerst kommt ein Schach mit Gewinn. Merksatz: „Erst Schach und Angriffe suchen, dann fliehen oder zurückschlagen.“'],
  kinder:'Ich erkläre drei Arten von Gegenangriff.',
  links:[{art:'druck',label:'Plakat: Gegenangriff statt Flucht',was:'gegenangriff'},{art:'feld',label:'Lehrbrett: Gegenangriff E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Gegenangriff suchen zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt eine weiße Figur auf, die von einem schwarzen Bauern angegriffen wird, dazu den schwarzen König und einen schwarzen Turm. Kind B sucht ein Fluchtfeld mit Schach oder Angriff. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6, darunter zwei echte Aufgaben aus Lichess-Partien. Vergleich am Lehrbrett.'],
  kinder:'Ich finde Fluchtzüge, die gleichzeitig angreifen.',
  links:[{art:'druck',label:'Arbeitsblatt: Gegenangriff',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Ein Gegenangriff auf eine schwächere Figur rettet die Dame nicht. Die angreifende Figur muss sicher stehen. Nicht jedes Schach hilft. Nicht jede angegriffene Figur ist in Gefahr.',
   'Bei jeder Aufgabe fragen: „Woran erkennst du, dass dein Gegenangriff stärker ist als die Drohung des Gegners?“'],
  kinder:'Ich prüfe vor dem Gegenangriff Werte und Sicherheit.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welche Figur ist bedroht, und was greifst du mit deinem Zug an?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde einen Gegenangriff ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Wer greift zurück?“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jedes Kind hat König, Turm, Läufer, Springer und drei Bauern. Wer eine gegnerische Figur angreift, sagt „Angriff“. Der andere bekommt einen Punkt, wenn er mit einem Gegenangriff antwortet statt nur zu fliehen. Danach wechseln die Rollen.',
   'Rückblick: „Wann ist Flucht besser, wann ein Gegenangriff?“ Aufräum-Ritual. Ausblick: Nächstes Mal setzt ihr mit zwei Türmen matt.'],
  kinder:'Ich nutze einen Gegenangriff in einer Partie.',
  links:[{art:'druck',label:'Plakat: Gegenangriff statt Flucht',was:'gegenangriff'},{art:'blatt',label:'Mehr Zwischenzug-Aufgaben auf Lichess (online)',url:URLS.lichessIntermezzo},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold 1)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Zuerst nur die bedrohte Figur zeigen lassen. Dann gemeinsam alle Felder suchen, auf denen sie sicher steht. Erst danach fragen, was sie von dort angreift.',
  zusatz:'Eine Stellung bauen, in der ein Gegenangriff mit Schach zwei Figuren rettet. Oder Lichess-Aufgaben zum Thema Zwischenzug lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer erkennt, ob eine Figur wirklich in Gefahr ist? Wer greift mit einer zu schwachen Figur zurück? Das wiederholst du in Woche 29 beim Verteidigen.',
 feld:{
 W:[X('Klicke alle weißen Figuren an, die angegriffen werden.','6k1/5ppp/8/4p3/1b3B2/2N5/5PPP/R5K1',g=>angegriffen(g,'w'),'Der Springer c3 (vom Läufer b4) und der Läufer f4 (vom Bauern e5). Der Turm a1 wird nicht angegriffen.',['Prüfe jede schwarze Figur: Was greift sie an?','Bauern greifen schräg nach vorn an.']),
  X('Welche weißen Figuren sind wirklich in Gefahr? Klicke sie an.','3r2k1/5pp1/q6p/6B1/2BN4/2P5/5PPP/4R1K1',g=>gefahr(g,'w'),'Der Läufer c4 (ungedeckt, von der Dame angegriffen) und der Läufer g5 (vom Bauern h6 angegriffen). Der Springer d4 ist vom Bauern c3 gedeckt, der Turm d8 ist mehr wert.',['Angegriffen und ungedeckt heißt: Gefahr.','Greift eine billigere Figur an, ist es auch Gefahr.']),
  X('Wiederholung Gabel: Klicke das Feld an, auf das der Springer zieht und König und Dame angreift.','3q3k/6pp/8/4N3/8/8/5PPP/6K1',g=>gabelZuege(g,'n'),'f7. Sf7+ greift den König h8 und die Dame d8 an.',['Welche Springerfelder greifen h8 an?','Welches davon greift auch d8 an?'],{leer:true}),
  X('Wiederholung Fesselung: Klicke das Feld an, auf das der Läufer zieht, um den Springer zu fesseln.','4k3/8/2n5/8/8/8/5PPP/5BK1',g=>fesselZuege(g,'b'),'b5. Der Läufer fesselt den Springer c6 an den König e8.',['Auf welcher Diagonale stehen Springer und König?','Der Läufer muss vor den Springer.'],{leer:true}),
  X('Der Springer d4 wird vom Bauern e5 angegriffen. Markiere alle Felder, auf denen er sicher steht.','6k1/5pb1/8/4p3/3N4/8/5PPP/6K1',g=>flucht(g,'d4'),'b3, b5, c2, c6, e2, f3 und f5. Auf e6 schlägt ihn der Bauer f7.',['Zeige alle Springerfelder.','Welche davon greift eine schwarze Figur an?'],{leer:true}),
  X('Der Springer d4 muss weg. Markiere alle Felder, auf denen er sicher steht und den Turm d8 angreift.','3r2k1/5ppp/8/4p3/3N4/8/5PPP/6K1',g=>flucht(g,'d4','r'),'c6. Von dort greift der Springer den Turm d8 und den Bauern e5 an. Auf e6 schlägt ihn der Bauer f7.',['Von welchen Feldern greift ein Springer d8 an?','Steht er dort sicher?'],{leer:true})],
 E:[ZZ('Der Springer f5 wird vom Bauern g6 angegriffen. Rette ihn mit einem Gegenangriff: Klicke das Feld an, auf das er zieht.','2r3k1/5p1p/6p1/5N2/8/8/5PPP/6K1 w - - 0 1','f5e7','e7. Se7+ gibt Schach und greift den Turm c8 an. Nach dem Königszug schlägt der Springer den Turm.',['Welches Springerfeld greift den König g8 an?','Greift es auch den Turm an?']),
  ZZ('Der Läufer f3 wird vom Bauern g4 angegriffen. Rette ihn mit einem Gegenangriff: Klicke das Feld an, auf das er zieht.','6k1/6pp/8/8/6p1/5B2/r4PPP/6K1 w - - 0 1','f3d5','d5. Ld5+ gibt Schach über e6 und f7 und greift den Turm a2 an. Nach dem Königszug schlägt der Läufer den Turm.',['Von welchem Feld gibt der Läufer Schach?','Was greift er dort noch an?']),
  X('Der Turm d5 greift den Springer d2 an. Rette den Springer, ohne ihn zu ziehen: Klicke das Feld an, auf das der Läufer zieht.','6k1/8/8/3r4/8/8/3NB3/6K1',g=>fesselt(g,'b','d5'),'c4. Der Läufer fesselt den Turm d5 an den König g8. Der Turm darf den Springer nicht schlagen, und danach droht Lxd5.',['Auf welcher Diagonale stehen Turm und König?','Der Läufer muss vor den Turm.'],{leer:true}),
  X('Der Springer c3 wird vom Bauern b4 angegriffen. Markiere alle Felder, auf denen er sicher steht und die Dame angreift.','6k1/4qppp/8/8/1p6/2N5/3Q1PPP/6K1',g=>flucht(g,'c3','q'),'d5. Von dort greift der Springer die Dame e7 und den Bauern b4 an. Schwarz muss zuerst die Dame retten.',['Von welchen Feldern greift ein Springer e7 an?','Welches davon erreicht der Springer c3?'],{leer:true}),
  LZ('Echte Partie: Schwarz hat Dxd4 gespielt. Weiß schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Läufer zieht.','r3kb1r/pp2pppp/2n5/8/3q4/5B1P/P1P2PP1/R1BQK2R w KQkq - 0 11','f3c6','c6. Lxc6+ schlägt den Springer, der die Dame d4 gedeckt hat, mit Schach. So ging die Partie weiter: bxc6 Dxd4.',['Wer deckt die schwarze Dame d4?','Kann der Läufer diese Figur mit Schach schlagen?'],'QnBjC'),
  LZ('Echte Partie: Weiß hat Txe4 gespielt. Schwarz schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Turm zieht.','6k1/2p3Pp/2br1p2/1p3P2/4R3/pP3NP1/P1P5/3R2K1 b - - 0 31','d6d1','d1. Txd1+ schlägt mit Schach den Turm d1. Danach schlägt der Läufer c6 den Turm e4. So ging die Partie weiter: Kf2 Lxe4.',['Welche weiße Figur kann der Turm d6 mit Schach schlagen?','Erst Schach, dann zurückschlagen.'],'nwSIs')],
 A:[X('Welche weißen Figuren sind wirklich in Gefahr? Klicke sie an.','3r2k1/8/8/4p3/1b3B2/2N5/1P1R2PP/6K1',g=>gefahr(g,'w'),'Nur der Läufer f4, ihn greift der Bauer e5 an. Den Springer c3 deckt der Bauer b2, den Turm d2 deckt der Läufer f4.',['Angegriffen und ungedeckt oder von einer billigeren Figur angegriffen?','Prüfe für jede Figur: Wer greift an, wer deckt?']),
  ZZ('Der Springer b5 wird vom Bauern a6 angegriffen. Rette ihn mit einem Gegenangriff: Klicke das Feld an, auf das er zieht.','r3k3/8/p7/1N6/8/8/5PPP/6K1 w - - 0 1','b5c7','c7. Sc7+ gibt Schach und greift den Turm a8 an. Sd6+ gibt zwar auch Schach, gewinnt aber nichts.',['Welche Springerfelder greifen den König e8 an?','Welches davon greift auch den Turm an?']),
  X('Der Springer e4 wird vom Bauern f5 angegriffen. Markiere alle Felder, auf denen er sicher steht und die Dame angreift.','6k1/1q4p1/1p5p/5p2/4N3/8/3Q1PPP/6K1',g=>flucht(g,'e4','q'),'d6. Von dort greift der Springer die Dame b7 an. Auf c5 schlägt ihn der Bauer b6.',['Von welchen Feldern greift ein Springer b7 an?','Steht er dort sicher?'],{leer:true}),
  X('Der Springer e5 greift den Läufer d3 an. Rette den Läufer, ohne ihn zu ziehen: Klicke das Feld an, auf das der Turm zieht.','1r2k3/8/5p2/4n3/8/3B4/5PPP/R5K1',g=>fesselt(g,'r','e5'),'e1. Der Turm fesselt den Springer e5 an den König e8. Der Springer darf den Läufer nicht schlagen.',['Auf welcher Linie stehen Springer und König?','Der Turm muss auf diese Linie.'],{leer:true}),
  LZ('Echte Partie: Weiß hat Lxb8 gespielt. Schwarz schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Springer zieht.','1B2r1k1/p2b1pp1/2pp3p/8/8/1Pn4P/P1P1BPP1/R4RK1 b - - 0 17','c3e2','e2. Sxe2+ schlägt den Läufer mit Schach. Danach schlägt der Turm e8 den Läufer b8. So ging die Partie weiter: Kh2 Txb8.',['Welche weiße Figur kann der Springer mit Schach schlagen?','Erst Schach, dann zurückschlagen.'],'HfeBs'),
  LZ('Echte Partie: Weiß hat Sxd5 gespielt. Schwarz schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Springer zieht.','6k1/5bpp/1p3p2/3N4/3P4/4PB2/1P1n2PP/6K1 b - - 0 31','d2f3','f3. Sxf3+ schlägt den Läufer mit Schach. Danach schlägt der Läufer f7 den Springer d5. So ging die Partie weiter: gxf3 Lxd5.',['Welche weiße Figur kann der Springer mit Schach schlagen?','Erst Schach, dann zurückschlagen.'],'aybFM')],
 S:[T('Fehler 1: Die weiße Dame wird vom Bauern c5 angegriffen. Weiß hat mit Sb5 nur den Springer a7 angegriffen. Schwarz ist am Zug. Klicke die weiße Figur an, die Schwarz jetzt schlägt.','6k1/n4ppp/8/1Np5/3Q4/8/5PPP/6K1',['d4'],'Die Dame d4. Der Gegenangriff auf einen Springer ist zu schwach: Die Dame ist viel mehr wert. Erst die Dame retten.',['Was ist die Dame wert, was der Springer?','Wen greift der Bauer c5 an?'],{zug:'b'}),
  X('Fehler 2: Die Figur muss sicher stehen. Markiere alle Felder, auf denen der Läufer e3 sicher steht und die Dame angreift.'+KEINS,'6k1/p1q2ppp/8/8/3p4/4B3/5PPP/R5K1',g=>flucht(g,'e3','q'),'Keins. Auf f4 schlägt die Dame den Läufer, auf b6 der Bauer a7. Hier ist Lxd4 besser: Der Läufer schlägt den Angreifer.',['Wer greift f4 und b6 an?','Ein Angriff auf die Dame hilft nichts, wenn der Läufer verloren geht.'],{leer:true}),
  X('Fehler 3: Nicht jedes Schach hilft. Schwarz ist am Zug. Markiere alle Felder, auf denen der Springer Schach gibt und sicher steht.','4k2r/8/8/8/1n6/P7/2P2PPP/R3K3 b - - 0 1',g=>flucht(g,'b4','schach'),'c2. Sxc2+ gibt Schach und greift den Turm a1 an. Auf d3 gibt der Springer auch Schach, aber dort schlägt ihn der Bauer c2.',['Von welchen Feldern greift der Springer e1 an?','Wer kann ihn dort schlagen?'],{leer:true}),
  X('Fehler 4: Nicht jede angegriffene Figur ist in Gefahr. Klicke alle weißen Figuren an, die wirklich in Gefahr sind.'+KEINE,'3r2k1/5ppp/8/8/3N4/2P5/5PPP/6K1',g=>gefahr(g,'w'),'Keine. Der Turm greift den Springer d4 an, aber der Bauer c3 deckt ihn. Schlägt der Turm, verliert Schwarz 5 gegen 3.',['Wer deckt den Springer d4?','Was ist der Turm wert, was der Springer?']),
  LZ('Echte Partie: Weiß hat Lxe6 gespielt. Schwarz schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Läufer zieht.','r2k3r/pppn1ppp/4Bb2/4p1B1/4P3/8/PPP2PPP/2KR2NR b - - 0 11','f6g5','g5. Lxg5+ schlägt den Läufer g5 mit Schach. Danach schlägt der Bauer f7 den Läufer e6. So ging die Partie weiter: Kb1 fxe6.',['Welche weiße Figur kann der Läufer f6 mit Schach schlagen?','Erst Schach, dann zurückschlagen.'],'va3wY'),
  LZ('Echte Partie: Schwarz hat Txe2 gespielt. Weiß schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Springer zieht.','6k1/3N1pp1/p4q2/8/5b2/P7/4rPP1/4R1K1 w - - 0 35','d7f6','f6. Sxf6+ schlägt die Dame mit Schach. Danach schlägt der Turm e1 den Turm e2. So ging die Partie weiter: gxf6 Txe2.',['Welche schwarze Figur kann der Springer schlagen?','Erst Schach, dann zurückschlagen.'],'AYLAr')],
 L:[X('Welche schwarzen Figuren sind wirklich in Gefahr? Klicke sie an.','3r2k1/5ppp/5n2/4P3/8/8/5PPP/3R2K1 b - - 0 1',g=>gefahr(g,'b'),'Der Springer f6 (vom Bauern e5 angegriffen) und der Turm d8 (vom Turm d1 angegriffen und ungedeckt).',['Angegriffen und ungedeckt oder von einer billigeren Figur angegriffen?','Prüfe den Bauern e5 und den Turm d1.']),
  ZZ('Der Läufer f6 wird vom Bauern g5 angegriffen. Rette ihn mit einem Gegenangriff: Klicke das Feld an, auf das er zieht.','6k1/R4ppp/5b2/6P1/8/8/6PP/6K1 b - - 0 1','f6d4','d4. Ld4+ gibt Schach über e3 und f2 und greift den Turm a7 an. Nach dem Königszug schlägt der Läufer den Turm.',['Von welchem Feld gibt der Läufer Schach?','Was greift er dort noch an?']),
  X('Der Springer e4 greift den Läufer d6 an. Rette den Läufer, ohne ihn zu ziehen: Klicke das Feld an, auf das der Turm zieht.','r5k1/5ppp/3b4/8/4N3/5P2/6PP/1R2K3 b - - 0 1',g=>fesselt(g,'r','e4'),'e8. Der Turm fesselt den Springer e4 an den König e1. Der Springer darf den Läufer nicht schlagen.',['Auf welcher Linie stehen Springer und König?','Der Turm muss auf diese Linie.'],{leer:true}),
  X('Der Springer c4 wird vom Bauern b3 angegriffen. Markiere alle Felder, auf denen er sicher steht und die Dame angreift.','6k1/2q2ppp/8/8/2n5/1P6/6PP/3Q2K1 b - - 0 1',g=>flucht(g,'c4','q'),'b2 und e3. Von beiden Feldern greift der Springer die Dame d1 an, und keine weiße Figur kann ihn dort schlagen.',['Von welchen Feldern greift ein Springer d1 an?','Steht er dort sicher?'],{leer:true}),
  LZ('Echte Partie: Weiß hat Lxe4 gespielt. Schwarz schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Turm zieht.','8/5kpp/R1br4/1p6/4B2P/4P1P1/5P2/6K1 b - - 0 31','d6d1','d1. Td1+ gibt Schach, danach schlägt der Läufer c6 den Läufer e4. So ging die Partie weiter: Kh2 Lxe4.',['Der Läufer c6 ist zweimal angegriffen.','Mit Schach gewinnt Schwarz die Zeit zum Zurückschlagen.'],'jePqo'),
  LZ('Echte Partie: Weiß hat Txb2 gespielt. Schwarz schlägt nicht sofort zurück, sondern gibt zuerst Schach. Klicke das Feld an, auf das der Turm zieht.','5rk1/6pp/2N2p2/1p1P4/4P3/r2nRP1P/1R4P1/6K1 b - - 0 36','a3a1','a1. Ta1+ gibt Schach, danach schlägt der Springer d3 den Turm b2. So ging die Partie weiter: Kh2 Sxb2.',['Welche schwarze Figur kann Schach geben?','Mit Schach gewinnt Schwarz die Zeit zum Zurückschlagen.'],'CPtae')]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 27 geschrieben');
