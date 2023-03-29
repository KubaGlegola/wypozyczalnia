import React from 'react';
import Container from '../../components/container/Container';
import FaqItem from '../../components/Faq/FaqItem';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
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
      <SectionTitle title="Pytania i odpowiedzi" />
      <Container className="faqPage__container">
        {faqs.map(faq => {
          return <FaqItem question={faq.question} answer={faq.answer} />;
        })}
      </Container>
    </div>
  );
};

export default FaqPage;
