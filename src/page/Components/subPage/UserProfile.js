import React, { useState } from "react";
import SideBarHeader from "../SideBar/SideBarHeader";
import UserHeader from "../Navbar/UserHeader";
import "./UserProfile.scss";
import { Row, Col, Button, Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

const UserProfile = () => {

   const [ seeMore, setSeeMore ] = useState(false);

   const toggleSeeMore = () => {
      setSeeMore(!seeMore);
   }

   return(
      <div className="User-profile">
         <SideBarHeader />
         <div className="user-profile-body">
            <UserHeader />
            <div className="user-info">
               <Row>
                  <Col sm="12" md="6" lg="6" className="text">
                     <h1 className="greeting-text">Hello Tolu</h1>
                     <p className="text">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks.
                     </p>
                     <Button className="edit-profile-btn">Edit profile</Button>
                  </Col>
               </Row>
            </div>
            <div>
               <Row className="user-detail-card">
                  <Col xl={{size: 5, order: 1,}} lg={{size: 12}} className="user-col-card">
                     <Card className="userCard">
                        <CardBody className="userCardBody">
                           <div className="userCardHeader">
                              <Button className="connect-btn">Connect</Button>
                              <img src={require("./table-avatar/IMG_20220703_080504_010.jpg")} alts="..." className="userAvatar"></img>
                              <Button className="message-btn">Message</Button>
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
                              <div className="align-items-center"><h6 className="org-txt">Solution Manager - Creative Tim Officer</h6>
                              <h5>University of Computer Science</h5></div>
                           </div>
                           <hr/>
                           <div className="details">
                              <h4>Tolu Gold - Frontend web developer with reactstrap, Javascript, and reactjs. Also a C and python programmer. Studying at Ekiti state university.</h4>
                              <Button className="see-link" onClick={toggleSeeMore} >See More!</Button>
                              <h4 className={seeMore ? "seeMore" : "seeLess"}>Tolu Gold - Skillsets: C programming language, python programming language and web developer.</h4>
                           </div>
                        </CardBody>
                     </Card>
                  </Col>

                  <Col className="form-col-setting" lg={{ size: 12}} xl={{size: 7}}>
                     <Card className="form-setting">
                        <CardHeader className="form-setting-cardHeader">
                           <div className="header-title"><h3>My Account</h3></div>
                           <Button className="setting">Setting</Button>
                        </CardHeader>
                     </Card>
                  </Col>
               </Row>
            </div>
         </div>
      </div>
   )
}

export default UserProfile;