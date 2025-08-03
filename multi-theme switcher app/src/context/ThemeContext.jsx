// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const themes = {
  THEME1: "theme1",
  THEME2: "theme2",
  THEME3: "theme3",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("appTheme") || themes.THEME1;
  });

  useEffect(() => {
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  const value = { theme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
