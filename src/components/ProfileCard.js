import React, { useState, useEffect } from 'react';
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import portpic from './../assest/portpic.jpg'
const ProfileCard = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 200; // Adjust based on your header's height
      const startSticky = 300; // Adjust based on when the card should start moving up
      const maxTranslate = 20; // Maximum translateY in pixels

      if (scrollPosition > startSticky && scrollPosition < headerHeight) {
        const translate = Math.min((scrollPosition - startSticky) / 5, maxTranslate);
        setTranslateY(-translate);
      } else if (scrollPosition >= headerHeight) {
        setTranslateY(-maxTranslate);
        setIsSticky(true);
      } else {
        setTranslateY(0);
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        ...cardStyle,
        transform: `translateY(${translateY}px)`,
        position: isSticky ? 'fixed' : 'absolute',
        top: isSticky ? '0' : 'initial',
      }}
    >
      <div style={linesContainer}></div>
      <div style={imageContainer}>
        <img
          src={portpic}
          alt="Profile"
          style={profileImage}
        />
      </div>
      <h2 style={nameStyle}>Arroju Akhil</h2>
      <p style={paragraphStyle}>
        A Software Engineer who has developed countless innovative solutions.
      </p>
      <div style={footerStyle}>
        <a href="mailto:example@gmail.com" style={iconStyle}>
          <FiMail />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FiGithub />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FiInstagram />
        </a>
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  color: '#fff',
  borderRadius: '10px',
  padding: '3rem',
  textAlign: 'center',
  width: '350px',
  boxShadow: '0px 5px 15px rgba(0,0,0,0.5)',
  zIndex: 1000, // Ensures the card is above other elements
  marginTop: '65px',
  marginLeft: '100px',
};

const imageContainer = {
  width: '250px',
  height: '250px',
  margin: '0 auto',
  borderRadius: '10%',
  overflow: 'hidden',
  border: '5px solid #FFA500',
  position: 'relative',
  zIndex: 1,
};

const profileImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const nameStyle = {
  marginTop: '1rem',
  fontSize: '1.7rem',
  fontWeight: 'bold',
  color: 'black',
};

const paragraphStyle = {
  textAlign: 'left',
  marginTop: '0.5rem',
  fontSize: '1.2rem',
  color: 'black',
  lineHeight: '1.5',
};

const linesContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, gold 50%, transparent 50%)',
  zIndex: 0,
  borderRadius: '10px',
  opacity: 0.4,
  pointerEvents: 'none',
};

const footerStyle = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
};

const iconStyle = {
  color: '#FFA500',
  fontSize: '1.5rem',
  textDecoration: 'none',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
};

export default ProfileCard;
