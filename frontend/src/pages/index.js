import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function App() {
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

    // Axios kullanarak lat ve lon bilgilerini al
    axios
      .get("http://ip-api.com/json/")
      .then((response) => {
        const lat = response.data.lat;
        const lon = response.data.lon;

        // FormData'ya lat ve lon bilgilerini ekle
        const updatedFormData = {
          ...formData,
          lat: lat,
          lon: lon,
        };

        // POST isteği gönder
        axios
          .post("http://127.0.0.1:5000/submit", updatedFormData)
          .then((response) => {
            if (response.status === 201) {
              document.getElementById("messageContainer").innerText =
                "Mesajınız Başarıyla Gerekli Kurumlara Gönderildi. ✅";
              setFormData({
                fullname: "",
                phone_number: "",
                address: "",
                priority: "",
                organization: "",
                message: "",
              });
            } else {
              console.error("Bir hata oluştu!");
            }
          })
          .catch((error) => {
            console.error("Bir hata oluştu!", error);
          });
      })
      .catch((error) => {
        console.error("Bir hata oluştu!", error);
      });
  };
  return (
    <div className="App">
      <div className="row">
        <section className="hero-area-two">
          <div className="single-slider hero-padding-two">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xxl-6 col-xl-6 col-lg-6 my-auto">
                  <div className="hero-caption mb-20">
                    <h1
                      className="title font-700 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Deprem Help
                    </h1>
                    <p
                      className="pera mx-width-780 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      İstanbul'da depremde güvenli bir yere sığınıp başınızı
                      koruyun. Deprem çantanızda temel ihtiyaçları bulundurun.
                      Aile iletişim planı yapın. Komşularla yardımlaşmayı
                      unutmayın.
                    </p>
                    <div className="d-flex gap-20 flex-wrap">
                      <a
                        href="#form"
                        className="btn-primary-fill hero-btn wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        Yardım İste
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="d-flex gap-22 align-items-center justify-content-end">
                    <div className="hero-image position-relative d-none d-lg-block   ">
                      <img
                        src="assets/images/hero/depremzede.jpeg"
                        alt="img"
                        className="border border-4 rounded border-success w-100 tilt-effect wow fadeInLeft"
                        data-wow-delay="0.1s"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="helpful-area-two section-padding">
          <div className="container">
            <div className="row gy-24">
              <div className="col-xl-4 col-md-6 col-lg-6">
                <div
                  className="helpful-card-two wow fadeInUp"
                  data-wow-delay="0.0s"
                >
                  <div className="helpful-card-icon">
                    <i className="ri-hand-heart-line"></i>
                  </div>
                  <div className="helpful-card-caption">
                    <h4 className="caption-title">Yardımlaşma Merkezi</h4>
                    <p className="caption-para">
                      Depremzedelerin Yardım İhtiyaclarını Karşılayabilceği
                      Yardımlaşma Merkezi
                    </p>
                    <a className="caption-link" href="/yardim">
                      Sayfaya Git <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </div>
                  <div className="number-watermark">
                    <h4 className="number">01</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-6">
                <div
                  className="helpful-card-two wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="helpful-card-icon">
                    <i className="ri-first-aid-kit-line"></i>
                  </div>
                  <div className="helpful-card-caption">
                    <h4 className="caption-title">
                      Deprem Çantası Hakkında Bilgi
                    </h4>
                    <p className="caption-para">
                      Deprem Çantası, Hayati önem taşıyan temel ihtiyaç
                      malzemelerini içeren bir hazırlıktır.{" "}
                    </p>
                    <a className="caption-link" href="/canta">
                      Sayfaya Git <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </div>
                  <div className="number-watermark">
                    <h4 className="number">02</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-6">
                <div
                  className="helpful-card-two wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="helpful-card-icon">
                    <i className="ri-global-line"></i>
                  </div>
                  <div className="helpful-card-caption">
                    <h4 className="caption-title">Yardım Kuruluşları</h4>
                    <p className="caption-para">
                      Depremzedelerin Yardım İhtiyaclarını Karşılayabilceği
                      Yardım Kuruluşları.
                    </p>
                    <a className="caption-link" href="/kurulus">
                      Sayfaya Git <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </div>
                  <div className="number-watermark">
                    <h4 className="number">03</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-area bottom-padding" id="form">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-tittle text-center mb-50">
                  <span className="sub-tittle text-capitalize font-600">
                    Yardım Formu
                  </span>
                  <h2 className="title font-700">
                    Yetkili Kurumlarla İletişime Geçin
                  </h2>
                </div>
                <div className="send-box">
                  <form onSubmit={handleSubmit} className="custom-form">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <label className="custom-label" htmlFor="fullname">
                            Ad ve Soyad
                          </label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            id="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            name="fullname"
                            placeholder="Ad ve Soyad Giriniz.."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <label
                            className="custom-label"
                            htmlFor="phone_number"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            id="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            name="phone_number"
                            placeholder="Telefon Numaranızı Giriniz.."
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="form-group">
                          <label className="custom-label" htmlFor="address">
                            Adres
                          </label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            name="address"
                            placeholder="Lütfen Adresinizi Giriniz.."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <label className="custom-label" htmlFor="priority">
                            Durumunuz
                          </label>
                          <select
                            className="form-control custom-input"
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Seçiniz</option>
                            <option value="Hayati Tehlike">Hayati Tehlike</option>
                            <option value="Acil Tıbbi Yardım">Acil Tıbbi Yardım</option>
                            <option value="Barınma ve Temel İhtiyaç">Barınma ve Temel İhtiyaç</option>
                            <option value="Diğer Yardım Talepleri">Diğer Yardım Talepleri</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <label
                            className="custom-label"
                            htmlFor="organization"
                          >
                            Yardım Kuruluşları
                          </label>
                          <select
                            className="form-control custom-input"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Seçiniz</option>
                            <option value="Tumu">Tümü</option>
                            <option value="Cansuyu">Cansuyu</option>
                            <option value="Kızılay">Kızılay</option>
                            <option value="AFAD">AFAD</option>
                            <option value="IHH">IHH</option>
                            <option value="Sadakataşı Derneği">Sadakataşı Derneği</option>
                            <option value="Ahbap">Ahbap</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group">
                        <label className="custom-label" htmlFor="message">
                          Yardım Mesajı
                        </label>
                        <textarea
                          className="form-control custom-textarea"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Yardım Mesajınızı Giriniz.."
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="w-100 submit-btn">
                      Mesaj Gönder
                    </button>
                    <div
                      id="messageContainer"
                      className="d-flex mt-4 justify-content-center"
                    ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
