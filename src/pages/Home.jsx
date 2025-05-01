import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import t3 from '../assets/t3.jpg'
import main from '../assets/main.jpg'
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import salad from '../assets/salad.jpg'

const HomePage = () => {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          height: '90vh',
          background: `url(${heroImage}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Foodies</h1>
          <p className="lead mb-4">
            Delicious flavors, unforgettable moments — all under one roof.
          </p>
          <Link to="/menu" className="btn btn-primary px-4 py-2 rounded-pill">Explore Menu</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={main}
                alt="Chef"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Our Story</h2>
              <p className="text-muted">
                Since 2010, Foodies has been serving delightful dishes crafted with passion and
                premium ingredients. Our chefs blend tradition and creativity in every bite.
              </p>
              < Link to="/about" className="btn btn-outline-primary rounded-pill px-4 mt-3">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Featured Dishes</h2>
          <p className="text-muted mb-5">A sneak peek into our favorites.</p>

          {/* Placeholder for Menu Cards */}
          <div className="row myfoodie">
            {/* You can dynamically load cards from your API or reuse <MenuCard /> here */}
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow">
                <img src={pizza} className="card-img-top" alt="Pizza" />
                <div className="card-body">
                  <h5 className="card-title">Italian Pizza</h5>
                  <p className="card-text text-muted">Fresh from our oven with authentic Italian ingredients.</p>
                  <span className="fw-bold text-primary">₹399</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow">
                <img src={burger} className="card-img-top" alt="Burger" />
                <div className="card-body">
                  <h5 className="card-title">Smash Burger</h5>
                  <p className="card-text text-muted">Juicy patties layered with secret sauce and cheddar.</p>
                  <span className="fw-bold text-primary">₹299</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow">
                <img src={salad} className="card-img-top" alt="Salad" />
                <div className="card-body">
                  <h5 className="card-title">Garden Salad</h5>
                  <p className="card-text text-muted">Crisp veggies with a zesty lemon vinaigrette. Enjoy this</p>
                  <span className="fw-bold text-primary">₹199</span>
                </div>
              </div>
            </div>
          </div>

          < Link to="/menu" className="btn btn-outline-primary rounded-pill px-4 mt-4">View Full Menu</Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Foodies?</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="bi bi-emoji-smile fs-1 text-primary mb-3"></i>
              <h5>Friendly Service</h5>
              <p className="text-muted">Our staff makes you feel at home, always!</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-stars fs-1 text-primary mb-3"></i>
              <h5>Top Chefs</h5>
              <p className="text-muted">World-class chefs bring world-class taste.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-heart fs-1 text-primary mb-3"></i>
              <h5>Fresh Ingredients</h5>
              <p className="text-muted">We only serve food made with love and the freshest ingredients.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
