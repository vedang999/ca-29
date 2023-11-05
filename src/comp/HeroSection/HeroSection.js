import React from 'react';
import './h.css';
import AxisLogo from './AXISSS WHITE.png';

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden relative w-full">
      <section className="relative">
        <div className="w-full max-w-[1080px] mx-auto sm:flex sm:flex-col lg:flex-row justify-between items-center">
          <div className="space-y-6 text-center sm:text-left">
            <h1 className="text-4xl font-serif sm:text-4xl font-bold text-[40px] text-white leading-tight">Campus Ambassador Program</h1>
            <div className="w-10 h-1 bg-green-300 mx-auto sm:mx-0"></div>
            <p className="text-base sm:text-xl text-white shadow-xl">
              Be our mascot for AXIS, the largest technical <br></br> fest by VNIT NAGPUR in your college and <br></br>city, by joining Axis's campus ambassador<br></br> program.<br /><br />
              Seize the opportunity of becoming our face,<br></br> gaining exposure, connecting with peers<br></br> on your campus, pulling off awesome events<br></br> and workshops and, most importantly,<br></br> prospering your professional skills.<br /><br />
              In the world of social media influencers,<br></br> be a campus ambassador to show off<br></br> your digital savviness!<br /><br />
            </p>
            <button className="bg-blue-600 text-white py-4 px-6 sm:py-2 sm:px-8 rounded-md font-semibold hover:bg-emerald-500 transition-all duration-200">
              Register Now!
            </button>
          </div>
          <img
            src={AxisLogo}
            alt="Axis Logo"
            className="w-full sm:w-1/2 mt-8 sm:mt-0 hidden sm:block" // Use "hidden sm:block" to hide on small screens
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
