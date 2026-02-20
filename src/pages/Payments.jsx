import React from 'react';
import { Link } from 'react-router-dom';
import { FaUniversity, FaCopy, FaCheckCircle, FaMoneyCheck } from 'react-icons/fa';
import './Payments.css';

const Payments = () => {
  const [copied, setCopied] = React.useState('');

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const bankDetails = {
    bankName: 'Axis Bank',
    accountName: 'MRJ Chits Pvt Ltd',
    accountNumber: '913020056158136',
    ifscCode: 'UTIB0001151',
    branch: 'Cauvery Bhavan'
  };

  return (
    <div className="payments-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Payments</h1>
          <p className="page-subtitle">Simple & Secure Payment Options</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="payment-methods">
            {/* NEFT/RTGS Section */}
            <div className="payment-section">
              <div className="payment-icon-header">
                <FaUniversity className="payment-main-icon" />
                <h2 className="payment-title">NEFT & RTGS Payments</h2>
              </div>
              <p className="payment-description">
                Transfer funds directly to our bank account using NEFT or RTGS. 
                Quick, secure, and convenient for all your transactions.
              </p>

              <div className="bank-details-card">
                <h3>Bank Account Details</h3>
                <div className="details-grid">
                  <div className="detail-item">
                    <label>Bank Name</label>
                    <div className="detail-value">
                      <span>{bankDetails.bankName}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => copyToClipboard(bankDetails.bankName, 'bank')}
                        title="Copy to clipboard"
                      >
                        {copied === 'bank' ? <FaCheckCircle /> : <FaCopy />}
                      </button>
                    </div>
                  </div>

                  <div className="detail-item">
                    <label>Account Name</label>
                    <div className="detail-value">
                      <span>{bankDetails.accountName}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => copyToClipboard(bankDetails.accountName, 'name')}
                        title="Copy to clipboard"
                      >
                        {copied === 'name' ? <FaCheckCircle /> : <FaCopy />}
                      </button>
                    </div>
                  </div>

                  <div className="detail-item highlight">
                    <label>Account Number</label>
                    <div className="detail-value">
                      <span className="account-number">{bankDetails.accountNumber}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'account')}
                        title="Copy to clipboard"
                      >
                        {copied === 'account' ? <FaCheckCircle /> : <FaCopy />}
                      </button>
                    </div>
                  </div>

                  <div className="detail-item highlight">
                    <label>IFSC Code</label>
                    <div className="detail-value">
                      <span className="ifsc-code">{bankDetails.ifscCode}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => copyToClipboard(bankDetails.ifscCode, 'ifsc')}
                        title="Copy to clipboard"
                      >
                        {copied === 'ifsc' ? <FaCheckCircle /> : <FaCopy />}
                      </button>
                    </div>
                  </div>

                  <div className="detail-item">
                    <label>Branch</label>
                    <div className="detail-value">
                      <span>{bankDetails.branch}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => copyToClipboard(bankDetails.branch, 'branch')}
                        title="Copy to clipboard"
                      >
                        {copied === 'branch' ? <FaCheckCircle /> : <FaCopy />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cheque Payments Section */}
            <div className="payment-section">
              <div className="payment-icon-header">
                <FaMoneyCheck className="payment-main-icon" />
                <h2 className="payment-title">Cheque Payments</h2>
              </div>
              <p className="payment-description">
                You can also make payments via cheque. Please follow the instructions below.
              </p>

              <div className="cheque-details-card">
                <div className="cheque-info">
                  <h4>Cheque should be drawn in favor of:</h4>
                  <div className="cheque-name">
                    <FaCheckCircle className="check-icon" />
                    <span>MRJ Chits Pvt Ltd</span>
                  </div>
                </div>

                <div className="cheque-instructions">
                  <h4>Instructions:</h4>
                  <ul>
                    <li>Write the cheque in favor of <strong>"MRJ Chits Pvt Ltd"</strong></li>
                    <li>Mention your customer ID and chit number on the back of the cheque</li>
                    <li>Submit the cheque at our office or send via post</li>
                    <li>Cheques will be processed within 2-3 working days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Tips */}
          <div className="payment-tips">
            <h3>Important Payment Guidelines</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <FaCheckCircle className="tip-icon" />
                <h4>Always Include Reference</h4>
                <p>Mention your customer ID and chit number in the transaction remarks</p>
              </div>
              <div className="tip-card">
                <FaCheckCircle className="tip-icon" />
                <h4>Save Transaction Details</h4>
                <p>Keep a copy of your payment receipt for future reference</p>
              </div>
              <div className="tip-card">
                <FaCheckCircle className="tip-icon" />
                <h4>Payment Confirmation</h4>
                <p>You'll receive a confirmation within 24 hours of payment</p>
              </div>
              <div className="tip-card">
                <FaCheckCircle className="tip-icon" />
                <h4>Need Help?</h4>
                <p>Contact our support team for any payment related queries</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="payment-contact">
            <h3>Have Questions About Payments?</h3>
            <p>Our team is here to help you with any payment-related queries</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;
