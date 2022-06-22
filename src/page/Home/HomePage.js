import React from 'react';
import './home.style.scss';
import Headroom from 'react-headroom';
import SideHeader from '../Components/SideBar/SideBarHeader';
import HeaderComponent from '../Components/HeaderComonent/HeaderComponent';
import HeaderNav from '../Components/Navbar/HeaderNav';


export class HomePage extends React.Component {

  render() {
    return (
      <div className="Home">
        <SideHeader />
        <div className='components'>
          <Headroom>
            <HeaderNav />
          </Headroom>
          <div className='mt-5 hBoddy'>
            <HeaderComponent />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage