import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.menu}>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">Calendar</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
