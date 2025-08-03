// src/App.jsx
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ThemeProvider, ThemeContext, themes } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import theme1Styles from "./styles/theme1.module.css";
import theme2Styles from "./styles/theme2.module.css";
import theme3Styles from "./styles/theme3.module.css";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  // Animation state on theme change
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 200);
    return () => clearTimeout(timeout);
  }, [theme]);

  const styles = theme === themes.THEME1 ? theme1Styles : theme === themes.THEME2 ? theme2Styles : theme3Styles;

  return (
    <div className={fade ? styles.fadeIn : styles.fadeOut}>
      <Header />
      <nav style={{ marginTop: 50, padding: "0 1rem", background: "var(--header-bg-color)" }}>
        <Link to="/" style={{ marginRight: 10, color: "var(--text-color)" }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10, color: "var(--text-color)" }}>About</Link>
        <Link to="/contact" style={{ marginRight: 10, color: "var(--text-color)" }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
