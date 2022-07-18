import React, {useState} from 'react';
import {Paths}  from './route';
import './sideBar.styles.scss';
import {Link} from 'react-router-dom';
import { List, Button } from 'reactstrap';

const SideHeader = () => {

   return(
         
      <div className="sidebars">
         <div className="active">
            <List type='unstyled'>
               <div className='align-items-center justify-content-center mb-5 d-flex pt-4'>
                  <img src='./logo192.png' width='50px' height='50px' alt="..."/><span><h2 style={{fontFamily: 'font-family: Open San', color: '#11cdef'}}>ToluGold</h2></span>
               </div>
               {Paths.map((route, key) => {
                  return(
                     <li key={key} className="sidebar-text">
                        <Link to={route.layout}>
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