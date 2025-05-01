import React from 'react';


const RestaurantFooter = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">🍽️ Foodies</h4>
            <p>Your go-to place for delicious food, great ambiance, and unforgettable dining experiences.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/menu" className="text-white text-decoration-none">Menu</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact</h5>
            <p><i className="bi bi-telephone me-2"></i> +91 70149 65161</p>
            <p><i className="bi bi-envelope me-2"></i> contact@foodies.com</p>
            <p><i className="bi bi-geo-alt me-2"></i> B-35 Amer Road,Jaipur</p>
            <div className="mt-3">
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>&copy; 2025 Foodies. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
