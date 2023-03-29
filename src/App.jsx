import { useEffect } from 'react';
import './global-styles/App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer className="App__footer" />
    </div>
  );
}

export default App;
