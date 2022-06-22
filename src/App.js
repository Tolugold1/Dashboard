import './App.css';
import HomePage from './page/Home/HomePage';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
