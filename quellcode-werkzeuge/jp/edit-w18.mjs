// Woche 18 „Weihnachtsturnier“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w17.mjs, dann diese Datei.
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
URLS.schachBingo='https://www.youtube.com/watch?v=CDEEqAtAKdU';
const KEINS=' Wenn keins, drücke „Prüfen“ ohne Markierung.',KEINE=' Wenn keine, drücke „Prüfen“ ohne Markierung.',KEINER=' Wenn keiner, drücke „Prüfen“ ohne Markierung.';
const A=JSON.parse(fs.readFileSync(path.join(here,'w18-antworten.json'),'utf8'));
const X=(k,frage,pos,antwort,hilfe,extra)=>T(frage,pos,null,A[k]||antwort,hilfe,extra);
F[18]={thema:'Weihnachtsturnier',
 lernziel:'Ich kann ein Turnier fair zu Ende spielen.',
 leitfrage:'Wie spiele ich mehrere Partien hintereinander ruhig, fair und bis zum Schluss?',
 vorwissen:'Fairplay (Woche 9), Aufsteiger-Runde im Rutschsystem (Woche 10), Rochade, en passant, Patt und Damenmatt (Woche 14 bis 17).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Turnierform Rutschsystem und Wertung ohne Rangliste aus dem Praxiswissen (Spielphasen organisieren), FIDE-Regeln in kindgerechter Form (berührt, geführt; Patt; Rochade; en passant). Brettaufgaben eigene Aufgaben, alle Lösungen mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Schnellrunde und persönliches Turnierziel',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6 eine Schnellrunde zu Matt, Damenmatt, Schach abwehren, ungedeckten Figuren, Rochade und Patt. Die Kinder zeigen zuerst mit dem Finger am eigenen Brett.',
   'Jedes Kind wählt ein persönliches Ziel und schreibt es auf seine Turnierkarte, zum Beispiel „Ich prüfe vor jedem Zug, was mein Gegner droht“. Ziel nennen: „Heute spielt ihr ein Weihnachtsturnier. Gewonnen hat die ganze AG, wenn viele Partien fair zu Ende gespielt werden.“'],
  kinder:'Ich kenne mein persönliches Ziel für das Turnier.',
  links:[{art:'feld',label:'Lehrbrett: Schnellrunde W1 bis W6',set:'W'},{art:'druck',label:'Turnierkarten (vier pro Blatt)',was:'turnierkarte'}]},
 {name:'Erarbeitung',titel:'Turnierablauf und Turnierregeln',
  ablauf:['Plakat „Sternenbaum“ aufhängen. Rutschsystem mit zwei Paaren vormachen: Bretter nummerieren, Brett 1 ist oben. Wer gewinnt, rückt ein Brett nach oben, wer verliert, eins nach unten. Remis oder nicht beendet: Weiß rückt nach oben, Schwarz nach unten. Jede Runde dauert 8 Minuten.',
   'Am Lehrbrett E1 bis E6 die Turnierregeln: berührt, geführt; König nie neben König; Patt ist remis; im Schach erst das Schach abwehren; vor einem Remisangebot selbst nach Matt suchen; bei Rundenende zählt nur, was auf dem Brett steht.',
   'Merksatz: „Hand geben, leise spielen, berührt, geführt, Ergebnis melden, Figuren aufbauen.“ Frage: „Warum rückt bei Remis Weiß nach oben?“ (Damit alle wissen, wohin, ohne Streit.)'],
  kinder:'Ich erkläre den Turnierablauf und die wichtigsten Turnierregeln.',
  links:[{art:'druck',label:'Plakat: Sternenbaum und Turnierregeln',was:'sternbaum'},{art:'feld',label:'Lehrbrett: Turnierregeln E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Turnierrunden 1 und 2',
  ablauf:['Runde 1 und Runde 2 im Rutschsystem, je 8 Minuten. Vor jeder Partie Hand geben, danach Ergebnis auf der Turnierkarte eintragen. In der zweiten Runde wechseln die Farben. Danach wechseln die Rollen auch beim Melden: Wer in Runde 1 das Ergebnis gemeldet hat, baut in Runde 2 die Figuren auf.',
   'Jede regelgerecht beendete Partie bringt einen Stern am Sternenbaum. Wer früh fertig ist, löst die Weihnachtsrätsel A1 bis A6.'],
  kinder:'Ich spiele meine Partien fair zu Ende und trage das Ergebnis ein.',
  links:[{art:'druck',label:'Arbeitsblatt: Weihnachtsrätsel',was:'feld:A'},{art:'feld',label:'Lehrbrett: Weihnachtsrätsel A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Halbzeit-Stopp: Streitfälle klären',
  ablauf:['Stopp-Signal. Frage an alle: „Was droht dein Gegner gerade?“ Dann am Lehrbrett S1 bis S6 typische Streitfälle aus Turnieren: Ist das wirklich Matt? Patt ist kein Sieg. Rochade im Schach. En passant nur sofort. Das übersehene Schach.',
   'Bei jedem Fall nachfragen: „Woran erkennst du, wer recht hat?“ Regel: Bei Streit Hand heben, die Lehrkraft entscheidet, die Stellung bleibt stehen.'],
  kinder:'Ich kläre einen Streitfall mit der passenden Regel.',
  links:[{art:'feld',label:'Lehrbrett: Streitfälle S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Runde 3 und Schiedsrichter-Zettel',
  ablauf:['Runde 3 im Rutschsystem, 8 Minuten. Du beobachtest mit der Turnierkarte im Kopf: Hand geben, berührt, geführt, Partie zu Ende spielen, Ergebnis melden.',
   'Wer fertig ist, löst den Schiedsrichter-Zettel L1 bis L6 allein. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich entscheide sechs Turnierfälle ohne Hilfe richtig.',
  links:[{art:'druck',label:'Lerncheck-Zettel: Schiedsrichter',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Sterne zählen, Weihnachts-Simultan, Aufräumen',
  ablauf:['Sterne am Sternenbaum zählen: Wie viele Partien hat die AG heute fair beendet? Jedes Kind nennt einen guten Zug seines Gegners (Zug des Tages). Keine Rangliste vorlesen.',
   'Minispiel Weihnachts-Simultan, 5 Minuten: Die Lehrkraft spielt an drei Brettern gegen Teams, die Kinder beraten sich leise. Weitere Spielidee der Schulschachstiftung: Schach Bingo (Video, vorher selbst ansehen). Aufräum-Ritual. Ausblick: Nach den Ferien lernt ihr, Züge aufzuschreiben.'],
  kinder:'Ich nenne einen guten Zug meines Gegners.',
  links:[{art:'druck',label:'Plakat: Sternenbaum und Turnierregeln',was:'sternbaum'},{art:'video',label:'Spielidee „Schach Bingo“ der Schulschachstiftung (Video)',url:URLS.schachBingo}]}],
 hinweise:{hilfe:'Unsichere Kinder spielen Runde 1 am untersten Brett neben dir. Die Turnierkarte mit den Regeln liegt neben dem Brett.',
  zusatz:'Wer zwei Partien gewonnen hat, spielt in Runde 3 mit Vorgabe: ohne Dame oder nur mit halber Zeit. Oder: Die eigene Partie aufschreiben, so gut es geht.',
  kuerzen:'Nur zwei Turnierrunden spielen und die Erarbeitung auf E1, E3 und E4 kürzen. Lerncheck, Sterne zählen und Aufräumen bleiben, das Simultan entfällt.'},
 nachher:'Wer hat sich an „berührt, geführt“ gehalten, wer nicht? Welche Streitfälle gab es? Wer hat seine Partie vor Rundenende aufgegeben oder abgebrochen? Das greifst du in Woche 19 bei der Notation und in Woche 20 bei den Turnierregeln mit Schachuhr wieder auf.',
 feld:{
 W:[X('W1','Weiß setzt in einem Zug matt. Klicke das Feld an, auf das der Turm zieht.','6k1/5ppp/8/8/8/8/5PPP/R5K1','',['Die eigenen Bauern sperren den König ein.','Der Turm muss auf die 8. Reihe.'],{leer:true,pruef:{matt:true}}),
  X('W2','Damenmatt: Klicke alle Felder an, auf denen die Dame mattsetzt.','7k/8/6K1/8/8/8/8/4Q3','',['Der König g6 deckt g7 und h7.','Die Dame muss Schach geben.'],{leer:true,pruef:{matt:true}}),
  X('W3','Weiß steht im Schach. Klicke alle weißen Figuren an, mit denen Weiß das Schach abwehren kann.','4r1k1/8/8/8/8/2N5/8/4KB2','',['Wegziehen, dazwischenstellen oder schlagen.','Wer kann auf e2, e3 oder e4?'],{schach:true,pruef:{abwehr:true}}),
  X('W4','Klicke alle schwarzen Figuren an, die angegriffen und nicht gedeckt sind.','r5k1/pp3ppp/n7/1B2b3/8/5N2/PP3PPP/4K2R','',['Welche weißen Figuren greifen an?','Wer deckt die angegriffene Figur?'],{pruef:{haengt:'b'}}),
  X('W5','Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.','r3k2r/8/8/8/2b5/8/8/R3K2R','',['Über welche Felder zieht der König?','Wen greift der Läufer c4 an?'],{rechte:'KQkq',leer:true,pruef:{rochade:true}}),
  X('W6','Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf.','7k/8/6K1/8/8/8/8/1Q6','',['Welcher Damenzug nimmt dem König das letzte Feld, ohne Schach zu geben?','Der König g6 deckt g7 und h7.'],{leer:true,pruef:{patt:'b1'}})],
 E:[Z('Berührt, geführt: Du hast den Springer b1 berührt. Markiere alle Felder, auf die er jetzt ziehen muss.','e4 e5',null,A.E1||'',['Wer eine eigene Figur berührt, muss sie ziehen, wenn es geht.','Springer: zwei geradeaus, eins zur Seite.'],{leer:true,pruef:{legal:'b1'}}),
  X('E2','Ein Kind will mit dem König nach vorn. Markiere alle Felder, auf die der weiße König ziehen darf.','8/8/4k3/8/4K3/8/8/8','',['Ein König darf nie neben den anderen König.','Welche Felder greift der König e6 an?'],{leer:true,pruef:{legal:'e4'}}),
  X('E3','Weiß ist am Zug. Klicke die Figur an, die dem weißen König Schach gibt.'+KEINE,'8/8/8/8/8/5k2/5p2/5K2','',['Steht der König im Schach?','Hat Weiß noch einen erlaubten Zug?'],{pruef:{schachgeber:true}}),
  X('E4','Erst das Schach abwehren: Markiere alle Felder, auf die der weiße König ziehen kann.'+KEINS,'k7/8/8/8/1b6/8/5PPP/4K3','',['Woher kommt das Schach?','Kann eine andere Figur dazwischen?'],{schach:true,leer:true,pruef:{flucht:true}}),
  X('E5','Dein Gegner bietet Remis an. Prüfe zuerst: Klicke alle Felder an, auf denen Weiß in einem Zug mattsetzt.'+KEINS,'6k1/r4ppp/8/8/8/8/1Q3PPP/6K1','',['Suche Schachgebote.','Kann der König fliehen?'],{leer:true,pruef:{matt:true}}),
  X('E6','Rundenende! Es zählt, was auf dem Brett steht. Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.','r3k3/pp3ppp/2n5/3q4/3N4/2N5/PP3PPP/4K2R','',['Welche schwarzen Figuren stehen auf einem Feld, das Weiß angreift?','Wer kann zurückschlagen?'],{pruef:{gewinn:'w'}})],
 A:[X('A1','Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','7k/4P3/6K1/8/8/8/8/8','',['Der Bauer wird umgewandelt.','Der König g6 deckt g7 und h7.'],{leer:true,pruef:{matt:true}}),
  X('A2','Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.','2r3k1/5ppp/p7/1n6/8/2B5/1Q3PPP/6K1','',['Welche Figuren stehen ungedeckt?','Zähle die Figurenwerte.'],{pruef:{gewinn:'w'}}),
  X('A3','Klicke alle weißen Figuren an, die angegriffen und nicht gedeckt sind.','r1b1k3/ppp2ppp/8/4q3/8/2N2B2/P1P3PP/R5K1','',['Was greift die Dame e5 an?','Wer deckt die weißen Figuren?'],{pruef:{haengt:'w'}}),
  X('A4','Klicke alle Felder an, auf denen die Dame pattsetzen würde.','k7/8/1K6/8/8/8/8/3Q4','',['Der König b6 deckt a7 und b7.','Welcher Damenzug deckt b8, ohne Schach zu geben?'],{leer:true,pruef:{patt:'d1'}}),
  ZE('Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.'+KEINER,'e4 a6 e5 a5 c4 d5',null,A.A5||'',['Welcher schwarze Bauer hat gerade einen Doppelschritt gemacht?','Wer steht direkt daneben?'],{pruef:{epschlaeger:true}}),
  X('A6','Matt in einem Zug mit der Dame: Klicke das Feld an, auf das die Dame zieht.','5rk1/5p1p/5PpQ/8/8/8/8/6K1','',['Die Dame steht schon nah am König.','Wer deckt die Dame?'],{leer:true,pruef:{matt:true}})],
 S:[X('S1','Was droht dein Gegner? Schwarz ist am Zug. Klicke alle Felder an, auf denen Schwarz in einem Zug mattsetzt.','r5k1/5ppp/8/8/8/8/5PPP/6K1','',['Die weißen Bauern sperren den König ein.','Die 1. Reihe ist offen.'],{zug:'b',leer:true,pruef:{matt:true}}),
  X('S2','Ein Kind ruft „Matt!“. Markiere alle Felder, auf die der schwarze König ziehen kann.'+KEINS,'4R1k1/5pp1/7p/8/8/8/8/6K1','',['Prüfe alle Nachbarfelder von g8.','Der Bauer h6 hat ein Feld frei gemacht.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  X('S3','Ein Kind sagt: „Gewonnen!“ Schwarz ist am Zug. Klicke die Figur an, die dem schwarzen König Schach gibt.'+KEINE,'7k/5K2/6Q1/8/8/8/8/8','',['Steht der König im Schach?','Kann Schwarz ziehen?'],{zug:'b',pruef:{schachgeber:true}}),
  X('S4','Darf Weiß jetzt rochieren? Markiere alle Felder, auf die der König mit einer Rochade ziehen darf.'+KEINS,'4r1k1/8/8/8/8/8/8/R3K2R','',['Steht der König im Schach?','Rochade ist kein Mittel gegen Schach.'],{rechte:'KQ',schach:true,leer:true,pruef:{rochade:true}}),
  ZE('Streitfall en passant: Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.'+KEINER,'e4 d5 e5 f5 h3 a6',null,A.S5||'',['Wann hat Schwarz den Doppelschritt gemacht?','En passant geht nur im direkt folgenden Zug.'],{pruef:{epschlaeger:true}}),
  X('S6','Das übersehene Schach: Weiß steht im Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','6k1/8/8/8/1b6/8/5PPP/1N2K2R','',['Woher kommt das Schach?','Wegziehen, dazwischenstellen oder schlagen.'],{schach:true,pruef:{abwehr:true}})],
 L:[X('L1','Weiß setzt in einem Zug matt. Klicke alle Felder an, auf die die Dame dafür ziehen kann.','2k5/8/2K5/8/8/8/8/5Q2','',['Die Dame muss Schach geben.','Der König c6 deckt b7, c7 und d7.'],{leer:true,pruef:{matt:true}}),
  X('L2','Klicke alle Felder an, auf denen die Dame pattsetzen würde.','7k/5K2/8/8/8/8/8/4Q3','',['Der König f7 deckt g7 und g8.','Welcher Damenzug nimmt h7, ohne Schach zu geben?'],{leer:true,pruef:{patt:'e1'}}),
  X('L3','Weiß steht im Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','3qk3/8/8/8/8/4B3/2P2PPP/3K1N2','',['Woher kommt das Schach?','Wer kann dazwischen oder schlagen?'],{schach:true,pruef:{abwehr:true}}),
  X('L4','Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.','4k3/1p3ppp/8/3n4/8/2BR4/5PPP/6K1','',['Welche Figuren greift Weiß an?','Wer ist gedeckt?'],{pruef:{gewinn:'w'}}),
  X('L5','Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.'+KEINS,'1r2k3/8/8/8/8/8/8/R3K2R','',['Über welche Felder zieht der König?','Wen greift der Turm b8 an?'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  X('L6','Ist das Matt? Markiere alle Felder, auf die der schwarze König ziehen kann.'+KEINS,'1R4k1/5ppp/8/8/8/8/8/6K1','',['Steht der König im Schach?','Kann ein Bauer vorher ein Feld frei machen?'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 18 geschrieben');
