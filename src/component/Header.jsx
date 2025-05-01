import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

const RestaurantHeader = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-2">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Brand */}
          <Link className="navbar-brand fw-bold text-primary fs-3" to="/">
            🍽️ Foodies
          </Link>

          {/* Toggle Button for Offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation for Large Screens */}
          <div className="collapse navbar-collapse justify-content-between d-none d-lg-flex">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/menu">
                  <FaUtensils /> Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/about">
                  <FaInfoCircle /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/contact">
                  <FaPhoneAlt /> Contact
                </Link>
              </li>
            </ul>

            {/* Book Now Button */}
            <Link to="#" className="btn btn-primary rounded-pill px-4">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas Sidebar for Mobile */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/" data-bs-dismiss="offcanvas">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/menu" data-bs-dismiss="offcanvas">
                <FaUtensils /> Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/about" data-bs-dismiss="offcanvas">
                <FaInfoCircle /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/contact" data-bs-dismiss="offcanvas">
                <FaPhoneAlt /> Contact
              </Link>
            </li>
          </ul>

          {/* Book Now button visible on mobile */}
          <div className="mt-4">
            <Link to="#" className="btn btn-primary w-100 rounded-pill">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantHeader;
