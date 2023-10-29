
import './h.css';
import React from 'react';
import AxisLogo from './Axis.png'; // Path to the image file

const HeroSection = () => {
  return (
    // Your HeroSection JSX here
    // <div id="main1" className="full-screen-vanta1">
    <div class="overflow-x-hidden relative w-full">
      <section className="relative">
        <div className="w-full max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto ">
          <div className="space-y-8">
            <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">Campus Ambassador Program</h1>
            <div className="w-10 h-1 bg-greenLight"></div>
            <p className="font-bold text-[18px] leading-7 text-white opacity-70">
              Be our mascot for Axis, the largest technical fest by VNIT NAGPUR in your college and city, by joining
              Axis's campus ambassador program.<br />
              <br />
              Seize the opportunity of becoming our face, gaining exposure, connecting with peers on your campus, pulling
              off awesome events and workshops and, most importantly, prospering your professional skills.<br />
              <br />
              In the world of social media influencers, be a campus ambassador to show off your digital savviness! <br />
              <br />
            </p>
            {/* <button className="bg-lightBlue text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
    hover:bg-lightBlue500 transition-all duration-200">Register Now!</button> */}
    <button className =" bg-red-600 text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
         hover:bg-emerald-500 transition-all duration-200">Register Now!</button>
          </div>
          {/* right part */}
          <img src={AxisLogo} alt="" className="float-right w-1/2" />
        </div>
      </section>
    </div>
    // </div>
  );
};

export default HeroSection;
