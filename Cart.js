import React from 'react';

const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div>
      <header>
        <div id="logo">InstiOLX</div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Login</a>
          <a href="#" style={{ background: 'linear-gradient(45deg, #03442e, #2ECC71, #BDF74B)', textAlign: 'center', borderRadius: '40px' }}>+SELL</a>
        </div>
      </header>
      <section className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <footer className="footer">
        <div className="footer-container">
          {/* Footer content similar to SellProducts page */}
        </div>
      </footer>
    </div>
  );
}

export default Cart;
