// Home.js
import React from 'react';
// import React, { useEffect } from 'react';
import './h.css';

// import { useLocation } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Abam from '../Ab-aim/Ab-aim';
import Sponsers from '../Sponsers/sponsers';
import FAQs from '../FAQs/FAQs';
import Timeline from '../Timeline/Timeline';
import Respo from '../Respo/Respo';
import CountUpAnimation from '../Count/Count'

const Home = () => {


  return (
    <div className="home-container">
      <div id="main" className="full-screen-vanta"></div>
      <div className="content-container">
        <HeroSection />
        <CountUpAnimation />
        <Abam  />
        <Respo  />
        <Timeline  />
        <FAQs />
        <Sponsers />
      </div>
    </div>
  );
};

export default Home;
