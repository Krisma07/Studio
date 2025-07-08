import React, { useState, useEffect } from 'react';

function Timer({ onSessionComplete = () => {}, darkMode }) {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 menit
  const [session, setSession] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      handleSessionComplete();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleSessionComplete = () => {
    onSessionComplete(session);
    setSession(session + 1);
    setTimeout(() => {
      setTimeLeft(1500);
      setIsRunning(true);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className={`timer-container ${darkMode ? 'dark' : 'light'}`}>
      <h2>Pomodoro Timer</h2>
      <div className="time-display">{formatTime(timeLeft)}</div>
      <div className="controls">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={() => {
          setIsRunning(false);
          setTimeLeft(1500);
        }}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
