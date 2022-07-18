import React, { useState } from "react";
import { Navbar, Nav, Dropdown, DropdownItem, DropdownMenu, NavbarBrand, Container, Form, 
FormGroup, InputGroup, Input, DropdownToggle, Media } from "reactstrap";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaUser, FaCog, FaCalendarAlt, FaLifeRing, FaSignOutAlt } from "react-icons/fa";
import "./UserHeader.styles.scss";

const UserHeader = () => {

   const [ dropItDown, setDropItDown ] = useState(false);

   const toggle = () => setDropItDown( !dropItDown );
   return (
      <div className="User-Header">
         <Navbar light >
            <Container fluid className="header-container">
               <a className="nav-brand uppercase" href="/">User Profile</a>
               <Form className="mt-2 search-input">
                  <FormGroup className="form-group">
                     <InputGroup className="search-text-group">
                        <RiSearchLine className="search-icon"/>
                        <Input type="search" placeholder="search" className="search"></Input>
                     </InputGroup>
                  </FormGroup>
               </Form>

               <Nav className="profile" navbar>
                  <Dropdown className="drop-down" isOpen={ dropItDown } toggle={ toggle }>
                     <DropdownToggle nav>
                        <div className="media">
                           <div>
                              <img className="avatar" src="assets/IMG_20220515_094908_775.jpg" alt="..."/>
                           </div>
                           <div className="img-name">
                              <h6 className="uppercase">Tolugold</h6>
                           </div>
                        </div>
                     </DropdownToggle>
                     <DropdownMenu className="drop-menu" end>
                        <Link to="/"><DropdownItem className="drop-item"> Welcome!</DropdownItem></Link>
                        <Link to="#"><DropdownItem className="drop-item"> <FaUser className="drop-item-icon"/> <span> My profile </span></DropdownItem></Link>
                        <Link to="#"><DropdownItem className="drop-item"><FaCog className="drop-item-icon"/><span> Settings </span></DropdownItem></Link>
                        <Link to="#"><DropdownItem className="drop-item"><FaCalendarAlt className="drop-item-icon"/><span> Activity</span></DropdownItem></Link>
                        <Link to="#"><DropdownItem className="drop-item"><FaLifeRing className="drop-item-menu"/><span> support</span></DropdownItem></Link>
                        <DropdownItem className="drop-item" divider/>
                        <Link to="/"><DropdownItem className="drop-item" onClick={(e) => {e.preventDefault()}}><FaSignOutAlt className="drop-item-icon" /> <span> Logout</span></DropdownItem></Link>
                     </DropdownMenu>
                  </Dropdown>
               </Nav>
            </Container>
         </Navbar>
      </div>
   )
}

export default UserHeader;