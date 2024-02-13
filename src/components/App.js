import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './Title/Title.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
