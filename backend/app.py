from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Veritabanı ayarları
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

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    form_data = Form(
        fullname=data['fullname'],
        phone_number=data['phone_number'],
        address=data['address'],
        priority=data['priority'],
        organization=data['organization'],
        message=data['message']
    )
    db.session.add(form_data)
    db.session.commit()
    return jsonify({"message": "Data submitted successfully"}), 201

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

