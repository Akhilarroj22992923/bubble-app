import React from 'react';

const Thoughts = () => {
  const thoughts = [
    {
      company: 'Let\'s Connect Together',
      description: 'Feel free to reach out using the contact details below.',
    },
  ];

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={titleContainer}>
        <h1 style={titleStyle}>DESIGN</h1>
        <h1 style={highlightStyle}>THOUGHTS</h1>
      </div>

      {/* Main Content */}
      <div style={experienceContainer}>
        {thoughts.map((exp, index) => (
          <div key={index} style={experienceCard}>
            <div style={cardContent}>
              <div>
                <h2 style={companyStyle}>{exp.company}</h2>
                <p style={descriptionStyle}>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <div style={footerContent}>
          <p style={footerText}>
            <strong>Contact:</strong> +91-7993871714 | <strong>Email:</strong> akhil161999@example.com
          </p>
          <p style={footerText}>Powered by <strong>Arroju Akhil</strong></p>
        </div>
      </footer>
    </div>
  );
};

// Styles
const containerStyle = {
  color: '#fff',
  marginTop: '4rem',
  padding: '2rem',
  marginLeft: '470px',
  marginRight: '15%',
  fontFamily: 'Arial, sans-serif',
};

const titleContainer = {
  textAlign: 'left',
//   fontSize: '6rem',
  marginBottom: '2rem',
};

const titleStyle = {
  textAlign: 'left',
  fontSize: '6rem',
  fontWeight: 'bold',
  color: '#fff',
  margin: 0,
};

const highlightStyle = {
  fontSize: '4rem',
  fontWeight: 'bold',
  color: '#444',
  margin: 0,
};

const experienceContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const experienceCard = {
  backgroundColor: '#1a1a1a',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
};

const cardContent = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const companyStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#fff',
};

const descriptionStyle = {
  margin: '1rem 0',
  fontSize: '1rem',
  color: '#aaa',
  lineHeight: '1.5',
};

const footerStyle = {
  marginTop: '3rem',
  padding: '1.5rem 0',
  backgroundColor: '#111',
  textAlign: 'center',
};

const footerContent = {
  maxWidth: '800px',
  margin: '0 auto',
};

const footerText = {
  fontSize: '1rem',
  color: '#aaa',
  margin: '0.5rem 0',
};

export default Thoughts;
