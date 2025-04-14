import React from "react";
import Button from "../global/Button";
import { FaPhone } from "react-icons/fa";

const Booking = () => {
  return (
    <main className="relative z-20 -top-[100%] -translate-y-1/2 bg-white max-w-[1400px] mx-auto mt-[60px]">
      <div className="w-full gap-[30px] h-full flex items-center justify-between shadow-lg">
        <div className="w-1/2 py-[60px] px-[40px] border-r-10 border-primary bg-secondary text-white flex flex-col gap-4">
          <p className="text-5xl leading-tight font-semibold">
            Schedule Your Free Roof Inspection Today
          </p>
          <p>
            Ensure your roof stands strong with a complimentary inspection by
            our expert team. We’ll assess your roof’s condition, identify
            potential issues, and provide a detailed plan to keep your home safe
            and secure.
          </p>
        </div>
        <div className="w-1/2 pr-[30px] bg-white z-20">
          <form action="">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Full Name"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Your Email Address"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Location"
                    className="w-full border border-gray-300 text-gray-400 placeholder:text-gray-400 p-2"
                  />
                </div>
                <div className="w-1/2">
                  <div className="w-full border">
                    <Button text={"Book Inspection Now"} icon={<FaPhone />} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Booking;
