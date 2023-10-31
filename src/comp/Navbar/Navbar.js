import React from 'react';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

import './Nv.css';
import AxisLogo from './Axis.png'; // Path to the image file

const DefaultNavbar = () => {
  return (
    <div className="overflow-x-hidden relative w-full bg-black bg-cover bg-center">
      <div className="w-[1080px] mx-auto flex items-center justify-between py-3">
        <a href="/" className="cursor-pointer">
          <img loading="lazy" src={AxisLogo} width="125px" height="30px" alt="Axis Logo" />
        </a>

        <ul className="flex space-x-6 text-white font-mullish font-medium">
          <li>
          <HashLink smooth to="#abam">About</HashLink>
          </li>
          <li>
            <HashLink smooth to="#whats">What's in it?</HashLink>
          </li>
          {/* <li>
            <Link smooth to="#respo">Responsibilities</Link>
          </li>
          <li>
            <Link smooth to="#incentives">Incentives</Link>
          </li> */}
          <li>
            <HashLink smooth to="#timeline">Timeline</HashLink>
          </li>
          <li>
            <HashLink smooth to="#faqs">FAQs</HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact">Contact us!</HashLink>
          </li>
        </ul>

        <div className="flex space-x-6">
          <a href="/signin" className="py-3 px-5 font-mono text-white border-lightBlue border rounded-sm text-sm font-bold">Log in</a>
          <a href="/signup" className="py-3 px-3 font-mullish rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500 flex">
            Sign Up
            <svg viewBox="0 0 24 16" focusable="false" className="w-[17px] h-[16px] ml-3">
              <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
const SimplifiedNavbar = () => {
  return (
    <div className="overflow-x-hidden relative w-full bg-black bg-cover bg-center">
      <div className="w-[1080px] mx-auto flex items-center justify-between py-3">
        <a href="/" className="cursor-pointer flex space-x-6">
          <img loading="lazy" src={AxisLogo} width="125px" height="30px" alt="Axis Logo" />
          <a href="/" className="py-2 px-5 font-mono text-white border-lightBlue border rounded-sm text-sm font-bold">HOME</a>
        </a>
        <div className="flex space-x-6">
          <a href="/signin" className="py-3 px-5 font-mono text-white border-lightBlue border rounded-sm text-sm font-bold">Log in</a>
          <a href="/signup" className="py-3 px-3 font-mullish rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500 flex">
            Sign Up
            <svg viewBox="0 0 24 16" focusable="false" className="w-[17px] h-[16px] ml-3">
              <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export { DefaultNavbar, SimplifiedNavbar };