import React from 'react';
import "./aa.css";

const AboutAim = () => {
  return (
    
    <div className="relative font-inter antialiased" id="abam">
      <div className="overflow-x-hidden relative w-full bg-transparent p-0 sm:p-0 rounded-lg shadow-md sm:h-120">
        <section className="relative">
          <div className="aa-card-container lg:w-10/12 max-w-[1080px] flex flex-col sm:flex-row lg:flex-row justify-between items-center mx-auto ">
            <div className="w-full sm:w-90 pr-4 bg-transparent">
            <div className="space-y-2">
              <h2 className="font-mullish font-bold lg:text-[28px] text-[16px] leading-1.2 text-white text-center underline">About Us</h2>
              <div className="w-6 h-1 bg-greenLight mx-auto"></div>
              <p className="font-mullish lg:text-[18px] text-[14px] leading-7 text-white opacity-70">
                The Campus Ambassador Program is launched with the aim of developing an entrepreneurship culture in various colleges across the country. It is a Pan-India program for onboarding student ambassadors to not only publicize the events conducted by Axis VNIT but will also help them learn about entrepreneurship as a whole.
              </p>
            </div>
          </div>
              <br/>
          <div className="w-full sm:w-90 pl-4 bg-transparent">
            <div className="space-y-2">
              <h2 className="font-mullish font-bold lg:text-[28px] text-[16px] leading-1.2 text-white text-center underline">Our Aim</h2>
              <div className="w-6 h-1 bg-greenLight mx-auto"></div>
              <p className="font-mullish lg:text-[18px] text-[14px] leading-7 text-white opacity-70">
                We aim to develop future leaders with an entrepreneurial mindset, well versed in various skills, including leadership, marketing, public speaking, business development, etc. With free seats in various events and lecture series given by various founders and CEOs, CAP aims at an all-around development as an individual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutAim;
