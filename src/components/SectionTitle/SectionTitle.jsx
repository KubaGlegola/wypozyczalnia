import React from 'react';
import './SectionTitle.scss';

const SectionTitle = props => {
  const { title } = props;
  return (
    <div className="sectionTitle" data-aos="zoom-out" data-aos-duration="1500">
      <h1 className="sectionTitle__title">{title}</h1>
    </div>
  );
};

export default SectionTitle;
