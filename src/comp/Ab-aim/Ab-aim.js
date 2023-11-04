import React from 'react';

const AboutAim = () => {
  return (
    <div className="font-inter antialiased" id="abam">
      <div className="p-4 lg:p-8 rounded-lg shadow-md">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl lg:text-3xl text-center text-white">About Us</h2>
                <div className="w-6 h-1 bg-green-500 mx-auto"></div>
                <p className="text-lg lg:text-xl text-center leading-6 lg:leading-7 text-white">
                  The Campus Ambassador Program is launched with the aim of developing an entrepreneurship culture in various colleges across the country. It is a Pan-India program for onboarding student ambassadors to not only publicize the events conducted by AXIS, VNIT Nagpur but also help them learn about entrepreneurship as a whole.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl lg:text-3xl text-center text-white">AIM</h2>
                <div className="w-6 h-1 bg-green-500 mx-auto"></div>
                <p className="text-lg lg:text-xl leading-6 text-center lg:leading-7 text-white">
                Our goal is to nurture future leaders with an entrepreneurial mindset and a diverse skill set, encompassing leadership, marketing, public speaking, and business development. Through free access to events and lectures by founders and CEOs, CAP fosters comprehensive personal growth.
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
