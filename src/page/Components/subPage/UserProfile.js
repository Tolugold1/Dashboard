import React from "react";
import SideBarHeader from "../SideBar/SideBarHeader";
import UserHeader from "../Navbar/UserHeader";
import "./UserProfile.scss";
import { Row, Col, Button, Container } from "reactstrap";

const UserProfile = () => {
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
         </div>
      </div>
   )
}

export default UserProfile;