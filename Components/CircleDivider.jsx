"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CircleDivider = () => {
  useGSAP(() => {
    gsap.to(".line-3", {
      strokeDashoffset: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".line-3",
      },
    });
    gsap.to(".line-4", {
      strokeDashoffset: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".line-4",
      },
    });
  });

  return (
    <div className="flex items-center justify-center mt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="10"
        className="mr-4 line-3"
        stroke="#1a68ff"
      >
        <line x1="0" y1="10" x2="25000" y2="0" />
      </svg>
      <span className="w-[10px] h-[10px] rounded-full bg-[#1a68ff] translate-y-1"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="10"
        className="ml-4 line-4"
        stroke="#1a68ff"
      >
        <line x1="0" y1="10" x2="25000" y2="0" />
      </svg>
    </div>
  );
};

export default CircleDivider;
