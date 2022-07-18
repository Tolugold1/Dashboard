import React, {useState} from 'react';
import { Nav, Navbar, Container, Form, FormGroup, Input, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, InputGroup } from 'reactstrap';
import { Link } from "react-router-dom"
import './Navbar.styles.scss';
import { MdNotificationsNone } from 'react-icons/md';



const HeaderNav = () => {

   return(

      <Navbar expand='md'>
         <Container fluid className='header d-flex'>
            <a href='/' className='d-none d-lg-block mr-auto mt-3 uppercase navbar-brand brand'>Dashboard</a>
            <Form className='align-items-center' onSubmit={(e) => {e.preventDefault()}}>
               <FormGroup>
                  <InputGroup className='input-text'>
                     <span className='fa fa-search'/>
                     <Input type="search" placeholder='Search' className='input-own-border'></Input>
                  </InputGroup>
               </FormGroup>
            </Form>
            <div className='notify avatar'>
               <span className='badge rounded-pill bg-danger position-absolute'>
                  1
               </span>
               <MdNotificationsNone size='2em' />
            </div>
            
            <Nav navbar>
               <UncontrolledDropdown>
                  <DropdownToggle nav>
                     <div className='align-items-center d-flex'>
                        <div>
                           <img src='assets/IMG_20220515_094908_775.jpg' className='avatar mr-3' alt='...'/>
                        </div>
                        <div className='ml-5 d-none d-lg-block'> 
                           Tolu Gold
                        </div>
                     </div>
                  </DropdownToggle>
                  <DropdownMenu style={{backgroundColor: 'lightwhite', paddingRight: '70px', borderRadius: '10px'}} end>
                     <DropdownItem header tag='h4'>Welcome!</DropdownItem>
                     <DropdownItem className='mb-3'><Link to="/UserProfile"><i className='fa fa-user ' /> <span> My profile </span></Link></DropdownItem>
                     <DropdownItem className='mb-3'><i className='fa fa-cog' /> <span> Settings </span></DropdownItem>
                     <DropdownItem className='mb-3'><i className='fa fa-calendar' /> <span> Activity</span></DropdownItem>
                     <DropdownItem className='mb-3'><i className='fa fa-life-ring' /> <span> support</span></DropdownItem>
                     <DropdownItem divider/>
                     <DropdownItem href='#' className='mb-3' onClick={(e) => {e.preventDefault()}}><i className='fa fa-sign-out'/> <span> Logout</span></DropdownItem>
                  </DropdownMenu>
               </UncontrolledDropdown>
            </Nav>
         </Container>
      </Navbar>
   )
}

export default HeaderNav;