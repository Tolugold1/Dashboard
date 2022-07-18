import React, { useState } from 'react';
import './home.style.scss';
import SideHeader from '../SideBar/SideBarHeader';
import HeaderComponent from '../HeaderComonent/HeaderComponent';
import Charts from '../chart/charts'
import Features from '../feature/features';
import { Row, Col } from 'reactstrap';
import LineChartComponent from '../lineChart/linechart';
import TableComponent from '../Table/table';
import { Outlet } from 'react-router-dom';

const HomePage = () => {

  const [fix, setFix] = useState(false);

  const fixedTop = () => {
    if (window.screenY >= 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", fixedTop);

  return (
    <div className="Home">
      <aside className={fix ? "side fixed" : "side" }>
        <SideHeader />
      </aside>
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

export default HomePage