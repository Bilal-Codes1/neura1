"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Questions = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.to(".questions", {
      width: "100%",
      duration: 2,
      delay: 1,
      borderRadius: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".questions",
        scrub: 3,
        start: "top bottom",
        end: "top top",
      },
    });
    gsap.utils.toArray(".question").forEach((question) => {
      gsap.from(question, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: question,
          start: "top 80%",
          end: "bottom 20%",
        },
      });
    });
  });
  return (
    <div className="questions w-screen mt-32 flex flex-col items-center">
      <div className="questions w-[80%] bg-gradient-to-b from-[#3444da11] to-[#050505] rounded-3xl flex flex-col items-center backdrop-blur-[100000px]">
        <h1 className="font-semibold text mt-24 text-center faq">
          Frequently asked questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-screen flex flex-col items-center mt-24 question"
        >
          <AccordionItem
            value="item-1"
            className="border border-[#6d7cff] rounded-xl mobile:w-[50%] w-[90%] px-6 py-2"
          >
            <AccordionTrigger className="md:text-xl text-md">
              What is neura1?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#b2b2c1]">
              AI recruitment engine to hire deeply vetted engineers fast.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="w-screen flex flex-col items-center mt-8 question"
        >
          <AccordionItem
            value="item-1"
            className="border border-[#6d7cff] rounded-xl mobile:w-[50%] w-[90%] px-6 py-2"
          >
            <AccordionTrigger className="md:text-xl text-md">
              How does the free trial work?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#b2b2c1]">
              For any neura1 Talent engagement, the 1st week is on us.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="w-screen flex flex-col items-center mt-8 question"
        >
          <AccordionItem
            value="item-1"
            className="border border-[#6d7cff] rounded-xl mobile:w-[50%] w-[90%] px-6 py-2"
          >
            <AccordionTrigger className="md:text-xl text-md">
              Will the engineer work directly for me?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#b2b2c1]">
              The engineer will be in direct contact with you and your company.
              You can also add the engineer to all of your company channels and
              softwares; however, you will not be directly hiring the engineer,
              you will be hiring neura1. Hiring neura1 builds a layer of
              abstraction for the legal, compliance, global pay, and benefits.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="w-screen flex flex-col items-center mt-8 question"
        >
          <AccordionItem
            value="item-1"
            className="border border-[#6d7cff] rounded-xl mobile:w-[50%] w-[90%] px-6 py-2"
          >
            <AccordionTrigger className="md:text-xl text-md">
              How does billing work?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#b2b2c1]">
              The engineer's hourly rate is used as reference to calculate the
              total fixed monthly pay (in other words, their salary). This is
              done through a stripe subscription and there are no additional
              costs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="w-screen flex flex-col items-center mt-8 question"
        >
          <AccordionItem
            value="item-1"
            className="border border-[#6d7cff] rounded-xl mobile:w-[50%] w-[90%] px-6 py-2"
          >
            <AccordionTrigger className="md:text-xl text-md">
              How are you different?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#b2b2c1]">
              We use AI to screen thousands of candidates each month and certify
              only the top 1%. Furthermore, the micro1 product suite allows you
              to hire full time talent, engage with managed engineering teams,
              or vet your own talent with our AI tool. All your hiring needs are
              in one place.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="w-screen flex flex-col items-center mt-8 question"
        >
          <AccordionItem
            value="item-1"
            className="border border-[#6d7cff] rounded-xl mobile:w-[50%] w-[90%] px-6 py-2"
          >
            <AccordionTrigger className="md:text-xl text-md">
              What technologies do micro1 developers know?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#b2b2c1]">
              React, Node.js, AWS, OpenAI, Web3, ML, and much more
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
