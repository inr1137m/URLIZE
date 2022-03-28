from flask import Flask, Response, request # redirect, url_for , render_template
from flask_cors import CORS
# from waitress import serve
# from dotenv import load_dotenv
# import os
# load_dotenv()

# from .Utilities import snip
from Utilities import urlize
from Utilities import snip
import time

app = Flask(__name__)
CORS(app)

#routes
@app.route('/')
def rootFunc():
    return Response("{'status':'running'}", status=200, content_type='application/json')

@app.route('/url', methods=['POST'])
def analyzeUrl():
    if request.method == 'POST':
        urlist, statuscode = urlize.fetchUrls(request.form['urlVal'],0)
        return Response(urlist, status=statuscode, content_type='application/json') #, headers={'Access-Control-Allow-Origin':'*'}

@app.route('/snip', methods=['GET'])
def screenSnip():
    if request.method == 'GET':
    #     imgBinary , statuscode = snip.takeSnip(request.form['urlVal'])
    #     return Response(imgBinary, status=statuscode, content_type='image/png') #, headers={'Access-Control-Allow-Origin':'*'}
    # else:
        iurl = request.args.get('url', default="empty", type=str)
        ifname = "SnipApp-"+str(int(time.time()))+".png"
        imgBinary , statuscode = snip.takeSnip(iurl)
        if statuscode == 200:
            return Response(imgBinary, status=statuscode,
            headers = {
                'content-Disposition':'attachment; filename='+ifname},
                content_type='image/png') #, headers={'Access-Control-Allow-Origin':'*'}
        else :
            return Response(imgBinary, status=statuscode, content_type='application/json')

#main function
if __name__ == '__main__':
    # host = os.getenv('FLASK_HOST')
    # port = int(os.getenv('FLASK_PORT'))
    # debug_mode = True if os.getenv('FLASK_DEBUG') == 'True' else False
    # sec_key = os.getenv('FLASK_SECRET_KEY')
    # print('ENVs : ', ','.join([host,str(port), str(debug_mode)]))
    # app.run(host,port,debug,load_dotenv,options)
    app.secret_key="IamtheBoss@143"
    # app.debug=debug_mode
    app.run()
    # serve(app, host=host, port=port, threads=2, clear_untrusted_proxy_headers=True)
