import React from 'react';
import { Nav, Navbar, Container, Form, FormGroup, Input, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, InputGroup, InputGroupText, Media } from 'reactstrap';
import './Navbar.styles.scss';


const HeaderNav = () => {
   return(
      <Navbar expand='md'>
         <Container fluid className='header d-flex'>
            
            <a href='/' className='d-none d-lg-block mr-auto mt-3 uppercase navbar-brand'>Dashboard</a>
            <Form className='align-items-center' onSubmit={(e) => {e.preventDefault()}}>
               <FormGroup>
                  <InputGroup className='input-text'>
                     <span className='fa fa-search'/>
                     <Input type="search" placeholder='Search' className='input-own-border'></Input>
                  </InputGroup>
               </FormGroup>
            </Form>
            <Nav navbar>
               <UncontrolledDropdown>
                  <DropdownToggle nav>
                     <Media className='align-items-center d-flex'>
                        <Media left middle href='#'>
                           <Media object src='assets/IMG_20220515_094908_775.jpg' className='avatar mr-3' alt='...'/>
                        </Media>
                        <Media body className='d-none d-lg-block'> 
                           Tolu Gold
                        </Media>
                     </Media>
                  </DropdownToggle>
                  <DropdownMenu style={{backgroundColor: 'lightwhite', paddingRight: '70px', borderRadius: '10px'}} end>
                     <DropdownItem header tag='h4'> Welcome! </DropdownItem>
                     <DropdownItem className='mb-3'><i className='fa fa-user ' /> <span> My profile</span></DropdownItem>
                     <DropdownItem className='mb-3'><i className='fa fa-cog' /> <span> Settings</span></DropdownItem>
                     <DropdownItem className='mb-3'><i className='fa fa-calendar' /> <span> Activity</span></DropdownItem>
                     <DropdownItem className='mb-3'><i className='fa fa-life-ring' /> <span> support</span></DropdownItem>
                     <DropdownItem divider/>
                     <DropdownItem href='#' className='mb-3'><i className='fa fa-sign-out' onClick={(e) => {e.preventDefault()}}/> <span> Logout</span></DropdownItem>
                  </DropdownMenu>
               </UncontrolledDropdown>
            </Nav>
         </Container>
      </Navbar>
   )
}

export default HeaderNav;