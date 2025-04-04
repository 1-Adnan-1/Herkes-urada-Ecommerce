import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Banner = () => {
  return (
    <div>
      <div className="w-full bg-[#F0F0F0]">
        <Splide
          options={{
            type: "fade",
            height: "100px",
            autoplay: true,
            interval: 5000,
            arrows: false,
            pagination: false,
            pauseOnHover: false,
            rewind: true,
          }}
        >
          <SplideSlide>
            <img
              src="/header-reklam-2.png"
              alt="h"
              className="w-full h-full object-contain"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="/reklam-2.jpeg"
              alt="bak"
              className="w-full h-full object-contain"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="/header-reklam-3.jpeg"
              alt="h"
              className="w-full h-full object-contain"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Banner;
