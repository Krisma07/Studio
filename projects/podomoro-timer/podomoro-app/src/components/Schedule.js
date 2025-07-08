import React from 'react';

const Schedule = ({ completedSessions = [], darkMode }) => {
  const sessions = [
    "25 menit pertama - Coding",
    "25 menit kedua - Coding",
    "25 menit ketiga - Coding",
    "25 menit keempat - Coding",
    "25 menit kelima - Coding",
    "25 menit keenam - Content Creation",
    "25 menit ketujuh - Belajar Marketing",
    "25 menit kedelapan - Evaluasi & Rehat"
  ];

  return (
    <div className={`schedule component-container ${darkMode ? 'dark' : 'light'}`}>
      <h3>📋 Jadwal Hari Ini</h3>
      <ul>
        {sessions.map((session, index) => (
          <li
            key={index}
            style={{
              textDecoration: completedSessions.includes(index) ? 'line-through' : 'none',
              color: completedSessions.includes(index) ? '#6c757d' : '#212529'
            }}
          >
            ✅ {session}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
