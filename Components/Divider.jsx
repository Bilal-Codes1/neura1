"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Divider = () => {
  useGSAP(() => {
    gsap.to(".star", {
      rotate: 360,
      duration: 2,
      repeat: -1,
    });
    gsap.to(".line-1", {
      strokeDashoffset: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".line-1",
      },
    });
    gsap.to(".line-2", {
      strokeDashoffset: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".line-2",
      },
    });
  });

  return (
    <div className="flex items-center justify-center mt-16 px-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        className="mr-4 line-1"
        stroke="#6d7cff"
      >
        <line x1="0" y1="10" x2="25000" y2="10" />
      </svg>
      <Image
        src="https://cdn.prod.website-files.com/663d3f8682c97f3fefb18f1a/663d3f8682c97f3fefb19604_Star%204.svg"
        width={20}
        height={20}
        className="star"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        className="ml-4 line-2"
        stroke="#6d7cff"
      >
        <line x1="0" y1="10" x2="25000" y2="10" />
      </svg>
    </div>
  );
};

export default Divider;
