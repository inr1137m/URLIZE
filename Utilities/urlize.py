# working code and faster   

from re import U
import requests, validators, json
from simplified_scrapy.simplified_doc import SimplifiedDoc 

def fetchUrls(urlv, depth=0, n=-1):
    try:
        validators.url(urlv) #url validation
        source_code = requests.get(urlv) #fetch site source
        # print(source_code.content)
        doc = SimplifiedDoc(source_code.content.decode('unicode_escape').strip()) # incoming HTML string
        print(urlv)
        lst = doc.listA(url=urlv) # get all links... print(lst[:-1][3]['url'])
        return json.dumps(lst[:n]), 200
    except Exception as e:
        return "Exception : {}".format(e), 400