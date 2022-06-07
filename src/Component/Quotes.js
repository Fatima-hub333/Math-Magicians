import React from 'react';
import styles from './quotes.module.css';

const Quotes = () => (
  <div className={styles.quotesBox}>
    <p className={styles.quotes}>
      Mathematics is the most beautiful and most powerful creation of the human spirit
      - Stefan Banach, Polish mathematician
    </p>
  </div>
);

export default Quotes;
