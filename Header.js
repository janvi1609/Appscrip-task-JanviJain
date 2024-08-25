import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <nav className={styles.nav}>
        <ul>
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className={styles.userSection}>
        <img src="/images/user-icon.png" alt="User Icon" className={styles.userIcon} />
        <span>ENG</span>
      </div>
    </header>
  );
};

export default Header;
