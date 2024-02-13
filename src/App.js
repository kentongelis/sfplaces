import { Outlet } from 'react-router-dom'

import './App.css';
import Title from './Title.js';
import POPOSList from './POPOSList.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
