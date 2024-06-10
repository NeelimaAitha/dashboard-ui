import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Tasks</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className={styles.profile}>
        <img src="/avatar.png" alt="Avatar" />
        <span>John Doe</span>
      </div>
    </header>
  );
};

export default Header;
