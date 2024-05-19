import React, { useEffect, useState } from "react";
import axios from "axios";

const Yardim = () => {
  const [veriler, setVeriler] = useState([]);

  useEffect(() => {
    // Backend API'den verileri çekmek için axios kullanarak GET isteği yapın
    axios
      .get("http://127.0.0.1:5000/list")
      .then((response) => {
        setVeriler(response.data);
      })
      .catch((error) => {
        console.error("Veri alınırken bir hata oluştu:", error);
      });
  }, []);

  return (
    <>
      <section className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="breadcrumb-text">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.0s"
            >
              <ul className="breadcrumb listing">
                <li className="breadcrumb-item single-list">
                  <a href="/" className="single">
                    Anasayfa
                  </a>
                </li>
                <li className="breadcrumb-item single-list" aria-current="page">
                  <a href="/yardim" className="single">
                    Yardım Et
                  </a>
                </li>
              </ul>
            </nav>
            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">
              Yardım Et
            </h1>
          </div>
        </div>
      </section>
      <section className="blog-section-two section-padding2 category-section">
        <div className="container">
          <div className="row gy-24 justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 view-wrapper">
              <div className="single-blog h-calc">
                <div className="category-box">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="blog-info-title">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Tarih</th>
                            <th scope="col">İsim</th>
                            <th scope="col">Numara</th>
                            <th scope="col">Adres</th>
                            <th scope="col">Durumu</th>
                            <th scope="col">Yardım Mesajı</th>
                            <th scope="col">Harita</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Verileri map fonksiyonuyla tabloya ekleme */}
                          {veriler.map((veri) => (
                            <tr key={veri.id}>
                              <td>{veri.minutes_ago} Dakika Önce</td>
                              <td>{veri.fullname}</td>
                              <td>{veri.phone_number}</td>
                              <td>{veri.address}</td>
                              <td>{veri.priority}</td>
                              <td>{veri.message}</td>
                              <td><a href={veri.map} target="_blank" rel="noreferrer"><i class="ri-map-pin-line"></i></a></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Yardim;
