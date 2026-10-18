// Wählt aus den Lichess-Kandidaten je Kategorie 12 Aufgaben (gestreut nach Wertung) und ergänzt Stellung nach dem ersten Zug und deutsche Notation.
import fs from 'node:fs';import {Chess} from './dist/assets/chess.mjs';
const cand=JSON.parse(fs.readFileSync('puzzle-candidates.json'));const de=s=>s.replace(/^[KQRBN]/,c=>({K:'K',Q:'D',R:'T',B:'L',N:'S'})[c]).replace(/=([QRBN])/,(_,c)=>'='+({Q:'D',R:'T',B:'L',N:'S'})[c]);
const out=[];
for(const [cat,rows] of Object.entries(cand)){const ok=[];for(const r of rows){const mv=r.Moves.split(' ');const g=new Chess(r.FEN);let good=true;const sans=[];for(const [i,m] of mv.entries()){try{const x=g.move({from:m.slice(0,2),to:m.slice(2,4),promotion:m[4]});if(i>0)sans.push(de(x.san))}catch(e){good=false;break}}if(!good)continue;if(cat.startsWith('mate')&&!g.isCheckmate())continue;
const h=new Chess(r.FEN);h.move({from:mv[0].slice(0,2),to:mv[0].slice(2,4),promotion:mv[0][4]});if(cat==='mateIn1'){const n=h.moves({verbose:true}).filter(m=>{const k=new Chess(h.fen());k.move(m);return k.isCheckmate()}).length;if(n!==1)continue}
ok.push({...r,category:cat,FEN2:h.fen(),SAN:sans.join(' '),Pieces:h.fen().split(' ')[0].replace(/[^a-zA-Z]/g,'').length})}
ok.sort((a,b)=>+a.Rating-+b.Rating);if(ok.length<12)throw Error(cat+' zu wenige: '+ok.length);const pick=Array.from({length:12},(_,i)=>ok[Math.round(i*(ok.length-1)/11)]);out.push(...pick);console.log(cat,pick.map(p=>p.Rating+'/'+p.Pieces).join(' '))}
const keep=['PuzzleId','FEN','Moves','Rating','RatingDeviation','Popularity','NbPlays','Themes','GameUrl','OpeningTags','category','FEN2','SAN','Pieces'];
fs.writeFileSync('dist/assets/puzzles.json',JSON.stringify(out.map(p=>Object.fromEntries(keep.map(k=>[k,p[k]])))));console.log('gesamt',out.length);
