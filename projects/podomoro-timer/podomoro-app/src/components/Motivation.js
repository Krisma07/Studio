import React from 'react';

const Motivation = ({ darkMode }) => {
  return (
    <div className={`motivation component-container ${darkMode ? 'dark' : 'light'}`}>
      <p>🚀 Target Hari Ini: Menyelesaikan 3 jam belajar coding!</p>
      <p>💡 Ingat: Konsistensi lebih penting dari kesempurnaan.</p>
    </div>
  );
};

export default Motivation;
