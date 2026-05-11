import React, { useMemo, useRef, useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Deals = () => {
  const [cart, setCart] = useState([]);
  const cartRef = useRef(null);

  const deals = [
    {
      id: 1,
      title: "Wild Fire Deal",
      tag: "Best Value",
      price: 12.99,
      old: 19.5,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=90",
      items: ["2x Smash Burgers", "Loaded Fries", "2x Soft Drinks"],
    },
    {
      id: 2,
      title: "Happiness Combo",
      tag: "Limited",
      price: 16.99,
      old: 24.0,
      img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1200&q=90",
      items: ["2x Signature Meals", "6pc Hot Wings", "2x Milkshakes"],
    },
    {
      id: 3,
      title: "Family Feast Box",
      tag: "Mega Deal",
      price: 28.99,
      old: 40.0,
      img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=1200&q=90",
      items: ["4x Burgers", "Large Fries", "Onion Rings", "4x Drinks"],
    },
  ];

  const addToCart = (deal) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === deal.id);

      if (exists) {
        return prev.map((item) =>
          item.id === deal.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...deal, quantity: 1 }];
    });

    if (window.innerWidth <= 991) {
      setTimeout(() => {
        cartRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <style>{`
        :root{
          --dark:#070201;
          --card:#130401;
          --orange:#ff3d00;
          --amber:#ffb000;
          --cream:#fff7e6;
          --sand:rgba(255,247,230,.72);
          --border:rgba(255,176,0,.16);
        }

        .hb-deals{
          min-height:100vh;
          padding:130px 0 90px;
          overflow:hidden;
          position:relative;
          background:
            radial-gradient(circle at top left, rgba(255,176,0,.15), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255,61,0,.12), transparent 28%),
            linear-gradient(160deg,#070201,#120401 45%,#070201);
          color:var(--cream);
        }

        .hb-floating-fire{
          position:absolute;
          top:80px;
          right:-60px;
          font-size:260px;
          color:rgba(255,176,0,.05);
          animation:floatFire 5s ease-in-out infinite;
          pointer-events:none;
        }

        .hb-heading{
          text-align:center;
          margin-bottom:70px;
        }

        .hb-eyebrow{
          color:var(--amber);
          text-transform:uppercase;
          letter-spacing:4px;
          font-size:12px;
          font-weight:900;
          margin-bottom:16px;
        }

        .hb-heading h2{
          font-size:clamp(48px,7vw,92px);
          line-height:.9;
          font-weight:950;
          margin-bottom:18px;
        }

        .hb-heading h2 span{
          background:linear-gradient(135deg,var(--orange),var(--amber));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hb-heading p{
          color:var(--sand);
          max-width:720px;
          margin:auto;
          line-height:1.9;
          font-size:18px;
        }

        .hb-line{
          width:90px;
          height:4px;
          border-radius:999px;
          margin:22px auto 0;
          background:linear-gradient(90deg,var(--orange),var(--amber));
        }

        .hb-deal-card{
          position:relative;
          overflow:hidden;
          border-radius:34px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.015));
          border:1px solid var(--border);
          height:100%;
          transition:.45s ease;
          backdrop-filter:blur(16px);
          box-shadow:0 28px 75px rgba(0,0,0,.42);
        }

        .hb-deal-card:hover{
          transform:translateY(-14px);
          border-color:rgba(255,176,0,.34);
          box-shadow:0 40px 100px rgba(255,61,0,.18);
        }

        .hb-img-wrap{
          height:280px;
          position:relative;
          overflow:hidden;
        }

        .hb-img-wrap img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s ease;
        }

        .hb-deal-card:hover img{
          transform:scale(1.12);
        }

        .hb-img-wrap::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(to top, rgba(7,2,1,.96), transparent 68%);
        }

        .hb-badge{
          position:absolute!important;
          top:20px;
          left:20px;
          z-index:2;
          border-radius:999px!important;
          padding:10px 16px!important;
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          font-weight:950!important;
        }

        .hb-content{
          padding:30px;
        }

        .hb-content h3{
          font-size:34px;
          font-weight:950;
          margin-bottom:18px;
        }

        .hb-list{
          list-style:none;
          padding:0;
          margin:0 0 28px;
        }

        .hb-list li{
          display:flex;
          align-items:center;
          gap:12px;
          color:var(--sand);
          margin-bottom:14px;
          font-size:15px;
        }

        .hb-list li::before{
          content:"◆";
          color:var(--amber);
          font-size:10px;
        }

        .hb-bottom{
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          gap:12px;
          margin-bottom:26px;
        }

        .hb-price{
          display:flex;
          align-items:flex-end;
          gap:12px;
          flex-wrap:wrap;
        }

        .hb-new{
          color:var(--amber);
          font-size:44px;
          line-height:1;
          font-weight:950;
        }

        .hb-old{
          color:rgba(255,247,230,.35);
          text-decoration:line-through;
          margin-bottom:8px;
          font-size:16px;
        }

        .hb-save{
          padding:8px 14px;
          border-radius:999px;
          background:rgba(255,176,0,.10);
          border:1px solid rgba(255,176,0,.22);
          color:var(--amber);
          font-size:12px;
          font-weight:900;
        }

        .hb-claim{
          width:100%;
          border:none!important;
          border-radius:999px!important;
          padding:16px!important;
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          font-weight:950!important;
          font-size:16px!important;
          box-shadow:0 18px 45px rgba(255,61,0,.28);
          transition:.35s ease;
        }

        .hb-claim:hover{
          transform:translateY(-5px) scale(1.03);
        }

        .hb-cart-panel{
          margin-top:70px;
          border-radius:36px;
          padding:28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border:1px solid rgba(255,176,0,.18);
          backdrop-filter:blur(18px);
          box-shadow:0 35px 95px rgba(0,0,0,.45);
          scroll-margin-top:95px;
        }

        .hb-cart-head{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:24px;
        }

        .hb-cart-head h3{
          margin:0;
          font-size:34px;
          font-weight:950;
        }

        .hb-cart-count{
          min-width:42px;
          height:42px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg,var(--orange),var(--amber));
          color:#210804;
          font-weight:950;
        }

        .hb-empty-cart{
          padding:38px 20px;
          text-align:center;
          border-radius:26px;
          border:1px dashed rgba(255,176,0,.25);
          color:var(--sand);
        }

        .hb-empty-cart i{
          display:block;
          color:var(--amber);
          font-size:44px;
          margin-bottom:12px;
        }

        .hb-cart-list{
          display:grid;
          grid-template-columns:repeat(3, 1fr);
          gap:18px;
        }

        .hb-cart-item{
          display:grid;
          grid-template-columns:70px 1fr auto;
          gap:14px;
          align-items:center;
          padding:14px;
          border-radius:24px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,176,0,.1);
        }

        .hb-cart-img{
          width:70px;
          height:70px;
          border-radius:18px;
          object-fit:cover;
        }

        .hb-cart-name{
          font-weight:950;
          margin-bottom:4px;
        }

        .hb-cart-small{
          color:var(--sand);
          font-size:13px;
        }

        .hb-cart-controls{
          display:flex;
          align-items:center;
          gap:8px;
          margin-top:8px;
        }

        .hb-qty-btn{
          width:28px;
          height:28px;
          border-radius:50%!important;
          border:1px solid rgba(255,176,0,.25)!important;
          background:rgba(255,255,255,.05)!important;
          color:var(--amber)!important;
          display:grid!important;
          place-items:center;
          padding:0!important;
        }

        .hb-qty{
          min-width:24px;
          text-align:center;
          font-weight:900;
        }

        .hb-remove{
          border:none!important;
          background:transparent!important;
          color:#ff7a4d!important;
          padding:0!important;
          font-size:18px!important;
        }

        .hb-cart-price{
          color:var(--amber);
          font-weight:950;
          text-align:right;
          white-space:nowrap;
          margin-top:8px;
        }

        .hb-bill{
          margin-top:26px;
          padding-top:22px;
          border-top:1px solid rgba(255,176,0,.14);
          max-width:520px;
          margin-left:auto;
        }

        .hb-bill-row{
          display:flex;
          justify-content:space-between;
          color:var(--sand);
          margin-bottom:12px;
        }

        .hb-bill-row.total{
          color:var(--cream);
          font-size:24px;
          font-weight:950;
          margin-top:14px;
        }

        .hb-checkout{
          width:100%;
          margin-top:18px;
          border:none!important;
          border-radius:999px!important;
          padding:15px!important;
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          font-weight:950!important;
        }

        .hb-clear{
          width:100%;
          margin-top:12px;
          border-radius:999px!important;
          padding:12px!important;
          border:1px solid rgba(255,176,0,.18)!important;
          background:rgba(255,255,255,.04)!important;
          color:var(--cream)!important;
          font-weight:800!important;
        }

        .hb-app{
          margin-top:95px;
          padding:80px 55px;
          border-radius:40px;
          text-align:center;
          background:
            linear-gradient(135deg, rgba(255,61,0,.18), rgba(255,176,0,.10)),
            rgba(255,255,255,.03);
          border:1px solid rgba(255,176,0,.16);
          box-shadow:0 35px 100px rgba(0,0,0,.45);
        }

        .hb-app h2{
          font-size:clamp(42px,6vw,78px);
          line-height:.92;
          font-weight:950;
          margin-bottom:20px;
        }

        .hb-app h2 span{
          color:var(--amber);
        }

        .hb-app p{
          color:var(--sand);
          max-width:760px;
          margin:auto;
          line-height:1.9;
          font-size:18px;
        }

        .hb-discount{
          display:inline-flex;
          margin-top:30px;
          padding:14px 24px;
          border-radius:999px;
          background:rgba(255,176,0,.10);
          border:1px solid rgba(255,176,0,.22);
          color:var(--amber);
          font-weight:900;
        }

        .hb-store-buttons{
          margin-top:38px;
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:18px;
        }

        .hb-store{
          min-width:240px;
          height:68px;
          border-radius:22px!important;
          border:1px solid rgba(255,176,0,.18)!important;
          background:rgba(255,255,255,.05)!important;
          color:var(--cream)!important;
          display:flex!important;
          align-items:center;
          justify-content:center;
          gap:14px;
          font-weight:900!important;
        }

        .hb-store i{
          color:var(--amber);
          font-size:24px;
        }

        @keyframes floatFire{
          0%,100%{ transform:translateY(0) rotate(-8deg); }
          50%{ transform:translateY(-20px) rotate(8deg); }
        }

        @media(max-width:991px){
          .hb-cart-list{
            grid-template-columns:1fr;
          }

          .hb-bill{
            max-width:100%;
          }
        }

        @media(max-width:768px){
          .hb-deals{
            padding:110px 0 70px;
          }

          .hb-img-wrap{
            height:230px;
          }

          .hb-content{
            padding:24px;
          }

          .hb-app,
          .hb-cart-panel{
            padding:28px 20px;
          }

          .hb-store-buttons{
            flex-direction:column;
          }

          .hb-store{
            width:100%;
          }

          .hb-heading h2{
            line-height:1;
          }
        }
      `}</style>

      <main className="hb-deals">
        <i className="bi bi-fire hb-floating-fire"></i>

        <Container>
          <div className="hb-heading">
            <div className="hb-eyebrow">Hot Deals • Bigger Cravings</div>

            <h2>
              Today’s <span>Special Deals</span>
            </h2>

            <p>
              Freshly crafted combos loaded with bold flavours, crispy bites and
              unbeatable prices.
            </p>

            <div className="hb-line"></div>
          </div>

          <Row className="g-4">
            {deals.map((deal) => (
              <Col lg={4} md={6} key={deal.id}>
                <div className="hb-deal-card">
                  <div className="hb-img-wrap">
                    <img src={deal.img} alt={deal.title} />

                    <Badge className="hb-badge">{deal.tag}</Badge>
                  </div>

                  <div className="hb-content">
                    <h3>{deal.title}</h3>

                    <ul className="hb-list">
                      {deal.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="hb-bottom">
                      <div className="hb-price">
                        <div className="hb-new">£{deal.price.toFixed(2)}</div>
                        <div className="hb-old">£{deal.old.toFixed(2)}</div>
                      </div>

                      <div className="hb-save">🔥 Save Big</div>
                    </div>

                    <Button
                      className="hb-claim"
                      onClick={() => addToCart(deal)}
                    >
                      <i className="bi bi-bag-fill me-2"></i>
                      Claim This Deal
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="hb-cart-panel" ref={cartRef}>
            <div className="hb-cart-head">
              <h3>Your Deals Cart</h3>
              <div className="hb-cart-count">{totalItems}</div>
            </div>

            {cart.length === 0 ? (
              <div className="hb-empty-cart">
                <i className="bi bi-bag"></i>
                <strong>No deals selected yet</strong>
                <p className="mb-0 mt-2">
                  Click “Claim This Deal” to add a deal to cart.
                </p>
              </div>
            ) : (
              <>
                <div className="hb-cart-list">
                  {cart.map((item) => (
                    <div className="hb-cart-item" key={item.id}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="hb-cart-img"
                      />

                      <div>
                        <div className="hb-cart-name">{item.title}</div>
                        <div className="hb-cart-small">
                          £{item.price.toFixed(2)} each
                        </div>

                        <div className="hb-cart-controls">
                          <Button
                            className="hb-qty-btn"
                            onClick={() => decreaseQty(item.id)}
                          >
                            <i className="bi bi-dash"></i>
                          </Button>

                          <span className="hb-qty">{item.quantity}</span>

                          <Button
                            className="hb-qty-btn"
                            onClick={() => increaseQty(item.id)}
                          >
                            <i className="bi bi-plus"></i>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Button
                          className="hb-remove"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="bi bi-x-circle"></i>
                        </Button>

                        <div className="hb-cart-price">
                          £{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hb-bill">
                  <div className="hb-bill-row">
                    <span>Subtotal</span>
                    <strong>£{subtotal.toFixed(2)}</strong>
                  </div>

                  <div className="hb-bill-row">
                    <span>Delivery Fee</span>
                    <strong>£{deliveryFee.toFixed(2)}</strong>
                  </div>

                  <div className="hb-bill-row total">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>

                  <Button className="hb-checkout">
                    <i className="bi bi-credit-card-fill me-2"></i>
                    Checkout
                  </Button>

                  <Button className="hb-clear" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="hb-app">
            <div className="hb-eyebrow">HungryBites App</div>

            <h2>
              Download Our <span>Mobile App</span>
            </h2>

            <p>
              Unlock exclusive discounts, loyalty rewards, weekly offers and
              lightning-fast ordering.
            </p>

            <div className="hb-discount">
              🔥 Get 50% OFF Your First Burger
            </div>

            <div className="hb-store-buttons">
              <Button className="hb-store">
                <i className="bi bi-apple"></i>
                App Store
              </Button>

              <Button className="hb-store">
                <i className="bi bi-google-play"></i>
                Google Play
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Deals;