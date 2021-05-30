import './Home.css';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Modal } from '../main/Modal';
import { Carousel } from '3d-react-carousal';


const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position : relative;
  z-index : 0;
`;

export default function Home() {

  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />];

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    {console.log("hi"+ localStorage.getItem("name"))}

      <div className="home_main">
        <div className='slide_event'>
          <Carousel slides={slides} autoplay={true} interval={1600} />
        </div>
        <div className="home_title">
          REP1ER
      </div>
        <div className="btn_container">
          <Button className='btn01' onClick={openModal}>SELL SHIRTS</Button>
        </div>



      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
