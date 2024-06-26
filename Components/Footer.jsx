import React from "react";
import Logo from "../public/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen grid md:grid-cols-5 grid-cols1 items-center px-16 py-20">
      <div className="-screen flex flex-col gap-4 items-center">
        <Image src={Logo} width={140} height={140} className="text-center" />
        <span className="text-[#6c6e79] text-md md:block hidden">
          Copyright © 2024 neura1 Inc. All rights reserved.
        </span>
      </div>
      <div className="md:ml-20 text-center md:mt-0 mt-6">
        <h1>Products</h1>
        <div className="flex flex-col mt-2 text-[#6c6e79]">
          <span>Talent</span>
          <span>gpt vetting</span>
          <span>microLab</span>
        </div>
      </div>
      <div className="md:ml-20 text-center md:mt-0 mt-4">
        <h1>For engineers</h1>
        <div className="flex flex-col mt-2 text-[#6c6e79]">
          <span>neura1 certified</span>
        </div>
      </div>
      <div className="md:ml-20 text-center md:mt-0 mt-4">
        <h1>Company</h1>
        <div className="flex flex-col mt-2 text-[#6c6e79]">
          <span>About us</span>
          <span>How it works</span>
          <span>microLab</span>
        </div>
      </div>
      <div className="md:ml-20 text-center md:mt-0 mt-4">
        <h1>Other</h1>
        <div className="flex flex-col mt-2 text-[#6c6e79]">
          <span>Sitemap</span>
          <span>Terms & conditions</span>
          <span>Privacy policy</span>
          <span>Cookie policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
