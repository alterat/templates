from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/v1/post',methods=['POST'])
def addkey():
    mydict = request.get_json()
    mydict['newvar'] = 'my_new_var'
    print("type: ", type(mydict))
    print(mydict)
    return jsonify(mydict)

