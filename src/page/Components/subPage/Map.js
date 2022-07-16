import React from "react";
import SideBarHeader from '../SideBar/SideBarHeader';
import HeaderComponent from "../HeaderComonent/HeaderComponent";
import { Card, CardBody } from "reactstrap";
import "./Maps.scss";
import GoogleMapReact from "google-map-react";



const Maps = () => {

   return(
      <div className="map-component">
         <SideBarHeader />
         <div className="map-body">
            <div className="head">
               <HeaderComponent />
            </div>
               <iframe className="map-card1" id="gmap_canvas" src="https://maps.google.com/maps?q=76W9+4V4,%20opposite%20king%20of%20Kings%20palace,Glory%20land,%20340284,%20Akure&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
         </div>
      </div>
   )
}

export default Maps;