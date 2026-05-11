import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FindUs = () => {
  const branches = [
    {
      city: "Batley",
      location: "Bradford Road",
      phone: "+44 1924 359444",
      timing: "12:00 PM - 11:00 PM",
    },
    {
      city: "Manchester",
      location: "Oxford Road",
      phone: "+44 1924 359444",
      timing: "11:00 AM - 10:30 PM",
    },
  ];

  return (
    <>
      <style>{`
        .hb-find {
          min-height: 100vh;
          padding: 130px 0 90px;
          color: #fff7e6;
          background:
            radial-gradient(circle at top left, rgba(255,176,0,.15), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255,61,0,.12), transparent 28%),
            linear-gradient(160deg, #070201, #120401 45%, #070201);
          overflow: hidden;
          position: relative;
        }

        .hb-map-glow {
          position: absolute;
          right: -80px;
          top: 120px;
          font-size: 220px;
          color: rgba(255,176,0,.06);
          animation: floatPin 5s ease-in-out infinite;
          pointer-events: none;
        }

        .hb-find-heading {
          text-align: center;
          margin-bottom: 65px;
        }

        .hb-eyebrow {
          color: #ffb000;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hb-find-heading h2 {
          font-size: clamp(46px, 7vw, 88px);
          font-weight: 950;
          line-height: .9;
          margin-bottom: 18px;
        }

        .hb-find-heading h2 span {
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-find-heading p {
          color: rgba(255,247,230,.72);
          font-size: 18px;
        }

        .hb-line {
          width: 90px;
          height: 4px;
          border-radius: 999px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, #ff3d00, #ffb000);
        }

        .hb-branch-card {
          height: 100%;
          padding: 34px;
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.015));
          border: 1px solid rgba(255,176,0,.16);
          backdrop-filter: blur(14px);
          box-shadow: 0 28px 75px rgba(0,0,0,.42);
          transition: .4s ease;
          position: relative;
          overflow: hidden;
        }

        .hb-branch-card::before {
          content: "";
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: rgba(255,176,0,.08);
          top: -75px;
          right: -75px;
          filter: blur(22px);
        }

        .hb-branch-card:hover {
          transform: translateY(-12px);
          border-color: rgba(255,176,0,.36);
          box-shadow: 0 35px 90px rgba(255,61,0,.18);
        }

        .hb-branch-icon {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          color: #210804;
          font-size: 26px;
          margin-bottom: 24px;
          box-shadow: 0 18px 45px rgba(255,61,0,.28);
        }

        .hb-city {
          color: #ffb000;
          font-size: 36px;
          font-weight: 950;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .hb-location {
          color: #fff7e6;
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 28px;
        }

        .hb-info {
          display: flex;
          gap: 13px;
          align-items: center;
          color: rgba(255,247,230,.74);
          margin-bottom: 16px;
          font-size: 15px;
        }

        .hb-info i {
          color: #ffb000;
          font-size: 16px;
        }

        .hb-direction-btn {
          width: 100%;
          margin-top: 24px;
          border: none !important;
          border-radius: 999px !important;
          padding: 15px !important;
          background: linear-gradient(135deg, #ff3d00, #ffb000) !important;
          color: #210804 !important;
          font-weight: 950 !important;
          box-shadow: 0 18px 45px rgba(255,61,0,.26);
          transition: .35s ease;
        }

        .hb-direction-btn:hover {
          transform: translateY(-5px) scale(1.03);
        }

        .hb-map-section {
          margin-top: 75px;
          border-radius: 38px;
          overflow: hidden;
          border: 1px solid rgba(255,176,0,.16);
          box-shadow: 0 40px 110px rgba(0,0,0,.5);
          position: relative;
          background: rgba(255,255,255,.03);
        }

        .hb-map-section iframe {
          width: 100%;
          height: 540px;
          border: 0;
          display: block;
          filter: grayscale(.1) contrast(1.05);
        }

        .hb-map-card {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          width: min(360px, calc(100% - 48px));
          padding: 22px;
          border-radius: 24px;
          background: rgba(7,2,1,.78);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,176,0,.18);
          box-shadow: 0 22px 60px rgba(0,0,0,.38);
        }

        .hb-map-card h4 {
          color: #ffb000;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .hb-map-card p {
          color: rgba(255,247,230,.72);
          margin-bottom: 16px;
          line-height: 1.7;
          font-size: 14px;
        }

        .hb-map-meta {
          display: flex;
          gap: 10px;
          align-items: center;
          color: #fff7e6;
          font-size: 14px;
          font-weight: 800;
        }

        .hb-map-meta i {
          color: #ffb000;
        }

        @keyframes floatPin {
          0%, 100% {
            transform: translateY(0) rotate(-8deg);
          }
          50% {
            transform: translateY(-20px) rotate(8deg);
          }
        }

        @media (max-width: 768px) {
          .hb-find {
            padding: 110px 0 70px;
          }

          .hb-branch-card {
            padding: 28px;
          }

          .hb-map-section iframe {
            height: 420px;
          }

          .hb-map-card {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            border-radius: 0;
          }
        }
      `}</style>

      <main className="hb-find">
        <i className="bi bi-geo-alt-fill hb-map-glow"></i>

        <Container>
          <div className="hb-find-heading">
            <div className="hb-eyebrow">Find Us · Fresh Near You</div>

            <h2>
              Visit Your <span>Nearest Branch</span>
            </h2>

            <p>Hot burgers, loaded fries and fresh meals served daily.</p>

            <div className="hb-line"></div>
          </div>

          <Row className="g-4 justify-content-center">
            {branches.map((branch, index) => (
              <Col lg={5} md={6} key={index}>
                <div className="hb-branch-card">
                  <div className="hb-branch-icon">
                    <i className="bi bi-shop"></i>
                  </div>

                  <h3 className="hb-city">{branch.city}</h3>

                  <div className="hb-location">{branch.location}</div>

                  <div className="hb-info">
                    <i className="bi bi-telephone-fill"></i>
                    {branch.phone}
                  </div>

                  <div className="hb-info">
                    <i className="bi bi-clock-fill"></i>
                    {branch.timing}
                  </div>

                  <Button className="hb-direction-btn">
                    <i className="bi bi-send-fill me-2"></i>
                    Get Directions
                  </Button>
                </div>
              </Col>
            ))}
          </Row>

          <div className="hb-map-section">
            <div className="hb-map-card">
              <h4>KC Fast Food & Milkshakes</h4>

              <p>
                Open Google Maps below to view the exact location and plan your
                visit.
              </p>

              <div className="hb-map-meta">
                <i className="bi bi-geo-alt-fill"></i>
                Interactive Google Map
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.671681921146!2d-1.6304297230503129!3d53.70629584772992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48796014eeb804d1%3A0x8daeffedd8d5a5ae!2sKC%20Fast%20Food%20%26%20Milkshakes!5e0!3m2!1sen!2s!4v1778479207005!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KC Fast Food & Milkshakes Google Map"
            ></iframe>
          </div>
        </Container>
      </main>
    </>
  );
};

export default FindUs;