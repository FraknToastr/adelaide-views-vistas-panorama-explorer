"""Checks the actual supplied Park_10 Blender export, not simulated data."""
from pathlib import Path
import zipfile,json,re,collections
root=Path(__file__).resolve().parents[1]
with open(root/'samples/export_reference.json',encoding='utf-8') as f: meta=json.load(f)
assert meta['source_crs']=='EPSG:7854'
assert meta['obj_axes']=={'forward':'+Y','up':'+Z','scale':1.0}
with zipfile.ZipFile(root/'samples/Park_10.zip') as z:
    assert z.testzip() is None
    files=[f for f in z.namelist() if f.lower().endswith('.obj')]
    counts=collections.Counter(x.split('/')[1] for x in files)
    assert counts=={'Points':3,'Frustums':3,'Viewsheds':3},counts
    for name in files:
        content=z.read(name).decode()
        vertices=re.findall(r'^v\s+([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)',content,re.M)
        assert vertices,name
        for e,n,h in vertices:
            e,n,h=map(float,(e,n,h))
            assert 280000<e<283000 and 6133000<n<6136000,(name,e,n)
print('PASS: sample has nine classified OBJ files, valid MGA coordinates, and documented Y-forward/Z-up orientation')
