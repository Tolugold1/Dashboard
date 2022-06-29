import React from 'react';
import './home.style.scss';
import SideHeader from '../Components/SideBar/SideBarHeader';
import HeaderComponent from '../Components/HeaderComonent/HeaderComponent';
import Charts from '../Components/chart/charts'
import Features from '../Components/feature/features';
import { Row, Col } from 'reactstrap';

export class HomePage extends React.Component {

  render() {
    return (
      <div className="Home">
        <SideHeader />
        <div className='components'>
          <div className='head'>
            <HeaderComponent />
          </div>
          <Row className='H-chart'>
           <Col md='5' sm='12'> <Charts /></Col>
            <Col md='5' sm='12'><Features /></Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default HomePage