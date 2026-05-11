import React, { useMemo, useRef, useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Menu = () => {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState([]);
  const cartRef = useRef(null);

  const categories = ["All", "Burgers", "Pizzas", "Wings", "Fries", "Drinks"];

  const menuItems = [
    {
      id: 1,
      name: "Inferno Smash",
      category: "Burgers",
      price: 8.99,
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
      desc: "Double smashed beef with cheddar and smoky ranch sauce.",
    },
    {
      id: 2,
      name: "Mega Stack",
      category: "Burgers",
      price: 11.99,
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=900&q=80",
      desc: "Triple layered burger loaded with cheese and crispy onions.",
    },
    {
      id: 3,
      name: "Crunch Chicken",
      category: "Burgers",
      price: 7.99,
      tag: "Crispy",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900&q=80",
      desc: "Southern fried chicken burger with signature mayo.",
    },
    {
      id: 4,
      name: "Fire House Pizza",
      category: "Pizzas",
      price: 14.99,
      tag: "Hot",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80",
      desc: "Stone baked pizza topped with spicy beef and jalapeños.",
    },
    {
      id: 5,
      name: "Pepperoni Deluxe",
      category: "Pizzas",
      price: 13.99,
      tag: "Popular",
      img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=900&q=80",
      desc: "Loaded pepperoni slices with extra cheese blend.",
    },
    {
      id: 6,
      name: "Loaded Ranch Fries",
      category: "Fries",
      price: 5.99,
      tag: "Loaded",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80",
      desc: "Cheese sauce, crispy beef bites and spicy mayo drizzle.",
    },
    {
      id: 7,
      name: "Buffalo Wings",
      category: "Wings",
      price: 6.99,
      tag: "Spicy",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900&q=80",
      desc: "Juicy wings tossed in our signature buffalo glaze.",
    },
    {
      id: 8,
      name: "Wild Milkshake",
      category: "Drinks",
      price: 4.5,
      tag: "Sweet",
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=80",
      desc: "Creamy milkshake topped with whipped vanilla cream.",
    },
  ];

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((cartItem) => cartItem.id === item.id);

      if (exists) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
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
          --card:#140502;
          --orange:#ff3d00;
          --amber:#ffb000;
          --cream:#fff7e6;
          --sand:rgba(255,247,230,.72);
          --border:rgba(255,176,0,.16);
        }

        .hb-menu{
          min-height:100vh;
          background:
            radial-gradient(circle at top left, rgba(255,176,0,.14), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255,61,0,.12), transparent 28%),
            linear-gradient(160deg,#070201,#120401 45%,#070201);
          color:var(--cream);
          overflow:hidden;
          padding:130px 0 90px;
          position:relative;
        }

        .hb-floating-icon{
          position:absolute;
          right:-40px;
          top:100px;
          font-size:220px;
          color:rgba(255,176,0,.06);
          animation:floatFire 5s ease-in-out infinite;
          pointer-events:none;
        }

        .hb-heading{
          text-align:center;
          margin-bottom:60px;
        }

        .hb-eyebrow{
          color:var(--amber);
          font-size:12px;
          font-weight:900;
          letter-spacing:4px;
          text-transform:uppercase;
          margin-bottom:16px;
        }

        .hb-heading h2{
          font-size:clamp(46px,7vw,88px);
          font-weight:950;
          line-height:.9;
          margin-bottom:18px;
        }

        .hb-heading h2 span{
          background:linear-gradient(135deg,var(--orange),var(--amber));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hb-heading p{
          color:var(--sand);
          max-width:700px;
          margin:auto;
          line-height:1.9;
          font-size:18px;
        }

        .hb-line{
          width:90px;
          height:4px;
          border-radius:999px;
          margin:20px auto 0;
          background:linear-gradient(90deg,var(--orange),var(--amber));
        }

        .hb-filters{
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:14px;
          margin-bottom:55px;
        }

        .hb-filter-btn{
          border:none!important;
          border-radius:999px!important;
          padding:14px 24px!important;
          background:rgba(255,255,255,.04)!important;
          color:var(--cream)!important;
          border:1px solid rgba(255,176,0,.14)!important;
          font-weight:900!important;
          backdrop-filter:blur(12px);
          transition:.35s ease;
        }

        .hb-filter-btn.active,
        .hb-filter-btn:hover{
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          transform:translateY(-4px);
          box-shadow:0 18px 40px rgba(255,61,0,.28);
        }

        .hb-card{
          height:100%;
          border-radius:30px;
          overflow:hidden;
          position:relative;
          background:
            linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.015));
          border:1px solid var(--border);
          transition:.4s ease;
          backdrop-filter:blur(14px);
        }

        .hb-card:hover{
          transform:translateY(-12px);
          border-color:rgba(255,176,0,.32);
          box-shadow:0 30px 70px rgba(0,0,0,.42);
        }

        .hb-card-img{
          height:260px;
          overflow:hidden;
          position:relative;
        }

        .hb-card-img img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s ease;
        }

        .hb-card:hover img{
          transform:scale(1.12);
        }

        .hb-card-img::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(to top, rgba(7,2,1,.96), transparent 68%);
        }

        .hb-badge{
          position:absolute!important;
          top:18px;
          left:18px;
          z-index:2;
          border-radius:999px!important;
          background:linear-gradient(135deg,var(--orange),var(--amber))!important;
          color:#210804!important;
          font-weight:900!important;
          padding:10px 14px!important;
        }

        .hb-content{
          padding:28px;
        }

        .hb-category{
          color:var(--amber);
          font-size:12px;
          letter-spacing:2px;
          text-transform:uppercase;
          font-weight:900;
          margin-bottom:10px;
        }

        .hb-content h3{
          font-size:30px;
          font-weight:950;
          margin-bottom:12px;
        }

        .hb-desc{
          color:var(--sand);
          line-height:1.8;
          margin-bottom:24px;
        }

        .hb-bottom{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .hb-price{
          color:var(--amber);
          font-size:36px;
          font-weight:950;
        }

        .hb-add{
          width:56px;
          height:56px;
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

        .hb-cart-panel{
          position:sticky;
          top:100px;
          border-radius:34px;
          padding:26px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border:1px solid rgba(255,176,0,.18);
          backdrop-filter:blur(18px);
          box-shadow:0 30px 80px rgba(0,0,0,.45);
          scroll-margin-top:95px;
        }

        .hb-cart-head{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:22px;
        }

        .hb-cart-head h3{
          margin:0;
          font-size:28px;
          font-weight:950;
        }

        .hb-cart-count{
          min-width:38px;
          height:38px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg,var(--orange),var(--amber));
          color:#210804;
          font-weight:950;
        }

        .hb-empty-cart{
          padding:34px 18px;
          text-align:center;
          border-radius:24px;
          border:1px dashed rgba(255,176,0,.25);
          color:var(--sand);
        }

        .hb-empty-cart i{
          display:block;
          color:var(--amber);
          font-size:42px;
          margin-bottom:12px;
        }

        .hb-cart-list{
          display:flex;
          flex-direction:column;
          gap:16px;
          max-height:390px;
          overflow-y:auto;
          padding-right:4px;
        }

        .hb-cart-item{
          display:grid;
          grid-template-columns:58px 1fr auto;
          gap:12px;
          align-items:center;
          padding:12px;
          border-radius:22px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,176,0,.1);
        }

        .hb-cart-img{
          width:58px;
          height:58px;
          border-radius:16px;
          object-fit:cover;
        }

        .hb-cart-name{
          font-weight:900;
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
        }

        .hb-bill{
          margin-top:22px;
          padding-top:18px;
          border-top:1px solid rgba(255,176,0,.14);
        }

        .hb-bill-row{
          display:flex;
          justify-content:space-between;
          color:var(--sand);
          margin-bottom:12px;
        }

        .hb-bill-row.total{
          color:var(--cream);
          font-size:22px;
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

        .hb-cta{
          margin-top:90px;
          border-radius:38px;
          padding:70px 50px;
          text-align:center;
          background:
            linear-gradient(135deg, rgba(255,61,0,.18), rgba(255,176,0,.10)),
            rgba(255,255,255,.03);
          border:1px solid rgba(255,176,0,.14);
        }

        .hb-cta h2{
          font-size:clamp(38px,6vw,72px);
          font-weight:950;
          line-height:.95;
          margin-bottom:18px;
        }

        .hb-cta h2 span{
          color:var(--amber);
        }

        .hb-cta p{
          color:var(--sand);
          max-width:760px;
          margin:auto;
          line-height:1.9;
          font-size:18px;
        }

        @keyframes floatFire{
          0%,100%{ transform:translateY(0) rotate(-8deg); }
          50%{ transform:translateY(-20px) rotate(8deg); }
        }

        @media(max-width:991px){
          .hb-cart-panel{
            position:relative;
            top:auto;
            margin-top:28px;
          }
        }

        @media(max-width:768px){
          .hb-menu{
            padding:110px 0 70px;
          }

          .hb-card-img{
            height:220px;
          }

          .hb-cta{
            padding:55px 24px;
          }

          .hb-heading h2{
            line-height:1;
          }
        }
      `}</style>

      <main className="hb-menu">
        <i className="bi bi-fire hb-floating-icon"></i>

        <Container>
          <div className="hb-heading">
            <div className="hb-eyebrow">Freshly Crafted • Premium Taste</div>

            <h2>
              Our <span>Full Menu</span>
            </h2>

            <p>
              Premium ingredients, bold flavours and unforgettable meals made
              fresh every day.
            </p>

            <div className="hb-line"></div>
          </div>

          <div className="hb-filters">
            {categories.map((cat) => (
              <Button
                key={cat}
                className={`hb-filter-btn ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <Row className="g-4">
            <Col lg={8}>
              <Row className="g-4">
                {filtered.map((item) => (
                  <Col xl={6} md={6} key={item.id}>
                    <div className="hb-card">
                      <div className="hb-card-img">
                        <img src={item.img} alt={item.name} />
                        <Badge className="hb-badge">{item.tag}</Badge>
                      </div>

                      <div className="hb-content">
                        <div className="hb-category">{item.category}</div>
                        <h3>{item.name}</h3>
                        <p className="hb-desc">{item.desc}</p>

                        <div className="hb-bottom">
                          <div className="hb-price">
                            £{item.price.toFixed(2)}
                          </div>

                          <Button
                            className="hb-add"
                            onClick={() => addToCart(item)}
                          >
                            <i className="bi bi-plus-lg"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={4}>
              <div className="hb-cart-panel" ref={cartRef}>
                <div className="hb-cart-head">
                  <h3>Your Cart</h3>
                  <div className="hb-cart-count">{totalItems}</div>
                </div>

                {cart.length === 0 ? (
                  <div className="hb-empty-cart">
                    <i className="bi bi-bag"></i>
                    <strong>No items added yet</strong>
                    <p className="mb-0 mt-2">
                      Click plus button to add your favourite meals.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="hb-cart-list">
                      {cart.map((item) => (
                        <div className="hb-cart-item" key={item.id}>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="hb-cart-img"
                          />

                          <div>
                            <div className="hb-cart-name">{item.name}</div>
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
            </Col>
          </Row>

          <div className="hb-cta">
            <h2>
              Hungry Already?
              <span> Order Now.</span>
            </h2>

            <p>
              Add your favourite burgers, wings and loaded fries to the cart and
              check your total bill instantly.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Menu;