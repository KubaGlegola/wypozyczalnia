import React, { useState } from 'react';
import Items from '../../components/Items/Items';
import ItemModal from '../../components/ItemModal/ItemModal';

const Offer = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalItem, setModalItem] = useState();

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const callbackFunction = childData => {
    setModalItem(childData);
    console.log(childData);
  };

  return (
    <>
      {modalIsShown && (
        <ItemModal hideModal={hideModalHandler} item={modalItem} />
      )}
      <Items showModal={showModalHandler} parentCallback={callbackFunction} />
    </>
  );
};

export default Offer;
