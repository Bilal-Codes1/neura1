"use client";

import Image from "next/image";
import Logo from "../public/assets/logo.png";
import Menu from "../public/assets/menu.svg";
import Cancel from "../public/assets/cancel.svg";
import { Link } from "react-scroll";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      {/* for desktop */}
      <header className="w-screen h-[13vh] justify-between items-center border-b border-b-border py-6 md:px-16 z-50 md:flex hidden sticky top-0 bg-background">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" width={150} height={150} />
          <NavigationMenu>
            <NavigationMenuList className="mx-4">
              <NavigationMenuItem className="py-2 px-4 text-white text-[13px] nav-item rounded-lg cursor-pointer">
                <NavigationMenuTrigger>Prodcuts</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[500px] h-[300px] bg-background text-white border border-[#383e80] rounded-3xl">
                  <NavigationMenuLink className="grid grid-rows-3 px-6 py-6 gap-8">
                    <div className="flex gap-3 items-center link py-1 rounded-xl">
                      <Image
                        src="https://cdn.prod.website-files.com/663d3f8682c97f3fefb18f1a/663d3f8682c97f3fefb197f8_Talent.svg"
                        alt="person"
                        width={60}
                        height={60}
                      />
                      <div className="flex flex-col">
                        <h3 className="text-xl">Talent</h3>
                        <span className="text-lg text-[#B2B2C1]">
                          Hire world-class engineers for your core team
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center link py-1 rounded-xl">
                      <Image
                        src="https://cdn.prod.website-files.com/663d3f8682c97f3fefb18f1a/663d3f8682c97f3fefb197b6_Talent.svg"
                        alt="person"
                        width={60}
                        height={60}
                      />
                      <div className="flex flex-col">
                        <h3 className="text-xl">gpt-vetting</h3>
                        <span className="text-lg text-[#B2B2C1]">
                          The first ever AI interviewer
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center link py-1 rounded-xl">
                      <Image
                        src="https://cdn.prod.website-files.com/663d3f8682c97f3fefb18f1a/663d3f8682c97f3fefb197f5_Talent.svg"
                        alt="person"
                        width={60}
                        height={60}
                      />
                      <div className="flex flex-col">
                        <h3 className="text-xl">microLab</h3>
                        <span className="text-lg text-[#B2B2C1]">
                          A managed extension to your engineering team
                        </span>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <Link
                to="featured"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <NavigationMenuItem className="py-2 px-4 text-white text-[13px] nav-item rounded-lg cursor-pointer">
                  Featured
                </NavigationMenuItem>
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={500}
                offset={80}
              >
                <NavigationMenuItem className="py-2 px-4 text-white text-[13px] nav-item rounded-lg cursor-pointer">
                  Testimonials
                </NavigationMenuItem>
              </Link>
              <Link
                to="questions"
                spy={true}
                smooth={true}
                duration={500}
                offset={80}
              >
                <NavigationMenuItem className="py-2 px-4 text-white text-[13px] nav-item rounded-lg cursor-pointer">
                  FAQ
                </NavigationMenuItem>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="py-2 px-4 text-white text-[14px] nav-item rounded-lg cursor-pointer duration-500 transition-all ease-in-out">
            Apply as an engineer
          </div>
          <div className="px-6 py-3 text-white button rounded-full font-semibold hover:bg-[#1f2343] hover:bg-gradient-to-t hover:from-transparent hover:to-transparent transition-all duration-300 ease-linear cursor-pointer">
            Hire top engineers
          </div>
          <div className="px-6 py-3 text-white second-button rounded-full font-semibold bg-[#1f2343] transition-all duration-300 ease-linear cursor-pointer">
            Login
          </div>
        </div>
      </header>

      {/* for mobile */}
      <header className="flex md:hidden h-[10vh] justify-between items-center border-b border-b-border py-6 px-6 mobile:px-10 z-50">
        <Image src={Logo} alt="logo" width={120} height={120} />
        <div onClick={() => setMenu(true)}>
          <Image src={Menu} alt="menu" width={40} height={40} />
        </div>
      </header>

      {/* menu */}
      <div
        className={`min-w-[100dvh] min-h-[100dvh] absolute top-0 left-0 bg-background z-[100] md:hidden block duration-500 transition-all ease-linear ${
          menu ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <div className="w-screen h-[10vh] bg-background border-b border-b-border flex justify-between py-3 px-6">
          <div></div>
          <div onClick={() => setMenu(false)}>
            <Image src={Cancel} width={40} height={40} />
          </div>
        </div>
        <div className="w-screen h-[90vh] flex flex-col py-8 justify-between">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start justify-start px-8">
              <NavigationMenuItem className="py-3 text-white text-[18px] rounded-lg cursor-pointer">
                Products
              </NavigationMenuItem>
              <NavigationMenuItem className="py-3 text-white text-[18px] rounded-lg cursor-pointer">
                Featured
              </NavigationMenuItem>
              <NavigationMenuItem className="py-3 text-white text-[18px] rounded-lg cursor-pointer">
                Testimonials
              </NavigationMenuItem>
              <NavigationMenuItem className="py-3 text-white text-[18px] rounded-lg cursor-pointer">
                FAQ
              </NavigationMenuItem>
              <NavigationMenuItem className="py-3 text-white text-[18px] rounded-lg cursor-pointer">
                Apply as as an engineer
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="w-screen flex flex-col items-center">
            <div className="w-[90%] text-center py-3 text-white button rounded-full font-semibold hover:bg-[#1f2343] hover:bg-gradient-to-t hover:from-transparent hover:to-transparent transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center">
              <span>Hire top engineers</span>
            </div>
            <div className="w-[90%] text-center mt-3 py-3 text-white second-button rounded-full font-semibold bg-[#1f2343] transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center">
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
