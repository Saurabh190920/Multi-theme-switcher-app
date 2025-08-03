// src/pages/About.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import theme1Styles from "../styles/theme1.module.css";
import theme2Styles from "../styles/theme2.module.css";
import theme3Styles from "../styles/theme3.module.css";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "theme1" ? theme1Styles : theme === "theme2" ? theme2Styles : theme3Styles;

  return (
    <main className={styles.container}>
      <h1>About Us</h1>
      <p>We are Hipster Pte. Ltd., creating awesome themes for your React apps!</p>
    </main>
  );
};

export default About;
