import React from 'react';
import './SellProducts.css';

const SellProducts = () => {
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
      <section className="banner">
        <img src="InstiOLX_wall2.01.png" alt="welcome banner" />
      </section>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." required />
        <button onClick={() => alert('Searching has been completed')}>Search</button>
      </div>
      <div className="slideshow-container">
        {/* Slideshow content */}
      </div>
      <div className="container">
        <img src="HP_Shop.png" alt="HP Shop" className="image" />
        <div className="middle">
          <div className="text">
            Welcome to InstiOLX, your ultimate destination for buying and selling a wide range of products right within your community. At InstiOLX, we understand the value of convenience and the importance of finding great deals close to home. Whether you're looking for electronics, furniture, vehicles, and even more, our platform connects you with trusted sellers and buyers from your local area. Our user-friendly interface makes it easy to browse listings, post ads, and discover incredible bargains. Join our growing community today and experience a safer, faster, and more enjoyable way to shop.
          </div>
        </div>
      </div>
      <div className="product-listings">
        {/* Product listings content */}
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Policies</h3>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Exchange Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p><i className="fa fa-map-marker"></i> IIT Madras, Chennai-600036.</p>
            <p><i className="fa fa-phone"></i> +91 98765 43210</p>
            <div className="social-icons">
              <a href="#" className="fa fa-whatsapp"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" className="fa fa-facebook"></a>
            </div>
          </div>
          © Developed by Webops and Blockchain Club, CFI
        </div>
      </footer>
    </div>
  );
}

export default SellProducts;
