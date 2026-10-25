/* Lernfortschrittsraster: Lernstand der Gruppe je Lerncheck (nicht / teilweise / verstanden).
   Speichert nur im Browser dieses Geräts. Excel-Export und -Import ohne fremde Bibliotheken.
   © Dr. Edmund Bruns */
(function(){
const KEY='schachstunde-raster-v1';
const STUFEN=['nicht','teilweise','verstanden'];
const COLS={bronze:[[1,'Brett und Grundstellung'],[2,'Felder benennen'],[3,'Turm und Läufer'],[4,'Dame, König, Springer'],[5,'Bauer'],[6,'Angreifen und decken'],[7,'Tauschen'],[8,'Schach und Matt'],[9,'Fairplay und Partie'],[11,'Bronze-Diplom']],silber:[[12,'Legal oder illegal, starke Figuren'],[13,'Umwandlung und Freibauern'],[14,'Rochade'],[15,'En passant'],[16,'Patt und Remis'],[17,'Matt mit Dame und König'],[18,'Weihnachtsturnier'],[19,'Notation: Züge lesen und schreiben'],[20,'Turnierregeln, Schachuhr, Mitschreiben'],[21,'Schulmeisterschaft'],[22,'Fesselung'],[23,'Gabel und Doppelangriff'],[24,'Spieß'],[25,'Abzug und Abzugsschach'],[26,'Silber-Diplom']],gold:[[27,'Gegenangriff statt Flucht'],[28,'Matt mit zwei Türmen'],[29,'Ein Matt abwehren']]};
const NAME={bronze:'Bronze',silber:'Silber',gold:'Gold'};const stufeVon=w=>w>26&&COLS.gold?'gold':w>11?'silber':'bronze';
// Spaltennamen älterer Tabellen (zum Beispiel „Lernfortschrittsraster Schach“) auf Wochen abbilden
const ALIAS={'schachbrett':[1,2],'brett':[1],'grundstellung':[1],'felder':[2],'koordinaten':[2],'bauer':[5],'turm':[3],'läufer':[3],'laeufer':[3],'dame':[4],'springer':[4],'könig':[4],'koenig':[4],'angreifen':[6],'decken':[6],'tauschen':[7],'figurenwerte':[7],'schach':[8],'matt':[8],'fairplay':[9],'partie':[9],'bronze':[11],'diplom':[11]};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let mem=null;
function load(){if(mem)return mem;let d=null;try{d=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}
 if(!d||!Array.isArray(d.kinder))d={kinder:[],werte:{}};mem=d;return d}
function save(){try{localStorage.setItem(KEY,JSON.stringify(mem));return true}catch(e){return false}}
const id=()=>Math.random().toString(36).slice(2,9);
function wert(kid,w){return (load().werte[kid]||{})[w]||''}
function setWert(kid,w,v){const d=load();d.werte[kid]=d.werte[kid]||{};if(v)d.werte[kid][w]=v;else delete d.werte[kid][w];save()}
function auswertung(w){const d=load();const c={nicht:0,teilweise:0,verstanden:0};for(const k of d.kinder){const v=wert(k.id,w);if(c[v]!=null)c[v]++}
 const n=c.nicht+c.teilweise+c.verstanden;if(!n)return null;
 const zeile=c.verstanden/n>=0.8?0:(c.nicht/n>=0.3?2:1);return {...c,n,zeile}}
// ---------- ZIP (nur speichern beim Schreiben, Deflate beim Lesen über DecompressionStream) ----------
const CRC=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
function crc32(b){let c=0xFFFFFFFF;for(let i=0;i<b.length;i++)c=CRC[(c^b[i])&255]^(c>>>8);return (c^0xFFFFFFFF)>>>0}
function zip(files){const enc=new TextEncoder(),parts=[],central=[];let off=0;
 for(const [name,text] of files){const data=enc.encode(text),nb=enc.encode(name),crc=crc32(data);
  const h=new DataView(new ArrayBuffer(30));h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0x0800,true);h.setUint16(8,0,true);h.setUint32(14,crc,true);h.setUint32(18,data.length,true);h.setUint32(22,data.length,true);h.setUint16(26,nb.length,true);
  parts.push(new Uint8Array(h.buffer),nb,data);
  const c=new DataView(new ArrayBuffer(46));c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint16(8,0x0800,true);c.setUint32(16,crc,true);c.setUint32(20,data.length,true);c.setUint32(24,data.length,true);c.setUint16(28,nb.length,true);c.setUint32(42,off,true);
  central.push(new Uint8Array(c.buffer),nb);off+=30+nb.length+data.length}
 const size=central.reduce((s,a)=>s+a.length,0),e=new DataView(new ArrayBuffer(22));e.setUint32(0,0x06054b50,true);e.setUint16(8,files.length,true);e.setUint16(10,files.length,true);e.setUint32(12,size,true);e.setUint32(16,off,true);
 return new Blob([...parts,...central,new Uint8Array(e.buffer)],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
async function unzip(buf){const u=new Uint8Array(buf),v=new DataView(buf);let e=u.length-22;while(e>=0&&v.getUint32(e,true)!==0x06054b50)e--;if(e<0)throw new Error('Keine Excel-Datei');
 const n=v.getUint16(e+10,true);let p=v.getUint32(e+16,true);const out={},dec=new TextDecoder();
 for(let i=0;i<n;i++){const meth=v.getUint16(p+10,true),csize=v.getUint32(p+20,true),nl=v.getUint16(p+28,true),xl=v.getUint16(p+30,true),cl=v.getUint16(p+32,true),lo=v.getUint32(p+42,true);const name=dec.decode(u.subarray(p+46,p+46+nl));
  const lnl=v.getUint16(lo+26,true),lxl=v.getUint16(lo+28,true),start=lo+30+lnl+lxl,raw=u.subarray(start,start+csize);
  if(/\.xml$|\.rels$/.test(name)){let bytes=raw;if(meth===8){const s=new Blob([raw]).stream().pipeThrough(new DecompressionStream('deflate-raw'));bytes=new Uint8Array(await new Response(s).arrayBuffer())}out[name]=dec.decode(bytes)}
  p+=46+nl+xl+cl}return out}
// ---------- Excel schreiben ----------
const xe=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const colL=i=>{let s='';i++;while(i){const m=(i-1)%26;s=String.fromCharCode(65+m)+s;i=Math.floor((i-1)/26)}return s};
function excel(stufe='bronze'){const d=load(),cols=COLS[stufe];const head=['Name',...cols.map(([w,l])=>`Woche ${w}: ${l}`)];
 const cell=(r,c,v,s)=>`<c r="${colL(c)}${r}" t="inlineStr"${s?` s="${s}"`:''}><is><t>${xe(v)}</t></is></c>`;
 const rows=[`<row r="1">${head.map((h,c)=>cell(1,c,h,1)).join('')}</row>`,...d.kinder.map((k,i)=>`<row r="${i+2}">${cell(i+2,0,k.name)}${cols.map(([w],c)=>cell(i+2,c+1,wert(k.id,w))).join('')}</row>`)];
 const last=Math.max(d.kinder.length+1,31),rng=`B2:${colL(cols.length)}${last}`;
 const cf=[['verstanden',0],['teilweise',1],['nicht',2]].map(([t,dxf],i)=>`<cfRule type="cellIs" dxfId="${dxf}" priority="${i+1}" operator="equal"><formula>"${t}"</formula></cfRule>`).join('');
 const sheet=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane xSplit="1" ySplit="1" topLeftCell="B2" activePane="bottomRight" state="frozen"/></sheetView></sheetViews><cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="${cols.length+1}" width="16" customWidth="1"/></cols><sheetData>${rows.join('')}</sheetData><conditionalFormatting sqref="${rng}">${cf}</conditionalFormatting><dataValidations count="1"><dataValidation type="list" allowBlank="1" showErrorMessage="1" sqref="${rng}"><formula1>"nicht,teilweise,verstanden"</formula1></dataValidation></dataValidations></worksheet>`;
 const styles=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE6F0EF"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"><alignment wrapText="1" vertical="top"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><dxfs count="3"><dxf><font><color rgb="FF14532D"/></font><fill><patternFill><bgColor rgb="FFC6EFCE"/></patternFill></fill></dxf><dxf><font><color rgb="FF7C5800"/></font><fill><patternFill><bgColor rgb="FFFFEB9C"/></patternFill></fill></dxf><dxf><font><color rgb="FF9C0006"/></font><fill><patternFill><bgColor rgb="FFFFC7CE"/></patternFill></fill></dxf></dxfs></styleSheet>`;
 return zip([['[Content_Types].xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>'],
  ['_rels/.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'],
  ['xl/workbook.xml',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Lernfortschritt ${NAME[stufe]||stufe}" sheetId="1" r:id="rId1"/></sheets></workbook>`],
  ['xl/_rels/workbook.xml.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
  ['xl/worksheets/sheet1.xml',sheet],['xl/styles.xml',styles]])}
// ---------- Excel lesen ----------
const unx=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
async function readExcel(buf){const f=await unzip(buf);
 let sheetPath='xl/worksheets/sheet1.xml';try{const wb=f['xl/workbook.xml'],rels=f['xl/_rels/workbook.xml.rels'];const rid=(wb.match(/<sheet [^>]*r:id="([^"]+)"/)||[])[1];const t=rid&&(rels.match(new RegExp('Id="'+rid+'"[^>]*Target="([^"]+)"'))||rels.match(new RegExp('Target="([^"]+)"[^>]*Id="'+rid+'"'))||[])[1];if(t)sheetPath='xl/'+t.replace(/^\/?xl\//,'')}catch(e){}
 const sst=[];if(f['xl/sharedStrings.xml'])for(const si of f['xl/sharedStrings.xml'].match(/<si>[\s\S]*?<\/si>/g)||[])sst.push(unx((si.match(/<t[^>]*>[\s\S]*?<\/t>/g)||[]).map(t=>t.replace(/<[^>]+>/g,'')).join('')));
 const xml=f[sheetPath];if(!xml)throw new Error('Tabellenblatt nicht gefunden');const grid={};
 for(const c of xml.match(/<c [^>]*?(?:\/>|>[\s\S]*?<\/c>)/g)||[]){const r=(c.match(/ r="([A-Z]+)(\d+)"/)||[]);if(!r[1])continue;const t=(c.match(/ t="([^"]+)"/)||[])[1];let v='';
  if(t==='s')v=sst[+((c.match(/<v>([^<]*)<\/v>/)||[])[1])]||'';else if(t==='inlineStr')v=unx((c.match(/<t[^>]*>([\s\S]*?)<\/t>/)||[])[1]||'');else v=unx((c.match(/<v>([^<]*)<\/v>/)||[])[1]||'');
  const col=[...r[1]].reduce((s,ch)=>s*26+ch.charCodeAt(0)-64,0)-1;(grid[+r[2]]=grid[+r[2]]||{})[col]=String(v).trim()}
 const rowsNr=Object.keys(grid).map(Number).sort((a,b)=>a-b);const hr=rowsNr.find(r=>Object.values(grid[r]).some(v=>/name/i.test(v)));if(!hr)throw new Error('Keine Kopfzeile mit „Name“ gefunden');
 const head=grid[hr],nameCol=+Object.keys(head).find(k=>/name/i.test(head[k]));const map={};
 for(const [k,h] of Object.entries(head)){if(+k===nameCol)continue;const m=h.match(/Woche\s*(\d+)/i);if(m){map[k]=[+m[1]];continue}const key=h.toLowerCase().replace(/[^a-zäöüß]/g,'');for(const [a,ws] of Object.entries(ALIAS))if(key.includes(a)){map[k]=ws;break}}
 const kinder=[],werte={},rang=v=>STUFEN.indexOf(v);
 for(const r of rowsNr.filter(r=>r>hr)){const name=grid[r][nameCol];if(!name)continue;const k={id:id(),name};kinder.push(k);werte[k.id]={};
  for(const [c,ws] of Object.entries(map)){const v=(grid[r][c]||'').toLowerCase();if(!STUFEN.includes(v))continue;for(const w of ws){const alt=werte[k.id][w];werte[k.id][w]=alt&&rang(alt)<rang(v)?alt:v}}}
 return {kinder,werte,spalten:Object.keys(map).length}}
// ---------- Ansicht ----------
let ctx=null;
function view(B,opts={}){ctx={B,...opts};render()}
function render(){const d=load(),st=ctx.stufe||(ctx.week?stufeVon(ctx.week):'bronze'),cols=COLS[st],host=document.getElementById('plannerbody'),fw=ctx.week;ctx.stufe=st;
 const cyc=v=>STUFEN[(STUFEN.indexOf(v)+1)%4]||'';const sym={nicht:'✗ nicht',teilweise:'~ teilweise',verstanden:'✓ verstanden','':'·'};
 const sum=w=>{const a=auswertung(w);return a?`<span title="verstanden, teilweise, nicht">✓${a.verstanden} ~${a.teilweise} ✗${a.nicht}</span>`:''};
 host.innerHTML=`<div class="rs"><div class="row"><button type="button" id="rsback">← ${ctx.backLabel||'Zurück'}</button></div><h2>Lernfortschrittsraster ${NAME[st]}</h2><div class="row rstabs">${Object.keys(COLS).map(k=>`<button type="button" data-rsstufe="${k}" aria-pressed="${k===st}">${NAME[k]}</button>`).join('')}</div>
 <p class="muted">Ein Klick auf eine Zelle schaltet weiter: · → nicht → teilweise → verstanden. Die Einträge bleiben nur in diesem Browser auf diesem Gerät. Bitte Vornamen oder Lerncodes verwenden.</p>
 <div class="row"><button type="button" id="rsadd" class="primary">Kind hinzufügen</button><button type="button" id="rsxlsx">Als Excel speichern</button><label class="filebutton">Excel einlesen<input type="file" id="rsin" accept=".xlsx"></label><button type="button" id="rsprint">Drucken</button><button type="button" id="rsclear">${ctx.sicher?'Wirklich alles löschen?':'Alle Einträge löschen'}</button></div><p id="rsnote" role="status">${esc(ctx.note||'')}</p>
 <div class="rswrap"><table class="rstable"><thead><tr><th>Name</th>${cols.map(([w,l])=>`<th class="${w===fw?'rsfocus':''}"><button type="button" class="linklike" data-rsweek="${w}">Woche ${w}</button><br><span>${esc(l)}</span></th>`).join('')}<th></th></tr></thead>
 <tbody>${d.kinder.map(k=>`<tr><td><input type="text" value="${esc(k.name)}" data-rsname="${k.id}" aria-label="Name" maxlength="40"></td>${cols.map(([w])=>{const v=wert(k.id,w);return `<td class="${w===fw?'rsfocus':''}"><button type="button" class="rscell rs-${v||'leer'}" data-rskid="${k.id}" data-rsw="${w}" aria-label="${esc(k.name)}, Woche ${w}: ${v||'offen'}">${sym[v]}</button></td>`}).join('')}<td><button type="button" class="rsdel" data-rsdel="${k.id}" aria-label="${esc(k.name)} entfernen">✕</button></td></tr>`).join('')||`<tr><td colspan="${cols.length+2}" class="muted">Noch keine Kinder eingetragen. „Kind hinzufügen“ oder eine Excel-Datei einlesen.</td></tr>`}</tbody>
 <tfoot><tr><th>Gruppe</th>${cols.map(([w])=>`<td class="${w===fw?'rsfocus':''}">${sum(w)}</td>`).join('')}<td></td></tr></tfoot></table></div></div>`;
 const $=s=>document.getElementById(s);
 host.querySelectorAll('[data-rsstufe]').forEach(b=>b.onclick=()=>{ctx.stufe=b.dataset.rsstufe;render()});
 $('rsback').onclick=()=>ctx.back?ctx.back():ctx.B.back();
 $('rsadd').onclick=()=>{d.kinder.push({id:id(),name:''});save();ctx.note='';render();const ins=host.querySelectorAll('[data-rsname]');ins[ins.length-1]?.focus()};
 host.querySelectorAll('[data-rsname]').forEach(i=>i.onchange=()=>{const k=d.kinder.find(x=>x.id===i.dataset.rsname);if(k){k.name=i.value.trim();save()}});
 host.querySelectorAll('[data-rskid]').forEach(b=>b.onclick=()=>{setWert(b.dataset.rskid,+b.dataset.rsw,cyc(wert(b.dataset.rskid,+b.dataset.rsw)));const y=scrollY;render();scrollTo(0,y);host.querySelector(`[data-rskid="${b.dataset.rskid}"][data-rsw="${b.dataset.rsw}"]`)?.focus()});
 host.querySelectorAll('[data-rsdel]').forEach(b=>b.onclick=()=>{d.kinder=d.kinder.filter(x=>x.id!==b.dataset.rsdel);delete d.werte[b.dataset.rsdel];save();render()});
 host.querySelectorAll('[data-rsweek]').forEach(b=>b.onclick=()=>ctx.openWeek&&ctx.openWeek(+b.dataset.rsweek));
 $('rsxlsx').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(excel(st));a.download='Lernfortschrittsraster-Schach-'+NAME[st]+'.xlsx';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),30000)};
 $('rsin').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const r=await readExcel(await f.arrayBuffer());{const d0=load();for(const k of r.kinder){const alt=d0.kinder.find(x=>x.name&&x.name.toLowerCase()===k.name.toLowerCase());if(alt){d0.werte[alt.id]={...(d0.werte[alt.id]||{}),...r.werte[k.id]}}else{d0.kinder.push(k);d0.werte[k.id]=r.werte[k.id]}}save()}ctx.note=`${r.kinder.length} Kinder und ${r.spalten} Spalten eingelesen.`}catch(err){ctx.note='Die Datei konnte nicht gelesen werden: '+err.message}render()};
 $('rsprint').onclick=()=>{const y=scrollY,prev=window.plannerReturn;window.plannerReturn=()=>{window.plannerReturn=prev;requestAnimationFrame(()=>scrollTo(0,y));return true};ctx.B.printContent(printHTML(ctx.B,st))};
 $('rsclear').onclick=()=>{if(!ctx.sicher){ctx.sicher=true;render();return}ctx.sicher=false;mem={kinder:[],werte:{}};save();ctx.note='Alle Einträge gelöscht.';render()}}
function printHTML(B,st='bronze'){const d=load(),cols=COLS[st];const rows=(d.kinder.length?d.kinder:Array.from({length:18},()=>({id:'',name:''}))).map(k=>`<tr><td style="height:7.5mm">${esc(k.name)}</td>${cols.map(([w])=>{const v=k.id?wert(k.id,w):'';return `<td class="rp-${v||'leer'}">${v}</td>`}).join('')}</tr>`).join('');
 return B.sheetCSS('Lernfortschrittsraster')+`<style>.rp-verstanden{background:#c6efce!important}.rp-teilweise{background:#ffeb9c!important}.rp-nicht{background:#ffc7ce!important}.rpt td,.rpt th{font-size:8.5pt;-webkit-print-color-adjust:exact;print-color-adjust:exact}.rpt th{font-size:7.5pt}</style><section class="printsection landscape ws-page"><div class="ws-head"><div><h1>Lernfortschrittsraster ${NAME[st]}</h1><p>nicht · teilweise · verstanden</p></div></div><table class="ws-table rpt"><thead><tr><th style="width:18%">Name</th>${cols.map(([w,l])=>`<th>W${w}: ${esc(l)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
window.Raster={stufeVon,view,auswertung,load,COLS,excel,readExcel,_reset:()=>{mem=null}};
})();
