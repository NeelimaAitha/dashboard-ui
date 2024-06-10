import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from '../styles/Chart.module.css';

const Chart = ({ data }) => {
<<<<<<< HEAD
  // Sample data for demonstration
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        data: [50, 60, 70, 65, 80],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <Line data={chartData} />
=======
  // Logic to render chart using 'data'

  return (
    <div className={styles.chart}>
      {/* Chart rendering logic */}
      <svg width="400" height="200">
        {/* Example chart content */}
        <rect x="0" y="0" width="100" height="50" fill="#ff6347" />
        <rect x="100" y="0" width="100" height="100" fill="#00bfff" />
        <rect x="200" y="0" width="100" height="150" fill="#32cd32" />
      </svg>
>>>>>>> 57abc440cbf7af639f74eed8b46d2c5fd4e9c305
    </div>
  );
};

export default Chart;
