"use client";

import Image from "next/image";
import React from "react";

import banner from "../../assets/banner.jpg";
import Button from "../global/Button";

const Banner = () => {
  return (
    <div id="banner" className="w-full h-[100dvh] overflow-hidden flex items-center justify-center relative">
      <Image
        src={banner}
        alt="banner"
        width={1600}
        height={400}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center z-10">
        <div className="max-w-[1400px] px-[20px] w-full mx-auto flex items-center justify-between">
          <div className="w-8/12 h-full flex flex-col gap-4">
            <p className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              Crafting Durable Roofs That Protect Your Home Forever
            </p>
            <p className="font-semibold leading-tight text-lg sm:text-xl lg:text-2xl text-white">
              Expert roofing solutions built to last. From repairs to
              replacements, we protect your home with precision and
              care—guaranteed.
            </p>
            <div className="w-fit">
              <Button text={"Book Now"} onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
