import React from 'react';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './RegulationsPage.scss';

const RegulationsPage = () => {
  return (
    <>
      <SectionTitle title="regulamin" />
      <Container className="regulations">
        <ol className="regulations__list">
          <li data-aos="fade-in" data-aos-duration="1000">
            <span className="regulations__listHeader">Warunki ogólne</span>
            <ol type="I" className="regulations__innerList">
              <li>
                Wypożyczalnia Sprzętu Budowlanego - Łukasz Kustra (dalej:
                Wypożyczalnia) wynajmuje sprzęt ogrodniczy na określony czas i
                warunki w oparciu o niniejszy regulamin.
              </li>
              <li>
                Wypożyczalnia zastrzega sobie prawo do odmowy wynajmu sprzętu
                bez podania przyczyny.
              </li>
              <li>
                Wynajem sprzętu jest możliwy tylko dla osób pełnoletnich z
                ważnym dowodem osobistym lub innym dokumentem potwierdzającym
                tożsamość.
              </li>
              <li>
                Wynajmujący ma obowiązek zapoznać się z warunkami wynajmu oraz
                postanowieniami regulaminu i przestrzegać ich w trakcie
                korzystania z wypożyczonego sprzętu.
              </li>
            </ol>
          </li>
          <li data-aos="fade-in" data-aos-duration="1000">
            <span className="regulations__listHeader">Rezerwacja</span>
            <ol type="I" className="regulations__innerList">
              <li>
                Rezerwacja sprzętu jest możliwa poprzez bezpośredni kontakt z
                Wypożyczalnią, telefonicznie lub mailowo.
              </li>
              <li>
                Rezerwacja jest ważna tylko po jej potwierdzeniu przez
                pracownika Wypożyczalni.
              </li>
              <li>
                W przypadku braku odbioru wypożyczonego sprzętu w wyznaczonym
                czasie, rezerwacja zostaje anulowana.
              </li>
            </ol>
          </li>
          <li data-aos="fade-in" data-aos-duration="1000">
            <span className="regulations__listHeader">Wynajem</span>
            <ol type="I" className="regulations__innerList">
              <li>
                Wynajem sprzętu odbywa się na podstawie umowy wynajmu, którą
                należy podpisać przed wyjściem z Wypożyczalni.
              </li>
              <li>
                Wynajem sprzętu jest możliwy na określony czas, który wynosi
                minimum 6 godzin.
              </li>
              <li>
                Wynajmujący ma obowiązek odebrać i zwrócić sprzęt osobiście w
                ustalonym terminie i miejscu.
              </li>
              <li>
                Wypożyczalnia zastrzega sobie prawo do pobrania kaucji w celu
                zabezpieczenia zwrotu wypożyczonego sprzętu w stanie
                nienaruszonym.
              </li>
              <li>
                Wynajmujący zobowiązany jest do używania wypożyczonego sprzętu
                zgodnie z jego przeznaczeniem oraz przestrzegania zasad
                bezpieczeństwa.
              </li>
              <li>
                W przypadku uszkodzenia sprzętu, wynajmujący zobowiązany jest do
                niezwłocznego powiadomienia Wypożyczalni.
              </li>
              <li>
                W przypadku przekroczenia terminu zwrotu sprzętu, wynajmujący
                ponosi odpowiedzialność finansową za każdy dzień zwłoki, według
                cennika obowiązującego w Wypożyczalni.
              </li>
              <li>
                Wypożyczalnia zastrzega sobie prawo do naliczenia opłaty za
                czyszczenie w przypadku zwrotu sprzętu w stanie nadmiernie
                zabrudzonym.
              </li>
            </ol>
          </li>
          <li data-aos="fade-in" data-aos-duration="1000">
            <span className="regulations__listHeader">Ceny</span>
            <ol type="I" className="regulations__innerList">
              <li>
                Ceny wynajmu sprzętu określone są w cenniku obowiązującym w
                Wypożyczalni i zależą od rodzaju i czasu wynajmu.
              </li>
              <li>
                W przypadku przekroczenia czasu wynajmu, wynajmujący zobowiązany
                jest do zapłaty opłaty za każdy dzień zwłoki, według cennika
                obowiązującego w Wypożyczalni.
              </li>
              <li>
                Wypożyczalnia zastrzega sobie prawo do zmiany ceny wynajmu
                sprzętu, jednak nie będzie ona dotyczyła umów aktualnie
                trwających.
              </li>
            </ol>
          </li>
          <li data-aos="fade-in" data-aos-duration="1000">
            <span className="regulations__listHeader">Transport</span>
            <ol type="I" className="regulations__innerList">
              <li>
                Wypożyczalnia oferuje usługę transportu wypożyczonego sprzętu.
              </li>
              <li>
                Opłatę za usługę transportu ponosi Wynajmujący. Opłata ustalana
                jest indywidualnie w zależności od odległości miejsca docelowego
                od wypożyczalni.
              </li>
              <li>
                Wypożyczalnia zastrzega sobie prawo do odmowy wykonania usługi
                transportu bez podania przyczyny.
              </li>
            </ol>
          </li>
          <li data-aos="fade-in" data-aos-duration="1000">
            <span className="regulations__listHeader">
              Odpowiedzialność i ubezpieczenie
            </span>
            <ol type="I" className="regulations__innerList">
              <li>
                Wynajmujący ponosi pełną odpowiedzialność za wypożyczony sprzęt
                od momentu jego odebrania do momentu zwrotu.
              </li>
              <li>
                W przypadku uszkodzenia lub zniszczenia wypożyczonego sprzętu,
                wynajmujący zobowiązany jest do pokrycia kosztów naprawy lub w
                przypadku niemożliwości naprawy, zakupu nowego sprzętu.
              </li>
              <li>
                Wypożyczalnia nie ponosi odpowiedzialności za ewentualne szkody
                wynikłe z użytkowania wypożyczonego sprzętu.
              </li>
              <li>
                Wypożyczalnia nie udostępnia ubezpieczenia na wypożyczony
                sprzęt.
              </li>
            </ol>
          </li>
          <li data-aos="fade-in" data-aos-duration="1000">
            <span className="regulations__listHeader">
              Postanowienia końcowe
            </span>
            <ol type="I" className="regulations__innerList">
              <li>
                Wszelkie spory wynikłe z umowy wynajmu sprzętu rozstrzygane będą
                przez sąd właściwy dla siedziby Wypożyczalni.
              </li>
              <li>
                Wypożyczalnia zastrzega sobie prawo do zmiany regulaminu bez
                wcześniejszego powiadomienia wynajmującego.
              </li>
              <li>
                Niniejszy regulamin wchodzi w życie z dniem jego ogłoszenia.
              </li>
              <li>
                Regulamin jest dostępny w siedzibie Wypożyczalni oraz na jej
                stronie internetowej.
              </li>
            </ol>
          </li>
        </ol>
      </Container>
    </>
  );
};

export default RegulationsPage;
