import React, { useState } from 'react';
import { FiHome, FiFolder, FiLayers, FiTool, FiBriefcase } from 'react-icons/fi';

const Header = ({ scrollToSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { name: 'Home', icon: FiHome, sectionId: 'home' },
    { name: 'Projects', icon: FiFolder, sectionId: 'projects' },
    { name: 'Experience', icon: FiBriefcase, sectionId: 'experience' },
    { name: 'Tools', icon: FiTool, sectionId: 'tools' },
    { name: 'Thoughts', icon: FiLayers, sectionId: 'thoughts' },
  ];

  return (
    <div style={headerStyle}>
      <div style={menuStyle}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              ...menuItem,
              backgroundColor: hoveredIndex === index ? '#1a1a1a' : 'transparent',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => scrollToSection(item.sectionId)}
          >
            <item.icon style={iconStyle} />
            {hoveredIndex === index && (
              <span style={tooltipStyle}>{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '0rem',
  border: '1px #fff',
  borderRadius: '10px',
  width: 'fit-content',
  margin: '0 auto',
  boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)',  // White shadow effect
  top: 0,
  zIndex: 1000,
};

const menuStyle = {
  display: 'flex',
  gap: '0rem',
  fontSize: '1.2rem',
  color: '#fff',
  fontWeight: 'bold',
};

const menuItem = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  position: 'relative', // Required for tooltip positioning
  transition: 'background-color 0.3s ease',
};

const iconStyle = {
  color: 'white',
  fontSize: '1.3rem',
};

const tooltipStyle = {
  position: 'absolute',
  top: 'calc(100% + 0.5rem)', // Position tooltip exactly below the icon with some gap
  left: '50%',
  transform: 'translateX(-50%)', // Center the tooltip horizontally
  backgroundColor: '#333',
  color: '#fff',
  padding: '0.3rem 0.6rem',
  borderRadius: '5px',
  fontSize: '0.7rem',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  whiteSpace: 'nowrap',
  zIndex: 10, // Ensure it is above other elements
  transition: 'opacity 0.3s ease, transform 0.3s ease',
};

export default Header;
