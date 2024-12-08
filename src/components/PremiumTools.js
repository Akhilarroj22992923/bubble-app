import React from 'react';
import { FaFigma, FaReact, FaVenus } from 'react-icons/fa';
import { SiFramer, SiNotion, SiLemonsqueezy, SiChatgpt } from 'react-icons/si';
import { AiOutlineRobot } from 'react-icons/ai';
const PremiumTools = () => {
  const tools = [
    { name: 'Framer', icon: <SiFramer />, description: 'Website Builder' },
    { name: 'Figma', icon: <FaFigma />, description: 'Design Tool' },
    { name: 'Vercel', icon: <SiLemonsqueezy />, description: 'deploy' },
    { name: 'ChatGPT', icon: <AiOutlineRobot />, description: 'AI Assistant' },
    { name: 'Notion', icon: <SiNotion />, description: 'Productivity Tool' },
    { name: 'Next.js', icon: <FaReact />, description: 'React Framework' },
    // { name: 'Vercel', icon: <FaVenus />, description: 'React Framework' },
    // { name: 'Next.js', icon: <FaReact />, description: 'React Framework' },
    // { name: 'Next.js', icon: <FaReact />, description: 'React Framework' },
  ];

  return (
    <div style={containerStyle}>
      <div style={toolsContainer}>
        <h1 style={titleStyle}>PREMIUM <span style={highlightStyle}>TOOLS</span></h1>
        <div style={gridContainer}>
          {tools.map((tool, index) => (
            <div key={index} style={toolCard}>
              <div style={iconStyle}>{tool.icon}</div>
              <h3 style={toolName}>{tool.name}</h3>
              <p style={toolDescription}>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  color: '#fff',
  backgroundColor: '#121212',
  padding: '2rem',
  justifyContent: 'center',
  gap: '2rem',
  fontFamily: 'Arial, sans-serif',
};



const toolsContainer = {
  flex: '2',
  textAlign: 'center',
  marginLeft: '470px',
  marginRight: '100px',
};

const titleStyle = {
  fontSize: '5.5rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  textAlign: 'left',
};

const highlightStyle = {
  color: '#444',
};

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '1.5rem',
};

const toolCard = {
  backgroundColor: '#1a1a1a',
  padding: '1.5rem',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
};

const iconStyle = {
  fontSize: '3rem',
  marginBottom: '1rem',
};

const toolName = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const toolDescription = {
  fontSize: '0.9rem',
  color: '#aaa',
};

export default PremiumTools;
