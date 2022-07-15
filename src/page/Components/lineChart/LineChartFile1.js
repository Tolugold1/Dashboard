import React from 'react';
import { Charts as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart1 = ({LineData1}) => {
   return (
      <Line data={LineData1} />
   )
}

export default LineChart1;