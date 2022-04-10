from flask import Flask, Response, request # redirect, url_for , render_template
from flask_cors import CORS
import time
import requests, validators, json
from simplified_scrapy.simplified_doc import SimplifiedDoc 

application = Flask(__name__)
CORS(application)

#routes
@application.route('/')
def rootFunc():
    return Response("{'status':'running-1'}", status=200, content_type='application/json')

@application.route('/url', methods=['POST'])
def analyzeUrl():
    if request.method == 'POST':
        urlist, statuscode = fetchUrls(request.form['urlVal'],0)
        return Response(urlist, status=statuscode, content_type='application/json') #, headers={'Access-Control-Allow-Origin':'*'}


def fetchUrls(urlv, depth=0, n=-1):
    try:
        x = urlv.lower()
        if(x.startswith("https://") or x.startswith("http://")):
            urlv = x
        else:
            url1 = "https://"+x
            url2 = "http://"+x
            if(validators.url(url1)):
                urlv = url1
            else:
                urlv = url2
        validators.url(urlv) #url validation
        source_code = requests.get(urlv) #fetch site source
        # print(source_code.content)
        doc = SimplifiedDoc(source_code.content.decode('unicode_escape').strip()) # incoming HTML string
        print(urlv)
        lst = doc.listA(url=urlv) # get all links... print(lst[:-1][3]['url'])
        return json.dumps(lst[:n]), 200
    except Exception as e:
        return "Exception : {}".format(e), 400

#main function
if __name__ == '__main__':
    # host = os.getenv('FLASK_HOST')
    # port = int(os.getenv('FLASK_PORT'))
    # debug_mode = True if os.getenv('FLASK_DEBUG') == 'True' else False
    # sec_key = os.getenv('FLASK_SECRET_KEY')
    # print('ENVs : ', ','.join([host,str(port), str(debug_mode)]))
    # app.run(host,port,debug,load_dotenv,options)
    # app.secret_key="IamtheBoss@143"
    application.debug=True
    application.run()
    # serve(app, host=host, port=port, threads=2, clear_untrusted_proxy_headers=True)
