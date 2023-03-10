from flask import Flask, jsonify, request

app = Flask(__name__)

# @app.route("/signIn")
# def get():
#     print('hi')
#     return "signIn"

@app.route('/result', methods = ['GET','POST'])
def result():
    print(request.method)
    if request.method== 'POST':
        print("get request")
        return jsonify("request")

if __name__ == '__main__':
   app.run(debug=True)