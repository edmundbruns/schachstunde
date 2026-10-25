// Woche 23 „Gabel und Doppelangriff“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w22.mjs, dann diese Datei.
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
URLS.lichessFork='https://lichess.org/training/fork';
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
if(process.env.DBG)globalThis.DBG=(n,q,fn)=>{const {g}=G(q);console.log(n,JSON.stringify(fn(g)))};
F[23]={thema:'Gabel und Doppelangriff',
 lernziel:'Ich kann eine Gabel finden und ausführen.',
 leitfrage:'Wie greift eine Figur zwei Ziele auf einmal an, sodass der Gegner nur eins retten kann?',
 vorwissen:'Gangart des Springers (Woche 4), Angreifen und decken (Woche 6), Figurenwerte und Tauschen (Woche 7), Fesselung (Woche 22).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Lichess-Puzzles 05FPf, 008P4, 02qUN und 09vi3 (CC0, Thema „fork“), übrige Brettaufgaben eigene Aufgaben. Angegriffene Figuren und Gabelzüge mit chess.js berechnet, die Lichess-Lösungen stammen aus der Datenbank',
 phasen:[
 {name:'Einstieg',titel:'Fesselung wiederholen, Springer springen lassen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Fesselung aus Woche 22, Springerzüge und angegriffene Figuren.',
   'Bei W6 fragen: „Der Springer greift zwei Figuren an. Welche kann Schwarz retten?“ Ziel nennen: „Heute lernt ihr die Gabel: Eine Figur greift zwei Ziele gleichzeitig an.“'],
  kinder:'Ich finde alle Figuren, die ein Springer angreift.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Gabeln mit Springer, Bauer, Dame und König',
  ablauf:['Plakat „Gabel und Doppelangriff“ aufhängen. Am Lehrbrett E1: Der Springer greift zwei Figuren an. Der Gegner kann nur eine retten, die andere geht verloren.',
   'E2 bis E5: Gabel herstellen mit Springer, Bauer, Dame und König. Am stärksten ist die Gabel mit Schach, denn dann muss der Gegner zuerst den König retten. Frage: „Warum ist eine Gabel mit Schach besonders stark?“',
   'E6: eine echte Gabel aus einer Lichess-Partie. Merksatz: „Eine Figur, zwei Ziele: Der Gegner kann nur eins retten.“'],
  kinder:'Ich erkläre, warum eine Gabel Material gewinnt.',
  links:[{art:'druck',label:'Plakat: Gabel und Doppelangriff',was:'gabel'},{art:'feld',label:'Lehrbrett: Gabeln E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Gabeln bauen zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt König, Turm und Dame des Gegners auf und einen eigenen Springer dazu. Kind B sucht das Gabelfeld und zeigt beide Ziele. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6, darunter eine echte Aufgabe aus einer Lichess-Partie. Vergleich am Lehrbrett.'],
  kinder:'Ich finde Gabelfelder für Springer, Bauer und Dame.',
  links:[{art:'druck',label:'Arbeitsblatt: Gabel und Doppelangriff',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Eine Gabel nützt nichts, wenn die gabelnde Figur geschlagen werden kann. Gedeckte Ziele lohnen sich nur, wenn sie mehr wert sind. Bei einer Gabel mit Schach zuerst den König retten. Auch der Gegner kann gabeln.',
   'Bei jeder Aufgabe fragen: „Woran erkennst du, ob die Gabel wirklich etwas gewinnt?“'],
  kinder:'Ich prüfe, ob eine Gabel sicher ist und etwas gewinnt.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welche zwei Ziele greift deine Figur an, und was kann der Gegner retten?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde und erkläre Gabeln ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Springer-Gabel“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Weiß hat König und Springer, Schwarz hat König, Turm und Dame, aber Schwarz darf nicht schlagen. Weiß versucht in fünf Zügen eine Gabel zu finden, die Dame oder Turm angreift. Danach wechseln die Rollen.',
   'Rückblick: „Welche Figur gabelt am liebsten?“ Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr den Spieß und den Abzugsangriff.'],
  kinder:'Ich finde in einer Partie eine Gabel.',
  links:[{art:'druck',label:'Plakat: Gabel und Doppelangriff',was:'gabel'},{art:'blatt',label:'Mehr Gabelaufgaben auf Lichess (online)',url:URLS.lichessFork}]}],
 hinweise:{hilfe:'Vom Springer aus alle acht Sprungfelder mit Steinen markieren. Liegen zwei wertvolle Ziele darunter?',
  zusatz:'Eine Stellung bauen, in der ein Bauer eine Gabel gegen Turm und Läufer macht. Oder Lichess-Aufgaben zum Thema Gabel lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer findet Springergabeln schon sicher, wer übersieht Bauern- und Damengabeln? Wer prüft, ob die gabelnde Figur sicher steht? Das greifst du in Woche 24 bei Spieß und Abzugsangriff wieder auf.',
 feld:{
 W:[X('Wiederholung Fesselung: Klicke die gefesselte schwarze Figur an.','e4 e5 Nf3 d6 Bb5+ Nc6 d4',g=>pins(g,'b').gefesselt,'Der Springer c6. Zieht er weg, steht der König e8 im Schach durch den Läufer b5.',['Welche Diagonale führt vom Läufer b5 zum König?','Was steht dazwischen?']),
  P('Markiere alle Felder, auf die der Springer d4 ziehen kann.','4k3/8/8/8/3N4/8/8/4K3','b5, c6, e6, f5, f3, e2, c2 und b3. Alle acht Sprungfelder sind frei.',['Zwei Felder geradeaus, eins zur Seite.','Es sind acht Felder.'],{legal:'d4'},{leer:true}),
  X('Klicke alle schwarzen Figuren an, die der Springer e5 angreift.','r3k3/5p2/2q5/4N3/8/8/8/4K3',g=>ziele(g,'e5'),'Der Bauer f7 und die Dame c6. Der Springer greift zwei Ziele gleichzeitig an.',['Zeige alle acht Sprungfelder.','Wo steht eine schwarze Figur?']),
  P('Schwarz ist am Zug und steht im Schach. Klicke alle schwarzen Figuren an, die das Schach abwehren können.','4k3/8/5n2/8/B7/8/8/4K3 b - - 0 1','Der König e8 (wegziehen) und der Springer f6 (Sd7 dazwischen).',['Woher kommt das Schach?','Wer kann sich dazwischenstellen?'],{abwehr:true},{schach:true}),
  X('Klicke alle schwarzen Figuren an, die der weiße Bauer d5 angreift.','4k3/8/2n1b3/3P4/8/8/8/4K3',g=>ziele(g,'d5'),'Der Springer c6 und der Läufer e6. Der Bauer greift beide schräg nach vorn an.',['Ein Bauer greift schräg nach vorn an.','Welche Felder sind das?']),
  X('Klicke alle schwarzen Figuren an, die der Springer d6 angreift. Welche davon kann Schwarz retten?','k1r1q3/8/3N4/8/8/8/8/6K1',g=>ziele(g,'d6'),'Der Turm c8 und die Dame e8. Schwarz kann nur eine Figur retten, am besten die Dame. Dann schlägt der Springer den Turm.',['Zeige alle Sprungfelder von d6.','Wo stehen schwarze Figuren?'])],
 E:[X('Der Springer d5 greift zwei Figuren gleichzeitig an. Klicke sie an.','4k3/2r1q3/8/3N4/8/8/8/6K1',g=>ziele(g,'d5'),'Der Turm c7 und die Dame e7. Schwarz rettet die Dame, dann schlägt der Springer den Turm.',['Zeige alle Sprungfelder von d5.','Wo stehen schwarze Figuren?']),
  X('Gabel herstellen: Klicke das Feld an, auf das der Springer zieht, um König und Turm gleichzeitig anzugreifen.','r3k3/8/8/1N6/8/8/8/4K3',g=>gabelZuege(g,'n'),'c7. Von dort greift der Springer den König e8 und den Turm a8 an. Schwarz muss den König retten, dann fällt der Turm.',['Von welchem Feld aus erreicht ein Springer e8 und a8?','Es ist ein Feld in der 7. Reihe.'],{leer:true}),
  X('Bauerngabel: Klicke das Feld an, auf das der Bauer zieht, um zwei Figuren anzugreifen.','4k3/8/2n1r3/8/3P4/8/8/6K1',g=>gabelZuege(g,'p'),'d5. Der Bauer greift den Springer c6 und den Turm e6 an. Nur eine Figur kann weg.',['Ein Bauer greift schräg nach vorn an.','Wohin muss er, damit c6 und e6 schräg vor ihm liegen?'],{leer:true}),
  X('Damengabel: Klicke alle Felder an, auf die die Dame zieht, um den König und den ungedeckten Turm gleichzeitig anzugreifen.','r5k1/6pp/8/8/8/8/8/3Q2K1',g=>gabelZuege(g,'q'),'d5. Die Dame gibt Schach und greift den Turm a8 an. Nach dem Königszug schlägt sie den Turm.',['Die Dame muss Schach geben und den Turm angreifen.','Welche Felder liegen auf einer Linie mit a8 und g8?'],{leer:true}),
  X('Auch der König kann gabeln. Klicke das Feld an, auf das der König zieht, um beide schwarzen Figuren anzugreifen.','8/8/8/8/2n1n3/8/2K5/k7',g=>gabelZuege(g,'k'),'d3. Der König greift beide Springer an, keiner ist gedeckt. Schwarz kann nur einen retten.',['Der König greift alle Nachbarfelder an.','Welches Feld grenzt an c4 und e4?'],{leer:true}),
  X('Echte Partie: Schwarz hat Td5 gespielt. Weiß gabelt mit Schach. Klicke das Feld an, auf das der Springer zieht.','6k1/2p5/6P1/1p1r1NP1/5P2/2b5/3p4/3B2K1 w - - 2 44',g=>gabelZuege(g,'n'),'e7. Der Springer gibt Schach und greift den Turm d5 an. So ging die Partie weiter: Kg7 Sxd5.',['Der Springer muss den König g8 und den Turm d5 angreifen.','Wo steht ein Springer, der beide erreicht?'],{leer:true,quelle:LI('05FPf')})],
 A:[X('Klicke das Feld an, auf das der Springer zieht, um König und Dame gleichzeitig anzugreifen.','6k1/8/8/3q1N2/8/8/8/6K1',g=>gabelZuege(g,'n'),'e7. Der Springer gibt Schach und greift die Dame d5 an. Die Dame kann e7 nicht schlagen.',['Von welchem Feld erreicht ein Springer g8 und d5?','Ist das Feld sicher?'],{leer:true}),
  X('Bauerngabel: Klicke das Feld an, auf das der Bauer zieht.','4k3/8/8/3r1n2/8/4P3/8/4K3',g=>gabelZuege(g,'p'),'e4. Der Bauer greift Turm d5 und Springer f5 an und steht dort sicher.',['Wohin muss der Bauer, damit d5 und f5 schräg vor ihm liegen?','Steht er dort sicher?'],{leer:true}),
  X('Damengabel: Klicke alle Felder an, auf die die Dame zieht, um zwei Figuren mit Gewinn anzugreifen.','1k6/8/8/n6b/8/8/8/4Q1K1',g=>gabelZuege(g,'q'),'b4 und e5. Von dort gibt die Dame Schach und greift den ungedeckten Springer a5 an.',['Welche schwarzen Figuren sind ungedeckt?','Von welchem Feld greift die Dame beide an?'],{leer:true}),
  X('Klicke alle schwarzen Figuren an, die der Springer f7 angreift.','r2qk2r/5N2/8/8/8/8/8/4K3',g=>ziele(g,'f7'),'Die Dame d8 und der Turm h8. Auch e5, g5, d6 und h6 erreicht er, dort steht aber nichts.',['Zeige alle Sprungfelder von f7.','Ist auch der König dabei?']),
  X('Echte Partie: Weiß hat Kd2 gezogen. Schwarz gabelt mit Schach. Klicke das Feld an, auf das der Springer zieht.','8/4k3/1p1p4/rP2p1p1/P2nP1P1/3B4/3K4/R7 b - - 1 35',g=>gabelZuege(g,'n'),'b3. Der Springer gibt Schach und greift den Turm a1 an. So ging die Partie weiter: Kc3 Sxa1.',['Der Springer soll den König d2 und den Turm a1 angreifen.','Welches Feld erreicht beide?'],{leer:true,quelle:LI('008P4')}),
  X('Turmgabel: Klicke alle Felder an, auf die der Turm zieht, um zwei ungedeckte Figuren anzugreifen.','6k1/8/1n4b1/8/8/8/8/3R2K1',g=>gabelZuege(g,'r'),'d6. Der Turm greift auf der 6. Reihe den Springer b6 und den Läufer g6 an, beide sind ungedeckt.',['Auf welcher Reihe stehen beide Figuren?','Der Turm muss auf diese Reihe.'],{leer:true})],
 S:[X('Fehler 1: Der Springer gabelt König und Turm, steht aber unsicher. Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die den Springer c7 schlagen können.','r3k3/1qN5/8/8/8/8/8/4K3 b - - 0 1',g=>schlaeger(g,'c7'),'Die Dame b7. Sie schlägt den Springer, die Gabel ist dahin. Eine Gabel nützt nur, wenn die Gabelfigur sicher steht.',['Wer greift c7 an?','Eine Gabel nützt nichts, wenn die Gabelfigur verloren geht.'],{schach:true}),
  X('Fehler 2: Gedeckte Ziele lohnen nicht immer. Klicke alle Felder an, auf denen der Springer eine Gabel mit Gewinn macht.'+KEINS,'4k3/1p1p4/2r1b3/8/8/8/3N4/4K3',g=>gabelZuege(g,'n'),'Keins. Turm c6 und Läufer e6 sind beide von Bauern gedeckt. Der Springer würde für einen Läufer getauscht und danach selbst geschlagen.',['Sind die Ziele gedeckt?','Ein Springer gewinnt gegen einen gedeckten Läufer nichts.'],{leer:true}),
  P('Gabel mit Schach: Schwarz muss zuerst den König retten. Markiere alle Felder, auf die der schwarze König ziehen darf.','r3k3/2N5/8/8/8/8/8/4K3 b - - 0 1','d7, d8, e7, f7 und f8. Zuerst rettet Schwarz den König, danach schlägt der Springer den Turm a8.',['Woher kommt das Schach?','Danach schlägt der Springer den Turm.'],{flucht:true},{schach:true,leer:true}),
  X('Auch der Gegner gabelt. Schwarz ist am Zug. Klicke das Feld an, auf das der schwarze Springer zieht, um König und Turm anzugreifen.','4k3/8/8/8/1n6/8/8/R3K3 b - - 0 1',g=>gabelZuege(g,'n'),'c2. Der schwarze Springer gibt Schach und greift den Turm a1 an.',['Welches Feld erreicht e1 und a1?','Ist das Feld sicher?'],{leer:true}),
  X('Fehler 3: Die Dame greift zwei Figuren an, aber beide sind gedeckt. Klicke alle Felder an, auf denen die Dame eine Gabel mit Gewinn macht.'+KEINS,'4k3/3p1p2/2n1n3/8/8/8/8/3QK3'.replace('3QK3','2Q1K3'),g=>gabelZuege(g,'q'),'Keins. Beide Springer sind von Bauern gedeckt. Die Dame würde nur einen Springer gegen sich selbst tauschen.',['Sind die Springer gedeckt?','Darf die Dame auf das Feld, ohne geschlagen zu werden?'],{leer:true}),
  X('Echte Partie: Schwarz hat Lh3 gespielt. Weiß gabelt mit Schach. Klicke das Feld an, auf das der Springer zieht.','7r/ppp1k1p1/7p/4N3/8/2P4b/P1P2P1P/2KR4 w - - 1 19',g=>gabelZuege(g,'n'),'g6. Der Springer gibt Schach und greift den Turm h8 an. So ging die Partie weiter: Kf6 Sxh8.',['Der Springer soll den König e7 und den Turm h8 angreifen.','Welches Feld erreicht beide?'],{leer:true,quelle:LI('02qUN')})],
 L:[X('Klicke das Feld an, auf das der Springer zieht, um König und Turm gleichzeitig anzugreifen.','4k3/7r/8/8/4N3/8/8/4K3',g=>gabelZuege(g,'n'),'f6. Der Springer gibt Schach und greift den Turm h7 an.',['Von welchem Feld erreicht ein Springer e8 und h7?','Ist das Feld sicher?'],{leer:true}),
  X('Bauerngabel: Klicke das Feld an, auf das der Bauer zieht.','4k3/8/8/1r1n4/8/2P5/8/4K3',g=>gabelZuege(g,'p'),'c4. Der Bauer greift Turm b5 und Springer d5 an. Vom Startfeld darf er zwei Felder ziehen.',['Wohin muss der Bauer, damit b5 und d5 schräg vor ihm liegen?','Ein Bauer zieht vom Startfeld auch zwei Felder.'],{leer:true}),
  X('Klicke alle schwarzen Figuren an, die der Springer e6 angreift.','3r2k1/2p5/4N3/8/3b4/8/8/4K3',g=>ziele(g,'e6'),'Der Turm d8, der Bauer c7 und der Läufer d4.',['Zeige alle Sprungfelder von e6.','Wo stehen schwarze Figuren?']),
  X('Damengabel: Klicke alle Felder an, auf die die Dame zieht, um den König und den ungedeckten Läufer gleichzeitig anzugreifen.','7k/b7/8/8/8/8/5PPP/3Q2K1',g=>gabelZuege(g,'q'),'a1. Die Dame gibt auf der langen Diagonale Schach und greift auf der a-Linie den Läufer a7 an. Auf d4 könnte der Läufer sie schlagen.',['Die Dame muss Schach geben und den Läufer angreifen.','Welches Feld liegt auf einer Linie mit h8 und a7?'],{leer:true}),
  P('Gabel mit Schach: Weiß muss zuerst den König retten. Markiere alle Felder, auf die der weiße König ziehen darf.','4k3/8/8/8/8/8/2n5/R3K3 w - - 0 1','d1, d2, e2, f1 und f2. Erst den König retten, dann schlägt der Springer den Turm a1.',['Woher kommt das Schach?','Danach schlägt der Springer den Turm.'],{flucht:true},{schach:true,leer:true}),
  X('Echte Partie: Schwarz hat Lxf4+ gespielt. Weiß gabelt mit Schach. Klicke das Feld an, auf das die Dame zieht.','1k3r2/1p2Q3/p1q5/3p4/3P1b2/2P1N3/1P1K4/8 w - - 0 38',g=>gabelZuege(g,'q'),'f8. Die Dame schlägt den Turm, gibt Schach und greift den Läufer f4 an. So ging die Partie weiter: Ka7 Dxf4.',['Die Dame soll den König b8 und den Läufer f4 angreifen.','Die Dame darf dabei sogar schlagen.'],{leer:true,quelle:LI('09vi3')})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 23 geschrieben');
