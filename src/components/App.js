import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './Title/Title.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <main className="App">
      <Title />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
