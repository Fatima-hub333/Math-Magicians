/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styles from './navibar.module.css';

const Navbar = () => (
  <header className={styles.navcont}>
    <h2>Math Magicians</h2>
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <Link to="/" className={styles.navListLink}>Home</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/Math-Magicians/calculator" className={styles.navListLink}>Calculator</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/Math-Magicians/Quotes" className={styles.navListLink}>Quote</Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
