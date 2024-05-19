import React from "react";

const canta = () => {
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
                    Deprem Çantası
                  </a>
                </li>
              </ul>
            </nav>
            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">
              Deprem Çantası
            </h1>
          </div>
        </div>
      </section>
      <section className="blog-section-two section-padding2">
        <div className="container">
          <div className="row gy-24">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div
                className="single-blog h-calc wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <div className="blog-img position-relative">
                  <a href="blog-details.html">
                    {" "}
                    <img
                      src="assets/images/gallery/su-sisesi.jpg"
                      className="img-fluid w-100"
                      alt="img"
                    />{" "}
                  </a>
                </div>
                <div className="blog-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="blog-info-title">
                      <h4 className="title text-capitalize">
                        <a href="blog-details.html">
                          1. öncekilli
                        </a>
                      </h4>
                      <p className="subtitle">
                      1. Su (kişi başı en az 1 litre/gün) <br />
                      2. Yiyecek (dayanıklı ve bozulmayan)<br />
                      3. İlk yardım malzemeleri (bandaj, antiseptik, ilaçlar)<br />
                      4. El feneri ve yedek piller<br />
                      5. Düdük
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div
                className="single-blog h-calc wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <div className="blog-img position-relative">
                  <a href="blog-details.html">
                    {" "}
                    <img
                      src="assets/images/gallery/caki (1).png"
                      className="img-fluid w-100"
                      alt="img"
                    />{" "}
                  </a>
                </div>
                <div className="blog-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="blog-info-title">
                      <h4 className="title text-capitalize">
                        <a href="blog-details.html">
                       2. öncelikli
                        </a>
                      </h4>
                      <p className="subtitle">
                      6. Çok amaçlı çakı <br />
                      7. Kibrit veya çakmak <br />
                      8. Temel hijyen malzemeleri (ıslak mendil, sabun, tuvalet kağıdı) <br />
                      9. Önemli belgeler (kimlik, pasaport, sigorta belgeleri) <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div
                className="single-blog h-calc wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <div className="blog-img position-relative">
                  <a href="blog-details.html">
                    {" "}
                    <img
                      src="assets/images/gallery/kıyafet.png"
                      className="img-fluid w-100"
                      style={{ objectFit: "none" }}
                      alt="img"
                    />{" "}
                  </a>
                </div>
                <div className="blog-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="blog-info-title">
                      <h4 className="title text-capitalize">
                        <a href="blog-details.html">
                          3. öncelikli
                        </a>
                      </h4>
                      <p className="subtitle">
                      10. Yedek giysiler <br />
                      11. Battaniye veya uyku tulumu<br />
                      12. Cep telefonu şarj aleti<br />
                      13. Nakit para<br />
                      </p>
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

export default canta;
