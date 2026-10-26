// Überarbeitung der Methodenkarten nach dem Prüfbericht vom 25.10.2026. © Dr. Edmund Bruns
import fs from 'node:fs';
const P='/home/claude/work/SchachStunde/website/method-cards.js';
const src=fs.readFileSync(P,'utf8');const head=src.slice(0,src.indexOf('window.MethodCards='));
const C=JSON.parse(src.slice(src.indexOf('[')).trim().replace(/;\s*$/,''));
const by=Object.fromEntries(C.map(c=>[c.id,c]));const set=(id,o)=>{if(!by[id])throw Error(id);Object.assign(by[id],o)};
// 1. Material passend zur tatsächlichen Vorlage
const M={
discussion:'Vorlage „Was kann der Turm?“ pro Paar, Stift oder Markiersteine; ein Brett mit weißem Turm d4 pro Paar und ein Demobrett zum Zeigen.',
silent:'Vorlage „Meine stillen Turmwege“ und ein Stift pro Kind; ein Brett mit weißem Turm d4 zum anschließenden Prüfen.',
teachback:'Vorlage „Ohne Vorlage erklären“ pro Paar; ein Brett und ein weißer Turm pro Paar.',
transfercard:'Vorlage „Gleiche Regel, anderes Feld“ und ein Stift pro Kind; ein Brett mit weißem Turm pro Paar zum Prüfen.',
'inspiration-44':'Vorlage „Erst schätzen, dann zählen“ und ein Stift pro Paar; ein Brett, ein weißer Turm und 14 Markiersteine pro Paar.',
puzzle:'Vorlage „Finde die Springerziele“ pro Kind, Stift oder Markiersteine; ein Brett und ein weißer Springer pro Paar.',
tps:'Vorlage „Erst ich · dann wir · dann alle“ und ein Stift pro Kind; ein Brett mit weißem Springer pro Paar. Die Kontrollseite bleibt bei der Lehrkraft.',
ladder:'Aufgabenblatt „Springer b1“ pro Paar und die Hilfekarten von Seite 2, ausgeschnitten und verdeckt; ein Brett mit weißem Springer pro Paar.',
mental:'Vorlage „Ein Zug im Kopf“ pro Paar; ein Brett mit weißem Springer b1 zum Kontrollieren.',
mini:'Spielblatt „Turm auf Besuch“ und ein Stift pro Paar; ein Brett, ein weißer Turm und ein weißer Bauer als Hindernis pro Paar.',
compare:'Vergleichsblatt mit zwei Brettbildern und ein Stift pro Paar; zum Nachstellen ein Brett, ein weißer Turm und ein weißer Bauer.',
sort:'Ausschneidekarten und Sortierfläche aus der Vorlage, Schere; ein leeres Brett mit Turm, Läufer und Springer zum Prüfen. Seite 3 ist die Kontrolle für die Lehrkraft.',
coach:'Vorlage „Fragen helfen beim Denken“ pro Paar; ein Brett mit weißem Turm a1 und weißem Bauern a3.',
contrast:'Kontrastblatt mit zwei Brettbildern und ein Stift pro Paar; zum Nachstellen ein Brett, ein weißer Turm und ein weißer Bauer.',
worked:'Vorlage „Ergänze den fehlenden Gedanken“ und ein Stift pro Kind; ein Brett und ein weißer Turm pro Paar.',
reverse:'Vorlage „Baue das Hindernis“ und ein Stift pro Paar; ein Brett, ein weißer Turm und ein weißer Bauer pro Paar.',
repair:'Vorlage „Meine Idee verbessern“ und ein Stift pro Kind; ein Brett und ein weißer Turm pro Paar.',
labyrinth:'Labyrinthblatt „Turmweg mit Hindernis“ und ein Stift pro Paar; ein Brett, ein weißer Turm und Markiersteine für die Sperrfelder.',
'inspiration-21':'Vorlage „Ich denke laut“ pro Paar; ein Brett, ein weißer Turm und ein weißer Bauer als Hindernis.',
'inspiration-26':'Vorlesetext mit Brettbild „Eine kleine Turmgeschichte“ für die Lehrkraft; pro Paar ein Brett und ein weißer Turm.',
'inspiration-53':'Schreibblatt „Meine Erklärung des Turmzuges“ und ein Stift pro Kind; ein Brett mit Turm, um die Erklärungen zu prüfen.',
comment:'Vorlage „Zugfolge mit Denkpausen“ und ein vollständiges Schachspiel pro Paar; die Hinweisseite bleibt bei der Lehrkraft.',
retrieval:'Ein vollständiges Schachspiel pro Kind oder Paar; die Kontrollseite „Grundstellung“ erst nach dem Aufbau zeigen.',
debate:'Vorlage „Zwei Ideen für den Partieanfang“ und ein Stift pro Paar; ein vollständiges Schachspiel pro Paar.',
peercheck:'Prüfkarte „Wir prüfen die Grundstellung“ pro Paar und ein vollständiges Schachspiel pro Kind.',
confidence:'Blatt „Grundstellung · Vorher und nachher“ und ein Stift pro Kind; ein vollständiges Schachspiel pro Kind. Die Kontrollseite bleibt bei der Lehrkraft.',
'inspiration-22':'Ein vollständiges Schachspiel pro Kind und das Blatt „Partnercheck“; das Schild „Treffpunkt“ aus der Vorlage an einen festen Ort legen.',
'inspiration-23':'Rollenkarten zum Ausschneiden und das Blatt mit der Zugfolge 1. e4 e5 2. Sf3 Sc6; ein vollständiges Schachspiel pro Dreiergruppe.',
'inspiration-30':'Plakatvorlage „Die Grundstellung“, auf A3 vergrößert, und dicke Stifte; ein aufgebautes Brett als Vorbild.',
'inspiration-45':'Vier Nummernkarten aus der Vorlage und ein vollständiges Schachspiel pro Vierergruppe.',
exit:'Zettel „Abschlussfrage“ aus der Vorlage und ein Stift pro Kind; Antworten dürfen auch gezeichnet oder mündlich gegeben werden.',
'koffer-kopfstand':'Vorlage „Wie verschenke ich möglichst viele Figuren?“ und Stifte pro Gruppe; ein Brett, um die verbesserten Ideen zu zeigen.',
'inspiration-3':'Sammelblatt „Wie merken wir uns die Grundstellung?“ oder die Tafel; ein Brett, um die Merkhilfen auszuprobieren.',
'inspiration-5':'Mindmap-Vorlage „Was gehört zum Schach?“ und Stifte pro Paar oder Gruppe.',
'inspiration-6':'Cluster-Vorlage „Gedanken zum König“ und ein Stift pro Kind.',
'inspiration-8':'Interviewblatt und ein Stift pro Paar; die Antworten dürfen auch nur mündlich vorgestellt werden.',
'inspiration-10':'Murmelblatt „Vor meinem nächsten Zug“ und ein Stift pro Kleingruppe; ein vereinbartes Stoppsignal.',
'inspiration-33':'Fünf-Finger-Vorlage pro Kind oder als Plakat; die eigene Hand reicht auch.',
'inspiration-34':'Feedbackkarten „Zwei Sterne und ein Wunsch“ aus der Vorlage (zwei pro Blatt), Schere und Stift.',
'inspiration-39':'Elfchen-Vorlage und ein Stift pro Kind.',
reciprocal:'Vorlage „Erklären und nachfragen“ pro Paar; ein Brett und ein weißer Läufer pro Paar.',
visual:'Brettbild „Was fällt dir auf?“ groß zeigen oder pro Paar ausdrucken; ein Brett und ein weißer Läufer pro Paar.',
question:'Vorlage „Meine Frage an das Brett“ und ein Stift pro Paar; ein Brett und ein weißer Läufer pro Paar.',
secure:'Vorlage „Regel und Beispiel“ und ein Stift pro Kind; ein Brett und ein weißer Läufer pro Paar.',
'inspiration-27':'Vorlage „Der Läufer erzählt“ und ein Stift pro Kind; ein Brett mit weißem Läufer c1 zum Prüfen.',
checklist:'Zugcheck-Karten aus der Vorlage, ausgeschnitten, eine pro Paar; ein vollständiges Schachspiel pro Paar.',
freeze:'Denkstopp-Karten aus der Vorlage, ausgeschnitten, und ein vollständiges Schachspiel pro Paar.',
'koffer-wuerfelschach':'Ein vollständiges Schachspiel und ein Würfel pro Paar, dazu die Regelkarte „Würfelschach“ aus der Vorlage.',
reconstruct:'Vorlage „Drei Figuren“, Blatt „Mein nachgebautes Schachbild“ und Papier zum Abdecken; pro Paar ein Brett mit weißem König, weißem Turm und schwarzem König.',
dictation:'Vorlage „Drei Figuren“ für das diktierende Kind; für das bauende Kind ein leeres Brett mit weißem König, weißem Turm und schwarzem König.',
'inspiration-43':'Vorlage „Drei Figuren“ einmal im Raum aufhängen; pro Paar am Platz ein Brett mit weißem König, weißem Turm und schwarzem König.',
create:'Leere Brettvorlage und ein Stift pro Paar; ein Brett mit Turm und eigenem Bauern.'
};
for(const [id,m] of Object.entries(M))set(id,{material:m});
// 2. Beispiele mit Schachinhalt (Vorlagen werden passend neu gesetzt)
set('placemat',{how:'Vier Kinder schreiben oder zeichnen zunächst im eigenen Außenfeld. Anschließend stellen alle ihre Ideen vor und prüfen sie am Brett. Einigt euch auf drei gemeinsame Ideen für die Mitte.',
 material:'Placemat-Vorlage pro Vierergruppe (Seite 1 mit Springer e5 und Bauer d6, Seite 2 leer für ein eigenes Thema), vier Stifte; ein Brett mit weißem Springer e5 und schwarzem Bauern d6. Für mehr Schreibfläche am Kopierer auf A3 vergrößern (141 %).',
 example:'Der weiße Springer e5 wird vom schwarzen Bauern d6 angegriffen. Vier Kinder sammeln Ideen und prüfen sie am Brett. In die Mitte kommt zum Beispiel: auf ein sicheres Feld wegziehen, etwa nach f3. Decken reicht nicht, denn der Bauer ist weniger wert.',
 prerequisite:'Die Zugweisen von Springer und Bauer sowie die Figurenwerte sind bekannt.'});
set('tournament',{material:'Ein vollständiges Schachspiel pro Paar und die Vorlage „Paarungen und Beobachtungsfrage“; ein Stift für die Einträge.',
 example:'Beobachtungsfrage für alle Partien: Wann hat jede Seite rochiert? Nach jeder Partie trägt das Paar die Zugnummer ein, zum Beispiel „Weiß im 6. Zug, Schwarz gar nicht“, und bespricht, welcher König sicherer stand.',
 prerequisite:'Grundstellung, legale Züge, Rochade sowie Schach, Matt und Patt sind bekannt.'});
set('inspiration-4',{material:'Brainwriting-Blatt „Wie bringen wir die Türme ins Spiel?“ pro Kind und Stifte; für Schreibanfänger eine Person, die diktierte Ideen notiert.',
 example:'Zur Frage „Wie kommt der Turm h1 ins Spiel?“ schreibt ein Kind: „Springer g1 und Läufer f1 entwickeln.“ Das nächste ergänzt: „Dann rochieren, der Turm steht auf f1.“ Ein drittes: „Eine Linie öffnen, damit der Turm wirkt.“',
 prerequisite:'Grundstellung, Zugweisen und Rochade sind bekannt. Lesen und Schreiben erforderlich, oder eine Person schreibt diktierte Ideen auf.'});
set('inspiration-11',{material:'Stühle für Innen- und Außenkreis und ein freier Wechselstuhl; im Innenkreis ein Brett mit der Stellung aus der Vorlage, dazu die Beobachtungskarte für den Außenkreis.',
 example:'Weiß: Kg1, Te1. Schwarz: Kg8, Bauern f7, g7, h7. Der Innenkreis prüft, ob Te8 Matt ist, und danach, was sich ändert, wenn der Bauer auf h6 statt h7 steht. Der Außenkreis achtet darauf, wer seine Antwort am Brett begründet.',
 prerequisite:'Schach, Matt und die drei Abwehrarten sind bekannt.'});
set('inspiration-12',{material:'Vorlage „Unsere Denkregeln vor dem Zug“ und Stifte pro Vierergruppe; ein Brett, um jede Regel an einem Zug zu zeigen.',
 example:'Allein schreibt ein Kind „Ist meine Figur danach gedeckt?“. Zu zweit kommt „Was droht der Gegner?“ dazu. Zu viert einigen sich die Kinder auf drei Denkregeln und zeigen jede an einem Zug am Brett.',
 prerequisite:'Zugweisen, Angreifen und Decken sind bekannt.'});
set('inspiration-28',{what:'Eine Situation am Brett wird kurz nachgespielt und gemeinsam ausgewertet.',
 material:'Rollenkarten „Berührt, geführt“ aus der Vorlage, ein vollständiges Schachspiel und eine freie Spielfläche.',
 example:'Nach 1. e4 e5 berührt ein Kind den Springer g1, will dann aber den Läufer f1 ziehen. Das Kind in der Rolle der Schiedsrichterin erklärt „Berührt, geführt“: Der Springer muss ziehen. Danach besprechen alle, wie man das freundlich anspricht.',
 prerequisite:'Grundstellung und Zugweisen sind bekannt; die Regel „Berührt, geführt“ wird im Rollenspiel erklärt.'});
set('inspiration-36',{material:'Drei Tische mit je einem Tischblatt aus der Vorlage und einem Schachbrett, große Papierbögen und mehrere Stifte pro Tisch.',
 example:'An Tisch 1 sammeln Kinder Eröffnungsideen wie „mit e4 das Zentrum besetzen“ und „Springer und Läufer früh entwickeln“. Die nächste Gruppe prüft eine Idee am Brett und ergänzt eine eigene.',
 prerequisite:'Eröffnungsregeln, Rochade und Figurenwerte wurden eingeführt; erste Partien sind gespielt.'});
set('inspiration-38',{material:'Vorlage „Soll ich früh rochieren?“ und ein Stift pro Kind oder Paar; ein vollständiges Schachspiel zum Nachspielen.',
 example:'Nach 1. e4 e5 2. Sf3 Sc6 3. Lc4 Lc5: IST, der König steht noch auf e1. SOLL, er steht hinter Bauern sicher. WARUM, nach 4. 0-0 ist er geschützt und der Turm kommt nach f1. APPELL: „In meiner nächsten Partie rochiere ich früh.“',
 prerequisite:'Rochade und Eröffnungsregeln sind bekannt; erste Partien sind gespielt.'});
set('inspiration-47',{material:'Rollenkarten aus der Vorlage, Kreide oder Klebeband für ein Stück e-Linie und eine freie Fläche.',
 example:'Drei Kinder stellen auf einem Bodenbrett dar: Der schwarze Turm e8 gibt dem weißen König e1 Schach, der weiße Läufer stellt sich auf e2 dazwischen. Die Gruppe beschreibt das Bild und benennt die Abwehrart: dazwischenstellen.',
 prerequisite:'Schach und die drei Abwehrarten sind bekannt.'});
set('inspiration-48',{material:'Vorlage „Soll Weiß früh mit der Dame angreifen?“ und ein Stift pro Gruppe; ein vollständiges Schachspiel zum Zeigen der Züge.',
 example:'Nach 1. e4 e5 2. Dh5 sammelt die Pro-Gruppe: „Die Dame greift e5 und f7 an.“ Die Contra-Gruppe zeigt 2. ... Sc6 3. Lc4 g6: Die Dame muss wieder ziehen und verliert Zeit. Danach urteilt jedes Kind selbst.',
 prerequisite:'Eröffnungsregeln und Zugnotation sind bekannt.'});
set('inspiration-49',{example:'Die AG gestaltet einen Schach-Schnuppertag: Ein Team schreibt die Einladung, an der Figurenstation zeigen zwei Kinder den Gästen den Springerzug b1–c3, ein drittes Team erklärt die Grundstellung.'});
set('inspiration-51',{material:'Vorlage „Meine Gewohnheiten am Brett“ und ein Stift pro Kind.',
 example:'In den Koffer kommt „vor jedem Zug fragen: Was droht?“. In die Tonne kommt „Figuren ungedeckt stehen lassen“, etwa einen Läufer auf c4, den der Bauer d5 schlagen kann.'});
set('koffer-schreibkonferenz',{group:'Denken und Austausch',material:'Ein großes Blatt (Vorlage, auf A3 vergrößert) pro Vierergruppe und ein Stift je Kind; ein Brett mit zwei weißen Springern zum Nachprüfen.',
 example:'Auf dem Blatt steht: „Ist ein Springer am Rand schlecht?“ mit Springern auf a4 und d4. Ein Kind schreibt „a4 hat nur 4 Ziele“, ein anderes ergänzt „d4 hat 8“, ein drittes fragt „Und auf a1?“.',
 prerequisite:'Die Springerzüge sind bekannt. Lesen und Schreiben erforderlich, oder eine Person schreibt diktierte Ideen auf.'});
set('comment',{how:'Nur die Anfangsstellung der Aufgabe zeigen. Vor jedem Lösungszug stoppen und einen Vorschlag mit Grund sammeln. Dann den Lösungszug zeigen und seine Wirkung erklären lassen.'});
// 3. Höchstens zwei Phasen, die wirklich passen
const E='Einstieg',A='Erarbeitung',S='Ergebnissicherung/Reflexion';
const PH={discussion:[E,A],demo:[A],errors:[A,S],partner:[A],stations:[A],puzzle:[A],mini:[A],movement:[E,A],game:[A,S],tps:[E,A],jigsaw:[A],comment:[A],create:[A,S],tournament:[A],exit:[S],compare:[A],sort:[A,S],predict:[E,A],reciprocal:[A],placemat:[E,A],gallery:[S],silent:[A],analogy:[E,A],visual:[E],journal:[S],coach:[A],retrieval:[E,S],debate:[A],ladder:[A],question:[E,A],checklist:[A],contrast:[A],teachback:[S],worked:[A],vote:[E,S],reverse:[A],secure:[S],examplecounter:[A],peercheck:[S],repair:[A,S],transfercard:[S],confidence:[E,S],labyrinth:[A],mental:[A],reconstruct:[A],dictation:[A],consultation:[A],freeze:[A],defender:[A],
'koffer-figurenrechnen':[A],'koffer-kopfstand':[E],'koffer-blindfinish':[A],'koffer-mattmemory':[A,S],'koffer-motivewurf':[A],'koffer-tedtest':[E,S],'koffer-schreibkonferenz':[E,A],'koffer-rundreise':[A,S],'koffer-simultan':[A],'koffer-mattwettkampf':[A],'koffer-schachpuzzlebild':[E],'koffer-knuffel':[A],'koffer-wuerfelschach':[A],'koffer-feldbild':[A]};
const IP={1:[E,S],2:[E,S],3:[E],4:[E,A],5:[E,S],6:[E],7:[E],8:[E],9:[A,S],10:[E,A],11:[A],12:[A,S],13:[E],14:[E],15:[E,S],16:[S],17:[S],18:[E,S],19:[E,S],20:[S],21:[A],22:[A],23:[A],24:[A],25:[E],26:[E],27:[A,S],28:[A],29:[A,S],30:[S],31:[S],32:[E,S],33:[S],34:[S],35:[S],36:[A],37:[A,S],38:[A],39:[S],40:[S],41:[A],42:[A],43:[A],44:[E],45:[A],46:[A],47:[A,S],48:[A],49:[A],50:[A],51:[S],52:[S],53:[A,S]};
for(const [n,p] of Object.entries(IP))PH['inspiration-'+n]=p;
for(const c of C){if(!PH[c.id])throw Error('Phase fehlt '+c.id);c.phases=PH[c.id]}
// 4. Bekannte Methodennamen als Titel, alte Titel als Suchbegriff
const R={'koffer-simultan':['Simultanspiel','Simultan, eine Lehrkraft spielt an mehreren Brettern'],'koffer-rundreise':['Rundreise mit Behauptungen','Rundgang, Stationen, von Aussage zu Aussage gehen und prüfen'],'koffer-knuffel':['Figurenkniffel','Kniffel, Knuffel, Würfelspiel, mit Figurenwürfeln Punkte sammeln'],'koffer-wuerfelschach':['Würfelschach','Die Figurenart für den nächsten Zug würfeln'],'koffer-motivewurf':['Motivwürfel','Ein Motiv auslosen und eine Stellung dazu bauen'],'koffer-schachpuzzlebild':['Brettpuzzle','Ein zerschnittenes Schachbild zusammensetzen, Puzzle'],'koffer-blindfinish':['Partieende im Kopf','Blindschach, die letzten Züge einer Kurzpartie im Kopf finden'],'koffer-mattwettkampf':['Mattwettkampf','Mattaufgaben lösen und die Begründung vergleichen, Wettbewerb'],'koffer-feldbild':['Feldbild ausmalen','Nach Feldnamen ein Muster ausmalen, Koordinaten'],'koffer-figurenrechnen':['Figurenwerte rechnen','Figurenwerte zusammenrechnen, Punktwerte']};
for(const [id,[n,a]] of Object.entries(R))set(id,{name:n,aliases:a});
const AL={jigsaw:'Expertenpuzzle, Expertengruppen, Gruppenarbeit',placemat:'Platzdeckchen, Gruppenarbeit',tps:'Denken, Austauschen, Vorstellen, Partnerarbeit',stations:'Lernzirkel, Lerntheke, Stationen','inspiration-9':'Doppelkreis, Partnerwechsel, Kugellager','inspiration-10':'Bienenkorb, Murmelphase','inspiration-12':'Schneeball, Pyramide','inspiration-13':'Ecken, Positionierung','inspiration-14':'Positionslinie, Barometer','inspiration-15':'Punkte kleben, Abstimmung','inspiration-36':'Weltcafé, Tischgruppen','inspiration-11':'Aquarium, Innenkreis Außenkreis','inspiration-48':'Debatte, Streitgespräch','inspiration-43':'Laufdiktat, Bewegung','koffer-tedtest':'TED, Ampelkarten, Abstimmung',consultation:'Teamschach, Beratung, Gruppenarbeit',coach:'Tandem, Partnerarbeit',partner:'Partnerarbeit, Tandem',exit:'Exit-Ticket, Minutenpapier, Abschluss',journal:'Lerntagebuch, Tagebuch','inspiration-40':'Portfolio, Sammelmappe'};
for(const [id,a] of Object.entries(AL))set(id,{aliases:[by[id].aliases,a].filter(Boolean).join(', ')});
fs.writeFileSync(P,head+'window.MethodCards='+JSON.stringify(C,null,2)+';\n');
console.log('Methodenkarten aktualisiert:',C.length);
