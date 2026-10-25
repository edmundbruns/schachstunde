// Woche 32 „Das Grundreihenmatt“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w31.mjs, dann diese Datei.
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
// Mattdrohung: Was könnte der Gegner setzen, wenn ich nichts tue? (Zugrecht tauschen)
const tausch=g=>{const p=g.fen().split(' ');p[1]=p[1]==='w'?'b':'w';p[3]='-';return p.join(' ')};
const drohung=g=>{try{const h=new Chess(tausch(g));if(h.inCheck())return [];return h.moves({verbose:true}).filter(m=>m.san.includes('#'))}catch(e){return []}};
const mattFelder=g=>[...new Set(drohung(g).map(m=>m.to))],mattVon=g=>[...new Set(drohung(g).map(m=>m.from))];
const strecke=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);if(!(x1===x2||y1===y2||Math.abs(x2-x1)===Math.abs(y2-y1)))return [];const dx=Math.sign(x2-x1),dy=Math.sign(y2-y1),out=[];let x=x1+dx,y=y1+dy;while(x!==x2||y!==y2){out.push(SQ(x,y));x+=dx;y+=dy}return out};
const nebenan=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);return Math.max(Math.abs(x1-x2),Math.abs(y1-y2))===1};
// Abwehrzüge gegen ein Matt in einem Zug, sortiert nach Art: schlagen, decken, dazwischen, luft (Fluchtfeld schaffen), koenig, sonst
function abwehr(g,art='alle',von=null){const c=g.turn(),thr=drohung(g);if(!thr.length)return [];const k=ksq(g,c);
 const zw=new Set(thr.filter(m=>'brq'.includes(m.piece)).flatMap(m=>strecke(m.from,m.to))),mf=new Set(thr.map(m=>m.to)),out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>!von||m.from===von)){g.move(m);let ok;
  if(g.inCheck())ok=!g.isCheckmate()&&g.moves({verbose:true}).every(r=>{g.move(r);const frei=!drohung(g).length&&!g.isCheckmate();g.undo();return frei});
  else ok=!g.moves().some(x=>x.includes('#'));
  let deckt=false;if(ok){const h=new Chess(tausch(g));deckt=[...mf].some(t=>h.attackers(t,c).includes(m.to))}g.undo();if(!ok)continue;
  const typ=m.piece==='k'?'koenig':m.captured?'schlagen':zw.has(m.to)?'dazwischen':deckt?'decken':nebenan(m.from,k)?'luft':'sonst';
  if(art==='alle'||art===typ)out.add(m.to)}return [...out]}
// Matt in n Zügen (kleine Stellungen): Zielfelder der ersten Züge
function mattIn(g,n){if(n===1)return g.moves({verbose:true}).filter(m=>m.san.includes('#'));const out=[];
 for(const m of g.moves({verbose:true})){g.move(m);let ok=false;if(!g.isCheckmate()){const rep=g.moves({verbose:true});ok=rep.length>0&&rep.every(r=>{g.move(r);const mm=mattIn(g,n-1).length>0;g.undo();return mm})}g.undo();if(ok)out.push(m)}return out}
const mattZiele=(g,n)=>[...new Set(mattIn(g,n).map(m=>m.to))];
URLS.lichessBackRank='https://lichess.org/training/backRankMate';
// Stellung mit vollständiger FEN (Rochaderechte bleiben erhalten)
const XF=(frage,fen,fn,antwort,hilfe,extra={})=>{const g=new Chess(fen),f=fen.split(' ');return T(frage,f[0],[...new Set(fn(g))],antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...extra})};
const bauernAbwehr=g=>sqOf(g,x=>x.type==='p'&&x.color===g.turn()).flatMap(s=>abwehr(g,'alle',s));
F[32]={thema:'Das Grundreihenmatt',
 lernziel:'Ich kann ein Grundreihenmatt finden und abwehren.',
 leitfrage:'Warum werden Könige hinter ihren eigenen Bauern so oft mattgesetzt, und wie verhindere ich das?',
 vorwissen:'Ein Matt abwehren (Woche 29), Opfer und Weglocken (Woche 31), Matt mit zwei Türmen (Woche 28).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Gold 4 „Grundreihenmatt“, Lichess-Puzzles 1cKpu, Sq3ID, AtTyK, qxwmY, 499Jk, Lxie2, uyNqi, hUaG0, 1XA40, Gvxgh, 4Xf7o, 1tMN7, Z5awn (CC0, Thema „backRankMate“, über die Lichess-Schnittstelle abgerufen, teils die Stellung vor dem Fehler), übrige Aufgaben eigene Aufgaben. Matt, Drohung, Luft und Abwehr mit chess.js berechnet',
 phasen:[
 {name:'Einstieg',titel:'Der König hinter seinen Bauern',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: ein Grundreihenmatt mit Turm und Dame, die Fluchtfelder des Königs, den Wächter der Grundreihe und eine Drohung erkennen, Luft machen.',
   'Bei W2 fragen: „Die eigenen Bauern schützen den König. Warum werden sie hier zur Falle?“ Ziel nennen: „Heute lernt ihr, ein Grundreihenmatt zu finden und abzuwehren.“'],
  kinder:'Ich erkenne, wann der König auf der Grundreihe eingesperrt ist.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Angreifen: Wächter weglocken. Verteidigen: Luft und Deckung',
  ablauf:['Plakat „Das Grundreihenmatt“ aufhängen. Am Lehrbrett E1: ein Grundreihenmatt aus einer echten Partie. E2 und E6: Der Wächter der Grundreihe wird mit einem Damenopfer weggelockt.',
   'E3 und E4: die Abwehr. Luft machen, aber auf ein sicheres Feld, oder die Grundreihe decken. Frage: „Warum hilft h3 hier nicht, g3 aber schon?“',
   'E5: In einer echten Partie hat Weiß lieber eine Figur geschlagen, statt Luft zu machen. Merksatz: „Ist die Grundreihe offen, mach rechtzeitig Luft. Greifst du an, lock den Wächter weg.“'],
  kinder:'Ich setze auf der Grundreihe matt und weiß, wie ich mich schütze.',
  links:[{art:'druck',label:'Plakat: Das Grundreihenmatt',was:'grundreihe'},{art:'feld',label:'Lehrbrett: Grundreihe E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Grundreihen-Duell zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Beide Kinder haben König, drei Bauern vor dem König und zwei Türme. Wer zuerst auf der Grundreihe mattsetzt, gewinnt. Vorher darf jedes Kind einmal Luft machen. Danach wechseln die Rollen und die Farben.',
   'Allein: Arbeitsblatt A1 bis A6, darunter vier echte Aufgaben aus Lichess-Partien. Vergleich am Lehrbrett.'],
  kinder:'Ich finde Grundreihenmatts und schütze meinen eigenen König.',
  links:[{art:'druck',label:'Arbeitsblatt: Das Grundreihenmatt',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Luft auf ein angegriffenes Feld, eine Figur schlagen und die eigene Grundreihe vergessen, ein Wächter mit zwei Aufgaben.',
   'Bei jeder Aufgabe fragen: „Woran erkennst du, dass deine eigene Grundreihe in Gefahr ist?“'],
  kinder:'Ich prüfe vor jedem Zug meine eigene Grundreihe.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Hat dein König Luft? Wer bewacht die gegnerische Grundreihe?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde und verhindere ein Grundreihenmatt ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Luft oder Matt“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jedes Kind hat König, drei Bauern und einen Turm. Wer einen Bauernzug für Luft verwendet, sagt laut „Luft“. Wer auf der Grundreihe mattsetzt, bekommt zwei Punkte. Danach wechseln die Rollen und die Farben.',
   'Rückblick: „Wann machst du Luft, und mit welchem Bauern?“ Aufräum-Ritual. Ausblick: Nächstes Mal setzt ihr mit König und einem Turm matt.'],
  kinder:'Ich mache rechtzeitig Luft und nutze die gegnerische Grundreihe.',
  links:[{art:'druck',label:'Plakat: Das Grundreihenmatt',was:'grundreihe'},{art:'blatt',label:'Mehr Grundreihen-Aufgaben auf Lichess (online)',url:URLS.lichessBackRank},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold 4)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Die drei Bauern vor dem König mit einem Finger abdecken: Wohin kann der König jetzt? Dann fragen, welche gegnerische Figur auf die Grundreihe kommt.',
  zusatz:'Eine Stellung bauen, in der ein Wächter zwei Grundreihen-Felder gleichzeitig bewachen muss. Oder Lichess-Aufgaben zum Thema Grundreihenmatt lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer macht von selbst rechtzeitig Luft? Wer schlägt lieber eine Figur und vergisst die eigene Grundreihe? Diese Kinder prüfen in Woche 33 vor jedem Zug laut die Grundreihe.',
 feld:{
 W:[P('Klicke alle Felder an, auf denen Weiß mattsetzt.','6k1/5ppp/8/8/8/8/5PPP/R5K1','a8. Ta8 ist Matt. Die eigenen Bauern f7, g7 und h7 sperren den König ein.',['Die 8. Reihe ist offen.','Kann der König nach vorn fliehen?'],{matt:true},{leer:true}),
  P('Markiere alle Felder, auf die der schwarze König ziehen darf.','6k1/5ppp/8/8/8/8/5PPP/R5K1 b - - 0 1','f8 und h8. Nach vorn stehen eigene Bauern. Der König kann nur auf der Grundreihe hin und her.',['Welche Nachbarfelder sind frei?','Die eigenen Bauern versperren den Weg.'],{legal:'g8'},{leer:true}),
  T('Klicke die schwarze Figur an, die die Grundreihe bewacht.','2r3k1/5ppp/8/8/8/8/5PPP/4R1K1',['c8'],'Der Turm c8. Er deckt die 8. Reihe. Te8+ wird von ihm geschlagen. Ein solcher Wächter darf nicht weggelockt werden.',['Welche schwarze Figur kann auf e8 schlagen?','Sie steht auf der 8. Reihe.']),
  X('Schwarz droht Matt. Klicke das Feld an, auf dem Schwarz mattsetzen würde.','3r2k1/5ppp/8/8/8/8/5PPP/6K1',g=>mattFelder(g),'d1. Td1 wäre Matt, der weiße König ist von den eigenen Bauern eingesperrt.',['Wohin kann der Turm d8 ziehen?','Hat der weiße König Luft?'],{leer:true}),
  X('Weiß macht Luft: Markiere alle Felder, auf die ein weißer Bauer ziehen kann, damit der König ein Fluchtfeld bekommt.','3r2k1/5ppp/8/8/8/8/5PPP/6K1',g=>abwehr(g,'luft'),'f3, f4, g3, g4, h3 und h4. Jeder dieser Bauernzüge macht ein Feld auf der 2. Reihe frei.',['Welche Felder vor dem König sind besetzt?','Zieht ein Bauer, wird ein Feld frei.'],{leer:true}),
  P('Auch die Dame kann das: Klicke alle Felder an, auf denen die Dame mattsetzt.','6k1/5ppp/8/8/8/8/5PPP/3Q2K1','d8. Dd8 ist Matt über die Grundreihe.',['Welche Reihe ist offen?','Hat der König Luft?'],{matt:true},{leer:true})],
 E:[P('Echte Partie: Klicke alle Felder an, auf denen Weiß mattsetzt.','2n1Rr1k/p5pp/8/5p2/3q4/1P1P2PP/1PP3PK/R1B5 w - - 0 25','f8. Txf8 ist Matt. Der Turm schlägt den Wächter f8, der König h8 hat keine Luft.',['Welche schwarze Figur deckt die Grundreihe?','Kann der Turm e8 sie schlagen?'],{matt:true},{leer:true,quelle:LI('1cKpu')}),
  LZ('Echte Partie: Weiß lockt den Wächter weg und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame im ersten Zug zieht.','4r1k1/5ppp/8/1Q6/4r3/R7/2q3PP/4R1K1 w - - 0 33','b5e8','e8. Dxe8+ Txe8 Txe8#. Die Dame schlägt den Turm e8, der zweite Turm muss zurückschlagen, dann ist die Grundreihe offen.',['Welche schwarze Figur bewacht e8?','Was passiert, wenn sie schlagen muss?'],'Sq3ID'),
  X('Luft auf ein sicheres Feld: Schwarz droht Te1#. Markiere alle Felder, auf die ein weißer Bauer ziehen kann, damit der König wirklich ein Fluchtfeld bekommt.','4r1k1/5ppp/3b4/8/8/8/5PPP/6K1',g=>abwehr(g,'luft'),'f3, f4, g3 und g4. Nach h3 oder h4 wäre h2 frei, aber der Läufer d6 greift h2 an. g3 sperrt sogar seine Diagonale.',['Welche Felder greift der Läufer d6 an?','Ist das neue Fluchtfeld sicher?'],{leer:true}),
  X('Die Grundreihe decken: Schwarz droht Te1#. Klicke das Feld an, auf das der Läufer zieht, um das Mattfeld e1 zu decken.','4r1k1/5ppp/8/8/5B2/8/5PPP/6K1',g=>abwehr(g,'decken','f4'),'d2. Der Läufer deckt e1. Schlägt der Turm dort, schlägt der Läufer zurück. Le3 wäre auch eine Abwehr: Er stellt sich dazwischen.',['Von welchen Feldern deckt ein Läufer e1?','Welches erreicht der Läufer f4?'],{leer:true}),
  XF('Echte Partie: Weiß schlug mit Txc1 und wurde danach auf der Grundreihe mattgesetzt. Markiere alle Felder, auf die ein weißer Bauer stattdessen ziehen konnte, um Luft zu machen.','3q2k1/1b1r1pp1/p6p/1p3Q2/4PB2/P7/1P3PPP/2r1R1K1 w - - 0 21',g=>bauernAbwehr(g),'f3, g3, g4, h3 und h4. Jeder dieser Bauernzüge gibt dem König ein sicheres Feld. In der Partie folgte nach Txc1 Td1+ Txd1 Dxd1#.',['Welches Feld neben dem König wird frei?','Ist es sicher?'],{leer:true,quelle:LI('Z5awn')}),
  LZ('Echte Partie: Weiß opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','3r1r1k/pp4pp/3n2q1/6P1/4PQ2/2P5/P4R2/R5K1 w - - 1 31','f4f8','f8. Dxf8+ Txf8 Txf8#. Der Turm d8 muss die Dame schlagen und verlässt dabei d8, die Grundreihe gehört danach dem Turm f2.',['Welche schwarze Figur deckt f8?','Wer bleibt nach dem Schlagen auf der f-Linie?'],'AtTyK')],
 A:[P('Echte Partie: Klicke alle Felder an, auf denen Schwarz mattsetzt.','6k1/p3bpp1/1p2p2p/4P3/1P1Q4/P1R5/5PPP/3rN1K1 b - - 0 33','e1. Txe1 ist Matt. Der Turm schlägt den Springer e1, der weiße König hat keine Luft.',['Welche weiße Figur steht auf der Grundreihe im Weg?','Kann der Turm sie schlagen?'],{matt:true},{leer:true,quelle:LI('qxwmY')}),
  LZ('Echte Partie: Weiß lockt den Läufer von der Grundreihe weg und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','2r3k1/5ppp/1pQ1b3/p7/3q4/PP4P1/5P1P/4R1K1 w - - 0 27','c6c8','c8. Dxc8+ Lxc8 Te8#. Der Läufer e6 muss zurückschlagen und gibt e8 frei.',['Welche Figur deckt e8?','Wie lockt man sie weg?'],'499Jk'),
  X('Schwarz macht Luft: Weiß droht Te8#. Markiere alle Felder, auf die ein schwarzer Bauer ziehen kann, damit der König ein sicheres Fluchtfeld bekommt.','6k1/5ppp/8/8/8/8/5PPP/1B2R1K1 b - - 0 1',g=>abwehr(g,'luft'),'f5, f6, g5 und g6. Nach h6 oder h5 wäre h7 frei, aber der Läufer b1 greift h7 an.',['Welches Feld greift der Läufer b1 an?','Ist das neue Fluchtfeld sicher?'],{leer:true}),
  LZ('Echte Partie: Schwarz opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','3r2k1/pR3ppp/3q4/2p5/4B3/P7/1PQ2PPP/6K1 b - - 0 24','d6d1','d1. Dd1+ Dxd1 Txd1#. Die weiße Dame muss schlagen, dann gehört die Grundreihe dem Turm d8.',['Welche weiße Figur deckt d1?','Was steht hinter der schwarzen Dame?'],'Lxie2'),
  XF('Echte Partie: Weiß schlug mit Txd2 und wurde danach mattgesetzt. Markiere alle Felder, auf die ein weißer Bauer stattdessen ziehen konnte, um das Matt zu verhindern.','5rk1/8/p7/2pP4/8/3R4/3p2PP/2rR3K w - - 4 40',g=>bauernAbwehr(g),'g3, g4, h3 und h4. Dann kann der König nach g2 oder h2 fliehen. In der Partie folgte nach Txd2 Tf1+ Txf1 Txf1#.',['Welches Feld neben dem König wird frei?','Ist es sicher?'],{leer:true,quelle:LI('1XA40')}),
  LZ('Echte Partie: Schwarz setzt in zwei Zügen auf der Grundreihe matt. Klicke das Feld an, auf das die Dame zieht.','3r4/R1N3p1/1Pk4p/4P3/3q4/8/6PP/1Q5K b - - 2 33','d4d1','d1. Dd1+ Dxd1 Txd1#. Die weiße Dame muss schlagen, danach schlägt der Turm mit Matt zurück.',['Welche Linie gehört dem Turm d8?','Wer deckt d1?'],'uyNqi')],
 S:[P('Fehler 1: Luft auf ein angegriffenes Feld. Weiß hat h3 gespielt. Klicke alle Felder an, auf denen Schwarz jetzt mattsetzt.','4r1k1/5ppp/3b4/8/8/7P/5PP1/6K1 b - - 0 1','e1. Te1 ist Matt. h2 ist zwar frei, aber der Läufer d6 greift es an.',['Welches Feld greift der Läufer d6 an?','Kann der König nach h2 fliehen?'],{matt:true},{leer:true}),
  XF('Fehler 2: Echte Partie. Schwarz spielte Td8 und wurde mit De8+ mattgesetzt. Markiere alle Felder, auf die ein schwarzer Bauer stattdessen ziehen konnte, um Luft zu machen.','5r1k/p3Q1pp/2p2p2/2P5/8/7P/3q2P1/4R2K b - - 2 34',g=>bauernAbwehr(g),'h5 und h6. Dann kann der König nach h7. Nach g6 oder g5 wäre g7 frei, aber die Dame e7 greift g7 an. In der Partie folgte nach Td8 De8+ Txe8 Txe8#.',['Welches Feld neben dem König wird frei?','Ist es sicher?'],{leer:true,quelle:LI('Gvxgh')}),
  LZ('Fehler 3: Ein Wächter mit zwei Aufgaben. Echte Partie: Schwarz setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm zieht.','2rR4/pR3pp1/4k3/7p/1P6/4P3/P4PPP/6K1 b - - 0 28','c8c1','c1. Tc1+ Td1 Txd1#. Der weiße Turm d8 hat seine Grundreihe verlassen, um zu schlagen. Jetzt fehlt er als Wächter.',['Wer bewacht die weiße Grundreihe?','Was kann Schwarz dazwischenstellen?'],'hUaG0'),
  LZ('Fehler 4: Gier. Echte Partie: Weiß hat mit Txc1 eine Figur geschlagen. Schwarz setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm d7 zieht.','3q2k1/1b1r1pp1/p6p/1p3Q2/4PB2/P7/1P3PPP/2R3K1 b - - 0 21','d7d1','d1. Td1+ Txd1 Dxd1#. Weiß hatte keine Luft. Die geschlagene Figur war die Grundreihe nicht wert.',['Welche Linie ist für die schwarzen Figuren offen?','Hat der weiße König Luft?'],'Z5awn'),
  XF('Fehler 5: Echte Partie. Schwarz schlug mit Sxc8 und wurde mit Txf8# mattgesetzt. Markiere alle Felder, auf die ein schwarzer Bauer stattdessen ziehen konnte, um Luft zu machen.','2Q1Rr1k/p5pp/1n6/5p2/3q4/1P1P2PP/1PP3PK/R1B5 b - - 0 24',g=>bauernAbwehr(g),'g5, g6, h5 und h6. Jeder dieser Züge gibt dem König ein Fluchtfeld auf der 7. Reihe. In der Partie folgte nach Sxc8 Txf8#.',['Welches Feld neben dem König wird frei?','Ist es sicher?'],{leer:true,quelle:LI('1cKpu')}),
  LZ('Fehler 6: Echte Partie: Weiß hat mit Txd2 geschlagen und keine Luft gemacht. Schwarz setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm f8 zieht.','5rk1/8/p7/2pP4/8/8/3R2PP/2rR3K b - - 0 40','f8f1','f1. Tf1+ Txf1 Txf1#. Der König h1 ist von den eigenen Bauern eingesperrt.',['Welche Linie ist offen?','Wer kann auf f1 schlagen?'],'1XA40')],
 L:[P('Klicke alle Felder an, auf denen Weiß mattsetzt.','6k1/5ppp/8/8/8/8/5PPP/1R4K1','b8. Tb8 ist Matt, die eigenen Bauern sperren den König ein.',['Welche Reihe ist offen?','Kann der König nach vorn fliehen?'],{matt:true},{leer:true}),
  X('Schwarz droht Matt. Klicke das Feld an, auf dem Schwarz mattsetzen würde.','1r4k1/5ppp/8/8/8/8/5PPP/6K1',g=>mattFelder(g),'b1. Tb1 wäre Matt, der weiße König hat keine Luft.',['Wohin kann der Turm b8 ziehen?','Hat der weiße König Luft?'],{leer:true}),
  X('Schwarz droht Tb1#. Markiere alle Felder, auf die der weiße König oder ein weißer Bauer ziehen kann, um das Matt zu verhindern.','1r4k1/5ppp/8/8/8/8/5PPP/6K1',g=>abwehr(g),'f1, f3, f4, g3, g4, h3 und h4. Die Bauernzüge machen Luft, Kf1 bringt den König vom Mattfeld weg.',['Welche Bauernzüge geben dem König Luft?','Kann der König selbst weg?'],{leer:true}),
  LZ('Echte Partie: Weiß opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','3r3k/p3Q1pp/2p2p2/2P5/8/7P/3q2P1/4R2K w - - 3 35','e7e8','e8. De8+ Txe8 Txe8#. Der Turm d8 muss schlagen, danach gehört die Grundreihe dem Turm e1.',['Wer deckt e8?','Was steht hinter der Dame?'],'Gvxgh'),
  LZ('Echte Partie: Schwarz lockt den Läufer weg und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','4r3/8/p1Q2P2/1p6/k1nP1B2/P7/1q3PPP/2R3K1 b - - 0 37','b2c1','c1. Dxc1+ Lxc1 Te1#. Die Dame schlägt den Turm c1, der die Grundreihe bewacht hat. Der Läufer muss zurückschlagen, danach ist e1 frei für den Turm.',['Wer deckt die weiße Grundreihe?','Wie lockt man ihn weg?'],'4Xf7o'),
  P('Echte Partie: Schwarz setzt in einem Zug matt, sogar mit einer Umwandlung. Klicke alle Felder an, auf denen Schwarz mattsetzt.','7k/3Q2p1/1q5p/8/8/P7/3p2PP/4R2K b - - 0 47','e1. dxe1D ist Matt. Der Bauer schlägt den Turm und wird zur Dame, der weiße König hat keine Luft.',['Welcher Bauer kann umwandeln?','Was schlägt er dabei?'],{matt:true},{leer:true,quelle:LI('1tMN7')})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 32 geschrieben');
