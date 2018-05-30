#app.py
""" Import flask and modules """
from flask import Flask

APP = Flask(__name__)

@APP.route('/')
def index():
    """ Home page handler """
    return '<h1>Hello world</h1>'

if __name__ == '__main__':
    APP.run(debug=True)
