from flask import Flask

# @app.route('/')
# def main:
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == '__main__':
   app.run()