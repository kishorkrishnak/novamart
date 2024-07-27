"use client";
import { getBannerData } from "@/utils/getBannerData";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const incrementSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  const decrementSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const banners = getBannerData();
  return (
    <div className="h-auto w-full overflow-hidden relative">
      <div
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        className="flex duration-1000 overflow-hidden transition-transform  items-center justify-center w-[400vw] h-[35vh] md:h-[calc(100vh-80px)] bg-center bg-cover relative overflow-hidden"
      >
        <div
          style={{
            backgroundImage: `url('${banners[0]}')`,
          }}
          className="w-full h-full bg-center bg-cover relative"
        ></div>

        <div
          style={{
            backgroundImage: `url('${banners[1]}')`,
          }}
          className="w-full h-full bg-center bg-cover relative"
        ></div>

        <div
          style={{
            backgroundImage: `url('${banners[2]}')`,
          }}
          className="w-full h-full bg-center bg-cover relative"
        ></div>

        <div
          style={{
            backgroundImage: `url('${banners[3]}')`,
          }}
          className=" w-full h-full bg-center bg-cover relative"
        ></div>
      </div>

      <div className="z-40 w-fit mx-auto flex items-center justify-center gap-6 absolute bottom-[18%] md:bottom-[27%] left-0 right-0 ">
        <div
          onClick={decrementSlide}
          className="rounded-md cursor-pointer border border-gray-500 p-1 px-2 md:p-3 md:px-4 hover:bg-[#4F5866] hover:text-white duration-300"
        >
          <HiArrowLeft />
        </div>
        <div
          onClick={incrementSlide}
          className="rounded-md cursor-pointer border border-gray-500 p-1 px-2 md:p-3 md:px-4 hover:bg-[#4F5866] hover:text-white duration-300"
        >
          <HiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
