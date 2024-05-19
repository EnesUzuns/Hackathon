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
                      src="assets/images/gallery/blog-4.png"
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
                          Donate Your Money For Africa Poor Child.
                        </a>
                      </h4>
                      <p className="subtitle">
                        We understand that there are many people organization
                        The seeking support,
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
