from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return('<h1>212 burgers</h1>')

@app.route('/contact')
def contact():
    return('me@me.com')
