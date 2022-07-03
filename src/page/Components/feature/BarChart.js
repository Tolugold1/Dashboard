import React from 'react';
import { Charts as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ barData }) => {
  return (
    <Bar data={barData} options={{responsive: true, maintainAspectRatio: 'false'}}/>
  )
}

export default BarChart;