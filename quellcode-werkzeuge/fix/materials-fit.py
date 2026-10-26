# Seiten so setzen, dass nichts automatisch verkleinert wird. © Dr. Edmund Bruns
p='/home/claude/work/SchachStunde/website/method-materials.js';s=open(p,encoding='utf8').read()
def r(a,b,n=1):
    global s
    assert s.count(a)==n,(a,s.count(a));s=s.replace(a,b)
r("function comparePages(id,a,b,textA,textB){reg(id,[page(by[id].name,'Vergleiche die beiden Übungsbilder. Was verändert die Entscheidung?',grid(box('Bild A',board(a)+para(textA))+box('Bild B',board(b)+para(textB)))",
  "const sized=(h,w)=>`<div style=\"width:${w}mm;margin:0 auto\">${h}</div>`;\nfunction comparePages(id,a,b,textA,textB){reg(id,[page(by[id].name,'Vergleiche die beiden Übungsbilder. Was verändert die Entscheidung?',grid(box('Bild A',sized(board(a),80)+para(textA))+box('Bild B',sized(board(b),80)+para(textB)))")
r("grid(box('Idee A · e4',board({e2:'P'},['e4'])+lines(15))+box('Idee B · d4',board({d2:'P'},['d4'])+lines(15)))+box('Unsere Gründe',lines(18))",
  "grid(box('Idee A · e4',sized(board({e2:'P'},['e4']),74)+lines(12))+box('Idee B · d4',sized(board({d2:'P'},['d4']),74)+lines(12)))+box('Unsere Gründe',lines(16))")
r("box('Eines unserer Wörter erklären oder zeigen',lines(18))","box('Eines unserer Wörter erklären oder zeigen',lines(10))")
r("box(s,`<div class=\"mm-sign\"><svg width=\"70\"","box(s,`<div class=\"mm-sign\" style=\"height:46mm\"><svg width=\"70\"")
r("box('Name und Bild meiner Figur',lines(30)+board({}))","box('Name und Bild meiner Figur',lines(10)+sized(board({}),80))")
open(p,'w',encoding='utf8').write(s);print('ok')
s=open(p,encoding='utf8').read()
r("box('Bild A',sized(board(a),80)","box('Bild A',sized(board(a),72)");r("box('Bild B',sized(board(b),80)","box('Bild B',sized(board(b),72)")
r("box('Eines unserer Wörter erklären oder zeigen',lines(10))","box('Eines unserer Wörter erklären oder zeigen',lines(8))")
r("box('Unsere Merkhilfen',lines(95))","box('Unsere Merkhilfen',lines(90))")
r("Auf einem eigenen Stein darf ich nicht landen.')+board(knight))","Auf einem eigenen Stein darf ich nicht landen.')+sized(board(knight),86))")
open(p,'w',encoding='utf8').write(s);print('ok2')
