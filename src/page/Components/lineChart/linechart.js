import React, { useState, useEffect } from 'react';
import './lineChart.styles.scss';
import { LineData } from './lineData';
import LineChart from './LineChartFile';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import $ from "jquery";

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

   const handleClick = () => {
      $("Button").on("click", function(){
         $(this).toggleClass("btn-active");
      });
   }

   return (
      <Card className='line-graph m-4'>
         <CardHeader className='card-header'>
            <div className='header-text'>
               <h6 className='clr uppercase '>Overview</h6>
               <h1 className='sales'>Sales value</h1>
            </div>
            <div className="M-W-btn">
               <Button className='A' onClick={handleClick}>Month</Button>
               <Button className='B' onClick={handleClick}>Week</Button>
            </div>
         </CardHeader>
         <CardBody>
            <LineChart LineData={lines}/>
         </CardBody>
      </Card>
   )
}
export default LineChartComponent;