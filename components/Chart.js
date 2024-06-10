import React from 'react';
import styles from '../styles/Chart.module.css';

const Chart = ({ data }) => {
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
    </div>
  );
};

export default Chart;
