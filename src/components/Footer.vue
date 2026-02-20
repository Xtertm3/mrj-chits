<template>
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">MRJ Chits Pvt Ltd</h3>
          <p className="footer-text">
            Trusted chit fund services with over 6000 happy customers. 
            Building long-term relationships since inception.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/schemes">Chit Schemes</router-link></li>
            <li><router-link to="/team">Our Team</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Our Services</h4>
          <ul className="footer-links">
            <li><router-link to="/schemes">Mid-Term Plans</router-link></li>
            <li><router-link to="/schemes">Long-Term Plans</router-link></li>
            <li><router-link to="/payments">Online Payments</router-link></li>
            <li><router-link to="/testimonials">Customer Reviews</router-link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Cauvery Bhavan, Bangalore</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 9986277180</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@mrjchits.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} MRJ Chits Pvt Ltd. All rights reserved.</p>
        <p>Regulated by the Registrar of Chits, Government of Karnataka</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import './Footer.css';
</style>
