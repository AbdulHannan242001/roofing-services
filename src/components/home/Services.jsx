import React from "react";
import { SlideTabsExample } from "../global/Tabs";


const Services = () => {
  return (
    <div id="services" className="w-full bg-primary text-white py-[60px] mt-[30px] md:mt-[120px]">
      <div className="w-full flex flex-col items-center justify-between max-w-[1400px] mx-auto gap-4">
        <p className="flex flex-row gap-2 items-center justify-center w-full text-xl font-semibold">
          {" "}
          <span className="p-[6px] bg-secondary" /> Services{" "}
        </p>
        <p className="text-2xl md:text-5xl font-semibold max-w-xl text-center leading-tight">
          We're Providing Quality Roofing Services
        </p>
        <div className="flex flex-col gap-4">
          <SlideTabsExample />
        </div>
      </div>
    </div>
  );
};

export default Services;
