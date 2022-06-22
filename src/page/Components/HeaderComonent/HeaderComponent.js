import React, { Component } from 'react'
import { Card, CardBody, Row, Col, CardTitle } from 'reactstrap';
import * as faIcons from 'react-icons/fa';
import './HeaderComonent.style.scss';

export default class HeaderComponent extends Component {
  
  render() {
   return (
      <div className='HeaderComponent m-4'>
         {/* cards */}
         <Row>
            <Col xs='12' sm='12' md='6' lg='3' xl='3'>
               <Card>
                  <CardBody>
                     <Row>
                        <div className='col'>
                           <CardTitle className='uppercase' style={{color: 'grey', fontWeight: 'bold'}}>
                              Traffic
                           </CardTitle>
                           <span> <h2>350,897</h2></span>
                        </div>
                        <Col className='col-auto avatar' style={{backgroundColor: 'red'}}>
                           <faIcons.FaRegChartBar size="2em" color='white' style={{cursor: 'pointer', marginTop: '6px'}}/>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <div className='d-flex mt-4 icons'>
                              <faIcons.FaArrowUp  />3.48%
                           </div>
                        </Col>
                        <Col className='col-auto mt-4' style={{color: 'grey'}}>
                           Since last month
                        </Col>
                     </Row>
                  </CardBody>
               </Card>
            </Col>
            <Col xs='12' sm='12' md='6' lg='3' xl='3'>
               <Card>
                  <CardBody>
                     <Row>
                        <div className='col'>
                           <CardTitle className='uppercase' style={{color: 'grey', fontWeight: 'bold'}}>
                              New user
                           </CardTitle>
                           <span> <h2>2, 377</h2></span>
                        </div>
                        <Col className='col-auto avatar' style={{backgroundColor: 'red'}}>
                           <faIcons.FaChartPie size="2em" color='white' style={{cursor: 'pointer', margin: '6px auto'}}/>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <div className='d-flex mt-4 icon'>
                              <faIcons.FaArrowDown  />3.48%
                           </div>
                        </Col>
                        <Col className='col-auto mt-4' style={{color: 'grey'}}>
                           Since last week
                        </Col>
                     </Row>
                  </CardBody>
               </Card>
            </Col>
            <Col xs='12' sm='12' md='6' lg='3' xl='3'>
               <Card>
                  <CardBody>
                     <Row>
                        <div className='col'>
                           <CardTitle className='uppercase' style={{color: 'grey', fontWeight: 'bold'}}>
                              Sale
                           </CardTitle>
                           <span> <h2>1002</h2></span>
                        </div>
                        <Col className='col-auto avatar' style={{backgroundColor: 'red'}}>
                           <faIcons.FaUsers size="2em" color='white' style={{cursor: 'pointer', margin: '7px auto'}}/>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <div className='d-flex mt-4 icon'>
                              <faIcons.FaArrowDown  />1.48%
                           </div>
                        </Col>
                        <Col className='col-auto mt-4' style={{color: 'grey'}}>
                           Since yesterday
                        </Col>
                     </Row>
                  </CardBody>
               </Card>
            </Col>
            <Col xs='12' sm='12' md='6' lg='3' xl='3'>
               <Card>
                  <CardBody>
                     <Row>
                        <div className='col'>
                           <CardTitle className='uppercase' style={{color: 'grey', fontWeight: 'bold'}}>
                              performance
                           </CardTitle>
                           <span> <h2>50,88%</h2></span>
                        </div>
                        <Col className='col-auto avatar' style={{backgroundColor: 'red'}}>
                           <faIcons.FaPercent size="2em" color='white' style={{cursor: 'pointer', marginTop: '7px'}}/>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <div className='d-flex mt-4 icons'>
                              <faIcons.FaArrowUp  />45%
                           </div>
                        </Col>
                        <Col className='col-auto mt-4' style={{color: 'grey'}}>
                           Since last month
                        </Col>
                     </Row>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      </div>
   )
   }
}
