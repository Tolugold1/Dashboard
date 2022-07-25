import React, { useState } from "react";
import SideBarHeader from "../SideBar/SideBarHeader";
import UserHeader from "../Navbar/UserHeader";
import "./UserProfile.scss";
import { Row, Col, Button, Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Label, Input } from "reactstrap";
import { Country } from "./Countries";
import { NigeriaStates } from "./NigeriaStates";

const UserProfile = () => {

   const [ seeMore, setSeeMore ] = useState(false);

   const toggleSeeMore = () => {
      setSeeMore(!seeMore);
   }

   const message = () => {
      alert("Message support is disable for now");
   }
   const connect = () => {
      alert("This feature is currently not available");
   }

   return(
      <div className="User-profile">
         <aside className="side fixed">
            <SideBarHeader />
         </aside>
         <div className="user-profile-body">
            <UserHeader />
            <div className="user-info">
               <Row>
                  <Col sm="12" md="6" lg="6" className="text">
                     <h1 className="greeting-text">Hello Tolu</h1>
                     <p className="text">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks.
                     </p>
                     <Button className="edit-profile-btn" href="#settings" tag="a">Edit profile</Button>
                  </Col>
               </Row>
            </div>
            <div className="user-user">
               <Row className="user-detail-card">
                  <Col xl={{size: 5, order: 1,}} lg={{size: 12}} className="user-col-card">
                     <Card className="userCard">
                        <CardBody className="userCardBody">
                           <div className="userCardHeader">
                              <Button className="connect-btn" onClick={connect}>Connect</Button>
                              <img src={require("./table-avatar/IMG_20220703_080504_010.jpg")} alts="..." className="userAvatar"></img>
                              <Button className="message-btn" onClick={message}>Message</Button>
                           </div>

                           <div className="numbers">
                              <div className="num-text">
                                 <h3 className="super-txt">56</h3><h6 className="txt">Friends</h6>
                              </div>
                              <div className="num-text">
                                 <h3  className="super-txt">43</h3><h6 className="txt">Photos</h6>
                              </div>
                              <div className="num-text">
                                 <h3  className="super-txt">100</h3><h6 className="txt">Comments</h6>
                              </div>
                           </div>

                           <div className="userName">
                              <div className="name-txt">
                                 <h4>Tolu Gold, 22</h4>
                                 <h6> Lagos, Nigeria</h6>
                              </div>
                           </div>
                           <div className="organiztion">
                              <div className="align-items-center"><h6 className="org-txt">Solution Manager - Frontend Developer</h6>
                              <h5>University of Computer Science</h5></div>
                           </div>
                           <hr/>
                           <div className="details">
                              <h4>Tolu Gold - Frontend web developer with reactstrap, Javascript, and reactjs. Also a C and python programmer. Studying at Ekiti state university.</h4>
                              <Button className="see-link" onClick={toggleSeeMore} >See More!</Button>
                              <h4 className={seeMore ? "seeMore" : "seeLess"}>Tolu Gold - Skillsets: C programming language, python programming language and frontend developer.</h4>
                           </div>
                        </CardBody>
                     </Card>
                  </Col>

                  <Col className="form-col-setting" lg={{ size: 12}} xl={{size: 7}} id="settings">
                     <Card className="form-setting">
                        <CardHeader className="form-setting-cardHeader">
                           <div className="header-title"><h3>My Account</h3></div>
                           <Button className="setting">Setting</Button>
                        </CardHeader>
                        <CardBody className="form-setting-cardBody">
                           <CardTitle className="card-title uppercase"> User Information</CardTitle>
                           <Form className="setting-form mt-4">
                              <Row form>
                                 <Col lg="6" md="12">
                                    <FormGroup>
                                       <Label for="username" className="label-txt">Username</Label>
                                       <Input type="text" id="username" name="username" placeholder="Username" className="input-layer" />
                                    </FormGroup>
                                 </Col>
                                 <Col lg="6" md="12">
                                    <FormGroup>
                                       <Label for="email" className="label-txt">Email Address</Label>
                                       <Input type="text" id="email" name="username" placeholder="name@email.com" className="input-layer"/>
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row form  className="mt-3 ">
                                 <Col lg="6" md="12">
                                    <FormGroup>
                                       <Label for="firstname" className="label-txt">Firstname</Label>
                                       <Input type="text" id="firstname" name="username" placeholder="Firstname" className="input-layer" />
                                    </FormGroup>
                                 </Col>
                                 <Col lg="6" md="12">
                                    <FormGroup>
                                       <Label for="lastname" className="label-txt">Lastname</Label>
                                       <Input type="text" id="lastname" name="Lastname" placeholder="Lastname" className="input-layer"/>
                                    </FormGroup>
                                 </Col>
                              </Row>
                           </Form>
                           <hr className="rule"/>
                           <CardTitle className="card-title uppercase">Contact Information</CardTitle>
                           <Form className="setting-form mt-4">
                              <Row form>
                                 <Col>
                                    <FormGroup>
                                       <Label for="address" className="label-txt">Address</Label>
                                       <Input type="text" name="address" placeholder="Address"  className="input-layer"/>
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row form className="mt-3">
                                 <Col>
                                    <FormGroup>
                                       <Label for="city" className="label-txt">City</Label>
                                       <Input type="select" name="city" id="city" placeholder="City" className="input-layer">
                                       {NigeriaStates.map((states, key) => {
                                          return(
                                             <option key={key}>{states.state}</option>
                                          )
                                       })}
                                       </Input>
                                    </FormGroup>
                                 </Col>
                                 <Col>
                                    <FormGroup>
                                       <Label for="country" className="label-txt">Country</Label>
                                       <Input type="select" name="country" id="country" placeholder="Country" className="input-layer">
                                       {Country.map((country, key) => {
                                          return(
                                             <option key={key}>{country.country}</option>
                                          )
                                       })}
                                       </Input>
                                    </FormGroup>
                                 </Col>
                                 <Col>
                                    <Label for="postal" className="label-txt">Postal</Label>
                                    <Input type="number" name="postal" id="postal" placeholder="Postal code" className="input-layer"></Input>
                                 </Col>
                              </Row>
                           </Form>
                           <hr className="rule"/>
                           <CardTitle className="card-title uppercase">About Me</CardTitle>
                           <Form  className="setting-form" >
                              <FormGroup>
                                 <Row form>
                                    <Col lg='12' xl='12'>
                                       <Label for="aboutme" className="label-txt">About Me</Label>
                                       <Input type="textarea" name="aboutme" className="input-layer " placeholder="Tell us about yourself"/> 
                                    </Col>
                                 </Row>
                              </FormGroup>
                           </Form>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </div>
      </div>
   )
}

export default UserProfile;