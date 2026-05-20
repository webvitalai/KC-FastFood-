import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      <style>{`
        .hb-footer {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(255,176,0,.14), transparent 32%),
            radial-gradient(circle at bottom right, rgba(255,61,0,.12), transparent 30%),
            linear-gradient(160deg, #130401, #070201);
          color: #fff7e6;
          border-top: 1px solid rgba(255,176,0,.14);
        }

        .hb-footer::before {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(255,176,0,.05);
          top: -220px;
          left: -180px;
          filter: blur(80px);
          pointer-events: none;
        }

        .hb-footer::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(255,61,0,.05);
          bottom: -180px;
          right: -150px;
          filter: blur(70px);
          pointer-events: none;
        }

        .hb-footer-wrapper {
          max-width: 1320px;
          margin: auto;
          padding: 95px 24px 70px;
          position: relative;
          z-index: 2;
        }

        .hb-top {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
          gap: 55px;
        }

        .hb-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        /* UPDATED LOGO */
        .hb-brand-logo {
          width: 92px;
          height: 82px;
          min-width: 92px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
        }

        .hb-brand-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;

          filter:
            brightness(1.12)
            contrast(1.22)
            saturate(1.15)
            drop-shadow(0 6px 9px rgba(0,0,0,.5))
            drop-shadow(0 0 14px rgba(255,176,0,.25));

          transition: .35s ease;
        }

        .hb-brand:hover .hb-brand-logo img {
          transform: scale(1.06);
        }

        .hb-brand-text {
          font-size: 38px;
          font-weight: 950;
          color: #ffb000;
          line-height: 1;
          letter-spacing: -1px;
        }

        .hb-brand-text span {
          color: #ff3d00;
        }

        .hb-tagline {
          color: #ffb000;
          font-size: 18px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .hb-description {
          color: rgba(255,247,230,.72);
          line-height: 1.9;
          font-size: 15px;
          margin-bottom: 30px;
        }

        .hb-socials {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hb-socials a {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          text-decoration: none;
          color: #ffb000;
          font-size: 19px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,176,0,.16);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: .35s ease;
        }

        .hb-socials a:hover {
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          color: #210804;
          transform: translateY(-7px) scale(1.08);
          box-shadow: 0 22px 50px rgba(255,61,0,.28);
        }

        .hb-heading {
          font-size: 22px;
          font-weight: 950;
          margin-bottom: 28px;
          position: relative;
        }

        .hb-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -12px;
          width: 58px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ff3d00, #ffb000);
        }

        .hb-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hb-links li {
          margin-bottom: 16px;
        }

        .hb-links a {
          color: rgba(255,247,230,.72);
          text-decoration: none;
          transition: .3s ease;
          position: relative;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .hb-links a::before {
          content: "➜";
          color: #ffb000;
          font-size: 12px;
          transition: .3s ease;
        }

        .hb-links a:hover {
          color: #ffb000;
          transform: translateX(8px);
        }

        .hb-contact-box {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 22px;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,176,0,.08);
          transition: .3s ease;
        }

        .hb-contact-box:hover {
          transform: translateY(-5px);
          border-color: rgba(255,176,0,.22);
          background: rgba(255,255,255,.05);
        }

        .hb-contact-icon {
          min-width: 46px;
          height: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          color: #210804;
          font-size: 18px;
          box-shadow: 0 14px 35px rgba(255,61,0,.2);
        }

        .hb-contact-box h6 {
          margin: 0 0 4px;
          font-weight: 900;
          font-size: 15px;
        }

        .hb-contact-box p {
          margin: 0;
          color: rgba(255,247,230,.68);
          font-size: 14px;
          line-height: 1.7;
        }

        .hb-newsletter {
          margin-top: 20px;
          padding: 24px;
          border-radius: 24px;
          background:
            linear-gradient(135deg, rgba(255,61,0,.16), rgba(255,176,0,.08)),
            rgba(255,255,255,.04);
          border: 1px solid rgba(255,176,0,.16);
        }

        .hb-newsletter h5 {
          font-weight: 950;
          margin-bottom: 10px;
        }

        .hb-newsletter p {
          color: rgba(255,247,230,.7);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .hb-newsletter-input {
          width: 100%;
          height: 52px;
          border-radius: 16px;
          border: 1px solid rgba(255,176,0,.16);
          background: rgba(255,255,255,.05);
          color: #fff7e6;
          padding: 0 18px;
          outline: none;
          margin-bottom: 14px;
        }

        .hb-newsletter-input::placeholder {
          color: rgba(255,247,230,.4);
        }

        .hb-newsletter-btn {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 16px;
          font-weight: 950;
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          color: #210804;
          transition: .3s ease;
        }

        .hb-newsletter-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(255,61,0,.28);
        }

        .hb-bottom {
          margin-top: 70px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,176,0,.12);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hb-bottom p {
          margin: 0;
          color: rgba(255,247,230,.55);
          font-size: 14px;
        }

        .hb-bottom strong {
          color: #ffb000;
        }

        .hb-payments {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hb-payments span {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,176,0,.12);
          color: #ffb000;
          font-size: 18px;
        }

        @media (max-width: 1100px) {
          .hb-top {
            grid-template-columns: repeat(2,1fr);
          }

          .hb-brand-logo {
            width: 84px;
            height: 74px;
            min-width: 84px;
          }

          .hb-brand-text {
            font-size: 34px;
          }
        }

        @media (max-width: 700px) {
          .hb-top {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .hb-brand {
            gap: 12px;
          }

          .hb-brand-logo {
            width: 74px;
            height: 66px;
            min-width: 74px;
          }

          .hb-brand-text {
            font-size: 30px;
          }

          .hb-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 390px) {
          .hb-brand-logo {
            width: 66px;
            height: 58px;
            min-width: 66px;
          }

          .hb-brand-text {
            font-size: 26px;
          }
        }
      `}</style>

      <footer className="hb-footer">
        <div className="hb-footer-wrapper">
          <div className="hb-top">
            {/* Brand */}
            <div>
              <div className="hb-brand">
                <div className="hb-brand-logo">
                  <img
                    src="/Images/Logo.webp"
                    alt="KC Fast Food Logo"
                  />
                </div>

                <div className="hb-brand-text">
                  KC <span>Fast Food</span>
                </div>
              </div>

              <div className="hb-tagline">
                “Fresh. Spicy. Made To Crave.”
              </div>

              <p className="hb-description">
                Premium burgers, crispy chicken, loaded fries and
                flame-grilled flavours crafted for true food lovers.
                Fast delivery, fresh ingredients and unforgettable taste.
              </p>

              <div className="hb-socials">
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>

                <a href="#" aria-label="X Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="#" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="hb-heading">Quick Links</h4>

              <ul className="hb-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Full Menu</a></li>
                <li><a href="#deals">Latest Deals</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#locations">Find Us</a></li>
                <li><a href="#order">Order Online</a></li>
              </ul>
            </div>

            {/* Popular */}
            <div>
              <h4 className="hb-heading">Popular Items</h4>

              <ul className="hb-links">
                <li><a href="#">Signature Burgers</a></li>
                <li><a href="#">Loaded Fries</a></li>
                <li><a href="#">Smash Burgers</a></li>
                <li><a href="#">Hot Wings</a></li>
                <li><a href="#">Family Deals</a></li>
                <li><a href="#">Milkshakes</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="hb-heading">Contact Us</h4>

              <div className="hb-contact-box">
                <div className="hb-contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div>
                  <h6>Location</h6>

                  <p>
                    297 Bradford Rd, Batley WF17 6HY
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="hb-contact-box">
                <div className="hb-contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <h6>Phone</h6>

                  <p>+44 1924 359444</p>
                </div>
              </div>

              <div className="hb-contact-box">
                <div className="hb-contact-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>

                <div>
                  <h6>Opening Hours</h6>

                  <p>Mon - Sun · 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="hb-newsletter">
                <h5>Get Weekly Deals</h5>

                <p>
                  Subscribe and receive exclusive food offers and combo deals.
                </p>

                <input
                  type="email"
                  className="hb-newsletter-input"
                  placeholder="Enter your email"
                />

                <button className="hb-newsletter-btn">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          <div className="hb-bottom">
            <p>
              © 2026 <strong>KC Fast Food</strong>. All Rights Reserved.
            </p>

            <div className="hb-payments">
              <span><i className="bi bi-credit-card-fill"></i></span>
              <span><i className="bi bi-paypal"></i></span>
              <span><i className="bi bi-wallet2"></i></span>
              <span><i className="bi bi-apple"></i></span>
            </div>

            <p>
              Designed with fire. Built for flavour.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;