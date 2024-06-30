import React from 'react';
import './BuyProducts.css';

const BuyProducts = () => {
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
      <section className="products">
        {/* Product listings similar to the SellProducts page */}
      </section>
      <footer className="footer">
        <div className="footer-container">
          {/* Footer content similar to SellProducts page */}
        </div>
      </footer>
    </div>
  );
}

export default BuyProducts;
