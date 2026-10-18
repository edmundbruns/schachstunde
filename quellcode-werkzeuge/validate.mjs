import {Chess} from './dist/assets/chess.mjs';
import fs from 'node:fs';
const puzzles=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));
let total=0,alt=0;
for(const p of puzzles){let g=new Chess(p.FEN),moves=p.Moves.split(' ');for(const move of moves){g.move({from:move.slice(0,2),to:move.slice(2,4),...(move[4]?{promotion:move[4]}:{})});total++}if(p.category.startsWith('mate')&&!g.isCheckmate())throw Error('Not mate '+p.PuzzleId);if(p.category==='mateIn1'){g=new Chess(p.FEN);g.move({from:moves[0].slice(0,2),to:moves[0].slice(2,4)});let n=0;for(const m of g.moves({verbose:true})){g.move(m);if(g.isCheckmate())n++;g.undo()}if(n>1)alt++}}
if(new Set(puzzles.map(p=>p.PuzzleId)).size!==72)throw Error('Duplicate');
console.log(JSON.stringify({puzzles:puzzles.length,legalMoves:total,mateInOneWithAlternatives:alt}));
