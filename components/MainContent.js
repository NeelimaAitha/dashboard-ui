import React from 'react';
import styles from '../styles/MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2>Dashboard Overview</h2>
        <p>This is the main content area.</p>
      </section>
      <section className={styles.section}>
        <h2>Tasks</h2>
        <ul className={styles.taskList}>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
