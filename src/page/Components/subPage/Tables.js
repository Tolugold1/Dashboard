import React, { useState } from 'react';
import { Button, Table, Card, CardHeader, CardBody, Row, Col, Tooltip, Progress } from 'reactstrap';
import SideHeader from '../SideBar/SideBarHeader';
import './table.style.scss';


export const TableComponent = () => {

   const [openTooltip, setOpenTooltip] = useState(false)
   const [openTip, setOpenTip] = useState(false)

   const toggleTip1 = () => setOpenTooltip(!openTooltip);
   const toggleTip = () => setOpenTip(!openTip);

   return (
      <div className='Tables'>
         <SideHeader />
         <div>
            <Row className='jumbotron d-flex'>
               <Col>
                  <Card className='Table-component m-4'>
                     <CardHeader className='header'>
                        <div className='fst'>
                           <h5>Page visits</h5>
                        </div>
                        <Button className='btn-small' id='see-all'>See all</Button>
                        <Tooltip placement='left' isOpen={openTooltip} target='see-all' toggle={toggleTip1}> click to see all</Tooltip>
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
                        <Button className='btn-small' id="see-less">See all</Button>
                        <Tooltip placement='left' isOpen={openTip} target='see-less' toggle={toggleTip}> click to see less</Tooltip>
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
                                       <Progress value={60} color='danger' style={{height: '2px'}}/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th>Github</th>
                                    <td>1,480</td>
                                    <td className='bar'>70%
                                       <Progress value={70} color='success' style={{height: '2px'}}/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th>WhatsApp</th>
                                    <td>1,480</td>
                                    <td className='bar'>80%
                                       <Progress value={80} color='warning' style={{height: '2px'}}/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th>twitter</th>
                                    <td>1,480</td>
                                    <td className='bar'>95%
                                       <Progress value={95} color="primary" style={{height: '2px'}}/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th>Instagram</th>
                                    <td>1,480</td>
                                    <td className='bar'>
                                       <div className='table-data'>
                                          30%
                                          <Progress multi style={{height: '2px'}}>
                                             <Progress bar color='danger' value='2'/>
                                             <Progress bar color='warning' value='13'/>
                                             <Progress bar color='info' value='15' />
                                          </Progress>
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
         </div>
      </div>

  )
}

export default TableComponent;