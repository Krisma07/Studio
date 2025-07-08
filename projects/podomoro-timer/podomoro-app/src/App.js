import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Motivation from './components/Motivation';
import Timer from './components/Timer';
import Schedule from './components/Schedule';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [completedSessions, setCompletedSessions] = useState([]); // ✅ Inisialisasi state

  const handleSessionComplete = () => {
    setCompletedSessions((prev) => [...prev, prev.length]);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);


  return (
    <div className="app-container">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="main-content">
        <div className="left-column">
          <Motivation darkMode={darkMode} />
          <Timer darkMode={darkMode} onSessionComplete={handleSessionComplete} />
        </div>
        <div className="right-column">
          <Schedule darkMode={darkMode} completedSessions={completedSessions} /> {/* ✅ Gunakan di sini */}
        </div>
      </div>
      <footer>
        © 2025 Pomodoro Productivity App — Dibuat oleh Kak Apri 💡✨
      </footer>
    </div>
  );
}

export default App;
