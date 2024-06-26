import React from "react";
import Banner from "../public/assets/featured.webp";
import Play from "../public/assets/play.webp";
import Business from "../public/assets/business.svg";
import Yahoo from "../public/assets/yahoo.svg";
import VentureBeat from "../public/assets/venturebeat.svg";
import Image from "next/image";
import Divider from "./Divider";
import Slider from "./Slider";
import CircleDivider from "./CircleDivider";

const Feature = () => {
  return (
    <div className="featured mt-8 mobile:mt-0 w-screen flex flex-col items-center brightness-[85%] relative before:bg-[#6d7cff] before:w-[400px] before:h-[200px] before:absolute before:bottom-64 before:text-center before:rounded-[1000px] before:z-[-99] before:blur-[250px]">
      <div className="max-w-[90%] md:py-6 md:px-6 mobile:px-4 mobile:py-4 py-2 px-2 rounded-[10px] bg bg-[#1f234385] flex justify-center items-center relative group transition-all duration-300 ease-linear">
        <Image
          src={Banner}
          className="max-w-full max-h-full brightness-[85%] group-hover:brightness-[100%] transition-all duration-300 ease-linear cursor-pointer"
        />
        <Image
          src={Play}
          className="play w-28 h-28 absolute text-center group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
        />
      </div>
      <span className="text-xl mt-24 mobile:mt-48">Feature on</span>
      <div className="flex items-center gap-6 mt-6">
        <Image src={Business} className="mobile:max-w-[300px] min-w-[60px]" />
        <Image src={Yahoo} className="mobile:max-w-[300px] min-w-[60px]" />
        <Image
          src={VentureBeat}
          className="mobile:max-w-[300px] min-w-[60px]"
        />
      </div>
      <Divider />
      <span className="mobile:text-xl text-lg mt-14 text-center ">
        Trusted by 100+ amazing companies
      </span>
      <Slider />
      <CircleDivider />
    </div>
  );
};

export default Feature;
