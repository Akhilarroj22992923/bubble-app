import React, { useRef } from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Stats from './components/Stats';
import RecentProjects from './components/RecentProjects';
import ExperienceSection from './components/ExperienceSection';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/Theme';
import PremiumTools from './components/PremiumTools';
import Thoughts from './components/Thoughts';

const App = () => {
  const sections = {
    home: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    tools: useRef(null),
    thoughts: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    if (sections[sectionId] && sections[sectionId].current) {
      sections[sectionId].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '2rem' }}>
        <Header scrollToSection={scrollToSection} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <ProfileCard />
          <Stats />
        </div>
        <div ref={sections.projects}>
          <RecentProjects />
        </div>
        <div ref={sections.experience}>
          <ExperienceSection />
        </div>
        <div ref={sections.tools}>
          <PremiumTools />
        </div>
        <div ref={sections.thoughts}>
          <Thoughts />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
