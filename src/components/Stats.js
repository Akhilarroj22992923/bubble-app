import React from 'react';

const Stats = () => {
  const stats = [
    { value: '+2', label: 'YEARS OF EXPERIENCE' },
    { value: '+40', label: 'PROJECTS COMPLETED' },
    { value: '+10', label: 'WORLDWIDE CLIENTS' },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        <h1 style={title1}>SOFTWARE</h1><span style={highlightText}><h1 style={title2}>Developer</h1></span>
      </h1>
      <p style={descStyle}>
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      <div style={statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} style={statStyle}>
            <h2 style={statValue}>{stat.value}</h2>
            <p style={statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  color: '#fff',
  textAlign: 'left',
  margin: '2rem 0',
  marginRight: '100px',
  marginTop: '-3px',
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  // color: '#fff',
  // fontSize: '4.5rem',
  // fontWeight: 'bold',
  marginBottom: '-1rem',
  marginLeft: '500px',               //testing
};
const title1 = {
  fontSize: '6.5rem',
  
  marginBottom: '-5rem',
}
const title2 = {
  marginBottom: '0rem',
  
}

const highlightText = {
  // color: '#E34F26',
  color: "#444"
  // color: '#aaa',
};

const descStyle = {
  fontSize: '1.5rem',
  margin: '1rem 0',
  lineHeight: '1.5',
  textAlign: 'left',
  marginRight: '160px',
  marginBottom: '-1.2rem',
  color: '#aaa',
  marginLeft: '500px',
};

const statsContainer = {
  display: 'flex',
  // justifyContent: 'space-between',
  marginTop: '0rem',
  // marginBottom: '0rem',
  gap: '0px',          // testing
  marginLeft: '500px', // testing
};

const statStyle = {
  textAlign: 'center',
  // marginRight: '50px',
  // marginLeft: '500px',
  marginRight: '0px', // Minimize horizontal spacing
  marginLeft: '0px',  // Minimize horizontal spacing
};

const statValue = {
  fontSize: '5rem',
  fontWeight: 'bold',
  color: "white",
  textAlign: 'left',
  marginBottom: '0rem'
};

const statLabel = {
  marginTop: '0.1rem',
  fontSize: '1.5rem',
  color: '#aaa',
  textAlign: 'left',
};

export default Stats;
