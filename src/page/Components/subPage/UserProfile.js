import React from "react";
import SideBarHeader from "../SideBar/SideBarHeader";
import UserHeader from "../Navbar/UserHeader";
import "./UserProfile.scss";


const UserProfile = () => {
   return(
      <div className="User-profile">
         <SideBarHeader />
         <div className="user-profile-body">
            <UserHeader />
            <div className="user-info">
               
            </div>
         </div>
      </div>
   )
}

export default UserProfile;