import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from '../HeaderComonent/HeaderComponent';
import SideBarHeader from "../SideBar/SideBarHeader";
import { Card, CardHeader, CardBody, Toast, ToastBody, Row, Col, Container } from "reactstrap";
import "./Icons.scss";
import { Icons_Icons } from "./Icon-Icon";


const Icons = () => {

   const [fix, setFix] = useState(false);

   const fixedTop = () => {
      if (window.screenY >= 0) {
         setFix(true);
      } else {
         setFix(false);
      }
   }

  window.addEventListener("scroll", fixedTop);

  
   return(
      <Container fluid className="Icons">
         <aside className={fix ? "side fixed" : "side"}>
            <SideBarHeader />
         </aside>
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
                              <Toast className="jumbotron toast-head mt-5">
                                 <ToastBody className="toast_icon">
                                    <div className="ts">
                                       {<icon.Icon size={40}/>}
                                       <h2 className="icon-name">{icon.name}</h2>
                                    </div>
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
      </Container>
   )
}

export default Icons;