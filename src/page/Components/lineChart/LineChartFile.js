import React from 'react';
import { Charts as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({LineData}) => {
   return (
      <Line data={LineData} />
   )
}

export default LineChart;