import React from 'react';
import './FaqItem.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const FaqItem = props => {
  const { question, answer } = props;
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerShown(!isAnswerShown);
  };

  return (
    <div
      className="faqItem"
      onClick={toggleAnswer}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="faqItem__question">
        {question}
        <MdKeyboardArrowDown
          className={
            isAnswerShown
              ? 'faqItem__arrow faqItem__arrow--rotate'
              : `faqItem__arrow`
          }
        />
      </div>
      <div
        className={
          isAnswerShown
            ? 'faqItem__answer faqItem__answer--visible'
            : 'faqItem__answer '
        }
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
