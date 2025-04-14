import React from "react";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaHeadset } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full max-w-[1400px] fixed top-0 shadow-md z-[999] translate-x-[-50%] left-1/2">
      <div className="w-2/12 bg-white flex items-center justify-center">
        <Image src={logo} alt="logo" width={80} height={100} />
        <p className="text-xl font-bold text-primary uppercase">Roof Right</p>
      </div>
      <div className="flex flex-col w-10/12">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row w-10/12 justify-evenly py-2 bg-primary/50 backdrop-blur-sm border-b-1 border-black/20 items-center text-white">
            <div className="flex flex-row justify-center items-start h-full w-fit gap-1">
              <div className="">
                <MdLocationPin size={24} className="text-secondary" />
              </div>
              <div className="w-fit h-full flex flex-col">
                <p className="text-sm font-semibold">Location :</p>
                <p className="text-xs">14/A Pure Street City</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start h-full w-fit gap-1">
              <div className="">
                <MdMail size={24} className="text-secondary" />
              </div>
              <div className="w-fit h-full flex flex-col">
                <p className="text-sm font-semibold">Email Us :</p>
                <p className="text-xs">info@roofservice.com</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start h-full w-fit gap-1">
              <div>
                <MdPhone size={24} className="text-secondary" />
              </div>
              <div className="w-fit h-full flex flex-col">
                <p className="text-sm font-semibold">Call Us :</p>
                <p className="text-xs"> +1 234 567 890</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-2/12 justify-center h-full items-center">
            <div className="bg-secondary h-full w-full text-white text-xl gap-2 flex flex-row items-center justify-center cursor-pointer">
              Book Now <FaHeadset />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between items-center bg-white py-2">
          <div className="w-10/12 flex flex-row gap-30 items-center justify-center">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
          </div>
          <div className="w-2/12 flex flex-row gap-3 justify-end pr-2">
            <button className="p-[6px] bg-secondary rounded-full">
              <FaFacebookF size={16} className="text-white" />
            </button>
            <button className="p-[6px] bg-secondary rounded-full">
              <FaInstagram size={16} className="text-white" />
            </button>
            <button className="p-[6px] bg-secondary rounded-full">
              <FaLinkedinIn size={16} className="text-white" />
            </button>
            <button className="p-[6px] bg-secondary rounded-full">
              <FaXTwitter size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
