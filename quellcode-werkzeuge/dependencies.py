from pathlib import Path
import urllib.request as u,concurrent.futures
p=Path('dist/vendor');p.mkdir(exist_ok=True)
urls={'mammoth.js':'https://unpkg.com/mammoth@1.9.1/mammoth.browser.js','mammoth-LICENSE':'https://unpkg.com/mammoth@1.9.1/LICENSE','docx.js':'https://unpkg.com/docx@9.5.1/dist/index.iife.js','docx-LICENSE':'https://unpkg.com/docx@9.5.1/LICENSE','pdf.mjs':'https://unpkg.com/pdfjs-dist@4.10.38/legacy/build/pdf.mjs','pdf.worker.mjs':'https://unpkg.com/pdfjs-dist@4.10.38/legacy/build/pdf.worker.mjs','pdf-LICENSE':'https://unpkg.com/pdfjs-dist@4.10.38/LICENSE'}
def dl(kv):
 k,v=kv
 with u.urlopen(v,timeout=60) as r:b=r.read()
 (p/k).write_bytes(b);return k,len(b)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as e:
 for x in e.map(dl,urls.items()):print(x,flush=True)
