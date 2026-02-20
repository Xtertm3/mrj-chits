import React, { useState } from 'react';
import { FaCheckCircle, FaCalendarAlt, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import './ChitSchemes.css';

const ChitSchemes = () => {
  const [activeTab, setActiveTab] = useState('all');

  const schemes = [
    {
      id: 1,
      category: 'mid-term',
      duration: '30 Months',
      chitValue: '3,00,000',
      monthlyContribution: '10,000',
      popular: false
    },
    {
      id: 2,
      category: 'long-term',
      duration: '40 Months',
      chitValue: '20,00,000',
      monthlyContribution: '50,000',
      popular: true
    },
    {
      id: 3,
      category: 'long-term',
      duration: '40 Months',
      chitValue: '10,00,000',
      monthlyContribution: '25,000',
      popular: false
    },
    {
      id: 4,
      category: 'long-term',
      duration: '40 Months',
      chitValue: '5,00,000',
      monthlyContribution: '12,500',
      popular: false
    },
    {
      id: 5,
      category: 'long-term',
      duration: '40 Months',
      chitValue: '50,00,000',
      monthlyContribution: '1,25,000',
      popular: true
    },
    {
      id: 6,
      category: 'long-term',
      duration: '40 Months',
      chitValue: '2,00,000',
      monthlyContribution: '5,000',
      popular: false
    },
    {
      id: 7,
      category: 'long-term',
      duration: '40 Months',
      chitValue: '1,00,000',
      monthlyContribution: '2,500',
      popular: false
    }
  ];

  const filteredSchemes = activeTab === 'all' 
    ? schemes 
    : schemes.filter(scheme => scheme.category === activeTab);

  return (
    <div className="schemes-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Chit Schemes</h1>
          <p className="page-subtitle">Flexible Plans Tailored to Your Financial Goals</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Benefits Section */}
          <div className="benefits-section">
            <h2 className="section-title">Why Choose Our Schemes?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaChartLine className="benefit-icon" />
                <h3>Better Returns</h3>
                <p>5 times better returns compared to traditional Fixed Deposits</p>
              </div>
              <div className="benefit-card">
                <FaMoneyBillWave className="benefit-icon" />
                <h3>Flexible Options</h3>
                <p>Choose from various plans that suit your budget and timeline</p>
              </div>
              <div className="benefit-card">
                <FaCheckCircle className="benefit-icon" />
                <h3>Interest-Free Access</h3>
                <p>Access your money through bidding without interest charges</p>
              </div>
              <div className="benefit-card">
                <FaCalendarAlt className="benefit-icon" />
                <h3>Systematic Savings</h3>
                <p>Develop a disciplined savings habit with monthly contributions</p>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="schemes-filter">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Schemes
            </button>
            <button 
              className={`filter-btn ${activeTab === 'mid-term' ? 'active' : ''}`}
              onClick={() => setActiveTab('mid-term')}
            >
              Mid-Term (30 Months)
            </button>
            <button 
              className={`filter-btn ${activeTab === 'long-term' ? 'active' : ''}`}
              onClick={() => setActiveTab('long-term')}
            >
              Long-Term (40 Months)
            </button>
          </div>

          {/* Schemes Grid */}
          <div className="schemes-grid">
            {filteredSchemes.map((scheme) => (
              <div key={scheme.id} className={`scheme-card ${scheme.popular ? 'popular' : ''}`}>
                {scheme.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="scheme-header">
                  <h3 className="scheme-category">
                    {scheme.category === 'mid-term' ? 'Mid Term' : 'Long Term'}
                  </h3>
                  <div className="scheme-duration">
                    <FaCalendarAlt />
                    <span>{scheme.duration}</span>
                  </div>
                </div>

                <div className="scheme-value">
                  <div className="value-label">Chit Value</div>
                  <div className="value-amount">₹{scheme.chitValue}</div>
                </div>

                <div className="scheme-contribution">
                  <div className="contribution-label">Monthly Contribution</div>
                  <div className="contribution-amount">₹{scheme.monthlyContribution}<span>/Month</span></div>
                </div>

                <div className="scheme-features">
                  <div className="feature-item">
                    <FaCheckCircle /> Transparent Process
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle /> Secure Investment
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle /> Easy Bidding
                  </div>
                </div>

                <button className="btn btn-primary scheme-btn">Sign Up!</button>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="how-it-works-section">
            <h2 className="section-title">How Our Chit Schemes Work</h2>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Choose Your Plan</h3>
                <p>Select a scheme that fits your financial goals and budget</p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Make Monthly Contributions</h3>
                <p>Pay your fixed monthly installment on time</p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Participate in Bidding</h3>
                <p>Bid when you need funds or wait for your turn</p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Receive Prize Money</h3>
                <p>Get the full chit value when it's your turn</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChitSchemes;
