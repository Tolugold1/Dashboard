import React, {useState} from 'react';
import './feature.scss';
import { Data } from './data';
import BarChart from './BarChart';
import { Card, CardBody, CardHeader } from 'reactstrap';

const Features = () => {
   const [data, setData] = useState({
      labels: Data.map((data) => data.month),
      datasets: [{
         label: "order",
         data: Data.map((data) => data.order),
         backgroundColor: '#fb6340'
      }]
   })
   return (
      <div className='feature'>
         <div className='card-head'>
            <h6 className='uppercase'>Performance</h6>
            <h2>Total orders</h2>
         </div>
         <div className='chartBody'>
            <BarChart barData={data} size="300px" styles={{height: '300px', objectFit: "cover"}}/>
         </div>
      </div>
   )
}

export default Features