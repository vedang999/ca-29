// Home.js
import React, { useEffect } from 'react';
import './h.css';

import { useLocation } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Sponsers from '../Sponsers/sponsers';
import FAQs from '../FAQs/FAQs';
import Timeline from '../Timeline/Timeline';
import Respo from '../Respo/Respo';
import { ReactSVG } from 'react-svg';
import Illustration from './ill.svg'; // Adjust the path according to your project structure


const Home = () => {


  return (
    <div className="home-container">
      <div id="main" className="full-screen-vanta"></div>
      <div className="content-container">
        <HeroSection />
        <Sponsers />
        <Respo/>
        <FAQs />
        {/* <ReactSVG src={Illustration}  style={{ width: '300px', height: '300px' }} /> */}
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
