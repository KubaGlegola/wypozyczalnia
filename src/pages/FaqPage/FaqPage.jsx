import React from 'react';
import Container from '../../components/container/Container';
import FaqItem from '../../components/Faq/FaqItem';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './FaqPage.scss';

const faqs = [
  {
    question: 'Czy każdy może wypożyczyć sprzęt?',
    answer:
      'Tak, sprzęt może wypożyczyć zarówno osoba prywatna jak i firma. Jedynym warunkiem jest pełnoletność osoby wynajmującej.',
  },
  {
    question: 'Czy można płacić kartą?',
    answer: 'Nie, możliwa jest tylko płatność gotówką',
  },
  {
    question: 'Jakie dokumenty wymagane są do wypożyczenia sprzętu?',
    answer: 'Dokument tożsamości ze zdjęciem.',
  },
  {
    question: 'Jak wysoka jest kaucja za wynajmowany sprzęt?',
    answer:
      'Kaucja ustalana jest indywidualnie dla każdej maszyny, aby uzyskać dokładną informację skontaktuj się z nami.',
  },
  {
    question: 'Czy oddanie ubrudzonego sprzętu wiążę się z utratą kaucji?',
    answer:
      'Maszyny są przeznaczone do pracy na budowie oraz w polu, w przypadku sladów normalnego użytkowania żadne opłaty nie zostaną naliczone. Dodatkowe opłaty zostaną naliczone w wyjątkowych sytuacjach gdy maszyna wymaga długotrwałego czyszczenia, np. usuwanie zaschniętego betonu.',
  },
  {
    question: 'Co w wypadku gdy sprzęt zostanie uszkodzony lub zniszczony?',
    answer:
      'W przypadku uszkodzenia szkody zostaną pokryte z kaucji, jeżeli sprzęt zostanie zniszczony całkowicie Wynajmujący będzie musiał pokryć koszty zakupu nowego sprzętu.',
  },
  {
    question: 'Czy dostarczacie sprzęt ogrodniczy do klienta?',
    answer:
      'Tak, Wypożyczalnia oferuje usługę transportu jednak jest ona odpłatna.',
  },
  {
    question: 'Co powinienem zrobić w przypadku awarii wypożyczonego sprzętu?',
    answer:
      'Niezwłocznie przerwać pracę i poinformować wypożyczalnie o zaistaniałym fakcie.',
  },
  {
    question:
      'Czy oferujecie szkolenia z zakresu obsługi i użytkowania wypożyczonego sprzętu?',
    answer:
      'Tak, wynajmujący zostanie poinformowany w jaki sposób używać maszyny w sposób bezpieczny.',
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
