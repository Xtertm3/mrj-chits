import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaUsers, FaShieldAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Trusted & Secure',
      description: 'Over 20 years of experience with 6000+ happy customers'
    },
    {
      icon: <FaChartLine />,
      title: '5X Better Than FDs',
      description: 'Best investment plan to meet your short term needs'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Focused',
      description: 'Long-term relationships with personalized service'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Interest Free Loans',
      description: 'Access your money when you need it most'
    }
  ];

  const recentPosts = [
    {
      title: 'Chit Operation - How does chit operate?',
      excerpt: 'Chit is a mutually beneficial scheme where in a group of people contributes towards the chit value and one member from the group is given...',
      link: '/about'
    },
    {
      title: 'About Chits - Why Chit Funds?',
      excerpt: '5 Times better than FDs. Best and most trusted investment plan to meet your short term needs. In simple terms, it could be said as interest free...',
      link: '/about'
    },
    {
      title: 'The Chit Fund Act',
      excerpt: 'Be it enacted by Parliament in the Thirty-third Year of the Republic of India as follows: STATEMENT OF OBJECTS AND REASONS. A "conventional chit" is an...',
      link: '/about'
    },
    {
      title: 'Why MRJ Chits Pvt Ltd?',
      excerpt: 'MRJ CHITS PVT LTD goodwill and trust with over 6000 happy customers. MRJ CHITS PVT LTD retains a long term relationship with its clients from the inception. New schemes...',
      link: '/about'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title fade-in-up">
                Welcome to <span className="highlight">MRJ Chits</span>
              </h1>
              <p className="hero-subtitle fade-in-up">
                Your Trusted Partner in Financial Growth and Security
              </p>
              <p className="hero-description fade-in-up">
                With over 20 years of excellence in the chit fund industry, MRJ Chits Pvt Ltd 
                has served more than 6000 satisfied customers. We offer secure, transparent, 
                and profitable investment solutions that are 5 times better than traditional 
                Fixed Deposits. Whether you're saving for your future or need access to 
                interest-free loans, we're here to help you achieve your financial goals.
              </p>
              <div className="hero-buttons fade-in-up">
                <Link to="/schemes" className="btn btn-primary">
                  Explore Our Schemes
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">Why Choose MRJ Chits?</h2>
          <p className="section-subtitle">
            Experience the difference with our trusted and transparent chit fund services
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">20+</h3>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">6000+</h3>
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5x</h3>
              <p className="stat-label">Better Than FDs</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Transparent Process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="recent-posts-section section">
        <div className="container">
          <h2 className="section-title">Recent Posts</h2>
          <p className="section-subtitle">
            Stay informed with the latest updates and insights about chit funds
          </p>
          <div className="posts-grid">
            {recentPosts.map((post, index) => (
              <div key={index} className="post-card">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link to={post.link} className="post-link">
                  Continue Reading <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Investment Journey?</h2>
            <p className="cta-text">
              Join thousands of satisfied customers who trust MRJ Chits for their financial growth
            </p>
            <Link to="/contact" className="btn btn-accent">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
