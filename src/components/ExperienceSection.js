import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Custom ChatGPT Implementation',
      description:
        'Built a conversational system with GPT integration, improving response times by 25%. Migrated databases to PostgreSQL, optimizing data retrieval and achieving 40% higher efficiency',
      duration: 'Jul 2024 – Aug 2024',
      link: 'https://github.com/Akhilarroj22992923/Custom-ChatGPT', // Link to PixelForge project
    },
    {
      company: 'Cisco’s Sandbox Provisioning Framework',
      description:
        'Developed sandbox features and collaborated on secure sandbox solutions for Cisco production projects.',
      duration: 'June 2023 - Feb 2024',
      link: 'https://drive.google.com/file/d/1JIZ0--0uSegZKW7eUwrdEbAAnWdgMfsc/view?usp=sharing', // Link to BlueWave project
    },
    {
      company: 'E-Commerce Applications',
      description:
        'Built transaction-efficient platforms, enhancing processing speeds by 35%.',
      duration: 'Aug 2022 - present',
      link: 'https://github.com/Akhilarroj22992923?tab=repositories', // Link to TrendCraft project
    },
    {
      company: 'For More....',
      description:
        'For More dynamic projects with techstacks...',
      duration: 'present',
      link: 'https://github.com/Akhilarroj22992923?tab=repositories', // Link to TrendCraft project
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={titleContainer}>
        <h1 style={titleStyle}>2 YEARS OF</h1>
        <h1 style={highlightStyle}>EXPERIENCE</h1>
      </div>
      <div style={experienceContainer}>
        {experiences.map((exp, index) => (
          <div key={index} style={experienceCard}>
            <div style={cardContent}>
              <div>
                <h2 style={companyStyle}>{exp.company}</h2>
                <p style={descriptionStyle}>{exp.description}</p>
                <p style={durationStyle}>{exp.duration}</p>
              </div>
              <a href={exp.link} style={arrowContainer} title={`View ${exp.company} projects`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E34F26"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={arrowIcon}
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7H17V17" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  color: '#fff',
  marginTop: '4rem',
  padding: '2rem',
  marginLeft: '465px',
  marginRight: '100px',
};

const titleContainer = {
  textAlign: 'left',
  marginBottom: '2rem',
};

const titleStyle = {
  textAlign: 'left',
  fontSize: '5rem',
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

const durationStyle = {
  fontSize: '0.9rem',
  color: '#777',
  fontStyle: 'italic',
};

const arrowContainer = {
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
};

const arrowIcon = {
  transform: 'rotate(0deg)',
  transition: 'transform 0.3s ease',
};

export default ExperienceSection;
