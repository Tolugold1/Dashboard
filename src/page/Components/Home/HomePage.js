import React from 'react';
import './home.style.scss';
import SideHeader from '../SideBar/SideBarHeader';
import HeaderComponent from '../HeaderComonent/HeaderComponent';
import Charts from '../chart/charts'
import Features from '../feature/features';
import { Row, Col } from 'reactstrap';
import LineChartComponent from '../lineChart/linechart';
import TableComponent from '../Table/table';
import { Outlet } from 'react-router-dom';

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
          <div className='line-chart'>
              <LineChartComponent />
          </div>
          <div>
            <TableComponent />
          </div>
        </div>

        <Outlet />
      </div>
    )
  }
}

export default HomePage