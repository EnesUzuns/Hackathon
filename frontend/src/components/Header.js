import React from 'react';

const Header = () => {
  return (
    <>
      <div className="loading-page" id="preloader-active">
        <div className="counter">
          <p className="text text-capitalize">loading</p>
          <span className="number">0%</span>
          <span className="line"></span>
        </div>
      </div>
      <header>
        <div className="header-area-two header-transparent">
          <div className="main-header header-sticky">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-wrapper d-flex align-items-center justify-content-center">
                    <div className="search-container">
                      <input type="text" id="searchField" className="search-field" placeholder="Search..." />
                      <button id="closeSearch" className="close-search-btn"><i className="ri-close-line"></i></button>
                    </div>
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul className="listing" id="navigation">
                          <li className="single-list"><a href="/" className="single">Anasayfa</a></li>
                          <li className="single-list"><a href="yardim" className="single">Yardım Et</a></li>
                          <li className="single-list"><a href="canta" className="single">Deprem Çantası</a></li>
                          <li className="single-list"><a href="kurulus" className="single">Kuruluşlar</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="div">
                    <div className="mobile_menu mt-4 d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
