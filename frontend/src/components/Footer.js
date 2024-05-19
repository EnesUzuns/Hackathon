import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper footer-bg-one">
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="footer-copy-right text-center">
                      <p className="pera">Copyright © 2024 Weekly Coder. All rights reserved.</p>
                      <div className="footer-social-link">
                        <ul className="listing">
                          <li className="single-list">
                            <a className="single" href=""><i className="ri-facebook-fill"></i></a>
                          </li>
                          <li className="single-list">
                            <a className="single" href=""><i className="ri-youtube-fill"></i></a>
                          </li>
                          <li className="single-list">
                            <a className="single" href=""><i className="ri-instagram-line"></i></a>
                          </li>
                          <li className="single-list">
                            <a className="single" href=""><i className="ri-linkedin-fill"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="progressParent" id="back-top">
        <svg className="backCircle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Footer;
