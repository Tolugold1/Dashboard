import './App.css';
import Headroom from 'react-headroom';
import HeaderNav  from './Components/Navbar/HeaderNav';
import SideHeader from './Components/SideBar/SideBarHeader';
import { Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Headroom>
          <HeaderNav />
        </Headroom>
        <SideHeader />
    </BrowserRouter>
  );
}

export default App;
