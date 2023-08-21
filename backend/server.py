from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

global counter
counter = 0


@app.route("/api", methods=["GET"])
def root():
    return jsonify({"message": "Server Counter is " + str(counter)})


@app.route("/api", methods=["POST"])
def update_counter():
    global counter
    counter += 1
    print("Counter is incremented")
    return jsonify({"message": "Server Updated its counter "})


if __name__ == "__main__":
    app.run(port=8000)
