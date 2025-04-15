"use client";

import React, { useRef } from "react";
import Button from "../global/Button";
import { FaPhone } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Booking = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <motion.main ref={containerRef} initial={{ opacity: 0, y: 100 }} animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} transition={{ duration: 0.3, ease: "easeIn" }} className="relative z-20 top-0 md:-top-[100%] md:-translate-y-1/2 bg-white max-w-[1400px] mx-auto mt-[60px] md:px-0 px-[20px]">
      <div className="w-full gap-[30px] h-full flex md:flex-row flex-col items-center justify-between shadow-lg">
        <div className="w-full md:w-1/2 py-[30px] md:py-[60px] px-[20px] md:px-[40px] border-b-10 border-r-0 md:border-b-0 md:border-r-10 border-primary bg-secondary text-white flex flex-col gap-4">
          <p className="font-semibold text-3xl md:text-5xl leading-tight">
            Schedule Your Free Roof Inspection Today
          </p>
          <p>
            Ensure your roof stands strong with a complimentary inspection by
            our expert team. We’ll assess your roof’s condition, identify
            potential issues, and provide a detailed plan to keep your home safe
            and secure.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-[20px] md:pr-[30px] py-[30px] bg-white z-20">
          <form action="">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Full Name"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Your Email Address"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Location"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full">
                    <Button text={"Book Inspection Now"} icon={<FaPhone />} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.main>
  );
};

export default Booking;
