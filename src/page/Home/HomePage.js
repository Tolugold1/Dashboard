import React from 'react';
import './home.style.scss';
import SideHeader from '../Components/SideBar/SideBarHeader';
import HeaderComponent from '../Components/HeaderComonent/HeaderComponent';
import Charts from '../Components/chart/charts'
import Features from '../Components/feature/features'

export class HomePage extends React.Component {

  render() {
    return (
      <div className="Home">
        <SideHeader />
        <div className='components'>
          <div className='head'>
            <HeaderComponent />
          </div>
          <div className='H-chart'>
            <Charts />
            <Features />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage