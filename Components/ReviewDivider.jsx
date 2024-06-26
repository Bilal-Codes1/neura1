import React from "react";
import Reviews from "../public/assets/reviews.png";
import Image from "next/image";

const ReviewDivider = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mt-12 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="10"
          className="mr-4 line-3"
          stroke="#1a68ff"
        >
          <line x1="0" y1="10" x2="25000" y2="0" />
        </svg>
        <span className="w-[10px] h-[10px] rounded-full bg-[#1a68ff] translate-y-1"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="10"
          className="ml-4 line-4"
          stroke="#1a68ff"
        >
          <line x1="0" y1="10" x2="25000" y2="0" />
        </svg>
      </div>
      <Image src={Reviews} width={450} className="text-center" />
      <div className="flex items-center justify-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="15"
          className="mr-4 line-1"
          stroke="#6d7cff"
        >
          <line x1="0" y1="10" x2="25000" y2="10" />
        </svg>
        <Image
          src="https://cdn.prod.website-files.com/663d3f8682c97f3fefb18f1a/663d3f8682c97f3fefb19604_Star%204.svg"
          width={15}
          height={15}
          className="star"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="15"
          className="ml-4 line-2"
          stroke="#6d7cff"
        >
          <line x1="0" y1="10" x2="25000" y2="10" />
        </svg>
      </div>
    </div>
  );
};

export default ReviewDivider;
