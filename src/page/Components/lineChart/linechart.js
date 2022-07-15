import React, { useState, useEffect } from 'react';
import './lineChart.styles.scss';
import { LineData } from './lineData';
import { LineData1 } from './lineData1';
import LineChart1 from './LineChartFile1';
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

   const [line1, setLine1] = useState({
      labels: LineData1.map((data1) => data1.month),
      datasets: [{
         label: "profit",
         data: LineData1.map((data1) => data1.profit),
         borderColor: '#5e72e4',
         pointBackgroundColor: '#5e72e4',
         tension: 0.3,
         pointRadius: 1,
         pointHitRadius: 1,
         backgroundColor: '#172b4d'
      }]
   })

   const [isOpen, setIsOpen] = useState();

   const toggle = () => {
      $("Button").on("click", function(){
         if ($(this).is(".A")) {
            setIsOpen(true);
         } else {
            setIsOpen(false);
         }
         if ($(this).is(".B")) {
            setIsOpen(false);
         } else {
            setIsOpen(true);
         }
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
               <Button className='A' onClick={toggle}>Month</Button>
               <Button className='B' onClick={toggle}>Week</Button>
            </div>
         </CardHeader>
         <CardBody>
            {isOpen ? <LineChart LineData={lines}/> : <LineChart1 LineData1={line1}/>}
         </CardBody>
      </Card>
   )
}
export default LineChartComponent;