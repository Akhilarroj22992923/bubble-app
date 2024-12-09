import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './App.css';

function App() {
  const bubbleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const [size, setSize] = useState(100); // Track bubble size
  // Spring for bubble position
  const [{ x, y }, set] = useSpring(() => ({
    x: window.innerWidth / 2 - 50, // Center horizontally
    y: window.innerHeight / 2 - 50, // Center vertically
    config: { mass: 1, tension: 180, friction: 12 },
  }));
  // Scroll listener to track scroll position and update bubble
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrollY(scrollTop);
    // Calculate the new bubble size and position based on scroll
    const newSize = Math.min(200, 100 + scrollTop / 10); // Increase bubble size as scroll increases
    const newY = window.innerHeight / 2 + scrollTop / 2 - 50; // Move bubble downward based on scroll
    set({ y: newY });
    setSize(newSize);
    // Bubble burst effect when reaching the footer
    if (scrollTop >= document.documentElement.scrollHeight - window.innerHeight) {
      set({ x: window.innerWidth / 2 - 50, y: window.innerHeight / 2 - 50, config: config.stiff });
    }
  };
  // Attach scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Start the floating animation when the component mounts
  useEffect(() => {
    startFloating();
  }, []);
  // Function to handle floating animation (for initial position)
  const startFloating = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    set({
      x: Math.random() * (windowWidth - 1000),
      y: Math.random() * (windowHeight - 1000),
      config: config.slow,
      onRest: startFloating, // Continue floating when resting
    });
  };
  // Handle mouse down to start dragging
  const handleMouseDown = () => {
    setIsDragging(true);
    set({ config: config.default }); // Make it more responsive during drag
  };
  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    startFloating(); // Return to floating after dragging
  };
  // Update bubble position based on mouse movement
  const handleMouseMove = (event) => {
    if (isDragging) {
      set({ x: event.clientX - 50, y: event.clientY - 50 });
    }
  };
  return (
    <div className="app" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <header className="header">
        <h1 className="logo">Bubble</h1>
        <nav className="nav">
          <h2>Latest</h2>
          <h2>Interventions</h2>
          <h2>About Rouser</h2>
        </nav>
      </header>
      {/* Bubble container */}
      <div className="bubble-container">
        <p><h1>Hello!..</h1>
        <h3>Welcome to Bubble's Website</h3></p>
        <animated.div
          ref={bubbleRef}
          className="bubble"
          style={{
            transform: x.to((x) => `translate(${x}px, ${y.get()}px)`),
            width: `${size}px`,
            height: `${size}px`,
            transition: 'all 0.2s ease-out', // Smooth transition on size change
          }}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => set({ config: config.stiff })}
          onMouseLeave={() => startFloating()}
        />
      </div>
      {/* About Section */}
      <div className="about">
        <p><h1>Bubble's activism makes people think.</h1>
          <h3>Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes to grab people's attention and make them stop and think.</h3>
        </p>
      </div>
      {/* Services Section */}
      <div className="services">
        <p><h1>Change only happens when everyone is paying attention.</h1><h3>This is the Services section with red background.</h3></p>
      </div>
      {/* Footer Section */}
      <div className="footer">
        <p><h1>Get noisy as hell, our lives depend on it.</h1>
        <h3>Bubble does what we do because political and business leaders are charging towards a world that can’t sustain human life.</h3>
        <br />
        <br />
        <h1>Lets Burst the Bubble</h1>
        </p>
      </div>
    </div>
  );
}
export default App;