// Woche 17 „Matt mit Dame und König“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w16.mjs, dann diese Datei.
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
URLS.mattChallenge='https://www.youtube.com/watch?v=pTEy2s2dwNA';
const KEINS=' Wenn keins, drücke „Prüfen“ ohne Markierung.',KEINE=' Wenn keine, drücke „Prüfen“ ohne Markierung.';
F[17]={thema:'Matt mit Dame und König',
 lernziel:'Ich kann mit Dame und König mattsetzen, ohne Patt.',
 leitfrage:'Wie sperrt die Dame den König ein, und wann darf sie mattsetzen?',
 vorwissen:'Gangart der Dame (Woche 4), Schach und Matt (Woche 8), Patt (Woche 16).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Klassische Kastenmethode des Damenmatts in kindgerechter Form, Ludgerus-Schachdiplom Silber (Matt mit Dame). Brettaufgaben eigene Aufgaben; Matt, Patt, Fluchtfelder und Kastengröße mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Patt oder Matt? Kurz wiederholen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 und W2: Ein Damenzug setzt matt, ein anderer setzt patt. Wer findet beide?',
   'W3 bis W6 zügig: Gangart der Dame, kleiner Kasten, Matt mit gedeckter Dame. Ziel nennen: „Heute lernt ihr, wie Dame und König gemeinsam aus jeder Stellung mattsetzen, ohne aus Versehen Patt zu machen.“'],
  kinder:'Ich erinnere mich: Matt heißt Schach und kein Ausweg, Patt heißt kein Schach und kein Zug.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Die Kastenmethode in vier Schritten',
  ablauf:['Plakat „Matt mit Dame und König“ aufhängen. Am Lehrbrett E1: Die Dame stellt sich einen Springersprung vom König entfernt. Sie sperrt eine Linie und eine Reihe, der König sitzt in einem Kasten.',
   'E2 und E3: Zieht der König, folgt die Dame wieder im Springersprung. Der Kasten wird kleiner, Schach ist dafür nicht nötig. Frage: „Warum gibt die Dame hier kein Schach?“',
   'E4: Die Dame allein schafft kein Matt, der weiße König muss kommen. E5 und E6: zwei Mattbilder und die Pattfalle in derselben Stellung.',
   'Merksatz: „Dame im Springersprung, Kasten klein, König holen, dann Matt. Vor jedem Damenzug fragen: Hat der König noch ein Feld?“'],
  kinder:'Ich erkläre die vier Schritte: Kasten bauen, Kasten verkleinern, König holen, mattsetzen.',
  links:[{art:'druck',label:'Plakat: Matt mit Dame und König',was:'damematt'},{art:'feld',label:'Lehrbrett: Kastenmethode E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Damenmatt zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A hat König e1 und Dame d1, Kind B nur den König e5. A setzt mit der Kastenmethode matt, B zählt die weißen Züge mit und ruft „Stopp!“, wenn ein Patt droht. Danach wechseln die Rollen.',
   'Wer es geschafft hat, versucht es mit weniger Zügen. Frage zwischendurch: „Woran erkennst du, dass jetzt der weiße König kommen muss?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich setze mit Dame und König matt, ohne Patt.',
  links:[{art:'druck',label:'Arbeitsblatt: Matt mit Dame und König',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Die ungedeckte Dame neben dem König wird geschlagen. Dauernd Schach geben vergrößert den Kasten. Ein zu kleiner Kasten ohne Schach ist Patt. Matt und Patt sehen ähnlich aus.',
   'Bei jeder Aufgabe nachfragen: „Ist die Dame gedeckt?“ oder „Hat der König nach deinem Zug noch ein Feld?“'],
  kinder:'Ich kenne die typischen Fehler beim Damenmatt.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du einige am Brett das Damenmatt aus der Startstellung vorspielen und fragst: „Warum ziehst du die Dame dorthin?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde Kastenzug, Mattzug und Pattfalle ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Matt-Wettlauf“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Beide Paare bekommen dieselbe Startstellung (König e1, Dame d1 gegen König e5). Welches Paar setzt mit weniger weißen Zügen matt? Patt zählt als verloren. Danach wechseln die Rollen. Weitere Spielidee der Schulschachstiftung: Matt-Challenge (Video, vorher selbst ansehen).',
   'Rückblick: „Welcher Schritt war für dich am schwersten?“ Aufräum-Ritual. Ausblick: Nächstes Mal ist Weihnachtsturnier, dort könnt ihr das Damenmatt in echten Partien einsetzen.'],
  kinder:'Ich setze schnell und ohne Patt matt.',
  links:[{art:'druck',label:'Plakat: Matt mit Dame und König',was:'damematt'},{art:'video',label:'Spielidee „Matt-Challenge“ der Schulschachstiftung (Video)',url:URLS.mattChallenge}]}],
 hinweise:{hilfe:'Mit dem Finger den Kasten auf dem Brett umfahren. Dann fragen: Wohin muss die Dame, damit der Kasten kleiner wird und der König noch ein Feld hat?',
  zusatz:'Damenmatt aus einer selbst gewählten Startstellung in höchstens zehn weißen Zügen. Oder: eine Stellung bauen, in der zwei Damenzüge mattsetzen und einer patt.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Matt-Wettlauf hat nur eine Runde.'},
 nachher:'Wer setzt noch aus Versehen patt? Wer jagt den König mit Schachgeboten, statt ihn einzusperren? Das greifst du im Weihnachtsturnier (Woche 18) in der Partiebesprechung auf und übst es in Woche 33 mit dem Turm.',
 feld:{
 W:[T('Wiederholung: Klicke alle Felder an, auf denen die Dame pattsetzen würde.','7k/8/5K2/8/8/8/8/6Q1',null,'g6. Die Dame deckt g8 und h7, der König f6 deckt g7. Kein Schach und kein Zug: Patt.',['Welche Felder hat der schwarze König?','Von wo deckt die Dame sie, ohne Schach zu geben?'],{leer:true,pruef:{patt:'g1'}}),
  T('Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.','7k/8/5K2/8/8/8/8/6Q1',null,'g7. Die Dame gibt Schach und ist vom König f6 gedeckt.',['Die Dame gibt Schach, der König hat kein Feld.','Wer deckt die Dame?'],{leer:true,pruef:{matt:true}}),
  T('Markiere alle Felder, auf die die Dame d4 ziehen kann.','k7/8/8/8/3Q4/8/8/6K1',null,'Die ganze d-Linie, die 4. Reihe und beide Diagonalen bis zum Rand. Auf der Diagonale nach g1 steht der eigene König im Weg, deshalb nur e3 und f2.',['Gerade wie der Turm, schräg wie der Läufer.','Wo steht eine eigene Figur im Weg?'],{leer:true,pruef:{legal:'d4'}}),
  T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann.'+KEINS,'8/k7/2Q5/1K6/8/8/8/8',null,'Nur b8. Dame und König sperren alle anderen Felder. Der König sitzt in einem sehr kleinen Kasten.',['Prüfe a8, b8, b7, a6 und b6.','Welche weiße Figur greift jedes Feld an?'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Schwarz ist am Zug. Klicke die Figur an, die dem schwarzen König Schach gibt.'+KEINE,'8/8/8/8/8/5K2/6Q1/7k',null,'Die Dame g2. Sie ist vom König f3 gedeckt, der schwarze König hat kein Feld: Matt.',['Welche Figur greift h1 an?','Kann der König die Dame schlagen?'],{zug:'b',schach:true,pruef:{schachgeber:true}}),
  T('Weiß setzt in einem Zug matt. Klicke alle Felder an, auf die die Dame dafür ziehen kann.','6k1/8/6K1/8/8/8/8/Q7',null,'a8 und g7. Auf a8 gibt die Dame Schach über die 8. Reihe, auf g7 ist sie vom König g6 gedeckt.',['Der König g6 deckt f7, g7 und h7.','Es gibt zwei Lösungen.'],{leer:true,pruef:{matt:true}})],
 E:[T('Die Dame steht einen Springersprung vom König entfernt. Schwarz ist am Zug. Markiere alle Felder, auf die der König ziehen kann.','8/8/8/3k4/5Q2/8/8/4K3',null,'c6, e6 und c5. Die Dame sperrt die f-Linie und die 4. Reihe, dazu ihre Diagonalen. Der König sitzt in einem Kasten oben links.',['Welche Linie und welche Reihe sperrt die Dame?','Prüfe alle acht Nachbarfelder.'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Schwarz hat Ke6 gespielt. Die Dame folgt im Springersprung. Klicke das Feld an, auf dem der Kasten am kleinsten wird.','8/8/4k3/8/5Q2/8/8/4K3',['d4'],'d4. Die Dame steht wieder einen Springersprung vom König entfernt und sperrt jetzt die d-Linie und die 4. Reihe. Der König bleibt oben rechts eingesperrt.',['Die Felder im Springersprung vom König: d4, g5, c7, g7, c5, d8, f8.','Welches davon sperrt die meisten Felder, ohne Schach zu geben?']),
  T('Der Kasten ist schon klein. Klicke das Feld an, auf dem die Dame dem König nur noch zwei Felder lässt.','6k1/8/8/5Q2/8/8/8/4K3',['f6'],'f6. Der König hat nur noch g8 und h7. Jetzt holt Weiß den eigenen König, bis die Dame mattsetzen kann.',['Wieder im Springersprung.','Prüfe danach: Hat der König noch ein Feld? Sonst ist es Patt.']),
  T('Kann die Dame allein mattsetzen? Klicke alle Felder an, auf denen die Dame mattsetzt.'+KEINS,'k7/8/8/2Q5/8/8/8/6K1',null,'Keins. Die Dame allein schafft es nicht, der weiße König muss helfen. Vorsicht: Auf b6 oder c7 wäre es sogar Patt.',['Wo ist der weiße König?','Ein Matt braucht hier zwei Figuren.'],{leer:true,pruef:{matt:true}}),
  T('Der weiße König ist da. Klicke alle Felder an, auf denen die Dame mattsetzt.','3k4/8/3K4/8/8/7Q/8/8',null,'d7 und h8. Auf d7 steht die Dame direkt vor dem König und ist vom König d6 gedeckt. Auf h8 gibt sie Schach am Rand, der König d6 deckt c7, d7 und e7.',['Mattbild 1: Dame vor dem König, gedeckt.','Mattbild 2: Schach am Rand, die Könige stehen sich gegenüber.'],{leer:true,pruef:{matt:true}}),
  T('Achtung Patt: Klicke alle Felder an, auf die die Dame in dieser Stellung nicht ziehen darf.','3k4/8/3K4/8/8/7Q/8/8',null,'e6. Von dort deckt die Dame c8, e8 und e7, der König d6 deckt c7 und d7. Der König hätte kein Feld und stünde nicht im Schach: Patt.',['Welcher Damenzug nimmt alle Felder, ohne Schach zu geben?','Prüfe c8, e8, c7, d7 und e7.'],{leer:true,pruef:{patt:'h3'}})],
 A:[T('Schwarz ist am Zug. Die Dame baut einen Kasten. Markiere alle Felder, auf die der schwarze König ziehen kann.','8/8/1k6/8/2Q5/8/8/6K1',null,'a7, b7 und a5. Die Dame sperrt die c-Linie, die 4. Reihe und ihre Diagonalen.',['Welche Linie und welche Reihe sperrt die Dame?','Prüfe alle Nachbarfelder von b6.'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Klicke das Feld an, auf das die Dame zieht: einen Springersprung vom König entfernt und mit dem kleinsten Kasten.','8/8/8/6k1/8/2Q5/8/K7',['f3'],'f3. Die Dame sperrt die f-Linie und die 3. Reihe, der König bleibt rechts oben eingesperrt.',['Die Felder im Springersprung von g5: e4, f3, h3, e6, f7, h7.','Welches erreicht die Dame, und welches sperrt am meisten?']),
  T('Klicke alle Felder an, auf denen die Dame pattsetzen würde.','k7/2K5/8/8/8/8/8/5Q2',null,'f2 und g1. Von dort deckt die Dame a7, der König c7 deckt b7 und b8. Kein Schach und kein Zug: Patt.',['Der König c7 deckt b7 und b8.','Welche Damenzüge decken a7, ohne Schach zu geben?'],{leer:true,pruef:{patt:'f1'}}),
  T('Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.','k7/2K5/8/8/8/8/8/5Q2',null,'a6 und a1. Die Dame gibt Schach über die a-Linie, der König c7 deckt b7 und b8.',['Die Dame muss Schach geben.','Welche Felder deckt der König c7?'],{leer:true,pruef:{matt:true}}),
  T('Ein Kind sagt: „Matt!“ Markiere alle Felder, auf die der schwarze König ziehen kann.'+KEINS,'k7/1Q6/8/3K4/8/8/8/8',null,'b7. Die Dame ist nicht gedeckt, der König schlägt sie. Kein Matt.',['Wer deckt die Dame b7?','Ein König darf eine ungedeckte Figur schlagen.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Schwarz ist am Zug und kann nicht ziehen. Klicke die Figur an, die Schach gibt.'+KEINE,'7k/5Q2/8/6K1/8/8/8/8',null,'Keine. Kein Schach und kein Zug: Patt, also nur remis. Die Dame hätte dem König ein Feld lassen müssen.',['Greift die Dame h8 an?','Kein Schach heißt kein Matt.'],{zug:'b',pruef:{schachgeber:true}})],
 S:[T('Die Dame gibt Schach. Ist das Matt? Markiere alle Felder, auf die der schwarze König ziehen kann.'+KEINS,'7k/6Q1/8/4K3/8/8/8/8',null,'g7. Die Dame ist nicht gedeckt, der König schlägt sie. Fehler 1: Die Dame neben dem König braucht Deckung.',['Wer deckt die Dame g7?','Darf der König schlagen?'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Fehler Patt: Klicke alle Felder an, auf denen die Dame pattsetzen würde.','7k/8/6K1/8/8/8/8/2Q5',null,'c4. Von dort deckt die Dame g8, der König g6 deckt g7 und h7. Kein Schach: Patt, nur remis.',['Der König g6 deckt g7 und h7.','Welcher Damenzug deckt g8, ohne Schach zu geben?'],{leer:true,pruef:{patt:'c1'}}),
  T('Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.','7k/8/6K1/8/8/8/8/2Q5',null,'c8. Schach über die 8. Reihe, der König g6 deckt g7 und h7.',['Die Dame muss Schach geben.','Der König g6 hilft.'],{leer:true,pruef:{matt:true}}),
  T('Ein Kind gibt mit der Dame dauernd Schach. Markiere alle Felder, auf die der schwarze König jetzt ziehen kann.','8/8/8/3k4/8/8/3Q4/4K3',null,'c6, c5, c4, e6, e5 und e4. Sechs Felder: Das Schach hilft nicht, der König ist frei. Besser im Springersprung einsperren.',['Die Dame greift nur die d-Linie und die Diagonalen an.','Zähle die freien Nachbarfelder.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Ein Kind sagt: „Das ist Patt.“ Markiere alle Felder, auf die der schwarze König ziehen kann.'+KEINS,'1k6/1Q6/1K6/8/8/8/8/8',null,'Keins, aber der König steht im Schach: Matt, nicht Patt. Die Dame ist vom König b6 gedeckt.',['Steht der König im Schach?','Patt gibt es nur ohne Schach.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Die Dame soll einsperren statt jagen. Klicke das Feld an, auf dem sie einen Springersprung vom König entfernt den kleinsten Kasten baut.','8/8/5k2/8/8/8/2Q5/K7',['e4'],'e4. Die Dame sperrt die e-Linie und die 4. Reihe, der König bleibt rechts oben eingesperrt.',['Die Felder im Springersprung von f6: e4, g4, d5, h5, d7, h7, e8, g8.','Welches davon erreicht die Dame von c2?'])],
 L:[T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König im Kasten ziehen kann.','8/1k6/3Q4/8/8/8/8/K7',null,'a8, c8 und a7. Die Dame sperrt die 6. Reihe, c7 und b8.',['Prüfe alle Nachbarfelder von b7.','Welche greift die Dame an?'],{zug:'b',leer:true,pruef:{flucht:true}}),
  T('Klicke das Feld an, auf das die Dame im Springersprung zum König zieht, damit der Kasten am kleinsten wird.','8/8/2k5/8/8/3Q4/8/6K1',['d4'],'d4. Die Dame sperrt die d-Linie und die 4. Reihe, der König bleibt links oben eingesperrt.',['Die Felder im Springersprung von c6: b4, d4, a5, e5, a7, e7, b8, d8.','Welches erreicht die Dame, ohne Schach zu geben?']),
  T('Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf.','3k4/8/3K4/8/8/8/8/7Q',null,'c6. Die Dame deckt c8 und e8, der König d6 deckt c7, d7 und e7. Kein Schach: Patt.',['Welcher Damenzug nimmt alle Felder, ohne Schach zu geben?','Prüfe c8 und e8.'],{leer:true,pruef:{patt:'h1'}}),
  T('Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.','3k4/8/3K4/8/8/8/8/7Q',null,'a8 und h8. Schach über die 8. Reihe, der König d6 deckt c7, d7 und e7.',['Die Dame muss Schach geben.','Welche Reihe ist offen?'],{leer:true,pruef:{matt:true}}),
  T('Ist das Matt? Markiere alle Felder, auf die der schwarze König ziehen kann.'+KEINS,'k7/1Q6/2K5/8/8/8/8/8',null,'Keins. Die Dame gibt Schach und ist vom König c6 gedeckt: Matt.',['Steht der König im Schach?','Kann er die Dame schlagen?'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Schwarz ist am Zug. Klicke die Figur an, die dem König Schach gibt.'+KEINE,'K7/8/8/8/8/8/5Q2/7k',null,'Keine. Schwarz steht nicht im Schach und kann nicht ziehen: Patt, nur remis.',['Greift die Dame h1 an?','Hat der König ein freies Feld?'],{zug:'b',pruef:{schachgeber:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 17 geschrieben');
