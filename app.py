from flask import Flask,jsonify,request
from flask_swagger_ui import get_swaggerui_blueprint

app = Flask(__name__)

@app.route("/", methods=["GET"])
def get_data():
    return jsonify({
        "name": "zahid",
        "latitude" : 233.4567653234567,
        "longitude" : 103.444443353
    })

@app.route("/post", methods=["POST"])
def create_todo():
    latitude = request.json["latitude"]
    longitude = request.json["longitude"]

SWAGGER_URL="/swagger"
API_URL="/static/swagger.json"

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': 'Access API'
    }
)
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)