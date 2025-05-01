import React from 'react';

const ContactPage = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold mb-3">Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary rounded-pill px-4">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Contact Info</h2>
          <p><i className="bi bi-geo-alt me-2"></i> B-35 Amer Road,Jaipur</p>
          <p><i className="bi bi-telephone me-2"></i> +91 70149 65161</p>
          <p><i className="bi bi-envelope me-2"></i> contact@foodies.com</p>

          <div className="mt-4">
            <h5>Find us on map:</h5>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.53487900379145!2d75.84091004480653!3d26.958061700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db10ffd6e34a7%3A0x2671705667bc920d!2s35B%2C%20Defence%20Colony%2C%20Gujarghati%2C%20Parasrampuri%2C%20Jaipur%2C%20Rajasthan%20302002!5e0!3m2!1sen!2sin!4v1746061475123!5m2!1sen!2sin"
                title="Google Map"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
