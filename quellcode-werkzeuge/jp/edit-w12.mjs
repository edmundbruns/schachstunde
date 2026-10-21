// Woche 12 „Legal oder illegal? Starke und schwache Figuren“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, edit-w9.mjs, edit-w10.mjs, edit-w11.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import {Chess} from '../dist/assets/chess.mjs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,routenplaner:'https://www.youtube.com/watch?v=b9sWS-2tGws'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
// Stellung nach Zügen aus der Grundstellung, damit keine Stellung von Hand getippt wird
const nach=z=>{const g=new Chess();for(const m of z.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],zug:f[1]}};
const Z=(frage,zuege,targets,antwort,hilfe,extra={})=>{const {fen,zug}=nach(zuege);return T(frage,fen,targets,antwort,hilfe,{...(zug==='b'?{zug:'b'}:{}),...extra})};
const M1='Lumi Matt in einem Zug';
F[12]={thema:'Legal oder illegal? Starke und schwache Figuren',
 lernziel:'Ich kann erkennen, ob eine Stellung erlaubt ist, und begründen, warum eine Figur stark ist.',
 leitfrage:'Kann es diese Stellung im Spiel überhaupt geben, und welche Figur hat hier am meisten Kraft?',
 vorwissen:'Alle Regeln der Bronze-Stufe (Woche 1 bis 11).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Silber (Themen erlaubte Stellungen und Figurenstärke), Lumi „Matt in einem Zug“, Minispiel „Der Routenplaner“ (Deutsche Schulschachstiftung). Übrige Brettaufgaben eigene Aufgaben; Regelverstöße und Zugfelder automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Bronze-Rückblick, dann: Kann es diese Stellung geben?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W4 eine kurze Bronze-Runde: Grundstellung, Schach, Matt, Tauschen.',
   'W5 und W6 als Detektivfrage: „Kann es diese Stellung im Spiel geben?“ Ziel nennen: „Heute werdet ihr Regel-Detektive und lernt, welche Figuren stark und welche schwach stehen.“'],
  kinder:'Ich erkenne, dass manche Stellungen nicht erlaubt sind.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Vier Regeln für erlaubte Stellungen, Figuren zählen',
  ablauf:['Am Lehrbrett E1 bis E4 die vier Regeln erarbeiten: Kein Bauer steht auf der 1. oder 8. Reihe. Jede Farbe hat genau einen König. Die Könige stehen nie nebeneinander. Wer nicht am Zug ist, steht nicht im Schach.',
   'E5 und E6: Starke und schwache Figuren. Die Kinder zählen die Zugfelder: Eine Figur in der Mitte hat mehr Felder als am Rand, eine eingesperrte Figur ist schwach.',
   'Merksätze: „Erst die vier Regeln prüfen, dann sagen: erlaubt oder nicht.“ und „Ein Springer am Rand bringt Kummer und Schand.“'],
  kinder:'Ich nenne die vier Regeln und finde die stärkere Figur durch Zählen.',
  links:[{art:'feld',label:'Lehrbrett: Regeln und Figurenstärke E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Detektivspiel zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A baut eine Stellung mit genau einem Regelfehler oder ganz ohne Fehler. Kind B sagt, ob sie erlaubt ist, und begründet mit einer der vier Regeln. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich finde Regelfehler und begründe sie.',
  links:[{art:'druck',label:'Arbeitsblatt: Legal oder illegal?',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Irrtümer klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Schwarze Bauern auf der 1. Reihe, beide Könige im Schach, zwei Damen sind erlaubt, offene Diagonalen machen Läufer stark, die Dame in der Ecke, Könige nebeneinander.',
   'Bei jeder Aufgabe nachfragen: „Welche Regel ist verletzt?“ oder „Woran erkennst du, dass die Figur stärker ist?“'],
  kinder:'Ich kann begründen, warum eine Stellung erlaubt ist oder nicht.',
  links:[{art:'feld',label:'Lehrbrett: Irrtümer klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du dir bei einigen eine Stellung zeigen und fragst: „Welche der vier Regeln prüfst du zuerst?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich erkenne erlaubte Stellungen und starke Figuren ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Der Routenplaner“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Kind B stellt drei schwarze Bauern als Hindernisse auf und legt ein Steinchen als Ziel. Kind A führt einen Springer zum Ziel, ohne je auf ein Feld zu ziehen, das ein Bauer angreift. Passiert das doch, beginnt es von vorn. Gezählt werden die Züge. Danach wechseln die Rollen.',
   'Rückblick: „Welche der vier Regeln hast du heute am häufigsten gebraucht?“ Aufräum-Ritual. Ausblick: Nächstes Mal wird ein Bauer zur Dame, die Bauernumwandlung.'],
  kinder:'Ich führe meine Figur sicher zum Ziel.',
  links:[{art:'video',label:'Minispiel „Der Routenplaner“ (Video)',url:URLS.routenplaner}]}],
 hinweise:{hilfe:'Die vier Regeln als Karte neben das Brett legen und der Reihe nach abhaken. Beim Zählen der Zugfelder jedes Feld mit einem Steinchen belegen.',
  zusatz:'Eine Stellung bauen, die auf den ersten Blick falsch aussieht, aber erlaubt ist, zum Beispiel mit zwei Damen nach einer Umwandlung.',
  kuerzen:'Das Detektivspiel auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Routenplaner hat nur eine Runde.'},
 nachher:'Wer prüft noch nicht alle vier Regeln? Wer zählt die Zugfelder noch nicht sicher? Das Zählen greifst du in Woche 13 bei den Freibauern wieder auf: Welcher Bauer ist stark?',
 feld:{
 W:[T('Klicke alle schwarzen Figuren an, die falsch stehen.','rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',['d8','e8'],'Dame und König sind vertauscht. Die schwarze Dame gehört auf das dunkle Feld d8.',['Schau in die Mitte der 8. Reihe.','Die Dame steht auf ihrer Farbe.']),
  T('Klicke die Figur an, die dem weißen König Schach gibt.','4k3/8/8/8/8/8/6n1/4K3',null,'Der Springer g2.',['Prüfe jede schwarze Figur.','Denk an die Springersprünge.'],{schach:true,pruef:{schachgeber:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','8/8/8/6Nk/7P/6K1/2Q5/8',null,'h7. Die Dame gibt Schach, der Springer g5 deckt sie.',['Die Dame braucht Deckung.','Welches Feld deckt der Springer?'],{quelle:M1+', Aufgabe 47',leer:true,pruef:{matt:true}}),
  T('Welche Figur sollte die Dame schlagen? Klicke sie an.','6k1/8/8/2r5/8/8/2Q3n1/6K1',null,'Den Turm c5, er ist ungedeckt: plus 5. Der Springer g2 brächte nur 3.',['Welche schwarzen Figuren erreicht die Dame?','Welche ist mehr wert?'],{pruef:{beste:'w'}}),
  T('Kann es diese Stellung geben? Klicke die Figur an, die so nie stehen kann.',{e1:'K',e8:'k',c1:'P'},null,'Der Bauer c1. Ein weißer Bauer steht nie auf der 1. Reihe, dort beginnt er nicht und dorthin zieht er nie.',['Wo stehen Bauern am Anfang?','Bauern ziehen nie rückwärts.'],{pruef:{illegal:true}}),
  T('Kann es diese Stellung geben? Klicke die Figuren an, die so nie stehen können.','8/8/8/3k4/3K4/8/8/8',null,'Beide Könige. Könige stehen nie nebeneinander, sie würden sich gegenseitig angreifen.',['Wie weit stehen die Könige auseinander?','Darf ein König neben den anderen ziehen?'],{pruef:{illegal:true}})],
 E:[T('Regel 1: Klicke die Figur an, die so nie stehen kann.',{e1:'K',e8:'k',a8:'P'},null,'Der Bauer a8. Auf der 8. Reihe wäre er längst umgewandelt worden.',['Was passiert mit einem Bauern auf der letzten Reihe?','Er bleibt kein Bauer.'],{pruef:{illegal:true}}),
  T('Regel 4: Weiß ist am Zug. Klicke den König an, der so nicht stehen kann.','4k3/8/8/8/8/8/8/4RK2',null,'Der schwarze König e8. Er steht im Schach, aber Weiß ist am Zug. Dann hätte Schwarz das Schach im letzten Zug nicht abgewehrt.',['Wer steht im Schach?','Wer ist am Zug?'],{pruef:{illegal:true}}),
  T('Regel 2: Klicke alle Figuren an, die hier nicht zusammen stehen können.',{e1:'K',a4:'K',e8:'k'},null,'Die beiden weißen Könige e1 und a4. Jede Farbe hat genau einen König, er kann nie geschlagen oder umgewandelt werden.',['Zähle die Könige jeder Farbe.','Einen zweiten König gibt es nie.'],{pruef:{illegal:true}}),
  T('Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.','4k3/8/8/8/8/8/PPPPPPPP/4K3',null,'Ja. Acht Bauern auf der 2. Reihe und zwei Könige mit Abstand: alle vier Regeln sind erfüllt.',['Prüfe die vier Regeln der Reihe nach.','Bauern auf der 2. Reihe sind erlaubt.'],{pruef:{illegal:true}}),
  T('Welcher Springer ist stärker? Klicke ihn an. Zähle seine Zugfelder.',{a1:'N',d4:'N'},null,'Der Springer d4. Er hat 8 Zugfelder, der Springer a1 in der Ecke nur 2. Ein Springer am Rand bringt Kummer und Schand.',['Zähle für jeden Springer die Felder.','In der Mitte hat er mehr Felder.'],{pruef:{staerkste:'N'}}),
  T('Welcher weiße Läufer ist schwach? Klicke ihn an.',{c1:'B',b2:'P',d2:'P',f4:'B',h2:'P'},null,'Der Läufer c1. Die eigenen Bauern b2 und d2 sperren ihn ein, er hat kein einziges Zugfeld.',['Zähle die Zugfelder beider Läufer.','Wer wird von den eigenen Bauern eingesperrt?'],{pruef:{schwaechste:'B'}})],
 A:[T('Klicke die Figur an, die so nie stehen kann.',{e1:'K',e8:'k',h1:'P',g2:'P'},null,'Der Bauer h1. Weiße Bauern stehen nie auf der 1. Reihe.',['Wo beginnen die weißen Bauern?','Bauern ziehen nie rückwärts.'],{pruef:{illegal:true}}),
  T('Klicke die Figuren an, die so nie stehen können.','8/8/4k3/4K3/8/8/8/8',null,'Beide Könige, e5 und e6. Sie stehen nebeneinander.',['Wie weit sind die Könige voneinander entfernt?','Könige berühren sich nie.'],{pruef:{illegal:true}}),
  T('Weiß ist am Zug. Klicke den König an, der so nicht stehen kann.','4k3/8/8/1B6/8/8/8/4K3',null,'Der schwarze König e8. Der Läufer b5 gibt ihm Schach, obwohl Weiß am Zug ist.',['Wer steht im Schach?','Wer ist am Zug?'],{pruef:{illegal:true}}),
  T('Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.','4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3',null,'Ja. Alle Bauern stehen auf ihren Startreihen, die Könige haben Abstand, niemand steht im Schach.',['Prüfe die vier Regeln.','Ist eine Regel verletzt?'],{pruef:{illegal:true}}),
  T('Welcher weiße Turm ist stärker? Klicke ihn an.',{a1:'R',b1:'N',a2:'P',d4:'R'},null,'Der Turm d4. Er hat 14 Zugfelder. Der Turm a1 ist von eigenen Figuren eingesperrt und hat keins.',['Zähle die Zugfelder beider Türme.','Eigene Figuren sperren den Weg.'],{pruef:{staerkste:'R'}}),
  T('Welcher weiße Springer ist schwach? Klicke ihn an.',{h1:'N',e4:'N'},null,'Der Springer h1. In der Ecke hat er nur 2 Zugfelder, auf e4 sind es 8.',['Zähle die Zugfelder.','Am Rand fallen Felder weg.'],{pruef:{schwaechste:'N'}})],
 S:[T('Klicke die Figur an, die so nie stehen kann.',{e1:'K',e8:'k',d1:'p'},null,'Der schwarze Bauer d1. Auf der 1. Reihe wäre er schon umgewandelt worden.',['Für Schwarz ist die 1. Reihe die letzte Reihe.','Was passiert dort mit einem Bauern?'],{pruef:{illegal:true}}),
  T('Beide Könige stehen im Schach. Weiß ist am Zug. Klicke den König an, der so nicht stehen kann.','4k3/8/8/8/4R3/8/8/r3K3',null,'Der schwarze König e8. Weiß darf im Schach stehen, denn Weiß ist am Zug. Schwarz aber hätte sein Schach im letzten Zug abwehren müssen.',['Wer ist am Zug?','Wer durfte im Schach stehen bleiben?'],{pruef:{illegal:true}}),
  T('Zwei weiße Damen: Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.','4k3/8/8/8/8/8/8/Q2QK3',null,'Ja. Ein Bauer kann sich in eine zweite Dame umwandeln.',['Wie kann eine zweite Dame entstehen?','Denk an die Umwandlung.'],{pruef:{illegal:true}}),
  T('Welcher weiße Läufer ist stärker? Klicke ihn an.',{b2:'B',f1:'B',e2:'P',g2:'P'},null,'Der Läufer b2 auf der langen Diagonale. Der Läufer f1 ist von den eigenen Bauern eingesperrt.',['Zähle die Zugfelder beider Läufer.','Wer hat eine freie Diagonale?'],{pruef:{staerkste:'B'}}),
  T('Welche weiße Dame ist stärker? Klicke sie an.',{a1:'Q',b2:'P',b1:'N',d5:'Q'},null,'Die Dame d5 mit 27 Zugfeldern. Die Dame a1 kommt nur über die a-Linie hinaus.',['Zähle grob die Felder in alle Richtungen.','In der Mitte hat die Dame acht freie Richtungen.'],{pruef:{staerkste:'Q'}}),
  T('Klicke die Figuren an, die so nie stehen können.','8/8/8/8/8/2k5/1K6/8',null,'Beide Könige, b2 und c3. Sie stehen schräg nebeneinander, auch das ist verboten.',['Auch schräg zählt als nebeneinander.','Könige berühren sich nie.'],{pruef:{illegal:true}})],
 L:[T('Klicke die Figur an, die so nie stehen kann.',{e1:'K',e8:'k',b8:'p'},null,'Der schwarze Bauer b8. Schwarze Bauern beginnen auf der 7. Reihe und ziehen nach unten, nie auf die 8. Reihe.',['Wo beginnen die schwarzen Bauern?','In welche Richtung ziehen sie?'],{pruef:{illegal:true}}),
  T('Klicke die Figuren an, die so nie stehen können.','8/8/8/8/8/8/5k2/6K1',null,'Beide Könige, f2 und g1. Sie stehen nebeneinander.',['Wie weit sind die Könige voneinander entfernt?','Auch schräg zählt.'],{pruef:{illegal:true}}),
  T('Schwarz ist am Zug. Klicke den König an, der so nicht stehen kann.','4k3/8/8/8/8/8/8/r3K3',null,'Der weiße König e1. Er steht im Schach, aber Schwarz ist am Zug.',['Wer steht im Schach?','Wer ist am Zug?'],{zug:'b',pruef:{illegal:true}}),
  T('Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.','8/8/8/8/3k4/8/3K4/8',null,'Ja. Zwischen den Königen liegt ein freies Feld, sie stehen nicht nebeneinander.',['Prüfe den Abstand der Könige.','Ein Feld dazwischen reicht.'],{pruef:{illegal:true}}),
  T('Welcher weiße Springer ist stärker? Klicke ihn an.',{b1:'N',f5:'N',e3:'P'},null,'Der Springer f5 mit 7 Zugfeldern. Der Springer b1 hat nur 3.',['Zähle die Zugfelder beider Springer.','Auf e3 steht ein eigener Bauer.'],{pruef:{staerkste:'N'}}),
  T('Welcher weiße Läufer ist schwach? Klicke ihn an.',{f1:'B',e2:'P',g2:'P',c4:'B'},null,'Der Läufer f1. Die eigenen Bauern e2 und g2 sperren ihn ein.',['Zähle die Zugfelder beider Läufer.','Wer ist eingesperrt?'],{pruef:{schwaechste:'B'}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 12 geschrieben');
