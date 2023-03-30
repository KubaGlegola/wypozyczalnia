import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import bosch from '/src/assets/producers/bosch.webp';
import cedrus from '/src/assets/producers/cedrus.webp';
import echo from '/src/assets/producers/echo.webp';
import karcher from '/src/assets/producers/karcher.webp';
import lumag from '/src/assets/producers/lumag.webp';
import makita from '/src/assets/producers/makita.webp';
import mastercut from '/src/assets/producers/mastercut.webp';
import mtd from '/src/assets/producers/mtd.webp';
import trotec from '/src/assets/producers/trotec.webp';
import weibang from '/src/assets/producers/weibang.webp';
import './producers.scss';
import Container from '../container/Container';

const producers = () => {
  return (
    <Container
      className="producers"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {/* <h2 className="producers__title">w naszej ofercie posiadamy sprzęt najlepszych firm na rynku</h2> */}
      <Carousel
        className="carousel"
        axis="horizontal"
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        swipeable={true}
        autoPlay={true}
        interval="2000"
        infiniteLoop={true}
        transitionTime="1000"
        centerMode={true}
        centerSlidePercentage="33"
      >
        <div className="carousel__item">
          <img src={bosch} alt="bosch" />
        </div>
        <div className="carousel__item">
          <img src={cedrus} alt="cedrus" />
        </div>
        <div className="carousel__item">
          <img src={echo} alt="echo" />
        </div>
        <div className="carousel__item">
          <img src={karcher} alt="karcher" />
        </div>
        <div className="carousel__item">
          <img src={makita} alt="makita" />
        </div>
        <div className="carousel__item">
          <img src={mastercut} alt="mastercut" />
        </div>
        <div className="carousel__item">
          <img src={lumag} alt="lumag" />
        </div>
        <div className="carousel__item">
          <img src={mtd} alt="mtd" />
        </div>
        <div className="carousel__item">
          <img src={trotec} alt="trotec" />
        </div>
        <div className="carousel__item">
          <img src={weibang} alt="weibang" />
        </div>
      </Carousel>
    </Container>
  );
};

export default producers;
