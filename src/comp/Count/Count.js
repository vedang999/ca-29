import React, { useState, useEffect } from 'react';
import "./aa.css";

const CountUpAnimation = ({ title, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < target) {
        setCount(count + 1);
      }
    }, 1);
    return () => clearInterval(timer);
  }, [count, target]);

  return (
    <div className="aa-card-container text-center mt-8">
      <h2 className="lg:text-[28px] text-[16px] font-bold text-white mb-4">{title}</h2>
      <div className="lg:text-[28px] text-[16px] font-bold" style={{ color: '#e6496d' }}>{count}+</div>
    </div>
  );
};

const CountUpGroup = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly">
      <CountUpAnimation title="COLLEGE AMBASSADORS" target={2563} />
      <CountUpAnimation title="INDIAN COLLEGES" target={1464} />
      <CountUpAnimation title="INTERNATIONAL COLLEGES" target={768} />
    </div>
  );
};

export default CountUpGroup;
