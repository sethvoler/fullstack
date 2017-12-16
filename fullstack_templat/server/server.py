# server.py
# _*_ coding: utf8 _*_
from flask import Flask, render_template
from flask_cors import CORS
import random


def get_hello():
  greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hello', 'Hej', '你好']
  return random.choice(greeting_list)

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
CORS(app, resources=r'/*')

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/hello")
def hello():
  return get_hello()

if __name__ == "__main__":
  app.run()
