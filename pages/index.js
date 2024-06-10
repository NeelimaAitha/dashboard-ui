// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.contentWrapper}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
