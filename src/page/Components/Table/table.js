import React from 'react';
import { Button, Table, Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import './table.style.scss';


export const TableComponent = () => {
   return (
      <Row className='jumbotron d-flex'>
         <Col>
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
         </Col>
         <Col>
            <Card className='Table-component1'>
               <CardHeader className='header'>
                  <div className='fst'>
                     <h5>Social traffic</h5>
                  </div>
                  <Button className='btn-small'>See all</Button>
               </CardHeader>
               <CardBody>
                  <div className='table-responsive-md'>
                     <Table className='table'>
                        <thead>
                           <tr>
                              <th className='uppercase'>Referral</th>
                              <th className='uppercase'>Visitors</th>
                              <th>welcome</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>Facebook</th>
                              <td>1,480</td>
                              <td className='bar'>60%
                                 <div className='progress' style={{height: '2px'}}>
                                    <div className='progress-bar bg-danger' style={{width: '60%'}}></div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th>Github</th>
                              <td>1,480</td>
                              <td className='bar'>70%
                                 <div className='progress' style={{height: '2px'}}>
                                    <div className='progress-bar bg-success' style={{width: '70%'}}></div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th>WhatsApp</th>
                              <td>1,480</td>
                              <td className='bar'>80%
                                 <div className='progress' style={{height: '2px'}}>
                                    <div className='progress-bar bg-warning' style={{width: '80%'}}></div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th>twitter</th>
                              <td>1,480</td>
                              <td className='bar'>75%
                                 <div className='progress' style={{height: '2px'}}>
                                    <div className='progress-bar bg-success' style={{width: '75%'}}></div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th>Instagram</th>
                              <td>1,480</td>
                              <td className='bar'>
                                 <div className='table-data'>
                                    30%
                                    <div className='progress' style={{height: '2px'}}>
                                       <div className='progress-bar bg-danger' style={{width: '1%'}}></div>
                                       <div className='progress-bar bg-warning' style={{width: '8%'}}></div>
                                       <div className='progress-bar bg-warning' style={{width: '17%'}}></div>
                                    </div>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>
               </CardBody>
            </Card>
         </Col>
      </Row>
  )
}

export default TableComponent;