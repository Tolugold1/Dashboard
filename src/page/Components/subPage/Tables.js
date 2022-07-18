import React, { useState } from 'react';
import { Button, Table, Card, CardHeader, CardBody, Row, Col, Tooltip, Progress, Media, UncontrolledTooltip, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import HeaderComponent from '../HeaderComonent/HeaderComponent';
import { IoEllipsisVertical } from 'react-icons/io5'
import SideHeader from '../SideBar/SideBarHeader';
import './table.style1.scss';


export const TableComponent = () => {

   const [fix, setFix] = useState(false);

   const fixedTop = () => {
      if (window.screenY >= 0) {
         setFix(true);
      } else {
         setFix(false);
      }
   }

   window.addEventListener("scroll", fixedTop);

   const [openTooltip, setOpenTooltip] = useState(false);
   const [dropDown1, setDropDown1] = useState(false);
   const [dropDown2, setDropDown2] = useState(false);
   const [dropDown3, setDropDown3] = useState(false);
   const [dropDown4, setDropDown4] = useState(false);

   const toggleTip1 = () => setOpenTooltip(!openTooltip);
   const drop1 = () => {
      setDropDown1(!dropDown1);
   };
   const drop2 = () => {
      setDropDown2(!dropDown2);
   };
   const drop3 = () => {
      setDropDown3(!dropDown3);
   };
   const drop4 = () => {
      setDropDown4(!dropDown4);
   };

   const [dropDown5, setDropDown5] = useState(false);
   const [dropDown6, setDropDown6] = useState(false);
   const [dropDown7, setDropDown7] = useState(false);
   const [dropDown8, setDropDown8] = useState(false);

   const drop5 = () => {
      setDropDown5(!dropDown5);
   };
   const drop6 = () => {
      setDropDown6(!dropDown6);
   };
   const drop7 = () => {
      setDropDown7(!dropDown7);
   };
   const drop8 = () => {
      setDropDown8(!dropDown8);
   };

   return (
      <>
      <div className='Table1'>
         <aside className={fix ? "side fixed" : "side"}>
            <SideHeader />
         </aside>
         <div className='Table-components1'>
            <HeaderComponent />
            <Row className='jumbotron d-flex'>
               <Col>
                  <Card className='Table-component m-4'>
                     <CardHeader className='header'>
                        <div className='fst'>
                           <h5>Page visits</h5>
                        </div>
                        <Button className='btn-small' id='see-all'>See all</Button>
                        <Tooltip placement='left' isOpen={openTooltip} target='see-all' toggle={toggleTip1}> click to see all</Tooltip>
                     </CardHeader>
                     <CardBody>
                        <Table>
                           <thead>
                              <tr>
                                 <th>PROJECT</th>
                                 <th>BUDGET</th>
                                 <th>STATUS</th>
                                 <th>USER</th>
                                 <th>COMPLETION</th>
                                 <th></th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' style={{cursor:"pointer"}} src={require("./table-avatar/bootstrap.jpeg")} alt='bootstrap img' />
                                       </a>
                                       <span>Tolugold design system</span>
                                    </Media>
                                 </th>
                                 <td>$4,444</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="ava" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava1" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava1">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava2"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava2">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava3"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava3">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>60%</h6><Progress animated value={ 12 * 5 } style={{color:"#5e72e4", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" className='1' isOpen={dropDown1} toggle={drop1}>
                                       <DropdownToggle className='dropdown-btn' onClick={drop1}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop1'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/angular.png")} alt='bootstrap img'/>
                                       </a>
                                       <span>Angular design system</span>
                                    </Media>
                                 </th>
                                 <td>$42,444</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot1'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="ava7" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava7">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava4" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava4">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava5"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava5">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava6"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava6">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>72%</h6><Progress animated value={ 12 * 6 } style={{color:"#172b4d", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" className='2' isOpen={dropDown2} toggle={drop2}>
                                       <DropdownToggle className='dropdown-btn' onClick={drop2}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop2'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/react.png")} alt='bootstrap img'/>
                                       </a>
                                       <span>React design system</span>
                                    </Media>
                                 </th>
                                 <td>$5,094</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot2'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="ava8" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava8">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava9" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava9">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava10"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava10">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava11"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava11">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>95%</h6><Progress animated value={ 95 } style={{color:"#fb6340", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" className='3' isOpen={dropDown3} toggle={drop3}>
                                       <DropdownToggle className='dropdown-btn' onClick={drop3}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop3'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/node.png")} alt='bootstrap img'/>
                                       </a>
                                       <span>Nodejs design system</span>
                                    </Media>
                                 </th>
                                 <td>$444</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot3'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="ava12" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava12">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava13" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava13">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava14"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava14">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="ava15"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="ava15">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>30%</h6><Progress animated value={ 6 * 5 } style={{color:"#f5365c", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" className='4' isOpen={dropDown4} toggle={drop4}>
                                       <DropdownToggle className='dropdown-btn' onClick={drop4}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop4'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </CardBody>
                  </Card>
               </Col>
            </Row>


            <Row className='jumbotron d-flex'>
               <Col>
                  <Card className='Table-component1 m-4'>
                     <CardHeader className='header1'>
                        <div className='fst'>
                           <h5>Page visits</h5>
                        </div>
                        <Button className='btn-small' id='see-all'>See all</Button>
                        <Tooltip placement='left' isOpen={openTooltip} target='see-all' toggle={toggleTip1}> click to see all</Tooltip>
                     </CardHeader>
                     <CardBody className='card-body'>
                        <Table responsive>
                           <thead>
                              <tr>
                                 <th>PROJECT</th>
                                 <th>BUDGET</th>
                                 <th>STATUS</th>
                                 <th>USER</th>
                                 <th>COMPLETION</th>
                                 <th></th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/bootstrap.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <span>Tolugold design system</span>
                                    </Media>
                                 </th>
                                 <td>$4,444</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="avaa1" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa1">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa2" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa2">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa3"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa3">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa4"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa4">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>60%</h6><Progress animated value={ 12 * 5 } style={{color:"#5e72e4", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" isOpen={dropDown5} toggle={drop5}>
                                       <DropdownToggle className='dropdown-btn1' onClick={drop5}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop1'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/angular.png")} alt='bootstrap img'/>
                                       </a>
                                       <span>Angular design system</span>
                                    </Media>
                                 </th>
                                 <td>$42,444</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot1'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="avaa5" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa5">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa6" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa6">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa7"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa7">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa8"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa8">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>72%</h6><Progress animated value={ 12 * 6 } style={{color:"#172b4d", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" isOpen={dropDown6} toggle={drop6}>
                                       <DropdownToggle className='dropdown-btn1' onClick={drop6}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop6'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/react.png")} alt='bootstrap img'/>
                                       </a>
                                       <span>React design system</span>
                                    </Media>
                                 </th>
                                 <td>$5,094</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot2'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="avaa9" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa9">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa10" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa10">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa11"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa11">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa12"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa12">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>95%</h6><Progress animated value={ 95 } style={{color:"#fb6340", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" isOpen={dropDown7} toggle={drop7}>
                                       <DropdownToggle className='dropdown-btn1' onClick={drop7}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop3'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                              <tr>
                                 <th>
                                    <Media className='media-media'>
                                       <a className='media-avatar' onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/node.png")} alt='bootstrap img'/>
                                       </a>
                                       <span>Nodejs design system</span>
                                    </Media>
                                 </th>
                                 <td>$444</td>
                                 <td>
                                    <Media className='media-media'>
                                       <div className='dot3'>
                                       </div>
                                       Pending
                                    </Media>
                                 </td>
                                 <td>
                                    <div className='table-avatar'>
                                       <a className='overlap' id="avaa13" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/IMG_20220515_094908_775.jpg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa13">
                                          Developer
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa14" onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image1.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa14">
                                          Reddington
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa15"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image2.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa15">
                                          Smith
                                       </UncontrolledTooltip>
                                       <a className='overlap' id="avaa16"  onClick={(e) => e.preventDefault()}>
                                          <img className='avatar' src={require("./table-avatar/image3.jpeg")} alt='bootstrap img'/>
                                       </a>
                                       <UncontrolledTooltip placement='top' target="avaa16">
                                          Alex
                                       </UncontrolledTooltip>
                                    </div>
                                 </td>
                                 <td>
                                    <h6>30%</h6><Progress animated value={ 6 * 5 } style={{color:"#f5365c", height:"4px"}}/>
                                 </td>
                                 <td>
                                    <Dropdown direction="down" isOpen={dropDown8} toggle={drop8}>
                                       <DropdownToggle className='dropdown-btn1' onClick={drop8}><IoEllipsisVertical style={{color:"#0480ad"}}/></DropdownToggle>
                                       <DropdownMenu className='Drop4'>
                                          <DropdownItem className='Drop'>Action</DropdownItem>
                                          <DropdownItem className='Drop'>Contact</DropdownItem>
                                          <DropdownItem className='Drop'>Developer</DropdownItem>
                                       </DropdownMenu>
                                    </Dropdown>
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </div>
      </div>
      </>
  )
}

export default TableComponent;