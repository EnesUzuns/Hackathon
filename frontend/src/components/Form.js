import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone_number: "",
    address: "",
    priority: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/submit", formData)
      .then((response) => {
        if (response.status === 201) {
          document.getElementById("messageContainer").innerText =
            "Mesajınız Başarıyla Gerekli Kurumlara Gönderildi.";
        } else {
          console.error("There was an error!");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h1 className="text-center">Yardım Formu</h1>
      <p className="text-center">Bu form depremzedelerin gerekli sivil Kuruluşlara iletişim kurmasını sağlar</p>
      <div className="card-body">
        <div className="row">
          <div class="col-6 mb-3">
            <label for="fullname" class="form-label">
              Ad ve Soyad
            </label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              value={formData.fullname}
              onChange={handleChange}
              name="fullname"
              placeholder="Ad ve Soyad Giriniz.."
              required
            />
          </div>
          <div class="col-6 mb-3">
            <label for="phone_number" class="form-label">
              Telefon Numarası
            </label>
            <input
              type="text"
              class="form-control"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              name="phone_number"
              placeholder="Telefon Numarası Giriniz.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col-12 mb-3">
            <label for="fullname" class="form-label">
              Adres
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={formData.address}
              onChange={handleChange}
              name="address"
              placeholder="Adres Giriniz.."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <label>Durumunuz</label>
            <select
              class="form-select"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
            >
              <option value="Enkazdayim" selected>
                Enkazdayım
              </option>
              <option value="Enkazdadegilim">Enkazda değilim</option>
              <option value="Cadirdayim">Çadırdayım</option>
            </select>
          </div>
          <div className="col-6 mb-3">
            <label>Yardım Kuruluşları</label>
            <select
              class="form-select"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            >
              <option value="Tumu" selected>
                Tümü
              </option>
              <option value="Cansuyu">Cansuyu</option>
              <option value="IHH">IHH</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <div class="form-floating">
              <textarea
                class="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Yardım Mesajı"
              ></textarea>
              <label>Yardım Mesajı</label>
            </div>
          </div>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Gönder
        </button>
        <div id="messageContainer" className="d-flex justify-content-center"></div>
      </div>
    </form>
  );
};

export default Form;
