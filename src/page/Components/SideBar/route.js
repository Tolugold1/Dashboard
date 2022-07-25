import HomePage from "../Home/HomePage";
import Login from "../subPage/Login";
import UserProfile from "../subPage/UserProfile";
import Tables from "../subPage/Tables";
import Register from "../subPage/Register";
import Maps from "../subPage/Map";
import Icons from "../subPage/Icon"
export const Paths = [
  {
    
    name: "Dashboard",
    icon: "fa fa-television",
    layout: "/HomePage",
  },
  {
    
    name: "Icons",
    icon: "fa fa-apple text-blue",
    layout: "/Icons",
  },
  {
    
    name: "Maps",
    icon: "fa fa-map-marker text-orange",
    layout: "/Maps",
  },
  {
    
    name: "User Profile",
    icon: "fa fa-user text-yellow",
    layout: "/UserProfile",
  },
  {
    
    name: "Tables",
    icon: "fa fa-list-ul text-red",
    layout: "/Tables",
  },
  {
    
    name: "Login",
    icon: "fa fa-space-shuttle text-info",
    layout: "/Login",
  },
  {
    
    name: "Register",
    icon: "fa fa-user-circle text-pink",
    layout: "/Register",
  },
];