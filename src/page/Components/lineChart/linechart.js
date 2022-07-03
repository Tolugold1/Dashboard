import React, { useState } from 'react';
import './lineChart.styles.scss';
import { LineData } from './lineData';
import LineChart from './LineChartFile';
import { Card, CardBody, CardHeader } from 'reactstrap'

const LineChartComponent = () => {
   const [lines, setLines] = useState({
      labels: LineData.map((data) => data.month),
      datasets: [{
         label: 'profit',
         data: LineData.map((data) => data.profit),
         borderColor: '#5e72e4',
         pointBackgroundColor: '#5e72e4',
         tension: 0.3,
         pointRadius: 1.4,
         pointHitRadius: 2,
         backgroundColor: '#172b4d'
      }]
   })

   return (
      <Card className='line-graph m-4'>
         <CardHeader>
            <h6 className='clr uppercase '>Overview</h6>
            <h1 className='sales'>Sales value</h1>
         </CardHeader>
         <CardBody>
            <LineChart LineData={lines}/>
         </CardBody>
      </Card>
      )
}

export default LineChartComponent;