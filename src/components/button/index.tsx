import React, { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          <span className="text-black">Başa dön</span>
          <span className="text-black">
            <FaLongArrowAltUp />
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
