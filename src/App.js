import './App.css';
import Headroom from 'react-headroom';
import HeaderNav  from './Components/Navbar/HeaderNav';

function App() {
  return (
    <div className="App">
      <Headroom>
        <HeaderNav />
      </Headroom>
    </div>
  );
}

export default App;
