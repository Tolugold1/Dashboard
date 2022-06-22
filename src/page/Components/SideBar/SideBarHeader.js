import React, {useState} from 'react';
import { Routes } from './route';
import { List, Button } from 'reactstrap';
import './sideBar.styles.scss';
import {Link} from 'react-router-dom';

const SideHeader = () => {
   const [sideIsOpen, setSideIsOpen] = useState(false);

   const showSideBar = () => setSideIsOpen(!sideIsOpen);
   return(
      <div className="sidebars">
         <div className="toggle-button">
               <Button className="bt" onClick={showSideBar}><span className="fa fa-bars text-blue"></span></Button>
         </div>
         <div className={sideIsOpen ? "nav-bar": "active"}>
            <List type='unstyled'>
               <div className='align-items-center justify-content-center mb-5 d-flex pt-4'>
                  <img src='./logo192.png' width='50px' height='50px'/><span><h2 style={{fontFamily: 'font-family: Open San', color: '#11cdef'}}>ToluGold</h2></span>
               </div>
               {Routes.map((route, key) => {
                  return(
                     <li key={key} className="sidebar-text">
                        <Link to='#'>
                           <span className={route.icon}></span>
                           {route.name}
                        </Link>
                     </li>
                  )
               })}
            </List>
         </div>
      </div>
   )
}

export default SideHeader;