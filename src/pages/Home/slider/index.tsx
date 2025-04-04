import { useState, useEffect } from "react";
import TwoSlider from "./TwoSlider";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "../../public/s-image/s-1.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-2.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-3.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-4.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-5.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-6.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-7.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-8.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-9.jpeg",
      alt: ".",
    },
    {
      image: "../../public/s-image/s-10.jpeg",
      alt: ".",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-6 mt-10">
      <div className="relative overflow-hidden max-w-[750px] rounded-lg">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={slide.alt}
              className="w-[800px] h-[270px] flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &gt;
        </button>
        <div className="absolute bottom-2 right-2 px-2 py-0 bg-[#0006] text-white text-sm rounded-xl">
          {currentIndex + 1} / {slides.length}
        </div>
      </div>
      <TwoSlider />
    </div>
  );
};

export default Slider;
