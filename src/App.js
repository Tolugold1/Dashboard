import './App.css';
import HomePage from './page/Components/Home/HomePage';
import Icons from "./page/Components/subPage/Icon";
import Tables from "./page/Components/subPage/Tables";
import Login from "./page/Components/subPage/Login";
import UserProfile from './page/Components/subPage/UserProfile';
import Maps from './page/Components/subPage/Map';
import Register from './page/Components/subPage/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Icons' element={<Icons />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Tables' element={<Tables />} />
        <Route path='/UserProfile' element={<UserProfile />} />
        <Route path='/Maps' element={<Maps />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
