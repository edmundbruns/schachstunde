// Woche 31 „Opfer und Damiano-Matt“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w30.mjs, dann diese Datei.
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
URLS.lichessSacrifice='https://lichess.org/training/sacrifice';
// Matt in n Zügen (kleine Stellungen): Zielfelder der ersten Züge
function mattIn(g,n){if(n===1)return g.moves({verbose:true}).filter(m=>m.san.includes('#'));const out=[];
 for(const m of g.moves({verbose:true})){g.move(m);let ok=false;if(!g.isCheckmate()){const rep=g.moves({verbose:true});ok=rep.length>0&&rep.every(r=>{g.move(r);const mm=mattIn(g,n-1).length>0;g.undo();return mm})}g.undo();if(ok)out.push(m)}return out}
const mattZiele=(g,n)=>[...new Set(mattIn(g,n).map(m=>m.to))];
F[31]={thema:'Opfer und Damiano-Matt',
 lernziel:'Ich kann ein Opfer finden, das zum Matt führt.',
 leitfrage:'Wann lohnt es sich, eine wertvolle Figur herzugeben?',
 vorwissen:'Matt mit zwei Türmen (Woche 28), ein Matt abwehren (Woche 29), Figurenwerte (Woche 7).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Damiano-Matt nach dem Ludgerus-Schachdiplom Gold 3, Lichess-Puzzles KTG1C, QcFWa, mRlp5, PBECq, kD8Y4, HRMBt, 2HvGT, zDDUp, q4W9v, aujMM, PJqZB, g1VTr, 6vWJG und 6yCNH (CC0, Thema „sacrifice“, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Alle Mattführungen mit chess.js vollständig durchgerechnet, die Lichess-Lösungen sind jeweils der einzige Weg zum Matt in zwei Zügen',
 phasen:[
 {name:'Einstieg',titel:'Das Mattbild zuerst',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: das Damiano-Matt, der Keilbauer, ein Grundreihenmatt, ein erzwungenes Schlagen und ein Matt nach dem Damenopfer.',
   'Bei W5 fragen: „Weiß hat gerade die Dame hergegeben. Ist das ein Fehler?“ Ziel nennen: „Heute lernt ihr Opfer, die zum Matt führen, und das Damiano-Matt.“'],
  kinder:'Ich erkenne das Damiano-Matt und das Grundreihenmatt.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Opfer mit Folgezug, Damiano-Matt mit Turmopfer',
  ablauf:['Plakat „Opfer und Damiano-Matt“ aufhängen. Am Lehrbrett E1: Die Dame opfert sich auf e8, der Turm setzt matt. Ein Opfer ist nur richtig, wenn danach zwingend Matt oder Gewinn folgt.',
   'E2 und E3: das Damiano-Matt. Der Turm opfert sich auf h8, der König muss schlagen. Die Dame kommt mit Schach auf die h-Linie und setzt auf h7 matt, gedeckt vom Keilbauern g6. Frage: „Warum muss Schwarz den Turm schlagen?“',
   'E4 bis E6: echte Partien mit Damen-, Springer- und Turmopfer. Merksatz: „Erst das Mattbild sehen, dann das Opfer suchen, dann bis zum Matt rechnen.“'],
  kinder:'Ich finde ein Opfer und den Mattzug danach.',
  links:[{art:'druck',label:'Plakat: Opfer und Damiano-Matt',was:'opfer'},{art:'feld',label:'Lehrbrett: Opfer E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Opfer-Rätsel zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A baut das Damiano-Bild auf (schwarzer König g8, Turm f8, Bauern f7 und g7, weißer Bauer g6) und gibt Weiß Dame und Turm. Kind B führt die Mattfolge mit Turmopfer aus, Kind A verteidigt. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6, darunter vier echte Aufgaben aus Lichess-Partien. Vergleich am Lehrbrett.'],
  kinder:'Ich führe ein Opfer bis zum Matt aus.',
  links:[{art:'druck',label:'Arbeitsblatt: Opfer und Damiano-Matt',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Opfer prüfen',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 und S2: Ein Opfer scheitert, wenn der König Luft hat oder das Opfer nicht annehmen muss. S3 bis S6: echte Partien, in denen das Opfer bis zum Matt gerechnet war.',
   'Bei jeder Aufgabe fragen: „Woran erkennst du, dass der Gegner das Opfer annehmen muss?“'],
  kinder:'Ich prüfe vor einem Opfer, ob es wirklich zum Matt führt.',
  links:[{art:'feld',label:'Lehrbrett: Opfer prüfen S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Was gibst du her, und wie setzt du danach matt?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde ein Opfer mit Matt ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Opfer-Detektiv“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Kind A stellt eine Grundreihen- oder Damiano-Stellung auf, Kind B hat eine Minute für das Opfer mit Matt. Gelingt es, gibt es zwei Punkte, findet A danach eine Verteidigung, einen Punkt für A. Danach wechseln die Rollen.',
   'Rückblick: „Welches Opfer hat dich heute am meisten überrascht?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um das Grundreihenmatt.'],
  kinder:'Ich erkläre ein Opfer, das zum Matt führt.',
  links:[{art:'druck',label:'Plakat: Opfer und Damiano-Matt',was:'opfer'},{art:'blatt',label:'Mehr Opferaufgaben auf Lichess (online)',url:URLS.lichessSacrifice},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold 3)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Zuerst nur das Mattbild zeigen lassen: Wo könnte die Dame mattsetzen? Dann fragen, welche gegnerische Figur dieses Feld noch deckt und wie man sie weglockt.',
  zusatz:'Die vollständige Damiano-Führung mit zwei Turmopfern spielen: Th8+, Kxh8, Th1+, Kg8, Th8+, Kxh8, Dh1+, Kg8, Dh7#. Oder Lichess-Aufgaben zum Thema Opfer lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer opfert schon, ohne bis zum Matt zu rechnen? Wer erkennt den Keilbauern? Das Grundreihenmatt in Woche 32 greift das Damenopfer auf der Grundreihe wieder auf.',
 feld:{
 W:[P('Das Damiano-Matt: Klicke alle Felder an, auf denen die Dame mattsetzt.','5rk1/5pp1/6P1/8/8/8/8/6KQ','h7. Die Dame setzt direkt vor dem König matt. Der Keilbauer g6 deckt sie, f8, f7 und g7 sind von eigenen Figuren besetzt.',['Welches Feld deckt der Bauer g6?','Die Dame setzt direkt vor dem König matt.'],{matt:true},{leer:true}),
  T('Schwarz ist matt. Klicke die weiße Figur an, die die Dame deckt. Sie heißt Keilbauer.','5rk1/5ppQ/6P1/8/8/8/8/6K1',['g6'],'Der Bauer g6. Er deckt die Dame auf h7, deshalb kann der König sie nicht schlagen.',['Wer greift das Feld h7 außer der Dame an?','Bauern schlagen schräg nach vorn.'],{zug:'b',schach:true}),
  P('Wiederholung Grundreihenmatt: Klicke alle Felder an, auf denen Weiß mattsetzt.','6k1/5ppp/8/8/8/8/5PPP/3R2K1','d8. Td8 ist Matt, die eigenen Bauern sperren den König ein.',['Die 8. Reihe ist offen.','Hat der König ein Fluchtfeld?'],{matt:true},{leer:true}),
  P('Weiß hat den Turm nach h8 geopfert. Markiere alle Felder, auf die der schwarze König ziehen darf.','5rkR/5pp1/6P1/8/8/8/8/1K4Q1 b - - 0 1','Nur h8. Der König muss den Turm schlagen, h7 deckt der Bauer g6. Das Opfer lockt den König in die Ecke.',['Welche Felder um g8 sind frei?','Welches greift der Bauer g6 an?'],{flucht:true},{schach:true,leer:true}),
  P('Weiß hat die Dame nach e8 geopfert. Klicke alle schwarzen Figuren an, die das Schach abwehren können.','3rQ1k1/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1','Nur der Turm d8. Der König darf die Dame nicht schlagen, weil der Turm e1 sie deckt.',['Wer kann die Dame schlagen?','Ist die Dame gedeckt?'],{abwehr:true},{schach:true}),
  P('Schwarz hat die Dame geschlagen. Klicke alle Felder an, auf denen Weiß jetzt mattsetzt.','4r1k1/5ppp/8/8/8/8/5PPP/4R1K1','e8. Txe8 ist Matt. Das Damenopfer hat den Turm d8 weggelockt.',['Welche Figur kann jetzt auf die 8. Reihe?','Hat der König ein Fluchtfeld?'],{matt:true},{leer:true})],
 E:[X('Opfer mit Folgezug: Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame im ersten Zug zieht.','3r2k1/5ppp/8/8/4Q3/8/5PPP/4R1K1',g=>mattZiele(g,2),'e8. De8+ Txe8 Txe8#. Die Dame lockt den Turm d8 weg, danach ist die Grundreihe offen.',['Welches Feld ist das Mattfeld für den Turm?','Wer bewacht es?'],{leer:true}),
  X('Damiano-Matt, Schritt 1: Weiß setzt in drei Zügen matt. Klicke das Feld an, auf das der Turm im ersten Zug zieht.','5rk1/5pp1/6P1/8/8/8/8/1K4QR',g=>mattZiele(g,3),'h8. Th8+ Kxh8, dann Dh1+ oder Dh2+ Kg8 und Dh7#. Der Turm lockt den König in die Ecke und öffnet der Dame die h-Linie.',['Was passiert, wenn der Turm mit Schach geopfert wird?','Wohin muss danach die Dame?'],{leer:true}),
  X('Damiano-Matt, Schritt 2: Schwarz hat den Turm geschlagen. Weiß setzt in zwei Zügen matt. Klicke alle Felder an, auf die die Dame im ersten Zug ziehen kann.','5r1k/5pp1/6P1/8/8/8/8/1K4Q1',g=>mattZiele(g,2),'h1 und h2. Dh1+ oder Dh2+ Kg8, dann Dh7#. Der Bauer g6 deckt die Dame.',['Die Dame braucht die h-Linie.','Wo setzt sie danach matt?'],{leer:true}),
  LZ('Echte Partie: Weiß opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame im ersten Zug zieht.','3r3k/p5rp/1pp1pNp1/2q1P3/5P2/4p3/PP5Q/K6R w - - 0 29','h2h7','h7. Dxh7+ Txh7 Txh7#. Der Springer f6 sperrt g8, der Turm setzt in der Ecke matt.',['Welche Linie öffnet sich nach dem Damenopfer?','Wer deckt g8 und g7?'],'KTG1C'),
  LZ('Echte Partie: Weiß opfert den Springer und setzt in zwei Zügen matt. Klicke das Feld an, auf das der Springer im ersten Zug zieht.','r1bq1rk1/ppp2pb1/4p2p/6p1/2PpN1Pn/P2Q1N2/1PB2P1P/R3K2R w KQ - 2 15','e4f6','f6. Sf6+ Lxf6, dann Dh7#. Der Springer räumt die Diagonale b1 bis h7 für Dame und Läufer.',['Was steht der Dame auf dem Weg nach h7 im Weg?','Wie verschwindet diese Figur mit Schach?'],'QcFWa'),
  LZ('Echte Partie: Weiß opfert einen Turm und setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm im ersten Zug zieht.','7k/1rN2Rnn/p2p2B1/1p2b3/6b1/P5P1/6PK/5R2 w - - 1 32','f7f8','f8. Tf8+ Sxf8, dann Txf8#. Der Springer h7 muss schlagen und gibt h7 frei, doch dieses Feld deckt der Läufer g6.',['Welche schwarze Figur muss das Opfer schlagen?','Was ist danach frei?'],'mRlp5')],
 A:[P('Damiano-Matt mit Läufer: Klicke alle Felder an, auf denen die Dame mattsetzt.','5rk1/5pp1/8/8/8/3B4/8/6KQ','h7. Dh7 ist Matt, der Läufer d3 deckt die Dame über die Diagonale d3 bis h7.',['Welche Figur deckt das Feld h7?','Die Dame setzt direkt vor dem König matt.'],{matt:true},{leer:true}),
  LZ('Echte Partie: Weiß opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','r5k1/pp3ppp/8/q1p5/4Q3/8/1P3PPP/4R1K1 w - - 1 26','e4e8','e8. De8+ Txe8 Txe8#. Die Grundreihe ist danach offen.',['Wer bewacht die 8. Reihe?','Wie lockt man ihn weg?'],'PBECq'),
  LZ('Echte Partie: Die schwarze Grundreihe ist schwach. Mit welchem Damenopfer setzt Weiß in zwei Zügen matt? Klicke das Zielfeld der Dame an.','1r4k1/p4ppp/1p2p3/3pq3/8/3P2PP/PPQ1PP1K/2R5 w - - 1 25','c2c8','c8. Dc8+ Txc8 Txc8#. Der Turm b8 muss die Dame schlagen, dann schlägt der Turm c1 mit Matt zurück.',['Welche Linie gehört dem Turm c1?','Was passiert nach Dc8+?'],'kD8Y4'),
  LZ('Echte Partie: Weiß schlägt mit der Dame den Wächter von d8 und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','2r3k1/1Q3ppp/p1p1b3/8/5n2/2P5/q4PPP/3R2K1 w - - 3 25','b7c8','c8. Dxc8+ Lxc8 Td8#. Die Dame schlägt den Turm c8, der d8 bewacht hat. Danach ist d8 frei für den Turm.',['Welche schwarze Figur deckt d8?','Wie wird sie weggelockt?'],'HRMBt'),
  X('Schwarz hat den Turm auf a8 geschlagen. Weiß setzt in zwei Zügen matt. Klicke alle Felder an, auf die die Dame im ersten Zug ziehen kann.','k1r5/1pp5/1P6/8/8/8/8/4Q1K1',g=>mattZiele(g,2),'a1 und a5. Da1+ oder Da5+ Kb8, dann Da7#. Der Keilbauer b6 deckt die Dame.',['Die Dame braucht die a-Linie.','Wo setzt sie danach matt?'],{leer:true}),
  LZ('Echte Partie: Schwarz opfert einen Turm und setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm zieht.','6k1/8/p4p2/2p2Q2/1p2P1pP/1Pqr4/P5P1/2B3RK b - - 1 35','d3h3','h3. Th3+ gxh3, dann Dxh3#. Der Turm öffnet der Dame den Weg zum König.',['Welche weiße Figur deckt h3?','Was ist nach dem Opfer offen?'],'2HvGT')],
 S:[P('Opfer prüfen 1: Weiß hat De8+ Txe8 Txe8+ gespielt. Aber Schwarz hatte Luft. Markiere alle Felder, auf die der schwarze König fliehen kann.','4R1k1/5pp1/7p/8/8/8/5PPP/6K1 b - - 0 1','h7. Der Bauer h6 hat dem König Luft gemacht. Das Damenopfer war ein Fehler, Weiß hat nur einen Turm gegen eine Dame getauscht.',['Welches Feld neben dem König ist frei?','Wer hat es frei gemacht?'],{flucht:true},{schach:true,leer:true}),
  P('Opfer prüfen 2: Ohne Keilbauer. Weiß hat Dh7+ gespielt. Markiere alle Felder, auf die der schwarze König ziehen darf.','5rk1/5ppQ/8/8/8/8/8/6K1 b - - 0 1','h7. Der König schlägt die Dame, denn kein weißer Bauer auf g6 deckt sie. Ohne Keilbauer gibt es kein Damiano-Matt.',['Wer deckt die Dame auf h7?','Darf der König sie schlagen?'],{flucht:true},{schach:true,leer:true}),
  LZ('Echte Partie: Weiß opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','1k5r/ppp2pp1/5rq1/3P3p/3n4/2P5/P1P1Q1PP/1R2R2K w - - 0 27','e2e8','e8. De8+ Txe8 Txe8#. Schwarz muss annehmen, weil die Dame von Te1 gedeckt ist und sonst nur Schach bleibt.',['Wer deckt die Dame auf e8?','Was steht nach dem Schlagen auf der e-Linie?'],'zDDUp'),
  LZ('Echte Partie: Hinter der Dame steht schon ein Turm bereit. Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','3r2k1/p4ppp/1b5r/8/3pQP2/1P4Pq/PB2R2P/5RK1 w - - 2 27','e4e8','e8. De8+ Txe8 Txe8#. Der Turm e2 steht schon hinter der Dame bereit.',['Welche weiße Figur steht hinter der Dame auf der e-Linie?','Hat der König Luft?'],'q4W9v'),
  LZ('Echte Partie: Schwarz opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','2q3k1/5ppp/1Q2p3/p2rPb2/P3p3/B3P3/5PPP/2R3K1 b - - 3 25','c8c1','c1. Dxc1+ Lxc1, dann Td1#. Der Läufer a3 muss die Grundreihe decken und wird weggelockt.',['Welche weiße Figur deckt d1?','Wie wird sie weggelockt?'],'aujMM'),
  LZ('Echte Partie: Schwarz schlägt den einzigen Verteidiger der Grundreihe und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','r2q3k/p4B2/1pP2nQ1/2p1r1p1/8/2N5/PP3PPP/3R2K1 b - - 1 24','d8d1','d1. Dxd1+ Sxd1, dann Te1#. Der Turm d1 war der einzige Verteidiger der Grundreihe.',['Wer verteidigt die 1. Reihe?','Was passiert, wenn er geschlagen wird?'],'PJqZB')],
 L:[P('Klicke alle Felder an, auf denen die Dame mattsetzt.','1kr5/1pp5/1P6/8/8/8/8/Q5K1','a7. Da7 ist Matt. Der Keilbauer b6 deckt die Dame, c8, b7 und c7 sind von eigenen Figuren besetzt.',['Welches Feld deckt der Bauer b6?','Die Dame setzt direkt vor dem König matt.'],{matt:true},{leer:true}),
  T('Schwarz ist matt. Klicke die weiße Figur an, die die Dame deckt.','1kr5/Qpp5/1P6/8/8/8/8/6K1',['b6'],'Der Bauer b6, der Keilbauer. Er deckt die Dame auf a7.',['Wer greift a7 außer der Dame an?','Bauern schlagen schräg nach vorn.'],{zug:'b',schach:true}),
  X('Weiß setzt in drei Zügen matt. Klicke das Feld an, auf das der Turm im ersten Zug zieht.','1kr5/1pp5/1P6/8/8/8/8/RQ4K1',g=>mattZiele(g,3),'a8. Ta8+ Kxa8, dann Da1+ oder Da2+ Kb8 und Da7#. Das ist das Damiano-Matt am Damenflügel.',['Was passiert nach einem Turmopfer mit Schach?','Wohin muss danach die Dame?'],{leer:true}),
  LZ('Echte Partie: Weiß opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','3r2k1/p4ppp/1b3q2/3p4/1P3P2/P1p3rP/4Q1P1/2R1R2K w - - 4 29','e2e8','e8. De8+ Txe8 Txe8#. Der Turm d8 muss schlagen, dann ist die Grundreihe offen.',['Wer deckt die Dame auf e8?','Hat der König Luft?'],'g1VTr'),
  LZ('Echte Partie: Schwarz opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','r4rk1/2p3p1/1p5p/3R4/1P6/1QP5/P4qPP/R6K b - - 1 21','f2f1','f1. Df1+ Txf1 Txf1#. Der Turm a1 muss die Dame schlagen, dann schlägt der Turm f8 mit Matt zurück.',['Welche weiße Figur deckt f1?','Was steht hinter der Dame auf der f-Linie?'],'6vWJG'),
  LZ('Echte Partie: Weiß opfert den Springer und setzt in zwei Zügen matt. Klicke das Feld an, auf das der Springer zieht.','3r1rk1/p1p1qppp/1p5n/6N1/1nPpNPb1/3Q2P1/PP2P1BP/3RR1K1 w - - 3 17','e4f6','f6. Sf6+ gxf6, dann Dxh7#. Der Springer e4 räumt die Diagonale der Dame nach h7, der Springer g5 deckt h7.',['Was versperrt der Dame den Weg nach h7?','Wer deckt h7 außer der Dame?'],'6yCNH')]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 31 geschrieben');
