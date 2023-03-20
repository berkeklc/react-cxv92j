import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 680) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      {showButton && (
        <div className='back-to-top' onClick={handleClick}>
           <span className='askollekt'>
           <img className='mr-10' src={`${process.env.PUBLIC_URL}/assets/up.png`} alt="top" />
               back to top </span>
        </div>
      )}
    </>
  );
};

export default BackToTopButton;