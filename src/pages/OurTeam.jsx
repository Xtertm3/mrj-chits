import React from 'react';
import { FaUser } from 'react-icons/fa';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'D Ramaiah',
      position: 'Managing Director',
      description: 'D.Ramaiah Former employee of Karnataka Industrial Co-operative bank who was inspired with chit funds started chits ranging from 10000 to 25000. Having more than 20 years of experience in the domain chit funds and mortgage.',
      image: '/images/team/ramaiah.jpg',
      placeholder: false
    },
    {
      id: 2,
      name: 'V Munnanju',
      position: 'Director',
      description: 'V Munnanju former vice president of PLD bank. Having above 10 years of experience in the area of banking industry. Was part of SRI SHAKAMBARI CHITS PVT LTD since its inception. With immense trust and support from customers it motivated the firm to grow to great heights. Joined as director MRJ Chit Pvt Ltd.',
      image: '/images/team/munnanju.jpg',
      placeholder: false
    },
    {
      id: 3,
      name: 'M Jairaj',
      position: 'Director',
      description: 'M Jairaj Entrepreneur of Sri Raghavendra finance corp. Jairaj renowned industrialist unite with MRJ Chits Pvt Ltd with wide range of customer network. Joined as Director MRJ Chit Pvt Ltd.',
      image: '/images/team/jairaj.jpg',
      placeholder: false
    },
    {
      id: 4,
      name: 'R Srinivas',
      position: 'Director',
      description: 'R Srinivas MBA Joined as director of MRJ Chits Pvt Ltd. Srinivas comes with wide knowledge in commerce and IT enabled transformation in the domain of finance.',
      image: '/images/team/srinivas.jpg',
      placeholder: false
    }
  ];

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">The Visionaries Behind Our Success</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="team-intro">
            Our leadership team brings together decades of experience in banking, 
            finance, and chit fund management. Their expertise, integrity, and 
            commitment to customer satisfaction have been the cornerstone of our success.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  {member.placeholder ? (
                    <div className="image-placeholder">
                      <FaUser />
                    </div>
                  ) : (
                    <img src={member.image} alt={member.name} />
                  )}
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
