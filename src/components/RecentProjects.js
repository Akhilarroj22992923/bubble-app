import React from 'react';
import { FiFolder, FiLayers} from 'react-icons/fi';
const RecentProjects = () => {
  const projects = [
    {
      title: 'viharrni-shop',
      color: '#E34F26',
      icon: <FiLayers/>,
      link: 'https://github.com/Akhilarroj22992923/viharrni-shop',
    },
    {
      title: 'train_sys',
      color: '#CCFF00',
      icon: <FiFolder/>,
      link: 'https://github.com/Akhilarroj22992923/train_sys',
    },
    {
      title: 'webpage',
      color: '#87CEEB',
      icon: <FiFolder/>,
      link: 'https://github.com/Akhilarroj22992923/webpage',
    },
  ];

  return (
    <div style={{ marginLeft: '31rem' }}>
      <h2 style={headerStyle}>RECENT <span style={subHeaderStyle}>PROJECTS</span></h2>
      <div style={projectGrid}>
        {projects.map((project, index) => (
          <div key={index} style={{ ...projectCard, backgroundColor: project.color }}>
            <div style={iconStyle}>{project.icon}</div>
            <p style={projectTitle}>{project.title}</p>
            <div style={arrowStyle}>
            <a href={project.link} style={linkStyle}>→</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const headerStyle = {
  color: '#fff',
  fontSize: '4.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  marginRight: '100px',
};

const subHeaderStyle = {
  color: '#444',
};

const projectGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr', // Two columns
  gap: '2rem',
  // justifyItems: 'center', // Center align items in their grid cells
  // alignItems: 'center', 
};

const projectCard = {
  color: '#121212',
  padding: '1.5rem',
  borderRadius: '10px',
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
};

const iconStyle = {
  fontSize: '2rem',
};

const projectTitle = {
  margin: '1rem 0',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const arrowStyle = {
  alignSelf: 'flex-end',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  border: '2px solid black',
  borderRadius: '5px',
  width: '35px',
  height: '35px',
  // justifyContent: 'center',
  // alignItems: 'center',
};
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export default RecentProjects;
