import React from 'react';
import Button from '../button/Button';
import './PrivacyPolicyBar.scss';
import { Link } from 'react-router-dom';

const PrivacyPolicyBar = props => {
  const acceptPrivacyPolicyHandler = () => {
    localStorage.setItem('isPrivacyPolicyAccepted', 'true');
    props.hidePrivacyPolicyBar();
  };
  return (
    <div className={`${props.className} privacyPolicyBar`}>
      <span
        className="privacyPolicyBar__closeIcon"
        onClick={props.hidePrivacyPolicyBar}
      ></span>
      Klikając „Zgadzam się”, wyrażasz zgodę na przechowywanie plików cookie na
      Twoim urządzeniu w celu poprawy nawigacji w witrynie, analizowania
      korzystania z witryny oraz lepszego dopasowania treści marketingowych.
      <div className="privacyPolicyBar__buttonsContainer">
        <Button
          className="button--secondary privacyPolicyBar__button"
          onClick={acceptPrivacyPolicyHandler}
        >
          zgadzam się
        </Button>

        <Link to="/politykaprywatnosci">
          <Button className="button--secondary privacyPolicyBar__button">
            Polityka prywatności
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicyBar;
