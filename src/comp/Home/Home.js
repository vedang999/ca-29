// Home.js
import React from 'react';
import './h.css';

import HeroSection from '../HeroSection/HeroSection';
import Sponsers from '../Sponsers/sponsers';
import FAQs from '../FAQs/FAQs';
import Timeline from '../Timeline/Timeline';
import Respo from '../Respo/Respo';
import Team from '../Team/team';
import Responsibilites from '../Responsibilities/res';

const Home = () => {

  return (
    <div className="home-container">
      <div id="main" className="full-screen-vanta"></div>
      <div className="content-container">
        <HeroSection />
        <Sponsers/>
        <Responsibilites/>
        <Team/>
        <Respo/>
        <FAQs />
        {/* <ReactSVG src={Illustration}  style={{ width: '300px', height: '300px' }} /> */}
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
