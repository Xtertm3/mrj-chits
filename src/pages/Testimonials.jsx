import React from 'react';
import { FaQuoteLeft, FaUser, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Kiran Kumar J',
      company: 'Digiflic Controls India Pvt Ltd',
      text: 'I m one of happy customer associated with MRJCPL since 3 years and the service n system implementation is so good and we feel it is trusted n reputed organization and really we can invest our money without second thought. System in MRJCPL shows the level of their experience and quality of services they offer. I feel it\'s a right platform to invest money n save it.',
      rating: 5,
      placeholder: true
    },
    {
      id: 2,
      name: 'M Chetan Kumar',
      company: 'Lenovo India Pvt Ltd',
      text: 'The best thing about MRJ Chits is that you get to save money for long term with short term returns. This is really helpful when you need money in an emergency such as marriage, medical issues or school fee where you can bid and get your money immediately without any issues for the registered chit amt. I am really happy to be part of this firm for the last 15 yrs and also proud that my first car down payment was from my savings in MRJCPL. In today\'s world there are people who cheat by running chit funds at home or by renting a small place and runaway. I can definitely say I am in SAFE hands. I will definitely recommend more people to join us.',
      rating: 5,
      placeholder: true
    },
    {
      id: 3,
      name: 'Mohan N',
      company: 'Volvo',
      text: 'One of the most trusted and renowned brand. We have been associated with this co for more than 20 yrs feels secured, most important is our investment and returns are free from fraudulent. I have personally experienced that they are customer focused and very much flexible to my expectations. With recent automation and system change over, I\'m able to manage transactions on-line, such as statement request, on-line funds transfer, on-line bidding etc.',
      rating: 5,
      placeholder: true
    }
  ];

  return (
    <div className="testimonials-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">What Our Customers Say</h1>
          <p className="page-subtitle">Real Stories from Real People</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="testimonials-intro">
            Don't just take our word for it. Here's what our valued customers 
            have to say about their experience with MRJ Chits Pvt Ltd.
          </p>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <p className="testimonial-text">{testimonial.text}</p>

                <div className="testimonial-author">
                  <div className="author-image">
                    {testimonial.placeholder ? (
                      <div className="image-placeholder">
                        <FaUser />
                      </div>
                    ) : (
                      <img src={testimonial.image} alt={testimonial.name} />
                    )}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-cta">
            <h2>Join Our Happy Customer Family</h2>
            <p>Experience the trust and excellence that over 6000 customers have enjoyed</p>
            <a href="/contact" className="btn btn-primary">Get Started Today</a>
          </div>

          <div className="testimonial-instructions">
            <h3>📸 How to Add Customer Photos:</h3>
            <ol>
              <li>Create a folder: <code>public/images/testimonials/</code></li>
              <li>Add customer photos: <code>kiran.jpg</code>, <code>chetan.jpg</code>, <code>mohan.jpg</code></li>
              <li>Open file: <code>src/pages/Testimonials.js</code></li>
              <li>Update each testimonial object by adding:
                <br/><code>image: '/images/testimonials/filename.jpg'</code>
                <br/>and change <code>placeholder: false</code>
              </li>
            </ol>
            <p className="note">
              <strong>Recommended:</strong> Use professional headshot photos (400x400px) for best results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

/* 
===========================================
TESTIMONIAL PHOTO INSTRUCTIONS:
===========================================

STEP-BY-STEP GUIDE:

1. Prepare Photos:
   - Create folder: public/images/testimonials/
   - Add customer photos (with permission)
   - Recommended: 400x400px, square format

2. Update Code:
   In the testimonials array, change from:
   
   {
     id: 1,
     name: 'Kiran Kumar J',
     ...
     placeholder: true
   }
   
   To:
   
   {
     id: 1,
     name: 'Kiran Kumar J',
     ...
     image: '/images/testimonials/kiran.jpg',
     placeholder: false
   }

3. Repeat for all testimonials.

===========================================
*/
