import React from 'react';

const LanguageSwitcher = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="language-switcher">
      <select>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

