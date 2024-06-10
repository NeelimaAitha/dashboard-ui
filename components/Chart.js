import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from '../styles/Chart.module.css';

const Chart = ({ data }) => {
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
    </div>
  );
};

export default Chart;
