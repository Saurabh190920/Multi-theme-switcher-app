// Improved Card.jsx for theme3 colorful cards
import React from 'react';
import styles from '../styles/theme3.module.css';

const Card = ({ product, theme }) => {
  if (theme === 'theme3') {
    return (
      <div className={styles.card} tabIndex={0} aria-label={`Product: ${product.title}, Price: $${product.price.toFixed(2)}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    );
  }

  return (
    <li>
      {product.title} - ${product.price.toFixed(2)}
    </li>
  );
};

export default Card;
