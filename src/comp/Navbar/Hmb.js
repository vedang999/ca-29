import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <button
      type='button'
      onClick={() => setShowNav(!showNav)}
      className='lg:hidden cursor-pointer'
    >
      <div
        className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
          showNav ? "rotate-45 mb-0  translate-y-[1px]" : "rotate-0 mb-1"
        } `}
      ></div>
      <div
        className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
          showNav ? "hidden mb-0" : "mb-1"
        } `}
      ></div>
      <div
        className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
          showNav ? "-rotate-45 mb-0" : "rotate-0"
        }`}
      ></div>
    </button>
  );
};

export default HamburgerMenu;
