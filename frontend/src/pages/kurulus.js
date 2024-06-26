import React from "react";

const Kurulus = () => {
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
                  <a href="/kurulus" className="single">
                    Kuruluşlar
                  </a>
                </li>
              </ul>
            </nav>
            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">
              Yardım Kuruluşları
            </h1>
          </div>
        </div>
      </section>
      <section className="donate-section top-bottom-padding">
        <div className="container">
          <div className="row gy-24">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper"
              style={{ marginTop: "24px" }}
            >
              <div className="single-donate h-calc">
                <div className="donate-img position-relative">
                  <a href="https://cansuyu.org.tr/" target="_blank">
                    <img
                      className="w-100"
                      style={{ objectFit: "none" }}
                      src="assets/images/gallery/donate-1.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="https://cansuyu.org.tr/">Can Suyu Derneği </a>
                      </h4>
                      <p className="subtitle">
                        Acil Yardım, Eğitim ve Sağlık, Su Kuyuları, Gıda ve
                        Giysi Yardımı, Yetim ve Muhtaçlara Yardım.
                      </p>
                      <a
                        href="https://cansuyu.org.tr/"
                        target="_blank"
                        className="btn donate-btn w-100 mt-5"
                      >
                        Siteye Git
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper"
              style={{ marginTop: "24px" }}
            >
              <div className="single-donate h-calc">
                <div className="donate-img position-relative">
                  <a href="https://kizilay.org.tr">
                    <img
                      className="w-100"
                      src="assets/images/gallery/kızılay.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="https://kizilay.org.tr">Kızılay</a>
                      </h4>
                      <p className="subtitle">
                        Acil durum ve afet yardımı, sağlık hizmetleri, kan
                        bağışı, sosyal yardım.
                      </p>
                      <a
                        target="_blank"
                        href="https://kizilay.org.tr"
                        className="btn donate-btn w-100 mt-5"
                      >
                        Siteye Git
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper"
              style={{ marginTop: "24px" }}
            >
              <div className="single-donate h-calc">
                <div className="donate-img position-relative">
                  <a href="https://www.afad.gov.tr/">
                    <img
                      className="w-100"
                      src="assets/images/gallery/afad.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="https://www.afad.gov.tr/">AFAD</a>
                      </h4>
                      <p className="subtitle">
                        Afet ve acil durum yönetimi, kurtarma operasyonları,
                        eğitim ve bilinçlendirme.
                      </p>
                      <a
                        href="https://www.afad.gov.tr/"
                        target="_blank"
                        className="btn donate-btn w-100"
                      >
                        Siteye Git
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper"
              style={{ marginTop: "24px" }}
            >
              <div className="single-donate h-calc">
                <div className="donate-img position-relative">
                  <a href="https://ihh.org.tr/">
                    <img
                      className="w-100"
                      src="assets/images/gallery/ihh.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="https://ihh.org.tr/">İHH</a>
                      </h4>
                      <p className="subtitle">
                        Acil yardım, insani yardım, sağlık, eğitim, sosyal
                        hizmetler.
                      </p>
                      <a
                        href="https://ihh.org.tr/"
                        target="_blank"
                        className="btn donate-btn w-100 mt-5"
                      >
                        Siteye Git
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper"
              style={{ marginTop: "24px" }}
            >
              <div className="single-donate h-calc">
                <div className="donate-img position-relative">
                  <a href="https://bagis.sadakatasi.org.tr/">
                    <img
                      className="w-100"
                      src="assets/images/gallery/sadaka-tası.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="https://bagis.sadakatasi.org.tr/">
                          Sadakataşı Derneği
                        </a>
                      </h4>
                      <p className="subtitle">
                        Acil yardım, sağlık hizmetleri, su kuyusu projeleri,
                        eğitim, yetim destek projeleri.
                      </p>
                      <a
                        href="https://bagis.sadakatasi.org.tr/"
                        target="_blank"
                        className="btn donate-btn w-100"
                      >
                        Siteye Git
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper"
              style={{ marginTop: "24px" }}
            >
              <div className="single-donate h-calc">
                <div className="donate-img position-relative">
                  <a href="https://ahbap.org/">
                    <img
                      className="w-100"
                      src="assets/images/gallery/ahbap-kalbi.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="https://ahbap.org/">Ahbap</a>
                      </h4>
                      <p className="subtitle">
                        sosyal yardımlaşma ve dayanışma amacıyla kurulan bir
                        sivil toplum kuruluşudur.
                      </p>
                      <a
                        href="https://ahbap.org/"
                        target="_blank"
                        className="btn donate-btn w-100"
                      >
                        Siteye Git
                      </a>
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

export default Kurulus;
