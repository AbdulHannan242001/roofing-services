"use client";

import Image from "next/image";
import React from "react";

import banner from "../../assets/banner.jpg";
import Button from "../global/Button";

const Banner = () => {
  return (
    <div id="home" className="w-full md:h-[100dvh] h-[70dvh] overflow-hidden flex relative">
      <Image
        src={banner}
        alt="banner"
        width={1600}
        height={400}
        className="w-full h-full object-cover object-center"
      />
      <div className="flex absolute inset-0 w-full h-full bg-black/50 items-end py-[60px] md:items-center z-10">
        <div className="max-w-[1400px] px-[20px] w-full mx-auto flex items-center justify-between">
          <div className="w-full md:w-8/12 h-full flex flex-col gap-4">
            <p className="font-extrabold text-3xl md:text-5xl leading-tight text-white">
              Crafting Durable Roofs That Protect Your Home Forever
            </p>
            <p className="leading-tight text-base md:text-xl text-white">
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
