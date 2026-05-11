import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Smash Burgers",
      icon: "bi bi-fire",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
    },
    {
      title: "Loaded Fries",
      icon: "bi bi-stars",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80",
    },
    {
      title: "Hot Wings",
      icon: "bi bi-lightning-charge-fill",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900&q=80",
    },
  ];

  const featured = [
    {
      name: "Inferno Burger",
      price: "£8.99",
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=80",
    },
    {
      name: "Crispy Chicken",
      price: "£7.49",
      tag: "Hot",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900&q=80",
    },
    {
      name: "Mega Stack",
      price: "£11.99",
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=900&q=80",
    },
  ];

  return (
    <>
      <style>{`
        :root{
          --dark:#070201;
          --card:#140502;
          --orange:#ff3d00;
          --amber:#ffb000;
          --cream:#fff7e6;
          --sand:rgba(255,247,230,.72);
          --border:rgba(255,176,0,.16);
        }

        body{
          background:var(--dark);
        }

        .hb-home{
          background:
            radial-gradient(circle at top left, rgba(255,176,0,.12), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255,61,0,.10), transparent 28%),
            linear-gradient(160deg,#070201,#120401 45%,#070201);
          color:var(--cream);
          overflow:hidden;
        }

        .hb-hero{
          min-height:100vh;
          position:relative;
          display:flex;
          align-items:center;
          overflow:hidden;
        }

        .hb-video-bg{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          z-index:0;
          transform:scale(1.04);
        }

        .hb-video-overlay{
          position:absolute;
          inset:0;
          z-index:1;
          background:
            linear-gradient(
              90deg,
              rgba(7,2,1,.96) 0%,
              rgba(7,2,1,.82) 45%,
              rgba(7,2,1,.38) 100%
            );
        }

        .hb-floating-burger{
          position:absolute;
          right:-80px;
          bottom:-60px;
          font-size:320px;
          opacity:.08;
          animation:floatBurger 7s ease-in-out infinite;
          pointer-events:none;
          z-index:2;
        }

        .hb-hero-content{
          position:relative;
          z-index:3;
          max-width:760px;
          padding-top:80px;
        }

        .hb-eyebrow{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:10px 18px;
          border-radius:999px;
          background:rgba(255,255,255,.05);
          border:1px solid var(--border);
          backdrop-filter:blur(12px);
          color:var(--amber);
          font-size:12px;
          letter-spacing:3px;
          text-transform:uppercase;
          font-weight:900;
          margin-bottom:26px;
        }

        .hb-title{
          font-size:clamp(52px,8vw,110px);
          line-height:.9;
          font-weight:950;
          margin-bottom:24px;
          letter-spacing:-3px;
        }

        .hb-title span{
          display:block;
          background:linear-gradient(135deg,var(--orange),var(--amber));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hb-text{
          color:var(--sand);
          font-size:18px;
          line-height:1.9;
          max-width:640px;
        }

        .hb-hero-buttons{
          display:flex;
          flex-wrap:wrap;
          gap:18px;
          margin-top:34px;
        }

        .hb-btn{
          border:none!important;
          border-radius:999px!important;
          font-weight:900!important;
          padding:16px 30px!important;
          transition:.35s ease;
        }

        .hb-btn-primary{
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          box-shadow:0 20px 50px rgba(255,61,0,.32);
        }

        .hb-btn-primary:hover{
          transform:translateY(-5px) scale(1.04);
        }

        .hb-btn-outline{
          border:1px solid rgba(255,176,0,.28)!important;
          background:rgba(255,255,255,.04)!important;
          color:var(--cream)!important;
          backdrop-filter:blur(12px);
        }

        .hb-btn-outline:hover{
          background:rgba(255,176,0,.08)!important;
          transform:translateY(-4px);
        }

        .hb-stats{
          margin-top:45px;
          display:flex;
          gap:30px;
          flex-wrap:wrap;
        }

        .hb-stat{
          padding:18px 22px;
          border-radius:24px;
          border:1px solid rgba(255,176,0,.14);
          background:rgba(255,255,255,.04);
          backdrop-filter:blur(12px);
        }

        .hb-stat h3{
          color:var(--amber);
          font-size:34px;
          font-weight:950;
          margin:0;
        }

        .hb-stat p{
          color:var(--sand);
          margin:0;
          font-size:13px;
          text-transform:uppercase;
          letter-spacing:1px;
          font-weight:800;
        }

        .hb-section{
          padding:100px 0;
          position:relative;
        }

        .hb-section-title{
          text-align:center;
          margin-bottom:65px;
        }

        .hb-section-title h2{
          font-size:clamp(38px,5vw,68px);
          font-weight:950;
          margin-bottom:18px;
          line-height:.95;
        }

        .hb-section-title p{
          color:var(--sand);
          max-width:700px;
          margin:auto;
          line-height:1.8;
        }

        .hb-line{
          width:90px;
          height:4px;
          border-radius:999px;
          margin:18px auto 0;
          background:linear-gradient(90deg,var(--orange),var(--amber));
        }

        .hb-category-card{
          position:relative;
          overflow:hidden;
          border-radius:30px;
          height:420px;
          cursor:pointer;
          transition:.45s ease;
          border:1px solid rgba(255,176,0,.14);
          box-shadow:0 28px 70px rgba(0,0,0,.38);
        }

        .hb-category-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s ease;
        }

        .hb-category-card::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(to top, rgba(7,2,1,.96), transparent 65%);
        }

        .hb-category-card:hover img{
          transform:scale(1.12);
        }

        .hb-category-card:hover{
          transform:translateY(-12px);
        }

        .hb-category-content{
          position:absolute;
          left:30px;
          right:30px;
          bottom:28px;
          z-index:2;
        }

        .hb-category-icon{
          width:60px;
          height:60px;
          border-radius:18px;
          display:grid;
          place-items:center;
          margin-bottom:18px;
          background:linear-gradient(135deg,var(--orange),var(--amber));
          color:#210804;
          font-size:26px;
          box-shadow:0 16px 40px rgba(255,61,0,.3);
        }

        .hb-category-content h3{
          font-size:34px;
          font-weight:950;
          margin-bottom:8px;
        }

        .hb-category-content p{
          color:var(--sand);
          margin:0;
        }

        .hb-food-card{
          background:
            linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.015));
          border:1px solid var(--border);
          border-radius:28px;
          overflow:hidden;
          height:100%;
          transition:.4s ease;
          backdrop-filter:blur(14px);
          box-shadow:0 24px 65px rgba(0,0,0,.32);
        }

        .hb-food-card:hover{
          transform:translateY(-12px);
          border-color:rgba(255,176,0,.35);
          box-shadow:0 28px 70px rgba(0,0,0,.38);
        }

        .hb-food-img{
          height:250px;
          overflow:hidden;
          position:relative;
        }

        .hb-food-img img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s ease;
        }

        .hb-food-card:hover img{
          transform:scale(1.1);
        }

        .hb-badge{
          position:absolute!important;
          top:18px;
          left:18px;
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          font-weight:900!important;
          padding:10px 14px!important;
          border-radius:999px!important;
        }

        .hb-food-content{
          padding:28px;
        }

        .hb-food-content h3{
          font-size:30px;
          font-weight:950;
          margin-bottom:12px;
        }

        .hb-food-content p{
          color:var(--sand);
          line-height:1.8;
        }

        .hb-price-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-top:22px;
        }

        .hb-price{
          color:var(--amber);
          font-size:36px;
          font-weight:950;
        }

        .hb-add{
          width:54px;
          height:54px;
          border-radius:50%!important;
          border:none!important;
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          font-size:20px!important;
          transition:.35s ease;
        }

        .hb-add:hover{
          transform:rotate(90deg) scale(1.08);
        }

        .hb-delivery{
          border-radius:38px;
          overflow:hidden;
          position:relative;
          background:
            linear-gradient(135deg, rgba(255,61,0,.18), rgba(255,176,0,.10)),
            rgba(255,255,255,.03);
          border:1px solid rgba(255,176,0,.14);
          padding:80px 60px;
          text-align:center;
          box-shadow:0 35px 100px rgba(0,0,0,.42);
        }

        .hb-delivery h2{
          font-size:clamp(40px,6vw,74px);
          font-weight:950;
          line-height:.95;
          margin-bottom:20px;
        }

        .hb-delivery h2 span{
          color:var(--amber);
        }

        .hb-delivery p{
          color:var(--sand);
          max-width:760px;
          margin:auto;
          line-height:1.9;
          font-size:18px;
        }

        .hb-apps{
          display:flex;
          justify-content:center;
          gap:18px;
          flex-wrap:wrap;
          margin-top:36px;
        }

        .hb-app-btn{
          min-width:220px;
          height:64px;
          border-radius:22px!important;
          border:1px solid rgba(255,176,0,.2)!important;
          background:rgba(255,255,255,.05)!important;
          color:var(--cream)!important;
          display:flex!important;
          align-items:center;
          justify-content:center;
          gap:12px;
          font-weight:900!important;
          backdrop-filter:blur(12px);
          transition:.35s ease;
        }

        .hb-app-btn i{
          font-size:24px;
          color:var(--amber);
        }

        .hb-app-btn:hover{
          transform:translateY(-5px);
        }

        @keyframes floatBurger{
          0%,100%{ transform:translateY(0) rotate(-6deg); }
          50%{ transform:translateY(-20px) rotate(6deg); }
        }

        @media(max-width:991px){
          .hb-hero{
            text-align:center;
          }

          .hb-hero-content{
            margin:auto;
          }

          .hb-stats{
            justify-content:center;
          }

          .hb-category-card{
            height:360px;
          }
        }

        @media(max-width:768px){
          .hb-section{
            padding:75px 0;
          }

          .hb-delivery{
            padding:60px 24px;
          }

          .hb-food-img{
            height:220px;
          }

          .hb-category-card{
            height:320px;
          }

          .hb-title{
            letter-spacing:-2px;
          }

          .hb-floating-burger{
            font-size:210px;
            right:-70px;
            bottom:20px;
          }
        }
      `}</style>

      <main className="hb-home">
        <section className="hb-hero">
          <video autoPlay muted loop playsInline className="hb-video-bg">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="hb-video-overlay"></div>

          <div className="hb-floating-burger">🍔</div>

          <Container>
            <div className="hb-hero-content">
              <div className="hb-eyebrow">
                <i className="bi bi-fire"></i>
                Fresh • Hot • 100% Halal
              </div>

              <h1 className="hb-title">
                Taste That
                <span>Hits Different.</span>
              </h1>

              <p className="hb-text">
                Flame-grilled burgers, crispy chicken, loaded fries and bold
                street flavours crafted fresh for real food lovers.
              </p>

              <div className="hb-hero-buttons">
                <Button className="hb-btn hb-btn-primary" onClick={() => {
                  navigate("/menu");
                  setShow(false);
                }}
                >
                  <i className="bi bi-bag-fill me-2"></i>
                  Order Now
                </Button>

                <Button className="hb-btn hb-btn-outline" onClick={() => {
                  navigate("/menu");
                  setShow(false);
                }}
                >View Menu</Button>
              </div>

              <div className="hb-stats">
                <div className="hb-stat">
                  <h3>4.8★</h3>
                  <p>Customer Rating</p>
                </div>

                <div className="hb-stat">
                  <h3>11+</h3>
                  <p>Branches</p>
                </div>

                <div className="hb-stat">
                  <h3>20K+</h3>
                  <p>Orders Served</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="hb-section">
          <Container>
            <div className="hb-section-title">
              <h2>Explore Our Menu</h2>
              <p>
                Crafted with premium ingredients, bold spices and unforgettable
                flavour.
              </p>
              <div className="hb-line"></div>
            </div>

            <Row className="g-4">
              {categories.map((item, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="hb-category-card">
                    <img src={item.img} alt={item.title} />

                    <div className="hb-category-content">
                      <div className="hb-category-icon">
                        <i className={item.icon}></i>
                      </div>

                      <h3>{item.title}</h3>

                      <p>
                        Freshly made daily with signature sauces and premium
                        ingredients.
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="hb-section">
          <Container>
            <div className="hb-section-title">
              <h2>Featured Specials</h2>
              <p>Most loved meals selected by our customers.</p>
              <div className="hb-line"></div>
            </div>

            <Row className="g-4">
              {featured.map((item, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card className="hb-food-card">
                    <div className="hb-food-img">
                      <img src={item.img} alt={item.name} />

                      <Badge className="hb-badge">{item.tag}</Badge>
                    </div>

                    <div className="hb-food-content">
                      <h3>{item.name}</h3>

                      <p>
                        Loaded with premium ingredients, melted cheese and
                        signature flavours.
                      </p>

                      <div className="hb-price-row">
                        <div className="hb-price">{item.price}</div>

                        <Button className="hb-add">
                          <i className="bi bi-plus-lg"></i>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="hb-section">
          <Container>
            <div className="hb-delivery">
              <h2>
                Fast Delivery.
                <span> Hot & Fresh.</span>
              </h2>

              <p>
                Download our app and enjoy exclusive discounts, loyalty rewards
                and lightning-fast food delivery.
              </p>

              <div className="hb-apps">
                <Button className="hb-app-btn">
                  <i className="bi bi-apple"></i>
                  App Store
                </Button>

                <Button className="hb-app-btn">
                  <i className="bi bi-google-play"></i>
                  Google Play
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;