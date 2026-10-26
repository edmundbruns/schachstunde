// Woche 24 „Der Spieß“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w23.mjs, dann diese Datei.
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
URLS.lichessSkewer='https://lichess.org/training/skewer';
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
F[24]={thema:'Der Spieß',
 lernziel:'Ich kann einen Spieß finden.',
 leitfrage:'Was passiert, wenn die wertvolle Figur vorne steht und hinter ihr noch eine Figur wartet?',
 vorwissen:'Fesselung (Woche 22), Gabel und Doppelangriff (Woche 23), Figurenwerte (Woche 7).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Lichess-Puzzles Z8QNk, qcVv4, SbNpB, IYNOS, PlUm1, dRRAu, XkEBd und 4q7nz (CC0, Thema „skewer“, über die Lichess-Schnittstelle abgerufen), übrige Brettaufgaben eigene Aufgaben. Spießzüge und gewonnene Figuren mit chess.js berechnet, eigene Spießstellungen zusätzlich mit Stockfish auf Materialgewinn geprüft, die Lichess-Lösungen stammen aus der Datenbank',
 phasen:[
 {name:'Einstieg',titel:'Fesselung und Gabel wiederholen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Fesselung und Gabel aus Woche 22 und 23, Linien von Turm und Läufer.',
   'Bei W6 fragen: „Der König muss weg. Was passiert dann mit der Figur dahinter?“ Ziel nennen: „Heute lernt ihr den Spieß: Die wertvolle Figur steht vorne, sie muss weichen, und die Figur dahinter geht verloren.“'],
  kinder:'Ich erinnere mich an Fesselung und Gabel.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Spieß mit Turm, Läufer und Dame',
  ablauf:['Plakat „Der Spieß“ aufhängen. Am Lehrbrett E1: Der Turm greift den König an, er muss weichen. Dahinter steht die Dame, die jetzt geschlagen wird.',
   'E2 bis E4: Spieß herstellen mit Turm, Läufer und Dame. Frage: „Woran erkennst du den Unterschied zur Fesselung?“ (Beim Spieß steht die wertvollere Figur vorne, bei der Fesselung hinten.) E5: Fesselung oder Spieß?',
   'E6: ein echter Spieß aus einer Lichess-Partie. Merksatz: „Wertvolle Figur vorne, Beute dahinter: Spieß. Sie muss weg, die hintere fällt.“'],
  kinder:'Ich erkläre den Spieß und den Unterschied zur Fesselung.',
  links:[{art:'druck',label:'Plakat: Der Spieß',was:'spiess'},{art:'feld',label:'Lehrbrett: Spieß E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Spieß bauen zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt König und Dame des Gegners auf eine Linie oder Diagonale, mit Platz dazwischen. Kind B sucht mit Turm, Läufer oder Dame das Feld für den Spieß und zeigt, was danach verloren geht. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6, darunter vier echte Aufgaben aus Lichess-Partien. Vergleich am Lehrbrett.'],
  kinder:'Ich finde Spießfelder für Turm, Läufer und Dame.',
  links:[{art:'druck',label:'Arbeitsblatt: Der Spieß',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Ein Spieß lohnt nicht, wenn die hintere Figur gedeckt und weniger wert ist. Die Spießfigur darf nicht geschlagen werden können. Fesselung und Spieß verwechseln. Auch der Gegner kann spießen.',
   'Bei jeder Aufgabe fragen: „Was gewinnst du, nachdem die vordere Figur weggezogen ist?“'],
  kinder:'Ich prüfe, ob ein Spieß wirklich etwas gewinnt.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welche Figur steht vorne, welche dahinter, und was gewinnst du?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde und erkläre einen Spieß ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Spieß-Jagd“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Weiß hat König und Turm, Schwarz hat König und Dame. Die Dame darf weder schlagen noch Schach geben. Weiß versucht, König und Dame auf eine Linie zu zwingen und zu spießen, Schwarz versucht es zu vermeiden. Nach fünf Minuten wechseln die Rollen.',
   'Rückblick: „Spieß oder Fesselung, woran erkennst du es?“ Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr den Abzug und das Abzugsschach.'],
  kinder:'Ich nutze einen Spieß in einer Partie.',
  links:[{art:'druck',label:'Plakat: Der Spieß',was:'spiess'},{art:'blatt',label:'Mehr Spießaufgaben auf Lichess (online)',url:URLS.lichessSkewer}]}],
 hinweise:{hilfe:'Mit einem Stift die Linie vom Angreifer aus verlängern: Was steht als Erstes darauf, was als Zweites?',
  zusatz:'Eine Stellung bauen, in der ein Läufer gleichzeitig eine Figur fesselt und auf einer anderen Diagonale einen Spieß macht. Oder Lichess-Aufgaben zum Thema Spieß lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer verwechselt noch Fesselung und Spieß? Wer prüft, ob die hintere Figur gedeckt ist? Das greifst du in Woche 25 beim Abzug wieder auf.',
 feld:{
 W:[X('Wiederholung Fesselung: Klicke die gefesselte schwarze Figur an.','4k3/4r3/8/8/8/8/8/4R1K1',g=>pins(g,'b').gefesselt,'Der Turm e7. Er steht zwischen dem Turm e1 und dem König e8 und darf die e-Linie nicht verlassen. Hinten steht die wertvollere Figur: Fesselung.',['Was steht zwischen dem Turm e1 und dem König e8?','Darf diese Figur die e-Linie verlassen?']),
  X('Wiederholung Gabel: Klicke das Feld an, auf das der Springer zieht, um König und Dame anzugreifen.','4k3/8/8/1N1q4/8/8/8/6K1',g=>gabelZuege(g,'n'),'c7. Der Springer gibt Schach und greift die Dame d5 an.',['Welches Feld erreicht e8 und d5?','Ist das Feld sicher?'],{leer:true}),
  P('Markiere alle Felder, auf die der Läufer c1 ziehen kann.','4k3/8/8/8/8/8/1P6/2B1K3','d2, e3, f4, g5 und h6. Nach b2 kommt er nicht, dort steht der eigene Bauer.',['Der Läufer zieht schräg.','Wo steht eine eigene Figur im Weg?'],{legal:'c1'},{leer:true}),
  P('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das der Turm zieht.','6k1/5ppp/8/8/8/8/6PP/R5K1','a8. Der Turm gibt Schach über die 8. Reihe, die eigenen Bauern sperren den König ein.',['Die eigenen Bauern sperren den König ein.','Der Turm muss auf die 8. Reihe.'],{matt:true},{leer:true}),
  P('Klicke alle schwarzen Figuren an, die angegriffen und nicht gedeckt sind.','r3k3/8/8/1b6/8/8/8/1R2K3','Der Läufer b5. Der Turm b1 greift ihn an, und keine schwarze Figur deckt ihn.',['Was greift der Turm b1 an?','Wer deckt den Läufer?'],{haengt:'b'}),
  X('Der Turm gibt Schach, der König muss weg. Klicke die Figur an, die dahinter auf derselben Linie steht und danach verloren geht.','2r5/8/8/2k5/8/8/8/2R3K1 b - - 0 1',g=>hinten(g,'c1'),'Der Turm c8. Der König muss die c-Linie verlassen, danach schlägt der weiße Turm den Turm c8. Das ist ein Spieß.',['Verlängere die Linie vom Turm über den König hinaus.','Was steht dort?'],{schach:true})],
 E:[X('Der Turm e1 gibt Schach, der König e5 muss weichen. Klicke die schwarze Figur an, die Weiß danach schlägt.','4q3/8/8/4k3/8/8/8/4R1K1 b - - 0 1',g=>hinten(g,'e1'),'Die Dame e8. Der König muss die e-Linie verlassen, danach schlägt der Turm die Dame.',['Was steht hinter dem König auf der e-Linie?','Der König darf nicht auf der e-Linie bleiben.'],{schach:true}),
  X('Spieß mit dem Turm: Klicke das Feld an, auf das der Turm zieht.','4q3/8/8/4k3/8/8/8/R5K1',g=>spiessZuege(g,'r'),'e1. Der Turm gibt Schach auf der e-Linie, dahinter steht die Dame e8. Nach dem Königszug fällt die Dame.',['Auf welcher Linie stehen König und Dame?','Der Turm muss auf diese Linie, vor den König.'],{leer:true}),
  X('Spieß mit dem Läufer: Klicke das Feld an, auf das der Läufer zieht.','8/8/B3k3/8/8/7r/1P6/6K1',g=>spiessZuege(g,'b'),'c8. Der Läufer gibt Schach auf der Diagonale c8 bis h3, dahinter steht der Turm h3. Nach dem Königszug fällt der Turm.',['Auf welcher Diagonale stehen König und Turm?','Der Läufer muss auf diese Diagonale, vor den König.'],{leer:true}),
  X('Spieß mit der Dame: Klicke das Feld an, auf das die Dame zieht.','q7/8/8/7Q/4k3/8/8/6K1',g=>spiessZuege(g,'q'),'h1. Die Dame gibt Schach auf der langen Diagonale, dahinter steht die Dame a8. Nach dem Königszug schlägt Weiß die Dame.',['Auf welcher Diagonale stehen König und Dame?','Die Dame muss auf die andere Seite des Königs.'],{leer:true}),
  X('Spieß oder Fesselung? Hier steht die wertvollere Figur hinten: Das ist eine Fesselung. Klicke die gefesselte Figur an.','q6k/1r6/8/3B4/8/8/8/4K3',g=>pins(g,'b','q').gefesselt,'Der Turm b7. Zieht er weg, schlägt der Läufer die Dame a8. Vorne die schwächere Figur, hinten die wertvollere: Fesselung.',['Was steht vorne, was hinten?','Zieht die vordere Figur weg, fällt die hintere.']),
  X('Echte Partie: Weiß spießt mit Schach. Klicke das Feld an, auf das der Turm zieht.','5R2/8/6K1/p5B1/q3k3/3p4/8/8 w - - 2 66',g=>spiessZuege(g,'r'),'f4. Der Turm gibt Schach auf der 4. Reihe, dahinter steht die Dame a4. So ging die Partie weiter: Kd5 Txa4.',['Auf welcher Reihe stehen König und Dame?','Der Turm muss auf diese Reihe.'],{leer:true,quelle:LI('Z8QNk')})],
 A:[X('Klicke das Feld an, auf das der Turm zieht, um einen Spieß zu machen.','3r4/8/8/3k4/8/8/8/1R4K1',g=>spiessZuege(g,'r'),'d1. Der Turm gibt Schach auf der d-Linie, dahinter steht der Turm d8. Nach dem Königszug fällt der Turm.',['Auf welcher Linie stehen König und Turm?','Der Turm muss vor den König.'],{leer:true}),
  X('Klicke das Feld an, auf das der Läufer zieht, um einen Spieß zu machen.','7r/8/8/8/3k4/8/6P1/2B1K3',g=>spiessZuege(g,'b'),'b2. Der Läufer gibt Schach auf der Diagonale b2 bis h8, dahinter steht der Turm h8.',['Auf welcher Diagonale stehen König und Turm?','Steht der Läufer dort sicher?'],{leer:true}),
  X('Echte Partie: Schwarz spießt mit Schach. Klicke das Feld an, auf das der Turm zieht.','4r1k1/8/6p1/3P1p2/1Q1K4/pP6/6PP/8 b - - 0 40',g=>spiessZuege(g,'r'),'e4. Der Turm gibt Schach auf der 4. Reihe, dahinter steht die weiße Dame b4. So ging die Partie weiter: Kc3 Txb4.',['Auf welcher Reihe stehen der weiße König und die Dame?','Der Turm muss auf diese Reihe.'],{leer:true,quelle:LI('PlUm1')}),
  X('Echte Partie: Weiß spießt mit Schach. Klicke das Feld an, auf das der Turm zieht.','8/1pR2p2/p3p1p1/8/1P3P1p/P2kB2P/2n2K2/3r4 w - - 12 49',g=>spiessZuege(g,'r'),'d7. Der Turm gibt Schach auf der d-Linie, dahinter steht der Turm d1. So ging die Partie weiter: Ke4 Txd1.',['Auf welcher Linie stehen König d3 und Turm d1?','Der Turm muss auf diese Linie.'],{leer:true,quelle:LI('qcVv4')}),
  X('Echte Partie: Weiß spießt mit Schach. Klicke das Feld an, auf das der Turm zieht.'.replace('Echte Partie:','Noch eine echte Partie:'),'6r1/p4p1p/1pp1p1k1/7R/P2P1P2/2P3P1/6K1/8 w - - 5 34',g=>spiessZuege(g,'r'),'g5. Der Turm gibt Schach auf der g-Linie, dahinter steht der Turm g8. So ging die Partie weiter: Kf6 Txg8.',['Auf welcher Linie stehen König g6 und Turm g8?','Der Turm muss auf diese Linie.'],{leer:true,quelle:LI('SbNpB')}),
  X('Echte Partie: Schwarz spießt mit Schach. Klicke das Feld an, auf das die Dame zieht.','q6r/b2Q2p1/p2Bppkp/8/P7/4P1P1/1P3P1P/2R2K2 b - - 0 23',g=>spiessZuege(g,'q'),'h1. Die Dame gibt Schach auf der 1. Reihe, dahinter steht der Turm c1. So ging die Partie weiter: Ke2 Dxc1.',['Auf welcher Reihe stehen der weiße König und der Turm c1?','Die Dame muss auf diese Reihe.'],{leer:true,quelle:LI('IYNOS')})],
 S:[X('Fehler 1: Lohnt der Spieß? Die hintere Figur ist gedeckt und weniger wert als der Turm. Klicke alle Felder an, auf denen der Turm einen lohnenden Spieß macht.'+KEINS,'4b3/6n1/8/4k3/8/8/8/R5K1',g=>spiessZuege(g,'r'),'Keins. Hinter dem König steht der Läufer e8, und der Springer g7 deckt ihn. Ein Turm für einen Läufer ist kein Gewinn.',['Was steht hinter dem König?','Wer deckt diese Figur?'],{leer:true}),
  X('Fehler 2: Die Spießfigur steht unsicher. Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die die weiße Dame schlagen können.','q6r/8/8/8/4k3/8/8/6KQ b - - 0 1',g=>schlaeger(g,'h1'),'Der Turm h8. Er schlägt die Dame h1, Weiß kann nur mit dem König zurückschlagen. Der Spieß ist dahin, Schwarz gewinnt die Dame für einen Turm.',['Wer greift h1 an?','Lohnt sich das Schlagen für Schwarz?'],{schach:true}),
  P('Nach dem Spieß: Schwarz muss den König retten. Markiere alle Felder, auf die der König ziehen darf.','7q/8/8/8/3k4/8/8/B5K1 b - - 0 1','c4, c5, d3, d5, e3 und e4. Der König verlässt die Diagonale a1 bis h8, danach schlägt der Läufer die Dame h8.',['Woher kommt das Schach?','Der König darf nicht auf der Diagonale bleiben.'],{flucht:true},{schach:true,leer:true}),
  X('Auch der Gegner spießt. Schwarz ist am Zug. Klicke das Feld an, auf das der schwarze Turm zieht.','r6k/8/8/8/4K3/8/8/4Q3 b - - 0 1',g=>spiessZuege(g,'r'),'e8. Der schwarze Turm gibt Schach auf der e-Linie, dahinter steht die weiße Dame e1.',['Auf welcher Linie stehen der weiße König und die Dame?','Der Turm muss vor den König.'],{leer:true}),
  X('Fehler 3: Fesselung oder Spieß? Die wertvollere Figur steht hinten. Klicke die gefesselte schwarze Figur an.','4k3/8/8/4q3/8/8/8/4R1K1',g=>pins(g,'b').gefesselt,'Die Dame e5. Sie steht vor dem König e8 und darf die e-Linie nicht verlassen. Vorne die Dame, hinten der König: Fesselung, kein Spieß.',['Was steht vorne, was hinten?','Vorne die Dame, hinten der König: Fesselung.']),
  X('Echte Partie: Schwarz spießt mit Schach. Klicke das Feld an, auf das der Turm zieht.','8/4B3/p5k1/6P1/P7/r4p2/2K2R2/8 b - - 6 53',g=>spiessZuege(g,'r'),'a2. Der Turm gibt Schach auf der 2. Reihe, dahinter steht der Turm f2. So ging die Partie weiter: Kb3 Txf2.',['Auf welcher Linie stehen der weiße König und der Turm f2?','Der Turm muss auf diese Linie.'],{leer:true,quelle:LI('dRRAu')})],
 L:[X('Klicke das Feld an, auf das der Turm zieht, um einen Spieß zu machen.','1q6/8/8/1k6/8/8/4K3/7R',g=>spiessZuege(g,'r'),'b1. Der Turm gibt Schach auf der b-Linie, dahinter steht die Dame b8. Der König kommt nicht mehr an die Dame heran.',['Auf welcher Linie stehen König und Dame?','Der Turm muss vor den König.'],{leer:true}),
  X('Klicke das Feld an, auf das der Läufer zieht, um einen Spieß zu machen.','6r1/8/4k3/8/8/8/P3B3/7K',g=>spiessZuege(g,'b'),'c4. Der Läufer gibt Schach auf der Diagonale c4 bis g8, dahinter steht der Turm g8. Der König kann den Turm nicht mehr decken.',['Auf welcher Diagonale stehen König und Turm?','Der Läufer muss vor den König.'],{leer:true}),
  X('Der Läufer gibt Schach. Klicke die schwarze Figur an, die Weiß nach dem Königszug schlägt.','8/8/1q6/8/3k4/8/5B2/6K1 b - - 0 1',g=>hinten(g,'f2'),'Die Dame b6. Der König muss die Diagonale verlassen, dann schlägt der Läufer die Dame.',['Verlängere die Diagonale vom Läufer über den König hinaus.','Was steht dort?'],{schach:true}),
  P('Der Turm gibt Schach. Markiere alle Felder, auf die der schwarze König ziehen darf.','r7/8/8/k7/8/8/8/R5K1 b - - 0 1','b4, b5 und b6. Danach schlägt der Turm a1 den Turm a8. Auch das ist ein Spieß.',['Woher kommt das Schach?','Der König muss die a-Linie verlassen.'],{flucht:true},{schach:true,leer:true}),
  X('Echte Partie: Weiß spießt mit Schach. Klicke das Feld an, auf das der Turm zieht.','r7/P6R/1b2k3/3p4/3P4/2P1P3/3K4/8 w - - 1 37',g=>spiessZuege(g,'r'),'h6. Der Turm gibt Schach auf der 6. Reihe, dahinter steht der Läufer b6. So ging die Partie weiter: Ke7 Txb6.',['Auf welcher Reihe stehen König e6 und Läufer b6?','Der Turm muss auf diese Reihe.'],{leer:true,quelle:LI('XkEBd')}),
  X('Echte Partie: Weiß spießt mit Schach. Klicke das Feld an, auf das der Turm zieht.'.replace('Echte Partie:','Noch eine echte Partie:'),'8/2p5/3p3R/pr4k1/6P1/5P2/8/6K1 w - - 2 45',g=>spiessZuege(g,'r'),'h5. Der Turm gibt Schach auf der 5. Reihe, dahinter steht der Turm b5. So ging die Partie weiter: Kg6 Txb5.',['Auf welcher Reihe stehen König g5 und Turm b5?','Der Turm muss auf diese Reihe.'],{leer:true,quelle:LI('4q7nz')})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 24 geschrieben');
