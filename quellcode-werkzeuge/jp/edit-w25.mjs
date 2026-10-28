// Woche 25 „Abzug und Abzugsschach“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w24.mjs, dann diese Datei.
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
URLS.lichessDiscovered='https://lichess.org/training/discoveredAttack';
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
F[25]={thema:'Abzug und Abzugsschach',
 lernziel:'Ich kann ein Abzugsschach finden.',
 leitfrage:'Was passiert, wenn eine Figur wegzieht und dahinter eine andere Figur plötzlich angreift?',
 vorwissen:'Fesselung, Gabel und Spieß (Woche 22 bis 24), Schach abwehren (Woche 8).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Lichess-Puzzles QnoxX, CwH2x, FhuoS, AtDjZ, quvZA, wiFMN, re3V4, Ssb7C und giao8 (CC0, Thema „discoveredAttack“, über die Lichess-Schnittstelle abgerufen), übrige Brettaufgaben eigene Aufgaben. Abzugsschach, Doppelschach und Abwehr mit chess.js berechnet, die Lichess-Lösungen stammen aus der Datenbank',
 phasen:[
 {name:'Einstieg',titel:'Wer steht im Weg?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Spieß, Fesselung und Springerzüge wiederholen.',
   'Bei W3 und W6 fragen: „Der Springer steht dem eigenen Turm im Weg. Was passiert, wenn er wegzieht?“ Ziel nennen: „Heute lernt ihr den Abzug: Eine Figur zieht weg, und die Figur dahinter greift an.“'],
  kinder:'Ich erkenne, welche eigene Figur einer anderen im Weg steht.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Abzugsschach, Abzug mit Gewinn, Doppelschach',
  ablauf:['Plakat „Abzug und Abzugsschach“ aufhängen. Am Lehrbrett E1: Der Springer zieht weg, der Turm gibt Schach. Das ist ein Abzugsschach. Der Springer darf dabei fast überall hin.',
   'E2 und E5: Der Springer oder Läufer zieht so weg, dass er selbst noch etwas angreift. Der Gegner muss erst das Schach abwehren, dann fällt die Figur. E3 und E4: Doppelschach, beide Figuren geben Schach. Dann hilft nur ein Königszug. Frage: „Warum kann man ein Doppelschach nicht durch Dazwischenstellen abwehren?“',
   'E6: ein echter Abzug aus einer Lichess-Partie. Merksatz: „Die vordere Figur zieht weg und greift an, die hintere gibt Schach: Der Gegner kann nur eins retten.“'],
  kinder:'Ich erkläre Abzugsschach und Doppelschach.',
  links:[{art:'druck',label:'Plakat: Abzug und Abzugsschach',was:'abzug'},{art:'feld',label:'Lehrbrett: Abzug E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Abzug bauen zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt einen Turm oder Läufer, davor eine eigene Figur und dahinter den gegnerischen König auf. Kind B sucht alle Abzugsschachs und das Feld, auf dem die vordere Figur zusätzlich etwas angreift. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6, darunter vier echte Aufgaben aus Lichess-Partien. Vergleich am Lehrbrett.'],
  kinder:'Ich finde Abzugsschachs und Abzüge mit Gewinn.',
  links:[{art:'druck',label:'Arbeitsblatt: Abzug und Abzugsschach',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Wer auf der Linie bleibt, macht keinen Abzug. Beim Abzugsschach hilft es nichts, die gezogene Figur zu schlagen. Beim Doppelschach muss der König ziehen. Auch der Gegner kann abziehen.',
   'Bei jeder Aufgabe fragen: „Welche Figur gibt hier eigentlich Schach?“'],
  kinder:'Ich unterscheide Abzugsschach und Doppelschach und wehre beide richtig ab.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welche Figur zieht ab, und welche greift dann an?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde Abzugsschach und Doppelschach ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Versteckte Batterie“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Weiß hat König, Turm e1 und Springer e4, Schwarz hat König e8, Dame und zwei Bauern. Weiß sucht einen Abzug mit Gewinn, Schwarz versucht den König vorher aus der Linie zu bringen. Danach wechseln die Rollen.',
   'Rückblick: „Fesselung, Gabel, Spieß, Abzug: Welches Motiv findest du am leichtesten?“ Aufräum-Ritual. Ausblick: Nächstes Mal ist Wiederholung und Silber-Diplom.'],
  kinder:'Ich nutze einen Abzug in einer Partie.',
  links:[{art:'druck',label:'Plakat: Abzug und Abzugsschach',was:'abzug'},{art:'blatt',label:'Mehr Abzugsaufgaben auf Lichess (online)',url:URLS.lichessDiscovered}]}],
 hinweise:{hilfe:'Die vordere Figur mit der Hand kurz anheben: Wen greift die Figur dahinter jetzt an? Dann überlegen, wohin die vordere Figur ziehen kann.',
  zusatz:'Eine Stellung bauen, in der ein Abzug gleichzeitig Schach gibt und die Dame angreift. Oder Lichess-Aufgaben zum Thema Abzug lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer erkennt die versteckte Linie hinter der eigenen Figur? Wer wehrt ein Doppelschach noch falsch ab? Das wiederholst du in Woche 26 vor dem Silber-Diplom.',
 feld:{
 W:[X('Wiederholung Spieß: Klicke das Feld an, auf das der Turm zieht.','2q5/8/8/2k5/8/8/8/R5K1',g=>spiessZuege(g,'r'),'c1. Der Turm gibt Schach auf der c-Linie, dahinter steht die Dame c8.',['Auf welcher Linie stehen König und Dame?','Der Turm muss vor den König.'],{leer:true}),
  X('Wiederholung Fesselung: Klicke die gefesselte schwarze Figur an.','4k3/8/2n5/1B6/8/8/8/4K3',g=>pins(g,'b').gefesselt,'Der Springer c6. Zieht er weg, steht der König e8 im Schach durch den Läufer b5.',['Was steht zwischen Läufer und König?','Darf diese Figur wegziehen?']),
  X('Klicke die weiße Figur an, die zwischen dem Turm e1 und dem schwarzen König e8 steht.','4k3/8/8/8/4N3/8/8/4R1K1',g=>zwischen(g,'e1','e8'),'Der Springer e4. Er steht dem eigenen Turm im Weg.',['Fahre die e-Linie von e1 nach oben ab.','Welche Figur steht im Weg?']),
  P('Markiere alle Felder, auf die der Springer d4 ziehen kann.','4k3/8/8/8/3N4/8/8/4K3','b3, b5, c2, c6, e2, e6, f3 und f5.',['Zwei geradeaus, eins zur Seite.','Es sind acht Felder.'],{legal:'d4'},{leer:true}),
  P('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das der Turm zieht.','6k1/5ppp/8/8/8/8/5PPP/2R3K1','c8. Der Turm gibt Schach über die 8. Reihe, die eigenen Bauern sperren den König ein.',['Die eigenen Bauern sperren den König ein.','Der Turm muss auf die 8. Reihe.'],{matt:true},{leer:true}),
  X('Gleiche Idee: Wenn der Springer e4 wegzieht, wen greift der Turm e1 dann an? Klicke die schwarze Figur an.','4k3/8/8/8/4N3/8/8/4R1K1',g=>{g.remove('e4');return sqOf(g,x=>x.color==='b').filter(t=>g.attackers(t,'w').includes('e1'))},'Den König e8. Zieht der Springer weg, gibt der Turm e1 Schach. Das ist ein Abzugsschach.',['Hebe den Springer gedanklich hoch.','Was sieht der Turm dann auf der e-Linie?'])],
 E:[X('Abzugsschach: Markiere alle Felder, auf die der Springer ziehen kann, damit der Turm Schach gibt.','4k3/8/8/4N3/8/8/8/4R1K1',g=>abzug(g,'e5'),'c4, c6, d3, d7, f3, f7, g4 und g6. Jeder Springerzug verlässt die e-Linie, dann gibt der Turm Schach.',['Verlässt der Springer die e-Linie?','Jeder Springerzug verlässt die Linie.'],{leer:true}),
  X('Abzug mit Gewinn: Auf welchen Feldern gibt der Turm Abzugsschach und der Springer greift gleichzeitig die Dame an? Klicke sie an.','3qk3/8/8/4N3/8/8/8/4R1K1',g=>abzug(g,'e5','gewinn'),'Nur c6. Der Turm gibt Abzugsschach, der Springer greift die Dame d8 an. Nach der Abwehr schlägt er die Dame. Auf f7 würde der König den Springer schlagen und so gleichzeitig aus dem Schach gehen.',['Welche Springerfelder greifen d8 an?','Erst muss Schwarz das Schach abwehren, dann fällt die Dame.'],{leer:true}),
  X('Doppelschach: Klicke alle Felder an, auf denen der Springer selbst Schach gibt und gleichzeitig der Turm Schach gibt.','1k6/8/8/8/1N6/8/1R6/6K1',g=>abzug(g,'b4','doppel'),'a6 und c6. Der Springer gibt Schach auf b8, und der Turm b2 gibt auch Schach. Das ist ein Doppelschach.',['Von welchen Feldern greift ein Springer b8 an?','Der Springer muss dabei die b-Linie verlassen.'],{leer:true}),
  P('Doppelschach! Klicke alle schwarzen Figuren an, die das Schach abwehren können.','1k6/8/N7/8/8/8/1R6/6K1 b - - 0 1','Nur der König b8. Zwei Schachs kann man nicht mit einem Zug dazwischen oder durch Schlagen abwehren. Der König muss ziehen.',['Zwei Figuren geben Schach.','Kann man zwei Schachs mit einem Zug abwehren, außer mit dem König?'],{abwehr:true},{schach:true}),
  X('Abzug mit dem Läufer: Auf welchen Feldern gibt der Turm Abzugsschach und der Läufer greift den Turm b4 an? Klicke sie an.','4k3/8/8/8/1r6/4B3/8/4R1K1',g=>abzug(g,'e3','gewinn'),'c5 und d2. Der Turm e1 gibt Abzugsschach, der Läufer greift den Turm b4 an.',['Welche Läuferfelder greifen b4 an?','Der Läufer muss dabei die e-Linie verlassen.'],{leer:true}),
  LZ('Echte Partie: Weiß zieht mit dem Springer ab und schlägt dabei. Klicke das Feld an, auf das der Springer zieht.','4rk2/pp1n1p2/2p3p1/3pN2p/5P2/P7/1P4P1/4R1K1 w - - 3 40','e5d7','d7. Der Springer schlägt d7 und gibt Schach, der Turm e1 greift jetzt den Turm e8 an. So ging die Partie weiter: Kg7 Txe8.',['Welche weiße Figur steht hinter dem Springer?','Der Springer soll mit Schach ziehen.'],'QnoxX')],
 A:[X('Abzug mit Gewinn: Auf welches Feld zieht der Springer, damit der Turm Abzugsschach gibt und der Springer den Turm f8 angreift? Klicke es an.','3k1r2/8/8/8/3N4/8/8/3R3K',g=>abzug(g,'d4','gewinn'),'e6. Der Turm d1 gibt Abzugsschach, und der Springer gibt selbst auch Schach. Der König muss ziehen, danach schlägt der Springer den Turm f8.',['Welches Springerfeld greift f8 an?','Der Springer muss die d-Linie verlassen.'],{leer:true}),
  X('Doppelschach mit dem Läufer: Klicke alle Felder an, auf denen Läufer und Turm gleichzeitig Schach geben.','4k3/8/8/8/4B3/8/8/4R1K1',g=>abzug(g,'e4','doppel'),'c6 und g6. Der Läufer gibt Schach auf e8, und der Turm e1 auch. Doppelschach.',['Von welchen Feldern greift der Läufer e8 an?','Der Läufer muss dabei die e-Linie verlassen.'],{leer:true}),
  LZ('Echte Partie: Weiß gibt Abzugsschach mit dem Läufer und gewinnt die Dame. Klicke das Feld an, auf das der Läufer zieht.','r4rk1/1bp2ppp/p2np3/1p1p4/5P2/1Pq1P3/P1BN2PP/R1Q2RK1 w - - 0 16','c2h7','h7. Lxh7+ gibt Schach, danach ist die Linie der Dame c1 nach c3 offen. So ging die Partie weiter: Kxh7 Dxc3.',['Welche weiße Figur steht hinter dem Läufer c2?','Der Läufer soll mit Schach ziehen.'],'CwH2x'),
  LZ('Echte Partie: Weiß gibt Schach mit dem Läufer und öffnet dem Turm d1 die Linie. Klicke das Feld an, auf das der Läufer zieht.','1r4k1/pbb2pp1/1pq1p2p/8/1PPr1P2/P2B2NP/2Q3P1/3R1RK1 w - - 3 23','d3h7','h7. Lh7+ gibt Schach, danach schlägt der Turm d1 den Turm d4. So ging die Partie weiter: Kh8 Txd4.',['Welche weiße Figur steht hinter dem Läufer d3?','Was greift sie dann an?'],'FhuoS'),
  LZ('Echte Partie: Schwarz schlägt mit Schach und öffnet der Dame d8 die Linie. Klicke das Feld an, auf das der Läufer zieht.','r2qk2r/p1p3pp/1p1b1p2/3Q4/3P4/4P3/PPP3PP/RN3RK1 b kq - 0 15','d6h2','h2. Lxh2+ gibt Schach, danach schlägt die Dame d8 die Dame d5. So ging die Partie weiter: Kxh2 Dxd5.',['Welche schwarze Figur steht hinter dem Läufer d6?','Was greift sie dann an?'],'AtDjZ'),
  LZ('Echte Partie: Schwarz schlägt mit Schach und öffnet der Dame f7 die Linie. Klicke das Feld an, auf das der Turm zieht.','3rk3/3b1q1p/3Rp1r1/1p3p1Q/5B2/2P3PP/1P3P2/3R2K1 b - - 2 36','g6g3','g3. Txg3+ gibt Schach, danach greift die Dame f7 die Dame h5 an. So ging die Partie weiter: fxg3 Dxh5.',['Welche schwarze Figur steht hinter dem Turm g6?','Wen greift sie dann an?'],'quvZA')],
 S:[X('Fehler 1: Auf der Linie bleiben ist kein Abzug. Markiere alle Felder, auf die der Bauer e4 ziehen kann, damit der Turm e1 Schach gibt.','4k3/8/8/3p1p2/4P3/8/8/4R1K1',g=>abzug(g,'e4'),'d5 und f5. Nur wenn der Bauer schräg schlägt, verlässt er die e-Linie. Zieht er nach e5, bleibt die Linie versperrt.',['Zieht der Bauer gerade, bleibt er auf der e-Linie.','Nur wenn er schräg schlägt, öffnet er die Linie.'],{leer:true}),
  P('Fehler 2: Den Springer zu schlagen hilft nicht, der Turm gibt Schach. Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die das Schach abwehren können.','4kb2/8/8/2N5/8/8/8/4R1K1 b - - 0 1','Der König e8 und der Läufer f8 (Le7 dazwischen). Den Springer c5 zu schlagen hilft nicht, denn das Schach kommt vom Turm e1.',['Welche Figur gibt Schach?','Wer kann sich dazwischenstellen?'],{abwehr:true},{schach:true}),
  X('Auch der Gegner zieht ab. Schwarz ist am Zug. Markiere alle Felder, auf die der Springer ziehen kann, damit der Turm e8 Schach gibt.','4r1k1/8/8/4n3/8/8/8/4K3 b - - 0 1',g=>abzug(g,'e5'),'c4, c6, d3, d7, f3, f7, g4 und g6. Auf d3 und f3 gibt der Springer sogar selbst Schach: Doppelschach.',['Verlässt der Springer die e-Linie?','Wo gibt er sogar selbst Schach?'],{leer:true}),
  P('Fehler 3: Beim Doppelschach hilft nur ein Königszug. Markiere alle Felder, auf die der schwarze König ziehen darf.','1k6/8/2N5/8/8/8/1R6/6K1 b - - 0 1','a8, c7 und c8. Das Feld a7 greift der Springer an, auf der b-Linie gibt der Turm Schach.',['Welche Felder greifen Springer und Turm an?','Prüfe alle Nachbarfelder von b8.'],{flucht:true},{schach:true,leer:true}),
  LZ('Echte Partie: Schwarz zieht den Bauern mit Schach und öffnet dem Läufer g2 die Diagonale. Klicke das Feld an, auf das der Bauer zieht.','8/8/8/3Rp1pk/8/5p2/6bP/4K3 b - - 1 51','f3f2','f2. f2+ gibt Schach, der Läufer g2 greift jetzt den Turm d5 an. So ging die Partie weiter: Kxf2 Lxd5.',['Welche schwarze Figur steht hinter dem Bauern f3?','Wen greift sie dann an?'],'wiFMN'),
  LZ('Echte Partie: Schwarz gibt Abzugsschach mit dem Läufer. Klicke das Feld an, auf das der Läufer zieht.','1qrr2k1/1p3pp1/pQ1b3p/3R4/P7/1P2P2P/1B3PP1/5RK1 b - - 0 27','d6h2','h2. Lh2+ gibt Schach, danach schlägt der Turm d8 den Turm d5. So ging die Partie weiter: Kh1 Txd5.',['Welche schwarze Figur steht hinter dem Läufer d6?','Was greift sie dann an?'],'re3V4')],
 L:[X('Markiere alle Felder, auf die der Springer ziehen kann, damit der Läufer Abzugsschach gibt.','7k/8/8/8/3N4/8/1B6/6K1',g=>abzug(g,'d4'),'b3, b5, c2, c6, e2, e6, f3 und f5. Jeder Springerzug verlässt die Diagonale b2 bis h8.',['Liegt das Zielfeld noch auf der Diagonale b2 bis h8?','Jeder Springerzug verlässt die Diagonale.'],{leer:true}),
  X('Abzug mit Gewinn: Auf welchen Feldern gibt der Läufer Abzugsschach und der Springer greift die Dame an? Klicke sie an.','7k/2q5/8/8/3N4/8/1B6/6K1',g=>abzug(g,'d4','gewinn'),'b5 und e6. Der Läufer b2 gibt Abzugsschach, der Springer greift die Dame c7 an.',['Welche Springerfelder greifen c7 an?','Erst Schach abwehren, dann fällt die Dame.'],{leer:true}),
  X('Doppelschach: Klicke alle Felder an, auf denen Springer und Turm gleichzeitig Schach geben.','3k4/8/8/8/3N4/8/8/3R2K1',g=>abzug(g,'d4','doppel'),'c6 und e6. Der Springer gibt Schach auf d8, und der Turm d1 auch. Doppelschach.',['Von welchen Feldern greift ein Springer d8 an?','Der Springer muss die d-Linie verlassen.'],{leer:true}),
  P('Doppelschach! Klicke alle schwarzen Figuren an, die das Schach abwehren können.','3k4/1p6/2N5/8/8/8/8/3R2K1 b - - 0 1','Nur der König d8. Der Bauer b7 könnte den Springer schlagen, aber der Turm d1 gäbe weiter Schach.',['Zwei Figuren geben Schach.','Kann der Bauer helfen?'],{abwehr:true},{schach:true}),
  LZ('Echte Partie: Schwarz schlägt mit dem Springer und gibt Schach. Klicke das Feld an, auf das der Springer zieht.','3k4/8/1pr2p2/p7/2nP2pP/4P1B1/5PK1/2R5 b - - 1 36','c4e3','e3. Sxe3+ gibt Schach, danach greift der Turm c6 den Turm c1 an. So ging die Partie weiter: fxe3 Txc1.',['Welche schwarze Figur steht hinter dem Springer c4?','Der Springer soll mit Schach ziehen.'],'Ssb7C'),
  LZ('Echte Partie: Schwarz schlägt mit dem Läufer und gibt Schach. Klicke das Feld an, auf das der Läufer zieht.','6k1/2p5/1pQbq1p1/5pBp/5P1P/P7/1PP3PK/8 b - - 4 35','d6f4','f4. Lxf4+ gibt Schach, danach greift die Dame e6 die Dame c6 an. So ging die Partie weiter: Lxf4 Dxc6.',['Welche schwarze Figur steht hinter dem Läufer d6?','Wen greift sie dann an?'],'giao8')]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 25 geschrieben');
