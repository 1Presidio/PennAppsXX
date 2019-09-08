from PIL import Image
from io import BytesIO

import http.client
import requests

# Make 1000 requests for fake images and save them via HTTPS.
for i in range(1000):
    print(i)
    conn = http.client.HTTPSConnection('thispersondoesnotexist.com', 443)
    conn.putrequest('GET', '/image')
    conn.endheaders()
    r = conn.getresponse()
    img = Image.open(BytesIO(r.read()))
    filename = 'res' + str(i) + '.jpg'
    img.save(filename)