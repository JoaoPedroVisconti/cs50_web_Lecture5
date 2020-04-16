import requests

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/convert", methods=["POST"])
def convert():

    # Query for currency exchange rate
    currency = request.form.get("currency")
    res = request.get("http://data.fixer.io/api/latest?access_key=a15a02da3e9efc08debdc155fe36aee9&format=1", 
                      params={"base":"EUR", "symbols": currency})
    
    # Make sure request succeeded
    if res.status_code != 200:
        return jsonify({"success": False})
    
    # Make sure currency is in response
    data = res.json()
    if currency not in data["rates"]:
        return jsonify({"success": False})
    
    return jsonify({"success": True, "rate": data["rates"][currency]})
