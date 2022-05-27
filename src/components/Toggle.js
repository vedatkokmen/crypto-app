import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle = () => {
  return (
    <DarkModeToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
      size={60}
    />
  );
};

export default Toggle;
