import React from 'react';
import './home.style.scss';
import SideHeader from '../Components/SideBar/SideBarHeader';
import HeaderComponent from '../Components/HeaderComonent/HeaderComponent';


export class HomePage extends React.Component {

  render() {
    return (
      <div className="Home">
        <SideHeader />
        <div className='components'>
          <div>
            <HeaderComponent />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage