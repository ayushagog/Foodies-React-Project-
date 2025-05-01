import React from 'react';
import about from '../assets/about.jpg'



const AboutPage = () => {
    
  return (
    <div className="container py-5 my-5 ">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={about}
            alt="Our Restaurant"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About <span className="text-primary">Foodies</span></h2>
          <p className="text-muted">
            At Foodies, we blend tradition and innovation to serve you dishes that ignite the senses.
            Our chefs craft every plate with passion, using only the freshest ingredients.
          </p>
          <p className="text-muted">
            Since opening our doors in 2010, we've been committed to creating unforgettable dining
            experiences — whether it’s a romantic dinner, a family gathering, or a casual brunch.
          </p>
          <p className="text-muted">
            Come for the food, stay for the warmth. We're more than just a restaurant — we're a community.
          </p>
          <button className="btn btn-primary mt-3 rounded-pill px-4">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default AboutPage;
