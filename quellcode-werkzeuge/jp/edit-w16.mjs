// Woche 16 „Patt und Remis“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, edit-w9.mjs, edit-w10.mjs, edit-w11.mjs, edit-w12.mjs, edit-w13.mjs, edit-w14.mjs, edit-w15.mjs, dann diese Datei.
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
const URL2={...URLS};
F[16]={thema:'Patt und Remis',
 lernziel:'Ich kann Patt, Remis und Matt unterscheiden.',
 leitfrage:'Wann gewinnt jemand, und wann endet eine Partie unentschieden?',
 vorwissen:'Schach und Matt (Woche 8), Umwandlung (Woche 13).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'FIDE-Regeln zu Patt und Remis in kindgerechter Form, Ludgerus-Schachdiplom Silber (Patt). Brettaufgaben eigene Aufgaben; Patt, Matt und Fluchtfelder mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'En passant wiederholen, dann: Ist das Matt?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W4 en passant und Matt aus den letzten Wochen aufgreifen.',
   'W5 und W6 als Rätsel: Der schwarze König kann nicht ziehen. Ist das Matt? Ziel nennen: „Heute lernt ihr, wann eine Partie unentschieden endet, und wie man ein Patt vermeidet.“'],
  kinder:'Ich erkenne, dass „kein Zug möglich“ nicht immer Matt ist.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Patt, Matt und die Remis-Regeln',
  ablauf:['Plakat „Wie eine Partie enden kann“ aufhängen. Am Lehrbrett E1 bis E3: Patt heißt, wer am Zug ist, steht nicht im Schach, hat aber keinen erlaubten Zug. Dann ist die Partie remis. Matt heißt, der König steht im Schach und ist nicht zu retten.',
   'E4 bis E6: Zu wenig Material, mit König und Läufer oder König und Springer allein kann man nicht mattsetzen. Patt kann auch mit Bauern entstehen. Kurz besprechen: Remis durch Einigung, dreimalige Wiederholung und 50 Züge.',
   'Merksatz: „Matt: im Schach und kein Ausweg. Patt: nicht im Schach und kein Zug.“'],
  kinder:'Ich erkläre den Unterschied zwischen Matt und Patt an einer Stellung.',
  links:[{art:'druck',label:'Plakat: Wie eine Partie enden kann',was:'remis'},{art:'feld',label:'Lehrbrett: Patt und Remis E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Matt oder Patt? Zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt einen schwarzen König in eine Ecke und dazu weißen König und Dame. Kind B sagt: Matt, Patt oder keins von beiden, und begründet. Danach wechseln die Rollen.',
   'Frage zwischendurch: „Woran erkennst du, dass es Patt und nicht Matt ist?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich unterscheide Matt und Patt sicher.',
  links:[{art:'druck',label:'Arbeitsblatt: Patt und Remis',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Irrtümer klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Patt ist kein Sieg. Steht der König im Schach, ist es nie Patt. Kann noch eine andere Figur ziehen, ist es kein Patt. König und Turm reichen zum Matt.',
   'Bei jeder Aufgabe nachfragen: „Steht der König im Schach?“ oder „Kann irgendeine Figur noch ziehen?“'],
  kinder:'Ich kenne die typischen Irrtümer bei Patt und Remis.',
  links:[{art:'feld',label:'Lehrbrett: Irrtümer klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Ist das Matt oder Patt? Woran erkennst du das?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich erkenne Matt, Patt und Remis ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Rette dich ins Patt“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Weiß hat König und Dame, Schwarz nur den König. Weiß versucht in zehn Zügen mattzusetzen. Schwarz gewinnt, wenn ein Patt entsteht oder die zehn Züge um sind. Danach wechseln die Rollen.',
   'Rückblick: „Wie kann man ein Patt vermeiden?“ (Dem König immer ein Feld lassen, bis zum Matt.) Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr, wie man mit Dame und König sicher mattsetzt.'],
  kinder:'Ich vermeide mit der Dame ein Patt.',
  links:[{art:'druck',label:'Plakat: Wie eine Partie enden kann',was:'remis'}]}],
 hinweise:{hilfe:'Zwei Fragen der Reihe nach stellen: Steht der König im Schach? Kann irgendeine Figur noch ziehen?',
  zusatz:'Eine Stellung bauen, in der ein Zug der Dame mattsetzt und ein anderer Damenzug Patt ergibt.',
  kuerzen:'„Matt oder Patt?“ auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer verwechselt noch Matt und Patt? Wer setzt mit der Dame aus Versehen patt? Das greifst du in Woche 17 beim Matt mit Dame und König gleich zu Beginn wieder auf.',
 feld:{
 W:[ZE('Markiere alle Felder, auf die der Bauer d5 jetzt ziehen kann.','d4 a6 d5 c5',null,'d6 und c6. Auf c6 schlägt er en passant.',['Gerade nach vorn ist frei.','Über welches Feld ist c7–c5 gesprungen?'],{leer:true,pruef:{legal:'d5'}}),
  ZE('Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','f4 a6 f5 a5 h4 a4 h5 g5',null,'f5 und h5. Beide stehen neben g5 auf der 5. Reihe.',['Wer steht neben g5?','Auf der 5. Reihe.'],{pruef:{epschlaeger:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','6k1/5ppp/8/8/8/8/8/3R2K1',null,'d8. Grundreihenmatt: Die eigenen Bauern sperren den König ein.',['Der König hat vor sich nur eigene Bauern.','Der Turm muss auf die 8. Reihe.'],{leer:true,pruef:{matt:true}}),
  T('Der Turm gibt Schach. Markiere alle Felder, auf die der schwarze König ziehen kann.','7k/8/8/8/8/8/8/K6R',null,'g8 und g7. Er verlässt die h-Linie.',['Der Turm greift die h-Linie an.','Zeige die Nachbarfelder.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','k7/2Q5/1K6/8/8/8/8/8',null,'Keins. Alle Nachbarfelder sind angegriffen.',['Prüfe a7, b7 und b8.','Welche weiße Figur greift jedes Feld an?'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Schwarz ist am Zug und kann nicht ziehen. Ist das Matt? Klicke die Figur an, die dem schwarzen König Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.','8/8/8/8/8/1K6/2Q5/k7',null,'Keine. Der König steht nicht im Schach und kann nicht ziehen: Das ist Patt, kein Matt. Die Partie ist remis.',['Greift die Dame das Feld a8 an?','Kein Schach heißt kein Matt.'],{zug:'b',pruef:{schachgeber:true}})],
 E:[T('Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Wenn keine, drücke „Prüfen“ ohne Markierung.','7k/5Q2/6K1/8/8/8/8/8',null,'Keine. Der König steht nicht im Schach und kann nicht ziehen: Patt. Die Partie endet remis.',['Steht der König im Schach?','Hat Schwarz noch einen erlaubten Zug?'],{zug:'b',pruef:{ziehbar:true}}),
  T('Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf, weil der schwarze König dann patt wäre.','7k/8/6K1/3Q4/8/8/8/8',null,'a2, b3, c4, e6 und f7. Von dort deckt die Dame g8, der weiße König deckt g7 und h7. Der schwarze König hätte kein Feld und stünde nicht im Schach.',['Welches Feld des Königs ist noch frei?','Von welchen Feldern deckt die Dame g8, ohne Schach zu geben?'],{leer:true,pruef:{patt:'d5'}}),
  T('Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.','7k/8/6K1/3Q4/8/8/8/8',null,'a8 und d8. Die Dame gibt Schach über die 8. Reihe, der weiße König deckt g7 und h7.',['Die Dame gibt Schach, der König hat kein Feld.','Der weiße König deckt g7 und h7.'],{leer:true,pruef:{matt:true}}),
  T('Mit welchen Figuren kann Weiß zusammen mit dem König allein mattsetzen? Klicke sie an.','4k3/8/8/8/8/8/8/RNBQK3',['a1','d1'],'Mit der Dame oder mit einem Turm. Mit nur einem Läufer oder nur einem Springer geht es nicht.',['Ein Läufer deckt nur Felder einer Farbe.','Ein Springer allein ist zu schwach.']),
  T('Weiß hat König und Läufer, Schwarz nur den König. Klicke die weißen Figuren an, mit denen Weiß noch mattsetzen kann. Wenn keine, drücke „Prüfen“ ohne Markierung.','4k3/8/8/8/8/8/8/2B1K3',[],'Keine. König und Läufer reichen nicht zum Matt. Die Partie ist sofort remis, zu wenig Material.',['Kann ein Läufer alle Fluchtfelder decken?','Denk an die Felderfarben.']),
  T('Weiß ist am Zug. Markiere alle Felder, auf die der weiße König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','8/8/8/8/8/2k5/2p5/2K5',null,'Keins. Der König steht nicht im Schach, kann aber nicht ziehen: Patt. Auch mit Bauern kann ein Patt entstehen.',['Welche Felder greifen Bauer und König an?','Steht der weiße König im Schach?'],{leer:true,pruef:{flucht:true}})],
 A:[T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','8/8/8/8/8/8/5Q2/K6k',null,'Keins. Die Dame greift g1, g2 und h2 an, der König steht aber nicht im Schach: Patt.',['Prüfe g1, g2 und h2.','Steht der König im Schach?'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf.','k7/8/1K6/8/8/4Q3/8/8',null,'e5, f4 und g3. Von dort deckt die Dame b8, der König b6 deckt a7 und b7. Der schwarze König hätte kein Feld und stünde nicht im Schach.',['Welcher Damenzug nimmt alle Felder, ohne Schach zu geben?','Prüfe a7, b7 und b8.'],{leer:true,pruef:{patt:'e3'}}),
  T('Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.','k7/8/1K6/8/8/4Q3/8/8',null,'e8. Die Dame gibt Schach über die 8. Reihe, der König b6 deckt a7 und b7.',['Die Dame gibt Schach, der König hat kein Feld.','Der weiße König deckt a7, b7 und c7.'],{leer:true,pruef:{matt:true}}),
  T('Weiß hat König und Springer, Schwarz nur den König. Klicke die weißen Figuren an, mit denen Weiß mattsetzen kann. Wenn keine, drücke „Prüfen“ ohne Markierung.','4k3/8/8/8/8/8/8/1N2K3',[],'Keine. Mit König und Springer allein kann man nicht mattsetzen: remis.',['Reicht ein Springer?','Zu wenig Material heißt remis.']),
  T('Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Wenn keine, drücke „Prüfen“ ohne Markierung.','8/8/8/p7/P7/8/5Q2/K6k',null,'Keine. Der Bauer a5 ist blockiert, der König hat kein Feld: Patt.',['Kann der Bauer ziehen?','Kann der König ziehen?'],{zug:'b',pruef:{ziehbar:true}}),
  T('Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Ist es Patt?','8/8/8/8/p7/8/5Q2/K6k',null,'Der Bauer a4 kann noch ziehen. Deshalb ist es kein Patt, auch wenn der König festsitzt.',['Kann der Bauer ziehen?','Ein Zug irgendeiner Figur reicht.'],{zug:'b',pruef:{ziehbar:true}})],
 S:[T('Patt ist kein Sieg: Klicke alle Felder an, auf denen die Dame pattsetzen würde.','7k/8/6K1/8/8/8/8/5Q2',null,'c4 und f7. Von dort deckt die Dame g8, der König g6 deckt g7 und h7, und es ist kein Schach. Patt wäre nur remis.',['Welche Damenzüge nehmen dem König alle Felder, ohne Schach zu geben?','Der weiße König deckt g7 und h7.'],{leer:true,pruef:{patt:'f1'}}),
  T('Ein Kind ruft „Patt!“. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','k7/1Q6/1K6/8/8/8/8/8',null,'Keins. Aber die Dame gibt Schach: Das ist Matt, nicht Patt. Weiß gewinnt.',['Steht der König im Schach?','Patt gibt es nur ohne Schach.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Der schwarze König sitzt fest. Klicke alle schwarzen Figuren an, die ziehen können.','8/8/8/8/8/8/5Q2/K5nk',null,'Der Springer g1. Deshalb ist es kein Patt, Schwarz muss mit dem Springer ziehen.',['Kann eine andere schwarze Figur ziehen?','Ein Zug reicht, dann ist es kein Patt.'],{zug:'b',pruef:{ziehbar:true}}),
  T('Mit welchen Figuren kann Weiß zusammen mit dem König allein mattsetzen? Klicke sie an.','4k3/8/8/8/8/8/8/R3K3',['a1'],'Mit dem Turm. König und Turm reichen zum Matt, das lernt ihr in Woche 33.',['Wie war es bei der Dame?','Ein Turm deckt eine ganze Reihe.']),
  T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','k7/1R6/1K6/8/8/8/8/8',null,'Keins, und der König steht nicht im Schach: Patt. Der Turm auf b7 darf nicht geschlagen werden, weil der König b6 ihn deckt.',['Kann der König den Turm schlagen?','Steht er im Schach?'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das der Turm zieht.','7k/8/6K1/8/8/8/8/R7',null,'a8. Der Turm gibt Schach über die 8. Reihe, der König g6 deckt g7 und h7.',['Der Turm muss auf die 8. Reihe.','Welche Felder deckt der weiße König?'],{leer:true,pruef:{matt:true}})],
 L:[T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','8/8/8/8/8/8/2Q5/k6K',null,'Keins, und der König steht nicht im Schach: Patt.',['Prüfe a2, b1 und b2.','Steht der König im Schach?'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Klicke alle Felder an, auf denen die Dame pattsetzen würde.','k7/8/2K5/8/8/8/8/1Q6',null,'b6. Die Dame deckt a7, b7 und b8, gibt aber kein Schach.',['Welche Damenzüge nehmen dem König alle Felder, ohne Schach zu geben?','Prüfe a7, b7 und b8.'],{leer:true,pruef:{patt:'b1'}}),
  T('Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.','k7/8/2K5/8/8/8/8/1Q6',null,'b7. Die Dame gibt Schach und ist vom König c6 gedeckt.',['Die Dame gibt Schach, der König hat kein Feld.','Welche Felder deckt der weiße König?'],{leer:true,pruef:{matt:true}}),
  T('Mit welchen Figuren kann Weiß zusammen mit dem König allein mattsetzen? Klicke sie an.','4k3/8/8/8/8/8/8/R1N1K3',['a1'],'Mit dem Turm. Mit dem Springer allein geht es nicht.',['Reicht ein Springer?','Reicht ein Turm?']),
  T('Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Ist es Patt?','8/8/8/8/8/1p6/5Q2/K6k',null,'Der Bauer b3 kann noch ziehen, also kein Patt.',['Kann der Bauer ziehen?','Ein Zug reicht.'],{zug:'b',pruef:{ziehbar:true}}),
  T('Ist das Matt oder Patt? Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','7k/6Q1/6K1/8/8/8/8/8',null,'Keins. Die Dame gibt Schach und ist vom König g6 gedeckt: Matt.',['Steht der König im Schach?','Kann er die Dame schlagen?'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 16 geschrieben');
