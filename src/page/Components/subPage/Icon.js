import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from '../HeaderComonent/HeaderComponent';
import SideBarHeader from "../SideBar/SideBarHeader";
import { Card, CardHeader, CardBody, Toast, ToastBody, Row, Col, CardDeck } from "reactstrap";
import "./Icons.scss";
import { Icons_Icons } from "./Icon-Icon";


const Icons = () => {
   return(
      <div className="Icons">
         <SideBarHeader />
         <div className="Icons-body">
            <div className="head">
               <HeaderComponent />
            </div>
            <Card className="card1">
               <CardHeader className="card-header">
                  <h2>Icons</h2>
               </CardHeader>
               <CardBody>
                  <Row className="icon-toast">
                     {Icons_Icons.map((icon, key) => {
                        return (
                           <Col sm='6' md='3' key={key}>
                              <Toast>
                                 <ToastBody className="toast_icon">
                                    {<icon.Icon/>}
                                    <h2>{icon.name}</h2>
                                 </ToastBody>
                              </Toast>
                           </Col>
                        )
                     })}
                  </Row>
               </CardBody>
            </Card>
         </div>
         <Outlet/>
      </div>
   )
}

export default Icons;