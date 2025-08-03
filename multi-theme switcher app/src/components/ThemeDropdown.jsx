// src/components/ThemeDropdown.jsx
import React, { useContext } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

const ThemeDropdown = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      style={{ padding: "6px", borderRadius: "4px" }}
      aria-label="Select Theme"
    >
      <option value={themes.THEME1}>Theme 1 (Minimalist)</option>
      <option value={themes.THEME2}>Theme 2 (Dark Sidebar)</option>
      <option value={themes.THEME3}>Theme 3 (Colorful Cards)</option>
    </select>
  );
};

export default ThemeDropdown;
