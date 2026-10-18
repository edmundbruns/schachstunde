# Holt Lichess-Aufgaben (CC0) mit einfachen, gut erprobten Stellungen je Kategorie.
import urllib.request as u, io, csv, json, zstandard, sys
CRIT={'mateIn1':(400,1000,14),'hangingPiece':(500,1200,16),'fork':(700,1300,16),'pin':(800,1300,18),'discoveredAttack':(900,1700,20),'mateIn2':(700,1500,18)}
WANT=40;cand={k:[] for k in CRIT}
r=u.urlopen(u.Request('https://database.lichess.org/lichess_db_puzzle.csv.zst',headers={'User-Agent':'SchachStunde/1.0 educational material'}),timeout=60)
stream=io.TextIOWrapper(zstandard.ZstdDecompressor().stream_reader(r));n=0
for row in csv.DictReader(stream):
  n+=1;tags=row['Themes'].split();rt=int(row['Rating']);pieces=sum(c.isalpha() for c in row['FEN'].split()[0])
  if int(row['Popularity'])<85 or int(row['NbPlays'])<1000:continue
  for k,(lo,hi,mp) in CRIT.items():
    if k in tags and lo<=rt<=hi and pieces<=mp and len(cand[k])<WANT:
      cand[k].append(row);break
  if all(len(v)>=WANT for v in cand.values()):break
  if n%500000==0:print(n,{k:len(v) for k,v in cand.items()},file=sys.stderr,flush=True)
r.close();json.dump(cand,open('puzzle-candidates.json','w'));print(n,{k:len(v) for k,v in cand.items()})
