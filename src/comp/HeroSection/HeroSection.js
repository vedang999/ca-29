// // HeroSection.js
// import React from 'react';
// import './h.css';

// const HeroSection = () => {
//   return (
//     // Your HeroSection JSX here
//     <div class="overflow-x-hidden relative w-full bg-black bg-cover bg-center">
//     <section className="relative">

//         <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto ">
//           <div className="space-y-8">
//             <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">Campus Ambassador Program</h1>
//             <div className="w-10 h-1 bg-greenLight"></div>
//             <p className="font-bold text-[18px] leading-7 text-white opacity-70">
//               Be our mascot for Axis, the largest technical fest by VNIT NAGPUR in your college and city, by joining
//               Axis's campus ambassador program.<br />
//               <br />
//               Seize the opportunity of becoming our face, gaining exposure, connecting with peers on your campus, pulling
//               off awesome events and workshops and, most importantly, prospering your professional skills.<br />
//               <br />
//               In the world of social media influencers, be a campus ambassador to show off your digital savviness! <br />
//               <br />
//             </p>
//             <button className="bg-lightBlue text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
//     hover:bg-lightBlue500 transition-all duration-200">Register Now!</button>
//           </div>
//           {/* right part */}
//           <img src="" alt="" className="float-right w-1/2" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;
// HeroSection.js
import React from 'react';
import './h.css';
// import React, { useEffect } from 'react';
import AxisLogo from './Axis.png'; // Path to the image file

const HeroSection = () => {

  // useEffect(() => {
  //     const script = document.createElement('script');
  //     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
  //     script.async = true;
  //     document.body.appendChild(script);

  //     const loadThreeJs = new Promise((resolve, reject) => {
  //       script.onload = () => resolve();
  //       script.onerror = (error) => reject(error);
  //     });

  //     loadThreeJs.then(() => {
  //       const script2 = document.createElement('script');
  //       script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
  //       script2.async = true;
  //       document.body.appendChild(script2);

  //       script2.onload = () => {
  //         window.VANTA.GLOBE({
  //           el: "#main1",
  //           mouseControls: true,
  //           touchControls: true,
  //           gyroControls: false,
  //           minHeight: 200.00,
  //           minWidth: 200.00,
  //           scale: 1.00,
  //           scaleMobile: 1.00,
  //           color: 0xff5858,
  //           color2: 0xff0000,
  //           backgroundColor: 0x11b
  //         });
  //       };
  //     }).catch((error) => {
  //       console.error('Error loading Three.js:', error);
  //     });

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  // },[]);

  return (
    // Your HeroSection JSX here
    // <div id="main1" className="full-screen-vanta1">
    <div class="overflow-x-hidden relative w-full">
      <section className="relative">
        <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto ">
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
