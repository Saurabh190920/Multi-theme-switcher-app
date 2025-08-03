// src/components/Header.jsx
import React from "react";
import ThemeDropdown from "./ThemeDropdown";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MultiThemeApp</div>
      <ThemeDropdown />
    </header>
  );
};

export default Header;
