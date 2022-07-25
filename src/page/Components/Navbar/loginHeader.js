import React, { useState } from 'react';
import { Navbar, Nav, NavbarToggler, NavItem, NavbarBrand, Collapse } from "reactstrap";
import "./login.styles.scss";
import { IoPlanetSharp } from "react-icons/io5";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoginHeader = () => {
   const [ open, setOpen ] = useState(false);

   const toggle = () => setOpen(!open);
   return (
      <div className='login-header'>
         <Navbar light expand="lg">
            <NavbarBrand href="" className='login-brand'>
               <img src={require("./logo192.png")} alts="..." width='50px' height='50px' className='brand-img'></img><span >Tolu Gold</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
               <Nav className="navigate" navbar>
                  <NavItem className='item'>
                     <IoPlanetSharp className='icon-margin'/>
                     <Link to='/' className="link-nav">Dashboard</Link>
                  </NavItem>
                  <NavItem className='item'>
                     <FaUserCircle className='icon-margin'/>
                     <Link to='/Register' className="link-nav">Register</Link>
                  </NavItem>
                  <NavItem className='item'>
                     <RiKey2Fill className='icon-margin'/>
                     <Link to='/Login' className="link-nav">Login</Link>
                  </NavItem>
                  <NavItem className='item'>
                     <FaUser className='icon-margin'/>
                     <Link to='/UserProfile' className="link-nav">Profile</Link>
                  </NavItem>
               </Nav>
            </Collapse>
         </Navbar>
      </div>
   )
}

export default LoginHeader;