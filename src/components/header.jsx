import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { VscColorMode } from 'react-icons/vsc';
import '../App.css'; 
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`head ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="title">
        <i>Cyber World</i>
        <div className="mode" onClick={toggleDarkMode}>
          <VscColorMode />
        </div>
        <div className="menu">
          <HiMenuAlt4 />
        </div>
      </div>
    </div>
  );
}

export default Header;
