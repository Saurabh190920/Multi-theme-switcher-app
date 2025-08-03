// src/components/ProductList.jsx
import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../context/ThemeContext";

import theme1Styles from "../styles/theme1.module.css";
import theme2Styles from "../styles/theme2.module.css";
import theme3Styles from "../styles/theme3.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  // Choose container and content styles based on theme
  let containerClassName;
  let contentClassName = "";

  if (theme === "theme1") {
    containerClassName = theme1Styles.container;
  } else if (theme === "theme2") {
    containerClassName = theme2Styles.container;
    contentClassName = theme2Styles.content;
  } else if (theme === "theme3") {
    containerClassName = theme3Styles.container;
  }

  // Determine button style based on theme
  const buttonClassName =
    theme === "theme1"
      ? theme1Styles.button
      : theme === "theme2"
      ? theme2Styles.button
      : theme3Styles.button;

  return (
    <main className={containerClassName}>
      {(theme === "theme1" || theme === "theme2") && (
        <aside className={theme === "theme1" ? theme1Styles.sidebar : theme2Styles.sidebar}>
          Sidebar menu
        </aside>
      )}

      <section className={contentClassName}>
        <h1>Our Products</h1>
        <p>This is a sample paragraph describing the products.</p>
        <button className={buttonClassName}>Buy Now</button>

        {theme === "theme3" ? (
          <div className={theme3Styles.grid}>
            {products.map((product) => (
              <Card key={product.id} product={product} theme={theme} />
            ))}
          </div>
        ) : (
          <ul className={theme === "theme1" ? theme1Styles.list : theme2Styles.list}>
            {products.map((product) => (
              <Card key={product.id} product={product} theme={theme} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default ProductList;
