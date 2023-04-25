import { useEffect, useState } from 'react';
import './global-styles/App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import PrivacyPolicyBar from './components/PrivacyPolicyBar/PrivacyPolicyBar';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isPrivacyPolicyBarVisible, setIsPrivacyPolicyBarVisible] = useState();

  const hidePrivacyPolicyBarHandler = () => {
    setIsPrivacyPolicyBarVisible(false);
  };

  useEffect(() => {
    AOS.init();
    localStorage.getItem('isPrivacyPolicyAccepted') === 'true'
      ? setIsPrivacyPolicyBarVisible(false)
      : setIsPrivacyPolicyBarVisible(true);
  }, []);

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer className="App__footer" />
      {isPrivacyPolicyBarVisible && (
        <PrivacyPolicyBar
          className="App__policyBar"
          hidePrivacyPolicyBar={hidePrivacyPolicyBarHandler}
        />
      )}
    </div>
  );
}

export default App;
