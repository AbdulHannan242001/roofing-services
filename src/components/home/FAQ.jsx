"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import faq from "../../assets/faq.jpg";

const FAQ = () => {
  const [activeFAQs, setActiveFAQs] = useState([]);

  const faqs = [
    {
      question: "How long does a roof installation take?",
      answer:
        "A typical roof installation takes 1–3 days, depending on the size of your home, the roofing material, and weather conditions. Our team works efficiently to minimize disruption while ensuring top-quality results.",
    },
    {
      question: "What types of roofing materials do you offer?",
      answer:
        "We provide a range of materials, including asphalt shingles, metal roofing, tile, and slate. Each option is selected for durability and aesthetics, tailored to your home’s needs and budget.",
    },
    {
      question: "How often should I have my roof inspected?",
      answer:
        "We recommend a professional roof inspection every 2–3 years or after major storms. Regular checks help catch minor issues early, preventing costly repairs and extending your roof’s lifespan.",
    },
    {
      question: "Do you offer warranties on your roofing services?",
      answer:
        "Yes, we offer comprehensive warranties on materials and workmanship, typically ranging from 5–20 years depending on the service. Our team ensures your investment is protected with guaranteed quality.",
    },
    {
      question: "Can you repair a leaking roof?",
      answer:
        "Absolutely. We specialize in leak detection and repair, addressing issues like damaged shingles, faulty flashing, or worn layers. Our fixes are thorough, ensuring your home stays dry and secure.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-[60px] md:mt-[120px] max-w-[1400px] w-full mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="md:block hidden w-full md:w-6/12">
        <Image src={faq} alt="faq" width={1000} height={1000} />
      </div>

      <div className="w-full md:w-6/12 flex flex-col gap-4 px-4 md:px-[20px]">
        <p className="flex flex-row gap-2 items-center text-xl font-sans font-semibold">
          <span className="p-[6px] bg-secondary" />
          Have Any Questions?
        </p>
        <p className="text-4xl md:text-5xl max-w-xl font-sans font-semibold leading-tight text-black">
          Most Commonly Asked Questions by Our Customers
        </p>
        <div className="flex flex-col gap-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer border-b border-gray-300 py-3"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex flex-row items-center justify-between">
                <p className="font-sans text-base md:text-lg text-black">
                  {faq.question}
                </p>
                <motion.span
                  className="rounded-full p-1 bg-secondary"
                  animate={{ rotate: activeFAQs.includes(index) ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <FaPlus className="text-white" />
                </motion.span>
              </div>
              <AnimatePresence>
                {activeFAQs.includes(index) && (
                  <motion.p
                    initial={{ height: 0, opacity: 0, y: 10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="font-sans text-sm text-black max-w-2xl mt-2"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
