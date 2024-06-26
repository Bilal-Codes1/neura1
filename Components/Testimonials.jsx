"use client";

import Image from "next/image";
import Client from "../public/assets/client-1.webp";
import Client2 from "../public/assets/client-2.webp";
import Client3 from "../public/assets/client-3.webp";
import Client4 from "../public/assets/client-4.webp";
import logo1 from "../public/assets/logo-1.png";
import logo2 from "../public/assets/logo-2.png";
import logo3 from "../public/assets/logo-3.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewDivider from "./ReviewDivider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    gsap.utils.toArray(".test-1").forEach((test) => {
      gsap.from(test, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: test,
          start: "top 80%",
          end: "bottom 20%",
        },
      });
    });
  });

  return (
    <>
      <div className="testimonials w-screen md:flex flex-col items-center relative before:w-[300px] before:h-[200px] before:bg-[#6d7cff] before:rounded-[80px] before:absolute before:top-40 before:-z-50 before:text-center before:blur-[200px] hidden">
        <h1 className="mt-32 mobile:text-5xl text-3xl text-center font-semibold">
          Hear from our clients
        </h1>
        <div className="grid grid-cols-2 mt-20 gap-14 mb-20">
          <div className="py-6 px-5 border border-[#383e80] rounded-2xl flex max-w-[500px] h-[390px] test-1 mt-10">
            <Image src={Client} className="w-10 h-10" />
            <div className="flex flex-col ml-4">
              <div className="flex">
                <span className="xs:text-[16px] text-[12px]">
                  Jack Burlinson
                </span>
                <span className="text-[#BBBBBBCC] ml-2">- Jan 2</span>
              </div>
              <div className="flex mt-1">
                <Image src={logo1} className="xs:w-6 xs:h-6 w-2 h-2" />
                <span className="text-[#BBBBBBCC] xs:ml-2 xs:text-[16px] whitespace-nowrap">
                  CEO & Co-Founder at StageGlass
                </span>
              </div>
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  This might sound insincere because of how extreme it is:
                  neura1 is the best service I have ever worked with.
                </span>
                <span>
                  The engineers on the platform are 1/3 of the price of local
                  talent and work harder, longer, and are more talented than
                  almost anybody we’ve ever worked with.
                </span>
                <span>
                  The platform is straight forward and I’ve been so thoroughly
                  impressed by them. I cannot recommend them enough.
                </span>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 border border-[#383e80] rounded-2xl flex max-w-[500px] h-[280px] test-1 mt-4">
            <Image src={Client2} className="w-10 h-10" />
            <div className="flex flex-col ml-4">
              <div className="flex">
                <span>Taher Hassonjee</span>
                <span className="text-[#BBBBBBCC] ml-2">Aug 10</span>
              </div>
              <div className="flex mt-1">
                <Image src={logo2} width={25} height={25} />
                <span className="text-[#BBBBBBCC] ml-2">CEO at DocDraft</span>
              </div>
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  neura1 has been a secret weapon for us in scaling our
                  business. I almost want to leave a bad review to keep others
                  away so that we can keep scourging the talent pool with
                  limited competition.
                </span>
                <span>
                  We've had an awesome experience working with Maria, Rahul and
                  the team.
                </span>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 border border-[#383e80] rounded-2xl flex max-w-[500px] h-[190px] test-1 mt-4">
            <Image src={Client3} className="w-10 h-10" />
            <div className="flex flex-col ml-4">
              <div className="flex">
                <span>Sean Rad</span>
              </div>
              <div className="flex mt-1">
                <span className="text-[#BBBBBBCC] ml-2">
                  Building something new
                </span>
              </div>
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  neura1 makes it insanely easy to vet and hire the best
                  engineers around the world. This has been game changing for
                  us.
                </span>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 border border-[#383e80] rounded-2xl flex max-w-[500px] h-[230px] test-1 -mt-12">
            <Image src={Client4} className="w-10 h-10 rounded-full" />
            <div className="flex flex-col ml-4">
              <div className="flex">
                <span>Farbood</span>
                <span className="text-[#BBBBBBCC] ml-2">@farbood - Oct27</span>
              </div>
              <div className="flex mt-1">
                <Image
                  src={logo3}
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <span className="text-[#BBBBBBCC] ml-2">CEO at DocDraft</span>
              </div>
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  Ali and the team have been so awesome to build with. We are
                  building and pushing builds together morning noon and night.
                  The time between me designing and them pushing a build is
                  usually same day.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen px-12 md:hidden block">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full py-6 px-5 border border-[#383e80] rounded-2xl flex mt-24 test-2">
            <div className="flex gap-3">
              <Image src={Client} className="w-10 h-10" />
              <div className="flex flex-col">
                <div className="flex">
                  <span>Jack Burlinson</span>
                  <span className="text-[#BBBBBBCC] ml-1">- Jan 2</span>
                </div>
                <div className="flex mt-1">
                  <Image src={logo1} className="xs:w-6 xs:h-6 w-6 h-6" />
                  <span className="text-[#BBBBBBCC] ml-1 xs:text-[16px] text-[12px]">
                    CEO & Co-Founder at StageGlass
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  This might sound insincere because of how extreme it is:
                  neura1 is the best service I have ever worked with.
                </span>
                <span>
                  The engineers on the platform are 1/3 of the price of local
                  talent and work harder, longer, and are more talented than
                  almost anybody we’ve ever worked with.
                </span>
                <span>
                  The platform is straight forward and I’ve been so thoroughly
                  impressed by them. I cannot recommend them enough.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full py-6 px-5 border border-[#383e80] rounded-2xl flex mt-24 test-2">
            <div className="flex gap-3">
              <Image src={Client2} className="w-10 h-10" />
              <div className="flex flex-col">
                <div className="flex">
                  <span>Taher Hassonjee</span>
                  <span className="text-[#BBBBBBCC] ml-2">Aug 10</span>
                </div>
                <div className="flex mt-1">
                  <Image src={logo2} width={25} height={25} />
                  <span className="text-[#BBBBBBCC] ml-1">CEO at DocDraft</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  neura1 has been a secret weapon for us in scaling our
                  business. I almost want to leave a bad review to keep others
                  away so that we can keep scourging the talent pool with
                  limited competition.
                </span>
                <span>
                  We've had an awesome experience working with Maria, Rahul and
                  the team.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full py-6 px-5 border border-[#383e80] rounded-2xl flex mt-24 test-2">
            <div className="flex gap-3">
              <Image src={Client3} className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <div className="flex">
                  <span>Sean Rad</span>
                </div>
                <div className="flex mt-1">
                  <span className="text-[#BBBBBBCC]">
                    Building something new
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  neura1 makes it insanely easy to vet and hire the best
                  engineers around the world. This has been game changing for
                  us.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full py-6 px-5 border border-[#383e80] rounded-2xl flex mt-24 test-2">
            <div className="flex gap-3">
              <Image src={Client4} className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <div className="flex">
                  <span>Farbood</span>
                  <span className="text-[#BBBBBBCC] ml-1">
                    @farbood - Oct 27
                  </span>
                </div>
                <div className="flex mt-1">
                  <Image src={logo3} width={25} height={25} />
                  <span className="text-[#BBBBBBCC] ml-1">
                    CEO of Briefcase
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="flex flex-col gap-4 mt-4 text-[#B2B2C1]">
                <span>
                  This might sound insincere because of how extreme iAli and the
                  team have been so awesome to build with. We are building and
                  pushing builds together morning noon and night. The time
                  between me designing and them pushing a build is usually same
                  day.
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <ReviewDivider />
    </>
  );
};

export default Testimonials;
