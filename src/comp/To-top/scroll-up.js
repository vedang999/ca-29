import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const calcScrollValue = () => {
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      let scrollProgress = document.getElementById('progress');
      if (pos > 100) {
        setIsVisible(true);
        scrollProgress.style.display = 'grid';
      } else {
        setIsVisible(false);
        scrollProgress.style.display = 'none';
      }
      scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.addEventListener('scroll', calcScrollValue);
    window.addEventListener('load', calcScrollValue);

    return () => {
      window.removeEventListener('scroll', calcScrollValue);
      window.removeEventListener('load', calcScrollValue);
    };
  }, []);

  return (
    <div id="progress" style={{ display: isVisible ? 'grid' : 'none', position: 'fixed', bottom: '20px', right: '10px', height: '70px', width: '70px', placeItems: 'center', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }} onClick={scrollToTop}>
      <span id="progress-value" style={{ display: 'block', height: 'calc(100% - 15px)', width: 'calc(100% - 15px)', backgroundColor: '#ffffff', borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: '35px', color: '#001a2e' }}>
        &#x1F815;
      </span>
    </div>
  );
};

export default ScrollToTop;
