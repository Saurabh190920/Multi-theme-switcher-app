// src/pages/Contact.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import theme1Styles from "../styles/theme1.module.css";
import theme2Styles from "../styles/theme2.module.css";
import theme3Styles from "../styles/theme3.module.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "theme1" ? theme1Styles : theme === "theme2" ? theme2Styles : theme3Styles;

  return (
    <main className={styles.container}>
      <h1>Contact Us</h1>
      <address>
        Hipster Pte. Ltd.<br />
        # 01-04, 75 Ayer Rajah Crescent, 139953, Singapore<br />
        Email: hr@hipster-inc.com<br />
        Phone: +6582314107
      </address>
    </main>
  );
};

export default Contact;
