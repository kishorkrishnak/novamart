"use client";
import getBannerData from "@/utils/getBannerData";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const incrementSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const decrementSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  const banners = getBannerData();
  return (
    <div
      style={{
        backgroundImage: `url('${banners[currentSlide]}')`,
      }}
      className="h-[35vh] md:h-[calc(100vh-80px)] bg-center bg-cover relative"
    >
      <div className="flex items-center justify-center gap-6 absolute bottom-[18%] md:bottom-[30%] left-0 right-0 ">
        <div
          onClick={decrementSlide}
          className="cursor-pointer border border-black p-1 px-2 md:p-3 md:px-4 hover:bg-[#4F5866] hover:text-white duration-300"
        >
          <HiArrowLeft />
        </div>
        <div
          onClick={incrementSlide}
          className="cursor-pointer border border-black p-1 px-2 md:p-3 md:px-4 hover:bg-[#4F5866] hover:text-white duration-300"
        >
          <HiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
