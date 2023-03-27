import React from 'react';
import Container from '../../components/container/Container';
import FaqItem from '../../components/Faq/FaqItem';
import './FaqPage.scss';

const faqs = [
  {
    question: 'Czy można płacić kartą?',
    answer: 'Nie, możliwa jest tylko płatność gotówką',
  },
  {
    question: 'Czy można płacić kartą?',
    answer: 'Nie, możliwa jest tylko płatność gotówką',
  },
  {
    question: 'Czy można płacić kartą?',
    answer: 'Nie, możliwa jest tylko płatność gotówką',
  },
  {
    question: 'Czy można płacić kartą?',
    answer: 'Nie, możliwa jest tylko płatność gotówką',
  },
];

const FaqPage = () => {
  return (
    <div className="faqPage">
      <Container className="faqPage__container">
        <h2 className="faqPage__title">Najczęściej zadawane pytania</h2>
        {faqs.map(faq => {
          return <FaqItem question={faq.question} answer={faq.answer} />;
        })}
      </Container>
    </div>
  );
};

export default FaqPage;
