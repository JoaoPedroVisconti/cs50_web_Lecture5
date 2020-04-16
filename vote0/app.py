import os
import requests

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

@app.route("/")
def index():
    return render_template("index.html")


@socketio.on("submite vote")
# When some on emit the event "submite vote" do this:
def vote(data):
    selection = data["selection"]
    emit("announce vote", {"selection": selection}, broadcast=True)