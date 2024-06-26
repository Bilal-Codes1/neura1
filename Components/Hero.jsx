import React from "react";

const Hero = () => {
  return (
    <div className="px-6 w-screen h-[60vh] mobile:h-screen md:h-[110vh] flex flex-col justify-center items-center ">
      <h1 className="font-extrabold leading-none tracking-tight w-full text-center hero">
        <span className="gradient text-center block">
          AI recruitment engine
        </span>
        <span className="mobile:block text-center ml-2">
          to hire deeply vetted
        </span>
        <span className="mobile:block text-center ml-2">engineers fast</span>
      </h1>
      <span className="mobile:text-xl text-[16px] mt-9 text-[#B2B2C1] w-full text-center">
        We vet 20k+ engineers each month & match you with the top ones
        instantly. 1st week is free.
      </span>
      <button className="px-8 text-lg mt-8 mobile:mt-16 py-3 text-white button rounded-full font-semibold hover:bg-[#1f2343] hover:bg-gradient-to-t hover:from-transparent hover:to-transparent transition-all duration-300 ease-linear">
        Hire top engineers
      </button>
    </div>
  );
};

export default Hero;
