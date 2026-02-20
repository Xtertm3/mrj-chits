import React from 'react';
import { FaHandshake, FaAward, FaUsers, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About MRJ Chits</h1>
          <p className="page-subtitle">Building Trust, Creating Prosperity</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-main">
              <h2 className="content-title">Our Story</h2>
              <p className="content-text">
                MRJ Chits Pvt Ltd was founded with a vision to provide transparent, 
                secure, and profitable chit fund services to the community. With over 
                20 years of excellence in the industry, we have built a reputation 
                based on trust, integrity, and customer satisfaction.
              </p>
              <p className="content-text">
                Our founders, with their extensive experience in banking and finance, 
                understood the need for a reliable chit fund company that prioritizes 
                customer interests. Today, we proudly serve over 6000 happy customers 
                who trust us with their financial goals.
              </p>
              <p className="content-text">
                MRJ CHITS PVT LTD retains a long-term relationship with its clients 
                from the inception. We believe in creating value through transparent 
                operations, timely services, and customer-focused solutions.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <FaHandshake className="highlight-icon" />
                <h3>Trust & Integrity</h3>
                <p>Built on a foundation of transparency and ethical practices</p>
              </div>
              <div className="highlight-card">
                <FaAward className="highlight-icon" />
                <h3>20+ Years Experience</h3>
                <p>Decades of expertise in chit fund management</p>
              </div>
              <div className="highlight-card">
                <FaUsers className="highlight-icon" />
                <h3>6000+ Customers</h3>
                <p>A growing family of satisfied investors</p>
              </div>
              <div className="highlight-card">
                <FaChartLine className="highlight-icon" />
                <h3>Proven Results</h3>
                <p>Consistent returns that outperform traditional investments</p>
              </div>
            </div>
          </div>

          <div className="why-chits-section">
            <h2 className="section-title">Why Chit Funds?</h2>
            <div className="why-chits-content">
              <div className="why-item">
                <h3>5 Times Better Than FDs</h3>
                <p>
                  Our chit schemes offer returns that are significantly better than 
                  traditional Fixed Deposits, making your money work harder for you.
                </p>
              </div>
              <div className="why-item">
                <h3>Best Investment Plan</h3>
                <p>
                  Meet your short-term needs with a flexible investment plan that 
                  provides both savings and access to funds when you need them.
                </p>
              </div>
              <div className="why-item">
                <h3>Interest-Free Loans</h3>
                <p>
                  In simple terms, it could be said as interest-free loans. Access 
                  your money through bidding without the burden of interest rates.
                </p>
              </div>
            </div>
          </div>

          <div className="chit-operation-section">
            <h2 className="section-title">How Does Chit Operate?</h2>
            <p className="operation-description">
              A chit is a mutually beneficial scheme where a group of people contributes 
              towards the chit value, and one member from the group is given the prize 
              money through a bidding process. This continues until all members receive 
              their turn, creating a win-win situation for all participants.
            </p>
            <div className="operation-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Group Formation</h3>
                <p>A group of members join a chit scheme with a predetermined value</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Monthly Contribution</h3>
                <p>Each member contributes a fixed amount every month</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Bidding Process</h3>
                <p>Members bid for the prize money, and the highest bidder receives it</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Continued Participation</h3>
                <p>The process continues until all members have received their prize</p>
              </div>
            </div>
          </div>

          <div className="chit-act-section">
            <h2 className="section-title">The Chit Funds Act, 1982</h2>
            <p className="act-description">
              Be it enacted by Parliament in the Thirty-third Year of the Republic of 
              India as follows: STATEMENT OF OBJECTS AND REASONS. A "conventional chit" 
              is an ancient indigenous financial institution prevalent in India. Over 
              the years, Parliament enacted legislation to regulate chit funds and 
              protect the interests of participants.
            </p>
            <p className="act-description">
              MRJ Chits Pvt Ltd operates in full compliance with the Chit Funds Act, 1982, 
              and is duly registered with the Registrar of Chits, Government of Karnataka. 
              We adhere to all regulatory requirements to ensure the safety and security 
              of our customers' investments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
