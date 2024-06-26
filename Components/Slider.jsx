"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Bttn from "../public/assets/bttn.png";
import Deel from "../public/assets/deel.svg";
import DocCraft from "../public/assets/doccraft.svg";
import DoNotPay from "../public/assets/donotpay.svg";
import Filevine from "../public/assets/filevine.svg";
import Immutable from "../public/assets/immtable.png";
import Jump from "../public/assets/jump.png";
import LegalSoft from "../public/assets/legalsoft.png";
import Monday from "../public/assets/monday.png";
import MRC from "../public/assets/mrc.png";
import Ogara from "../public/assets/ogara.png";
import Runpod from "../public/assets/runpod.png";
import StageGlass from "../public/assets/stageglass.png";
import Teaching from "../public/assets/teaching.png";
import Webflow from "../public/assets/webflow.svg";
import ZS from "../public/assets/zs.png";

const Slider = () => {
  const brands = [
    { id: 1, src: Bttn },
    { id: 2, src: Deel },
    { id: 3, src: DocCraft },
    { id: 4, src: DoNotPay },
    { id: 5, src: Filevine },
    { id: 6, src: Immutable },
    { id: 7, src: Jump },
    { id: 8, src: LegalSoft },
    { id: 9, src: Monday },
    { id: 10, src: MRC },
    { id: 11, src: Runpod },
    { id: 12, src: StageGlass },
    { id: 13, src: Teaching },
    { id: 14, src: Webflow },
    { id: 15, src: ZS },
  ];
  return (
    <Marquee className="mt-16" speed={100}>
      {brands.map((brand) => (
        <Image
          src={brand.src}
          id={brand.id}
          className="w-[120px] h-[30px] px-5 border-r border-l border-r-[#6d7cff] border-l-[#6d7cff]"
        />
      ))}
    </Marquee>
  );
};

export default Slider;
