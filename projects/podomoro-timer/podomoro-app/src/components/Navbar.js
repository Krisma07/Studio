import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="navbar">
      <h1>🎯 Fokus Yuk! Pomodoro Timer</h1>
      <button onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};


export default Navbar;
