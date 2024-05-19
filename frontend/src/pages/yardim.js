import React from "react";

const yardim = () => {
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
                  <a href="index.html" className="single">
                    Anasayfa
                  </a>
                </li>
                <li className="breadcrumb-item single-list" aria-current="page">
                  <a href="javascript:void(0)" className="single">
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
            <div className="col-xl-4 col-lg-4 w-100 col-md-6 col-sm-12 view-wrapper">
              <div
                className="single-blog h-calc wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <div className="blog-img position-relative"></div>
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
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">5 Dakika Önce</th>
                            <td>Enes Uzun</td>
                            <td>05510171885</td>
                            <td>
                              İstanbul Üsküdar Çengelköy mahallesi kalantor
                              sokak
                            </td>
                            <td>Enkazda</td>
                            <td>
                              Lütfen Yardım edin Lütfen Yardım edin Lütfen
                              Yardım edin Lütfen
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5 Dakika Önce</th>
                            <td>Enes Uzun</td>
                            <td>05510171885</td>
                            <td>
                              İstanbul Üsküdar Çengelköy mahallesi kalantor
                              sokak
                            </td>
                            <td>Enkazda</td>
                            <td>
                              Lütfen Yardım edin Lütfen Yardım edin Lütfen
                              Yardım edin Lütfen
                            </td>
                          </tr>
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

export default yardim;
