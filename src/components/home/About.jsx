"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { FaClock, FaHammer, FaSmile, FaTools } from "react-icons/fa";
import about from "../../assets/about.jpg";
import { motion, useInView } from "framer-motion";

const About = () => {
  const details = [
    {
      title: "Expert Craftsmanship",
      description:
        "Our certified roofers bring precision and skill to every project, ensuring your roof is built to last.",
      icon: <FaHammer className="w-6 h-6" />,
    },
    {
      title: "Premium Materials",
      description:
        "We use only high-quality shingles, metal, and tiles to guarantee durability and aesthetic appeal.",
      icon: <FaTools className="w-6 h-6" />,
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your peace of mind is our priority, with transparent service and a 100% satisfaction guarantee.",
      icon: <FaSmile className="w-6 h-6" />,
    },
    {
      title: "Timely Service",
      description:
        "We respect your schedule, completing projects efficiently without compromising on quality.",
      icon: <FaClock className="w-6 h-6" />,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.5 },
    }),
  };

  return (
    <div
      id="about"
      ref={containerRef}
      className="w-full bg-primary text-white p-[20px] my-[60px]"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto">
        <div className="w-full md:w-6/12 h-full">
          <Image
            src={about}
            alt="about"
            className="w-full h-full object-cover object-center"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-6/12 md:pl-[40px] flex flex-col gap-6 py-[30px] md:py-[60px]">
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.5}
            className="flex flex-row gap-2 items-center text-xl font-semibold"
          >
            {" "}
            <span className="p-[6px] bg-secondary" /> About Us{" "}
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.75}
            className="text-3xl md:text-5xl font-semibold leading-tight"
          >
            Your Trusted Roofing Experts for Over 20 Years
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            At Roof Right, we specialize in delivering top-quality roofing
            solutions tailored to your home’s needs. From installations to
            repairs, our skilled team ensures durability, safety, and peace of
            mind with every project.
          </motion.p>
          <div className="flex flex-wrap gap-6 justify-between">
            {details.map((item, index) => {
              return (
                <motion.div
                  variants={textVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={1.0 + index}
                  key={index}
                  className="flex flex-row gap-3 max-w-lg items-start"
                >
                  <div className="p-[6px] rounded-full bg-secondary text-white h-fit">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
