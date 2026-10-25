// Woche 19 „Notation: Züge lesen und schreiben“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w18.mjs, dann diese Datei.
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
 const f=g.fen().split(' ');if(!g.move(EN(zug)))throw Error('Zug nicht möglich: '+zug);return T(frage,f[0],undefined,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(viaZuege&&quelle?{zuege:quelle}:{})})};
const GS='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
F[19]={thema:'Notation: Züge lesen und schreiben',
 lernziel:'Ich kann Züge in Notation lesen und aufschreiben.',
 leitfrage:'Wie schreibe ich einen Zug so auf, dass jeder ihn nachspielen kann?',
 vorwissen:'Feldnamen (Woche 2), alle Figuren (Woche 3 bis 5), Rochade und Umwandlung (Woche 13 und 14), Weihnachtsturnier (Woche 18).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Deutsche Kurznotation nach den FIDE-Regeln (Anhang C, Figurenbuchstaben K, D, T, L, S) in kindgerechter Form, Methode Schachdiktat aus „Methoden kennenlernen“. Brettaufgaben eigene Aufgaben, jeder Zug mit chess.js nachgespielt',
 phasen:[
 {name:'Einstieg',titel:'Feldnamen und Figurenbuchstaben aufwärmen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 und W2: Feldnamen und Figurenbuchstaben. Dann W3 bis W6: Ein Zug wird vorgelesen, die Kinder zeigen mit dem Finger am eigenen Brett erst die Figur, dann das Zielfeld.',
   'Frage: „Wie könnt ihr euch eine Partie merken, damit ihr sie zu Hause nachspielen könnt?“ Ziel nennen: „Heute lernt ihr, Züge zu lesen und aufzuschreiben, wie richtige Turnierspieler.“'],
  kinder:'Ich kenne die Buchstaben K, D, T, L, S und alle Feldnamen.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'So schreibt man Züge',
  ablauf:['Plakat „So schreibt man Schach“ aufhängen. Regel: Figurenbuchstabe und Zielfeld, zum Beispiel Sf3. Ein Bauernzug hat keinen Buchstaben, zum Beispiel e4. Die Zugnummer steht vorn: 1. e4 e5.',
   'Am Lehrbrett E1 bis E6 die Zeichen: x heißt schlägt, + heißt Schach, # heißt Matt, 0-0 und 0-0-0 sind die Rochaden, e8D ist eine Umwandlung. Können zwei gleiche Figuren auf dasselbe Feld, kommt die Linie oder Reihe dazu, zum Beispiel Tad1.',
   'Frage bei E4: „Warum reicht hier Td1 nicht?“ Merksatz: „Erst die Figur, dann das Feld. Der Bauer hat keinen Buchstaben.“'],
  kinder:'Ich lese und schreibe Züge mit Figurenbuchstabe, Zielfeld und Zeichen.',
  links:[{art:'druck',label:'Plakat: So schreibt man Schach',was:'notation'},{art:'feld',label:'Lehrbrett: Notation E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Schachdiktat zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit mit dem Plakat: Kind A liest die Partie vom Plakat Zug für Zug vor, Kind B spielt sie am Brett nach. Danach wechseln die Rollen, und B schreibt die eigene Partie aus Woche 18 auf, soweit sie sich erinnert.',
   'Wer fertig ist, spielt eine kurze Partie und schreibt alle Züge auf dem Partieformular mit. Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich spiele eine aufgeschriebene Partie nach und schreibe Züge selbst auf.',
  links:[{art:'druck',label:'Partieformular (zwei pro Blatt)',was:'partieformular'},{art:'druck',label:'Arbeitsblatt: Notation',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Schreibfehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: englische Buchstaben (B statt L, N statt S), Buchstabe beim Bauern, die fehlende Zahl bei zwei Türmen auf einer Linie, vergessenes x und +, Rochade als Königszug geschrieben.',
   'Bei jedem Fehler nachfragen: „Woran erkennst du, welche Figur gemeint ist?“'],
  kinder:'Ich erkenne und verbessere typische Schreibfehler.',
  links:[{art:'feld',label:'Lehrbrett: Schreibfehler S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, liest du einzelnen Kindern einen Zug vor und lässt ihn am Brett ausführen. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich lese und schreibe Züge ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Zugdiktat-Staffel“, Rückblick, Aufräumen',
  ablauf:['Minispiel in zwei Teams: Du liest einen Zug in Notation vor, je ein Kind pro Team führt ihn am Teambrett aus. Wer zuerst richtig gezogen hat, holt einen Punkt. Nach jedem Zug kommt das nächste Kind dran, so wechseln die Rollen im Team.',
   'Rückblick: „Welches Zeichen merkst du dir heute?“ Aufräum-Ritual. Ausblick: Nächstes Mal schreibt ihr eine ganze Partie mit und spielt mit Schachuhr.'],
  kinder:'Ich setze einen gehörten Zug schnell und richtig um.',
  links:[{art:'druck',label:'Plakat: So schreibt man Schach',was:'notation'}]}],
 hinweise:{hilfe:'Das Plakat mit den Figurenbuchstaben liegt am Brett. Erst mit dem Finger die Figur zeigen, dann das Zielfeld, dann schreiben.',
  zusatz:'Eine eigene Kurzpartie von acht Zügen spielen, aufschreiben und einem anderen Paar zum Nachspielen geben. Stimmt die Endstellung?',
  kuerzen:'Das Schachdiktat auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, die Staffel hat nur fünf Züge.'},
 nachher:'Wer verwechselt noch Figurenbuchstaben oder schreibt beim Bauern einen Buchstaben? Wer vergisst x und +? Das übst du in Woche 20 beim Mitschreiben der Partie mit Schachuhr wieder.',
 feld:{
 W:[T('Wie heißen die Felder? Klicke c6, f3 und h8 an.','8/8/8/8/8/8/8/8',['c6','f3','h8'],'c6, f3 und h8: erst die Linie (Buchstabe), dann die Reihe (Zahl).',['Erst den Buchstaben unten suchen.','Dann die Zahl am Rand.'],{leer:true}),
  T('Jede Figur hat einen Buchstaben: K, D, T, L, S. Klicke alle Figuren an, die mit T abgekürzt werden.',START,['a1','h1','a8','h8'],'Die vier Türme a1, h1, a8 und h8. T steht für Turm.',['K König, D Dame, T Turm, L Läufer, S Springer.','Wo stehen die Türme in der Grundstellung?']),
  NZ('Weiß spielt e4. Markiere Startfeld und Zielfeld.','','e4','beide','e2 und e4. Ein Bauernzug hat keinen Buchstaben, nur das Zielfeld steht da.',['Kein Buchstabe heißt: ein Bauer zieht.','Welcher Bauer kann nach e4?']),
  NZ('Weiß spielt Sf3. Klicke die Figur an, die zieht.','e4 e5','Sf3','von','Der Springer g1. S steht für Springer, f3 ist das Zielfeld.',['S heißt Springer.','Welcher weiße Springer kann nach f3?']),
  NZ('Schwarz spielt Sc6. Klicke die Figur an, die zieht.','e4 e5 Nf3','Sc6','von','Der Springer b8. Auch Schwarz schreibt S für Springer.',['Welcher schwarze Springer kann nach c6?','Zähle den Springersprung ab.']),
  NZ('Weiß spielt Lc4. Markiere Startfeld und Zielfeld.','e4 e5 Nf3 Nc6','Lc4','beide','f1 und c4. L steht für Läufer.',['L heißt Läufer.','Welcher weiße Läufer kann nach c4?'])],
 E:[NZ('Weiß spielt cxd5. Das x heißt „schlägt“. Klicke den Bauern an, der schlägt.','e4 d5 c4 e6','cxd5','von','Der Bauer c4. Beim Bauern steht vor dem x die Linie, von der er kommt. Bei exd5 hätte der Bauer e4 geschlagen.',['Zwei Bauern können d5 schlagen.','Der Buchstabe vor dem x nennt die Linie.']),
  NZ('Weiß spielt Dh5#. Das # heißt Matt. Markiere Startfeld und Zielfeld.','e4 f6 d4 g5','Dh5#','beide','d1 und h5. Die Dame gibt Schach, der schwarze König kann nicht entkommen: Matt.',['D heißt Dame.','Von h5 sieht die Dame bis e8.']),
  NZ('Weiß spielt 0-0. Markiere die Felder, auf denen König und Turm danach stehen.','e4 e5 Nf3 Nc6 Bc4 Bc5','0-0','rochade','g1 und f1. 0-0 ist die kurze Rochade: König nach g1, Turm nach f1.',['0-0 kurz, 0-0-0 lang.','Der König zieht zwei Felder zum Turm.']),
  NZ('Weiß spielt Tad1. Beide Türme können nach d1. Klicke den Turm an, der zieht.','r4rk1/ppp2ppp/8/8/8/8/PPP2PPP/R4RK1 w - - 0 1','Tad1','von','Der Turm a1. Das a nach dem T sagt, von welcher Linie der Turm kommt.',['Wer kann alles nach d1?','Der zusätzliche Buchstabe nennt die Linie.']),
  SCHREIB('Der Springer b1 zieht nach c3. Schreibe den Zug auf. Woran erkennt man, dass ein Springer zieht?','e4 e5','Sc3','Sc3. S für Springer, c3 ist das Zielfeld. Am Buchstaben S erkennt man den Springer.',['Erst der Figurenbuchstabe.','Dann das Zielfeld.']),
  NZ('Weiß spielt e8D+. Markiere Startfeld und Zielfeld.','k7/4P3/8/8/8/8/8/4K3 w - - 0 1','e8D+','beide','e7 und e8. Der Bauer zieht nach e8 und wird zur Dame (D). Das + heißt: Sie gibt Schach.',['Welcher Bauer erreicht die 8. Reihe?','D am Ende heißt: Umwandlung in eine Dame.'])],
 A:[NZ('Weiß spielt Sbd2. Klicke den Springer an, der zieht.','d4 d5 Nf3 Nf6','Sbd2','von','Der Springer b1. Beide Springer können nach d2, das b sagt, welcher.',['Welche Springer können nach d2?','Der Buchstabe nach dem S nennt die Linie.']),
  NZ('Schwarz spielt Lxf3. Markiere Startfeld und Zielfeld.','e4 e5 Nf3 d6 d4 Bg4 Nc3','Lxf3','beide','g4 und f3. Der schwarze Läufer schlägt den Springer f3.',['L heißt Läufer, x heißt schlägt.','Welcher schwarze Läufer erreicht f3?']),
  SCHREIB('Der weiße Läufer b5 schlägt den Springer c6. Schreibe den Zug auf.','e4 e5 Nf3 Nc6 Bb5 a6','Lxc6','Lxc6. L für Läufer, x für schlägt, c6 ist das Zielfeld.',['Figurenbuchstabe, dann x, dann Zielfeld.','Die geschlagene Figur schreibt man nicht auf.']),
  NZ('Weiß spielt 0-0-0. Markiere die Felder, auf denen König und Turm danach stehen.','r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1','0-0-0','rochade','c1 und d1. 0-0-0 ist die lange Rochade: König nach c1, Turm nach d1.',['Drei Nullen: lange Rochade.','Der König zieht zwei Felder nach links.']),
  NZ('Nach 1. e4 e5 2. Sf3 Sc6 3. Lc4 Sd4 spielt Weiß 4. Sxe5. Klicke die Figur an, die schlägt.','e4 e5 Nf3 Nc6 Bc4 Nd4','Sxe5','von','Der Springer f3. Er schlägt den Bauern e5.',['S heißt Springer.','Welcher weiße Springer erreicht e5?']),
  T('Weiß setzt in einem Zug matt. Klicke das Zielfeld an. Wie schreibst du den Zug?','7k/6pp/8/8/8/8/6PP/2R3K1',null,'c8. Der Zug heißt Tc8#: T für Turm, c8 Zielfeld, # für Matt.',['Der Turm muss auf die 8. Reihe.','Matt schreibt man mit #.'],{leer:true,pruef:{matt:true}})],
 S:[NZ('Ein Kind schreibt „Bf4“. Im Deutschen heißt der Läufer L. Weiß spielt Lf4: Klicke die Figur an, die zieht.','d4 d5','Lf4','von','Der Läufer c1. Richtig heißt der Zug Lf4. B ist der englische Buchstabe für Läufer (bishop).',['L heißt Läufer.','Welcher weiße Läufer erreicht f4?']),
  NZ('Ein Kind schreibt „Be3“ für einen Bauernzug. Bauern haben keinen Buchstaben. Weiß spielt e3: Markiere Startfeld und Zielfeld.','d4 d5 Nf3 Nf6','e3','beide','e2 und e3. Richtig heißt der Zug nur e3.',['Kein Buchstabe heißt: ein Bauer zieht.','Welcher Bauer kann nach e3?']),
  NZ('Beide Türme stehen auf der e-Linie. Weiß spielt T1e2: Klicke den Turm an, der zieht.','k7/8/8/8/4R3/8/8/4R1K1 w - - 0 1','T1e2','von','Der Turm e1. Stehen beide Türme auf derselben Linie, nennt die Zahl die Reihe, von der der Turm kommt.',['Beide Türme können nach e2.','Die 1 steht für die 1. Reihe.']),
  SCHREIB('Ein Kind schreibt „Kc1“, als Weiß lang rochiert. Wie schreibt man die lange Rochade richtig?','r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1','0-0-0','0-0-0. Die Rochade schreibt man mit Nullen, nicht als Königszug. Kurz 0-0, lang 0-0-0.',['Wie viele Felder ist der Turm vom König entfernt?','Kurz zwei Nullen, lang drei.']),
  NZ('Ein Kind schreibt „Lb5“ und vergisst das Schach. Richtig ist Lb5+. Markiere Startfeld und Zielfeld.','e4 d6 d4 Nf6','Lb5+','beide','f1 und b5. Der Läufer gibt Schach, deshalb gehört ein + dazu: Lb5+.',['Woran erkennst du, dass es Schach ist?','Prüfe die Diagonale von b5 nach e8.']),
  NZ('Ein Kind schreibt „Se5“, obwohl der Springer schlägt. Weiß spielt Sxe5: Klicke die Figur an, die schlägt.','e4 e5 Nf3 Nf6','Sxe5','von','Der Springer f3. Er schlägt den Bauern e5, deshalb heißt der Zug Sxe5.',['x heißt schlägt.','Welcher weiße Springer erreicht e5?'])],
 L:[NZ('Weiß spielt Lb5. Markiere Startfeld und Zielfeld.','e4 e5 Nf3 Nc6','Lb5','beide','f1 und b5.',['L heißt Läufer.','Welcher weiße Läufer erreicht b5?']),
  NZ('Schwarz spielt Sf6. Klicke die Figur an, die zieht.','e4 e5 Nf3','Sf6','von','Der Springer g8.',['S heißt Springer.','Welcher schwarze Springer erreicht f6?']),
  NZ('Weiß spielt dxe5. Klicke den Bauern an, der schlägt.','e4 e5 Nf3 d6 d4 Nc6','dxe5','von','Der Bauer d4. Das d vor dem x nennt seine Linie.',['Welche Bauern können e5 schlagen?','Der Buchstabe vor dem x nennt die Linie.']),
  NZ('Weiß spielt 0-0. Markiere die Felder, auf denen König und Turm danach stehen.','d4 d5 Nf3 Nf6 g3 g6 Bg2 Bg7','0-0','rochade','g1 und f1.',['Zwei Nullen: kurze Rochade.','Wohin ziehen König und Turm?']),
  SCHREIB('Der Turm a1 zieht nach d1. Schreibe den Zug auf.','4k3/8/8/8/8/8/8/R3K3 w - - 0 1','Td1','Td1. T für Turm, d1 ist das Zielfeld.',['Erst der Figurenbuchstabe.','Dann das Zielfeld.']),
  T('Klicke das Feld an, auf dem die Dame mattsetzt. Schreibe den Zug mit # auf.','6k1/5ppp/8/8/8/8/Q4PPP/6K1',null,'a8. Der Zug heißt Da8#: D für Dame, a8 Zielfeld, # für Matt.',['Die Dame muss auf die 8. Reihe.','Matt schreibt man mit #.'],{leer:true,pruef:{matt:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 19 geschrieben');
