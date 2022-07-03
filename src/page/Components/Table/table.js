import React from 'react';
import { Button, Table, Card, CardHeader, CardBody } from 'reactstrap';
import './table.style.scss';


export const TableComponent = () => {
   return (
      <Card className='Table-component m-4'>
         <CardHeader className='header'>
            <div className='fst'>
               <h5>Page visits</h5>
            </div>
            <Button className='btn-small'>See all</Button>
         </CardHeader>
         <CardBody>
            <Table>
               <thead>
                  <tr>
                     <th>PAGE NAME</th>
                     <th>VISITORS</th>
                     <th>UNIQUE USERS</th>
                     <th>BOUNCE RATE</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th>/Tolugold/</th>
                     <td>4,444</td>
                     <td>679</td>
                     <td>54.98%</td>
                  </tr>
                  <tr>
                     <th>/Tolugold/index.html</th>
                     <td>5,139</td>
                     <td>790</td>
                     <td>54.98%</td>
                  </tr>
                  <tr>
                     <th>/Tolugold/charts.html</th>
                     <td>4,980</td>
                     <td>447</td>
                     <td>89.99%</td>
                  </tr>
                  <tr>
                     <th>/Tolugold/tables.html</th>
                     <td>3,966</td>
                     <td>290</td>
                     <td>50.99%</td>
                  </tr>
                  <tr>
                     <th>/Tolugold/profile.html</th>
                     <td>4,789</td>
                     <td>340</td>
                     <td>73.11%</td>
                  </tr>
               </tbody>
            </Table>
         </CardBody>
      </Card>
  )
}

export default TableComponent;