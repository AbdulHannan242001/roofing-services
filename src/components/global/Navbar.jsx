"use client";

import React from "react";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaHeadset } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1400px] fixed top-0 shadow-md z-[999] translate-x-[-50%] left-1/2">
      <div className="w-full md:w-2/12 bg-white flex items-center justify-center">
        <Image src={logo} alt="logo" width={80} height={100} />
        <p className="text-xl font-bold text-primary uppercase">Roof Right</p>
      </div>
      <div className="flex flex-col w-full md:w-10/12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex flex-row w-full md:w-10/12 justify-evenly py-2 px-[10px] bg-primary/50 backdrop-blur-sm border-b-1 border-black/20 items-center text-white">
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
          <div className="md:flex flex-row hidden w-2/12 justify-center h-full items-center">
            <div className="bg-secondary h-full w-full text-white text-xl gap-2 flex flex-row items-center justify-center cursor-pointer">
              Book Now <FaHeadset />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between items-center bg-white py-2">
          <div className="w-full md:w-10/12 flex flex-row gap-10 md:gap-30 items-center justify-center  px-[10px]">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100} // Adjust for fixed navbar height
              className="md:p-0 p-2 md:text-base text-lg cursor-pointer hover:text-primary"
              role="link"
              tabIndex={0}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              className="md:p-0 p-2 md:text-base text-lg cursor-pointer hover:text-primary"
              role="link"
              tabIndex={0}
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-100}
              className="md:p-0 p-2 md:text-base text-lg cursor-pointer hover:text-primary"
              role="link"
              tabIndex={0}
            >
              Services
            </Link>
          </div>
          <div className="w-2/12 md:flex hidden flex-row gap-3 justify-end pr-2">
            <a
              href="https://facebook.com/roofright"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[6px] bg-secondary rounded-full"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF size={16} className="text-white" />
            </a>
            <a
              href="https://instagram.com/roofright"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[6px] bg-secondary rounded-full"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram size={16} className="text-white" />
            </a>
            <a
              href="https://linkedin.com/company/roofright"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[6px] bg-secondary rounded-full"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedinIn size={16} className="text-white" />
            </a>
            <a
              href="https://x.com/roofright"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[6px] bg-secondary rounded-full"
              aria-label="Visit our X page"
            >
              <FaXTwitter size={16} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
