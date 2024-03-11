import React from "react";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={hero}
            alt=""
            className="w-full object-cover object-center"
          />
        </div>

        <div className="absolute top-[15%] left-[25px]">
          <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#838320]">
            Discover cover your next adventure
          </h1>
          <p className="text-[10px] lg:text-2xl text-center text-2xl lg:mt-5 text-yellow-200 mt-2 font-semibold animate-bounce">
            Sale 20% Off On Everything
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
