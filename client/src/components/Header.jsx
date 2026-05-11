import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Button,
} from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Deals", path: "/deals" },
    { name: "Our Story", path: "/our-story" },
    { name: "Find Us", path: "/find-us" },
  ];

  return (
    <>
      <style>{`
        .hb-navbar {
          height: 92px;
          width: 100%;
          position: fixed !important;
          top: 0;
          left: 0;
          z-index: 9999;
          transition: all .35s ease;
          background: linear-gradient(
            180deg,
            rgba(7,2,1,.82),
            rgba(7,2,1,.28)
          );
        }

        .hb-navbar.scrolled {
          height: 76px;
          background: rgba(13,4,2,.92);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,176,0,.18);
          box-shadow: 0 20px 60px rgba(0,0,0,.38);
        }

        .hb-brand {
          display: flex;
          align-items: center;
          gap: 13px;
          text-decoration: none;
          color: #ffb000 !important;
          font-size: 32px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .hb-brand span {
          color: #ff3d00;
        }

        .hb-logo {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          color: #210804;
          font-size: 26px;
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          box-shadow: 0 18px 45px rgba(255,61,0,.35);
          position: relative;
          overflow: hidden;
        }

        .hb-nav {
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,176,0,.16);
          border-radius: 999px;
          padding: 8px 12px;
          backdrop-filter: blur(14px);
        }

        .hb-nav-link {
          color: #fff7e6 !important;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .7px;
          padding: 10px 15px !important;
          border-radius: 999px;
          transition: .3s ease;
          text-decoration: none;
        }

        .hb-nav-link:hover {
          color: #210804 !important;
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          transform: translateY(-2px);
        }

        .hb-nav-link.active {
          background: linear-gradient(135deg, #ff3d00, #ffb000);
          color: #210804 !important;
        }

        .hb-order-btn {
          border: none !important;
          background: linear-gradient(135deg, #ff3d00, #ffb000) !important;
          color: #210804 !important;
          font-weight: 950 !important;
          padding: 13px 25px !important;
          border-radius: 999px !important;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 18px 45px rgba(255,61,0,.32);
          transition: .3s ease;
        }

        .hb-order-btn:hover {
          transform: translateY(-4px) scale(1.04);
        }

        .hb-toggle {
          border: 1px solid rgba(255,176,0,.28) !important;
          width: 48px;
          height: 48px;
          border-radius: 16px !important;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.05) !important;
          color: #ffb000 !important;
          font-size: 26px;
          box-shadow: none !important;
        }

        .hb-toggle:focus {
          box-shadow: none !important;
        }

        .hb-offcanvas {
          background:
            radial-gradient(circle at top left, rgba(255,176,0,.15), transparent 34%),
            radial-gradient(circle at bottom right, rgba(255,61,0,.12), transparent 30%),
            linear-gradient(160deg, #170603, #070201);
          color: #fff7e6;
          border-left: 1px solid rgba(255,176,0,.16);
        }

        .hb-mobile-nav {
          margin-top: 35px;
          gap: 14px;
        }

        .hb-mobile-nav .hb-nav-link {
          display: block;
          font-size: 24px;
          padding: 16px 0 !important;
          border-bottom: 1px solid rgba(255,176,0,.12);
        }

        @media (max-width: 991px) {
          .hb-navbar {
            height: 78px;
            background: rgba(13,4,2,.94);
            backdrop-filter: blur(16px);
          }

          .hb-brand {
            font-size: 26px;
          }

          .hb-logo {
            width: 46px;
            height: 46px;
            font-size: 22px;
          }
        }
      `}</style>

      <Navbar
        expand="lg"
        fixed="top"
        className={`hb-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>

          {/* LOGO */}
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="hb-brand"
          >
            <div className="hb-logo">
              <i className="bi bi-fire"></i>
            </div>

            KC<span>Fast Food</span>
          </Navbar.Brand>

          {/* MOBILE BUTTON */}
          <Navbar.Toggle
            className="hb-toggle"
            onClick={() => setShow(true)}
          >
            <i className="bi bi-list"></i>
          </Navbar.Toggle>

          {/* DESKTOP NAV */}
          <Navbar.Collapse className="d-none d-lg-flex justify-content-end">

            <Nav className="hb-nav align-items-center gap-1 me-3">

              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className="hb-nav-link"
                >
                  {link.name}
                </NavLink>
              ))}

            </Nav>

            <Button
              className="hb-order-btn"
              onClick={() => navigate("/menu")}
            >
              <i className="bi bi-bag-fill"></i>
              Order Now
            </Button>

          </Navbar.Collapse>

          {/* MOBILE MENU */}
          <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            placement="end"
            className="hb-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="hb-brand">

                <div className="hb-logo">
                  <i className="bi bi-fire"></i>
                </div>

                Hungry<span>Bites</span>

              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

              <Nav className="hb-mobile-nav">

                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="hb-nav-link"
                    onClick={() => setShow(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Button
                  className="hb-order-btn mt-4 w-100 justify-content-center"
                  onClick={() => {
                    navigate("/menu");
                    setShow(false);
                  }}
                >
                  <i className="bi bi-bag-fill"></i>
                  Order Now
                </Button>

              </Nav>

            </Offcanvas.Body>
          </Offcanvas>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;