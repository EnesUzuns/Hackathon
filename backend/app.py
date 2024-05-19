from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
import datetime

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Form(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    priority = db.Column(db.String(50), nullable=False)
    organization = db.Column(db.String(50), nullable=False)
    message = db.Column(db.String(500), nullable=True)
    date = db.Column(db.DateTime, nullable=False)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    ip = request.remote_addr
    print(ip)
    form_data = Form(
        fullname=data['fullname'],
        phone_number=data['phone_number'],
        address=data['address'],
        priority=data['priority'],
        organization=data['organization'],
        message=data['message'],
        date=datetime.datetime.now()
    )
    db.session.add(form_data)
    db.session.commit()
    return jsonify({"message": "Data submitted successfully"}), 201

@app.route('/list', methods=['GET'])
def list_data():
    data = Form.query.all()
    data_dict = []
    for item in data:
        time_difference = datetime.datetime.now() - item.date
        minutes = int(time_difference.total_seconds() / 60)
        data_dict.append({
            "id": item.id,
            "fullname": item.fullname,
            "phone_number": item.phone_number,
            "address": item.address,
            "priority": item.priority,
            "organization": item.organization,
            "message": item.message,
            "minutes_ago": minutes
        })
    
    sorted_data = sorted(data_dict, key=lambda x: x['minutes_ago'])

    return jsonify(sorted_data), 200

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

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
