// Woche 26 „Wiederholung und Silber-Diplom“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w25.mjs, dann diese Datei.
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
F[26]={thema:'Wiederholung und Silber-Diplom',
 lernziel:'Ich kann die Silber-Missionen allein lösen.',
 leitfrage:'Zeige ich am Brett und auf dem Testblatt, dass ich Sonderregeln, Notation, Damenmatt und die ersten Taktiken kann?',
 vorwissen:'Alle Themen der Wochen 12 bis 25: Sonderregeln, Patt, Damenmatt, Notation, Turnierregeln, Fesselung, Gabel, Spieß und Abzug.',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Silber 1 bis 4 und praktischer Gelingensnachweis (ludgerus-schachdiplom.netlify.app). Lichess-Puzzles S9LN9, fqmVE, 46xjk, qF2SP und K27v5 (CC0, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Alle Lösungen mit chess.js nachgerechnet, die Lichess-Lösungen stammen aus der Datenbank',
 phasen:[
 {name:'Einstieg',titel:'Silber-Mix zum Aufwärmen und Ablauf erklären',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6 eine kurze Aufwärmrunde: unmögliche Stellung, Freibauer, Umwandlung, Rochade, en passant, Fesselung.',
   'Ablauf erklären: Heute zeigt ihr am Brett und auf zwei Testblättern, was ihr in der Silber-Stufe gelernt habt. Wer alle sechs Punkte am Brett schafft und mindestens 10 von 12 Testaufgaben, bekommt das Silber-Diplom. Wer es heute noch nicht schafft, übt weiter und versucht es noch einmal.'],
  kinder:'Ich weiß, wie die Silber-Prüfung abläuft.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Generalprobe am Lehrbrett',
  ablauf:['Am Lehrbrett E1 bis E6 eine Generalprobe: Patt vermeiden, Damenmatt, einen Zug notieren, Gabel, Spieß, Doppelschach. Nach jeder Aufgabe zeigen alle mit Daumen hoch, Mitte oder runter, wie sicher sie sich fühlen.',
   'Bei E1 fragen: „Woran erkennst du, dass es Patt und nicht Matt wäre?“ Merksatz: „Erst prüfen, ob es Schach ist, dann zählen, ob der König noch ein Feld hat.“'],
  kinder:'Ich weiß, welche Silber-Themen ich sicher kann.',
  links:[{art:'feld',label:'Lehrbrett: Generalprobe E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Praktischer Nachweis zu zweit',
  ablauf:['Zu zweit mit dem Prüfbogen: Kind A zeigt beide Rochaden und nennt die Bedingungen, zeigt en passant und eine Umwandlung und setzt mit Dame und König gegen den König matt. Kind B prüft mit dem Plakat. Danach wechseln die Rollen.',
   'Danach spielen beide fünf Züge und schreiben sie mit. Zum Schluss stellt jedes Kind eine Fesselung, eine Gabel oder einen Spieß auf und erklärt sie. Du gehst herum und hakst auf dem Prüfbogen ab, was jedes Kind allein zeigt.',
   'Wer Geräte hat, kann zusätzlich die Silber-Missionen im Ludgerus-Schachdiplom online bearbeiten.'],
  kinder:'Ich zeige am Brett alle sechs Punkte des Nachweises.',
  links:[{art:'druck',label:'Prüfbogen: praktischer Nachweis Silber',was:'nachweis'},{art:'druck',label:'Partieformular zum Mitschreiben',was:'partieformular'},{art:'blatt',label:'Ludgerus-Schachdiplom online (Silber 1 bis 4)',url:URLS.diplomOnline}]},
 {name:'Sicherung',titel:'Knackpunkte vor dem Test',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die Knackpunkte, die beim Nachweis aufgefallen sind: Rochade nach einem Königszug, en passant nur sofort, Patt statt Matt, gefesselter Springer, Bauernschlag notieren, Doppelschach abwehren.',
   'Bei jeder Aufgabe nachfragen: „Warum?“ oder „Woran erkennst du das?“'],
  kinder:'Ich kenne die typischen Fallen vor dem Test.',
  links:[{art:'feld',label:'Lehrbrett: Knackpunkte S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Silber-Test: zwei Blätter mit je sechs Aufgaben',
  ablauf:['Jedes Kind löst allein Teil 1 (Sonderregeln und Notation, A1 bis A6) und Teil 2 (Matt und Taktik, L1 bis L6). Teil 2 enthält vier Aufgaben aus echten Lichess-Partien. Bestanden ist mit mindestens 10 von 12 Aufgaben.',
   'Du kontrollierst mit den Lösungsblättern und besprichst falsche Aufgaben gleich mit dem Kind am Lehrbrett.'],
  kinder:'Ich löse mindestens 10 von 12 Testaufgaben allein.',
  links:[{art:'druck',label:'Silber-Test Teil 1',was:'feld:A'},{art:'feld',label:'Lehrbrett: Teil 1 A1 bis A6',set:'A'},{art:'druck',label:'Silber-Test Teil 2',was:'feld:L'},{art:'feld',label:'Lehrbrett: Teil 2 L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Urkunden, Rückblick, Aufräumen',
  ablauf:['Urkunden überreichen, alle klatschen. Wer es noch nicht geschafft hat, bekommt einen festen Termin für den zweiten Versuch und weiß, was er üben soll.',
   'Rückblick: „Was war für dich am schwersten auf dem Weg zum Silber-Diplom?“ Aufräum-Ritual. Ausblick: Nächstes Mal beginnt die Gold-Stufe mit dem Gegenangriff.'],
  kinder:'Ich weiß, was ich geschafft habe und was als Nächstes kommt.',
  links:[{art:'druck',label:'Silber-Urkunde (zwei pro Blatt)',was:'urkunde'}]}],
 hinweise:{hilfe:'Kinder mit Leseschwierigkeiten bekommen die Testaufgaben vorgelesen. Der praktische Nachweis zählt genauso viel wie das Blatt. Das Plakat zur Rochade und zum Damenmatt darf beim Nachweis hängen bleiben.',
  zusatz:'Wer früh fertig ist, bearbeitet im Ludgerus-Schachdiplom online schon Gold 1 oder spielt eine Partie mit Schachuhr und schreibt mit.',
  kuerzen:'Die Generalprobe auf E4 bis E6 kürzen, das Mitschreiben im Nachweis auf drei Züge. Der Test bleibt vollständig. Wer nicht fertig wird, beendet den Test in Woche 27.'},
 nachher:'Wer hat das Silber-Diplom noch nicht? In welchem Bereich fehlen Punkte: Sonderregeln, Notation, Damenmatt oder Taktik? Für diese Kinder planst du in Woche 27 eine Übungsecke mit genau diesen Aufgaben ein.',
 feld:{
 W:[T('Aufwärmen: Klicke die Figur an, die in einer echten Partie so nie stehen kann.',{e1:'K',e8:'k',b8:'P',c4:'p'},null,'Der Bauer b8. Ein weißer Bauer auf der 8. Reihe wird sofort umgewandelt, er bleibt dort nie als Bauer stehen.',['Wo werden Bauern umgewandelt?','Schau auf die 8. Reihe.'],{pruef:{illegal:true}}),
  T('Aufwärmen: Klicke den weißen Freibauern an.',{g1:'K',g8:'k',b4:'P',e3:'P',g2:'P',a7:'p',h7:'p'},null,'Der Bauer e3. Vor ihm und auf der d- und f-Linie steht kein schwarzer Bauer. b4 hält der Bauer a7 auf, g2 der Bauer h7.',['Prüfe drei Linien: die eigene und die beiden daneben.','Nur Bauern vor ihm zählen.'],{pruef:{freibauer:'w'}}),
  T('Aufwärmen: Welche weißen Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{g1:'K',a1:'k',c7:'P',c8:'b',f7:'P',e8:'q',h5:'P'},null,'Nur f7. Er zieht nach f8 oder schlägt die Dame e8. c7 ist blockiert und kann nichts schlagen, h5 ist zu weit weg.',['Welche Bauern stehen auf der 7. Reihe?','Ist das Feld davor frei, oder kann er schräg schlagen?'],{pruef:{umwandeln:true}}),
  T('Aufwärmen: Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.','4k3/8/8/8/2b5/8/8/R3K2R',null,'Nur c1. Der Läufer c4 greift f1 an, über ein angegriffenes Feld darf der König nicht ziehen. Die lange Rochade ist erlaubt.',['Welche Felder greift der Läufer c4 an?','Der König darf nicht über ein angegriffenes Feld ziehen.'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  ZE('Aufwärmen: Schwarz hat gerade b7–b5 gespielt. Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','a4 h6 a5 h5 c4 h4 c5 b5',null,'a5 und c5. Beide stehen auf der 5. Reihe direkt neben b5 und dürfen nach b6 schlagen.',['Wer steht neben b5?','Auf der 5. Reihe.'],{pruef:{epschlaeger:true}}),
  X('Aufwärmen: Klicke die gefesselte schwarze Figur an.','4k3/3n4/8/8/B7/8/8/6K1',g=>pins(g,'b').gefesselt,'Der Springer d7. Zieht er weg, steht der König e8 im Schach durch den Läufer a4.',['Was steht zwischen dem Läufer und dem König?','Darf diese Figur wegziehen?'])],
 E:[T('Generalprobe Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf, weil Schwarz sonst patt wäre.','k7/8/2K5/8/8/8/7Q/8',null,'c7. Von dort deckt die Dame a7 und b8, b7 deckt der König c6. Schwarz stünde nicht im Schach und hätte keinen Zug: Patt.',['Welches Feld des schwarzen Königs ist noch frei?','Von welchen Feldern deckt die Dame dieses Feld, ohne Schach zu geben?'],{leer:true,pruef:{patt:'h2'}}),
  T('Generalprobe Damenmatt: Klicke alle Felder an, auf denen die Dame mattsetzt.','4k3/8/4K3/8/8/8/8/7Q',null,'a8 und h8. Die Dame gibt Schach über die 8. Reihe, der König e6 deckt d7, e7 und f7.',['Der König e6 deckt d7, e7 und f7.','Die Dame braucht die 8. Reihe.'],{leer:true,pruef:{matt:true}}),
  SCHREIB('Notiere den mit dem Pfeil eingezeichneten Zug in deutscher Kurznotation.','e4 e5 Nf3 Nc6 Bb5 a6','Lxc6','Lxc6. L für Läufer, x für schlagen, c6 ist das Zielfeld.',['Welche Figur zieht?','Wird dabei geschlagen?']),
  X('Generalprobe Gabel: Klicke das Feld an, auf das der Springer zieht und zwei Figuren angreift.','3k3r/8/8/6N1/8/8/8/3K4',g=>gabelZuege(g,'n'),'f7. Sf7+ gibt Schach und greift den Turm h8 an. Der Springer steht dort sicher. Nach dem Königszug schlägt er den Turm.',['Welche Felder greifen den König d8 an?','Welches davon greift auch den Turm h8 an?'],{leer:true}),
  X('Generalprobe Spieß: Klicke das Feld an, auf das der Läufer zieht.','6q1/8/8/3k4/8/8/8/3B3K',g=>spiessZuege(g,'b'),'b3. Lb3+ gibt Schach, nach dem Königszug schlägt der Läufer die Dame g8. Auf c4 würde der König den Läufer schlagen.',['Auf welcher Diagonale stehen König und Dame?','Der Läufer muss vor den König, aber nicht direkt daneben.'],{leer:true}),
  X('Generalprobe Doppelschach: Klicke das Feld an, auf das der Läufer zieht, damit Läufer und Turm gleichzeitig Schach geben.','7k/8/8/8/7B/8/8/6KR',g=>abzug(g,'h4','doppel'),'f6. Der Läufer gibt Schach über g7, der Turm h1 auf der h-Linie: Doppelschach.',['Der Läufer muss die h-Linie verlassen.','Von welchem Feld greift er h8 an?'],{leer:true})],
 A:[T('Test: Klicke die Figur an, die in einer echten Partie so nie stehen kann.',{e1:'K',e8:'k',g8:'p',d4:'P'},null,'Der Bauer g8. Ein schwarzer Bauer beginnt auf der 7. Reihe und zieht nach unten. Auf die 8. Reihe kommt er nie.',['In welche Richtung zieht ein schwarzer Bauer?','Wo beginnen die schwarzen Bauern?'],{pruef:{illegal:true}}),
  T('Test: Welche weißen Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{h1:'K',h6:'k',b7:'P',b8:'r',a8:'n',e7:'P',e8:'b',g4:'P'},null,'Nur b7. Er schlägt den Springer a8. e7 ist blockiert und hat nichts zu schlagen, g4 ist zu weit weg.',['Welche Bauern stehen auf der 7. Reihe?','Auch Schlagen auf die letzte Reihe zählt.'],{pruef:{umwandeln:true}}),
  T('Test: Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.','1r2k3/8/8/8/8/8/8/R3K2R',null,'c1 und g1. Der Turm b8 greift b1 an, aber über b1 zieht nur der Turm, nicht der König. Beide Rochaden sind erlaubt.',['Welche Felder überquert der König?','Ein angegriffenes Feld neben dem Turm stört nicht.'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  ZE('Test: Schwarz hat gerade b7–b5 gespielt. Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','e4 d5 e5 a6 c4 a5 c5 b5',null,'Nur c5. Er steht neben b5. Der Bauer d5 kam schon früher, deshalb darf e5 ihn nicht mehr en passant schlagen.',['Welcher schwarze Bauer hat gerade den Doppelschritt gemacht?','En passant geht nur sofort.'],{pruef:{epschlaeger:true}}),
  T('Test: Klicke alle Felder an, auf die der Turm nicht ziehen darf, weil Schwarz sonst patt wäre.','k7/2K5/8/8/8/8/8/1R6',null,'b7. Dort nimmt der Turm a7 weg, ohne Schach zu geben, b8 und b7 deckt der König c7: Patt. Richtig wäre Ta1, das ist Matt.',['Welches Feld des schwarzen Königs ist noch frei?','Der Turm darf dieses Feld nicht ohne Schach wegnehmen.'],{leer:true,pruef:{patt:'b1'}}),
  NZ('Test: Schwarz spielt 0-0-0. Markiere die Felder, auf denen König und Turm danach stehen.','d4 d5 Nc3 Nc6 Bf4 Bf5 Qd2 Qd7 e3 e6','0-0-0','rochade','c8 und d8. 0-0-0 ist die lange Rochade: König nach c8, Turm nach d8.',['0-0 kurz, 0-0-0 lang.','Der König zieht zwei Felder zum Turm a8.'])],
 S:[T('Knackpunkt Rochade: Der weiße König hat schon einmal gezogen und ist zurückgekehrt. Markiere die Zielfelder einer Rochade.'+KEINE,'r3k2r/8/8/8/8/8/8/R3K2R',null,'Keine. Wer schon mit dem König gezogen hat, darf nie mehr rochieren, auch wenn der König wieder auf e1 steht.',['Hat der König schon gezogen?','Bedingung 1 auf dem Plakat.'],{rechte:'kq',leer:true,pruef:{rochade:true}}),
  ZE('Knackpunkt en passant: Schwarz hat d7–d5 schon früher gespielt, gerade eben a6–a5. Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.'+KEINE,'e4 d5 e5 a6 h3 a5',null,'Keine. En passant geht nur direkt nach dem Doppelschritt. Der Bauer d5 steht schon länger dort.',['Welcher Bauer hat gerade gezogen?','Hat er einen Doppelschritt neben einem weißen Bauern gemacht?'],{pruef:{epschlaeger:true}}),
  P('Knackpunkt Patt: Schwarz ist am Zug und steht nicht im Schach. Markiere alle Felder, auf die der schwarze König ziehen darf.'+KEINS,'7k/5Q2/6K1/8/8/8/8/8 b - - 0 1','Keins. Schwarz steht nicht im Schach und hat keinen Zug: Patt, also Remis. Weiß hätte mit Dg7 oder Df8 mattsetzen können.',['Steht der König im Schach?','Prüfe g8, g7 und h7.'],{legal:'h8'},{leer:true}),
  P('Knackpunkt Fesselung: Markiere alle Felder, auf die der Springer e4 ziehen darf.'+KEINS,'4r1k1/8/8/8/4N3/8/8/4K3','Keins. Der Turm e8 fesselt den Springer an den König e1. Jeder Springerzug verlässt die e-Linie.',['Was steht hinter dem Springer?','Verlässt ein Springerzug die e-Linie?'],{legal:'e4'},{leer:true}),
  NZ('Knackpunkt Notation: Weiß spielt exd5. Markiere Startfeld und Zielfeld.','e4 d5','exd5','beide','e4 und d5. Beim Bauernschlag steht zuerst die Linie, von der der Bauer kommt, dann x und das Zielfeld.',['Der Buchstabe e nennt die Linie des Bauern.','x heißt schlagen.']),
  P('Knackpunkt Doppelschach: Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die das Schach abwehren können.','4k3/8/8/1B6/8/2q5/8/4R1K1 b - - 0 1','Nur der König e8. Die Dame könnte den Turm e1 schlagen, aber der Läufer b5 gäbe weiter Schach. Beim Doppelschach muss der König ziehen.',['Welche zwei Figuren geben Schach?','Kann ein Zug beide Schachs beenden?'],{abwehr:true},{schach:true})],
 L:[T('Test: Matt mit Dame und König. Klicke alle Felder an, auf denen die Dame mattsetzt.','k7/8/1K6/8/8/8/8/3Q4',null,'d8. Die Dame gibt Schach über die 8. Reihe und deckt b8, a7 und b7 deckt der König b6.',['Der König b6 deckt a7 und b7.','Welches Feld bleibt dem König a8 noch?'],{leer:true,pruef:{matt:true}}),
  X('Test, echte Partie: Schwarz hat Sf3+ gespielt. Warum kann Weiß den Springer nicht mit dem Bauern schlagen? Klicke die gefesselte weiße Figur an.','2r2rk1/pp3ppp/5nq1/3p4/3Np3/P3Pn1P/1PPQ1PP1/2NR1RK1 w - - 5 22',g=>pins(g,'w').gefesselt,'Der Bauer g2. Die Dame g6 fesselt ihn an den König g1, deshalb darf er den Springer f3 nicht schlagen. So ging die Partie weiter: Kh1 Sxd2, Schwarz gewann die Dame.',['Welche schwarze Figur steht auf der g-Linie?','Was steht zwischen ihr und dem König g1?'],{schach:true,quelle:LI('S9LN9')}),
  LZ('Test, echte Partie: Weiß greift mit dem Springer König und Turm gleichzeitig an. Klicke das Feld an, auf das der Springer zieht.','8/4pk2/8/4B3/5P1p/5N1r/4K3/8 w - - 4 47','f3g5','g5. Sg5+ gibt Schach und greift den Turm h3 an. So ging die Partie weiter: Kg6 Sxh3.',['Der Springer soll mit Schach ziehen.','Welches Springerfeld greift auch h3 an?'],'fqmVE'),
  LZ('Test, echte Partie: Weiß gewinnt mit einem Spieß den Turm. Klicke das Feld an, auf das der Turm zieht.','1R6/8/5p2/4p1k1/4P3/5P1K/8/6r1 w - - 6 53','b8g8','g8. Tg8+ gibt Schach auf der g-Linie, dahinter steht der Turm g1. So ging die Partie weiter: Kh6 Txg1.',['Auf welcher Linie stehen König und Turm?','Der Turm muss vor den König.'],'46xjk'),
  LZ('Test, echte Partie: Schwarz zieht den Läufer mit Schach weg und öffnet der Dame d8 die 8. Reihe. Klicke das Feld an, auf das der Läufer zieht.','Q1bq1rk1/p5p1/1p2p2p/5pP1/3N1P2/2P4R/P1P1K3/R7 b - - 0 24','c8a6','a6. La6+ gibt Schach, danach schlägt die Dame d8 die Dame a8. So ging die Partie weiter: Kd2 Dxa8.',['Was steht zwischen der Dame d8 und der weißen Dame a8?','Der Läufer soll mit Schach ziehen.'],'qF2SP'),
  LZ('Test, echte Partie: Schwarz setzt in einem Zug matt. Klicke das Feld an, auf das die Dame zieht.','rnb1kb1r/pp1p1ppp/2p1p3/4P3/3PnP1q/3B4/PPP3PP/RNBQ1KNR b kq - 4 6','h4f2','f2. Df2# ist Matt. Der Springer e4 deckt die Dame, der König f1 hat kein freies Feld.',['Die Dame braucht eine Deckung.','Welche Felder neben dem König f1 sind frei?'],'K27v5')]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 26 geschrieben');
