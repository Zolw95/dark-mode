import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  //const [darkMode, setDarkMode] = useState(false);
  const [value, switchMode] = useDarkMode(false, "darkmode");

  // if (value) {
  //   document.body.classList.add("dark-mode");
  // }

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={switchMode}
          className={value ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
