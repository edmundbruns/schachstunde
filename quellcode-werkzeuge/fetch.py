import urllib.request as u, hashlib, pathlib, concurrent.futures, io,csv,json,zstandard
root=pathlib.Path('/workspace/sites/ludgerus-schachwerkstatt/dist'); a=root/'assets'
def get(url):
 return u.urlopen(u.Request(url,headers={'User-Agent':'LudgerusSchachwerkstatt/1.0 educational material'}),timeout=60).read()
def asset(pair):
 p,c=pair; name=f'Chess_{p}{c}t45.svg'; h=hashlib.md5(name.encode()).hexdigest(); url=f'https://upload.wikimedia.org/wikipedia/commons/{h[0]}/{h[:2]}/{name}'
 
 if (a/name).exists():return name
 data=get(url);assert b'<svg' in data;(a/name).write_bytes(data);return name
(a/'chess.mjs').write_bytes(get('https://unpkg.com/chess.js@1.4.0/dist/esm/chess.js'))
(a/'chess-LICENSE.txt').write_bytes(get('https://unpkg.com/chess.js@1.4.0/LICENSE'))
counts={x:0 for x in ['mateIn1','mateIn2','fork','pin','hangingPiece','discoveredAttack']};out=[]
r=u.urlopen('https://database.lichess.org/lichess_db_puzzle.csv.zst',timeout=60)
stream=io.TextIOWrapper(zstandard.ZstdDecompressor().stream_reader(r))
for row in csv.DictReader(stream):
 tags=row['Themes'].split();cats=[k for k in counts if k in tags and counts[k]<12]
 if cats and int(row['Rating'])<=1900 and int(row['Popularity'])>=75:
  row['category']=cats[0];out.append(row);counts[cats[0]]+=1
 if all(v>=12 for v in counts.values()):break
r.close();(a/'puzzles.json').write_text(json.dumps(out));print(counts,flush=True)

with concurrent.futures.ThreadPoolExecutor(max_workers=1) as ex:
 for n in ex.map(asset,[(p,c) for p in 'prnbqk' for c in 'ld']):print(n,flush=True)
