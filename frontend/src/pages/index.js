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
    <div className="App">
      <div className="row">
      <section className="hero-area-two">
        <div className="single-slider hero-padding-two">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-6 col-xl-6 col-lg-6 my-auto">
                <div className="hero-caption mb-20">
                  <p className="key-title font-700 mb-20 wow fadeInUp" data-wow-delay="0.0s">Charity Is priority</p>
                  <h1 className="title font-700 wow fadeInUp" data-wow-delay="0.1s">Giving help To Those Who Need It.</h1>
                  <p className="pera mx-width-780 wow fadeInUp" data-wow-delay="0.2s">Involves donating one's body after death
                    for medical research, education, or anatomical dissection. Body donation plays a crucial role in
                    advancing medical science</p>
                  <div className="d-flex gap-20 flex-wrap">
                    <a href="#form" className="btn-primary-fill hero-btn wow fadeInUp" data-wow-delay="0.3s">Donate
                      Now</a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="d-flex gap-22 align-items-center justify-content-end">
                  <div className="hero-image position-relative d-none d-lg-block">
                    <img src="assets/images/hero/hero-2.png" alt="img" className="w-100 tilt-effect wow fadeInLeft"
                      data-wow-delay="0.1s" />
                  </div>
                  <div className="hero-image position-relative d-none d-lg-block">
                    <img src="assets/images/hero/hero-3.png" alt="img" className="w-100 tilt-effect wow fadeInRight"
                      data-wow-delay="0.1s" />
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
            <div className="helpful-card-two wow fadeInUp" data-wow-delay="0.0s">
              <div className="helpful-card-icon">
                <i className="ri-book-open-line"></i>
              </div>
              <div className="helpful-card-caption">
                <h4 className="caption-title">Education & Food for Chidrens</h4>
                <p className="caption-para">When deciding which charity to donate to, it important to do your research.</p>
                <a className="caption-link" href="/kurulus">More Details <i className="ri-arrow-right-s-line"></i></a>
              </div>
              <div className="number-watermark">
                <h4 className="number">01</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="helpful-card-two wow fadeInUp" data-wow-delay="0.1s">
              <div className="helpful-card-icon">
                <i className="ri-first-aid-kit-line"></i>
              </div>
              <div className="helpful-card-caption">
                <h4 className="caption-title">Surgery & Medical Treatments</h4>
                <p className="caption-para">When deciding which charity to donate to, it important to do your research.</p>
                <a className="caption-link" href="/kurulus">More Details <i className="ri-arrow-right-s-line"></i></a>
              </div>
              <div className="number-watermark">
                <h4 className="number">02</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="helpful-card-two wow fadeInUp" data-wow-delay="0.3s">
              <div className="helpful-card-icon">
                <i className="ri-global-line"></i>
              </div>
              <div className="helpful-card-caption">
                <h4 className="caption-title">Environmental Protection</h4>
                <p className="caption-para">When deciding which charity to donate to, it important to do your research.</p>
                <a className="caption-link" href="/kurulus">More Details <i className="ri-arrow-right-s-line"></i></a>
              </div>
              <div className="number-watermark">
                <h4 className="number">03</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-area" id="form">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-tittle text-center mb-50">
              <span className="sub-tittle text-capitalize font-600">Yardım Formu</span>
              <h2 className="title font-700">Yetkili Kurumlarla İletişime Geçin</h2>
            </div>
            <div className="send-box">
              <form onSubmit={handleSubmit} className="custom-form">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label className="custom-label" htmlFor="fullname">Ad ve Soyad</label>
                      <input type="text" className="form-control custom-input" id="fullname" value={formData.fullname} onChange={handleChange} name="fullname"
                        placeholder="Ad ve Soyad Giriniz.." required />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label className="custom-label" htmlFor="phone_number">Phone</label>
                      <input type="text" className="form-control custom-input" id="phone_number" value={formData.phone_number} onChange={handleChange} name="phone_number"
                        placeholder="Telefon Numaranızı Giriniz.." />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="form-group">
                      <label className="custom-label" htmlFor="address">Adres</label>
                      <input type="email" className="form-control custom-input" id="address" value={formData.address} onChange={handleChange} name="address"
                        placeholder="Lütfen Adresinizi Giriniz.." />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label className="custom-label" htmlFor="priority">Durumunuz</label>
                      <input type="text" className="form-control custom-input" id="priority" value={formData.priority} onChange={handleChange} name="fullname"
                        placeholder="Ad ve Soyad Giriniz.." required />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group">
                      <label className="custom-label" htmlFor="phone_number">Phone</label>
                      <input type="text" className="form-control custom-input" id="phone_number" value={formData.phone_number} onChange={handleChange} name="phone_number"
                        placeholder="Telefon Numaranızı Giriniz.." />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="custom-label" htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control custom-textarea" id="exampleFormControlTextarea1"
                      placeholder="Type You message here"></textarea>
                  </div>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="popular-brand-section bottom-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-img-container">
              <div className="flex justify-content-between brand-img-slider align-items-center">
                <div className="brand-img">
                  <img src="assets/images/gallery/brand-1.png" alt="image" />
                </div>
                <div className="brand-img">
                  <img src="assets/images/gallery/brand-2.png" alt="image" />
                </div>
                <div className="brand-img">
                  <img src="assets/images/gallery/brand-3.png" alt="image" />
                </div>
                <div className="brand-img">
                  <img src="assets/images/gallery/brand-4.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* <Form /> */}
      </div>
    </div>
  );
}

export default App;