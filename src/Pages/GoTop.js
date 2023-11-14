import { useEffect, useState } from "react";
import toparrow from '../assets/Icons/arrow-up.png'

const GoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button  class='fixed bottom-8 right-8 bg-pink-500 w-9 h-6 border-none '
        onClick={scrollToTop} className="back-to-top">
         <img src={toparrow} className="w-6 h-6 bg-pink-500 rounded-xl fixed right-6 bottom-9"/>
        </button>
      )}
    </>
  );
};

export default GoTop;
