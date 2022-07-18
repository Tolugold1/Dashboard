import React from "react";
import { Navbar, Nav, Dropdown, DropdownItem, DropdownMenu, NavbarBrand, Container, Form, 
FormGroup, InputGroup, Input, DropdownToggle, Media } from "reactstrap";
import { RiSearchLine } from "react-icons/ri";
import "./UserHeader.styles.scss";

const UserHeader = () => {
   return (
      <div className="User-Header">
         <Navbar light >
            <Container className="header-container">
               <a className="nav-brand uppercase" href="/">User Profile</a>
               <Form className="mt-3" onClick={(e) => e.preventDefault()}>
                  <FormGroup className="form-group">
                     <InputGroup className="search-text-group">
                        <RiSearchLine className="search-icon"/>
                        <Input type="search" placeholder="search" className="search"></Input>
                     </InputGroup>
                  </FormGroup>
               </Form>

               <Nav className="profile" navbar>
                  <Dropdown className="drop-down">
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
                  </Dropdown>
               </Nav>
            </Container>

         </Navbar>
      </div>
   )
}

export default UserHeader;