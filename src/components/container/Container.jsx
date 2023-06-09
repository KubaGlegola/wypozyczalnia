import React from 'react';
import './Container.scss';

const Container = props => {
  return (
    <div
      className={`container ${props.className}`}
      data-aos={props['data-aos']}
      data-aos-duration={props['data-aos-duration']}
      data-aos-offset={props['data-aos-offset']}
    >
      {props.children}
    </div>
  );
};

export default Container;
