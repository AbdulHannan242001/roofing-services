"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Image from "next/image";

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const testimonials = [
    {
      name: "Sarah Thompson",
      position: "Homeowner, Maple Grove",
      image: "/images/testimonial-sarah.jpg",
      text: "The team replaced our aging roof in just two days! Their attention to detail and cleanup was impeccable. Our home feels secure now.",
    },
    {
      name: "Michael Chen",
      position: "Homeowner, Oakwood",
      image: "/images/testimonial-michael.jpg",
      text: "After a storm damaged our shingles, they repaired everything quickly and professionally. The roof looks better than ever, and no leaks since!",
    },
    {
      name: "Emily Rodriguez",
      position: "Homeowner, Riverside",
      image: "/images/testimonial-emily.jpg",
      text: "We chose them for a full roof installation, and the quality is outstanding. They guided us through every step with clear communication.",
    },
    {
      name: "David Patel",
      position: "Homeowner, Hillcrest",
      image: "/images/testimonial-david.jpg",
      text: "Their free inspection caught issues we didn’t notice. The repairs were done on time, and the warranty gives us peace of mind.",
    },
    {
      name: "Laura Bennett",
      position: "Homeowner, Cedar Lane",
      image: "/images/testimonial-laura.jpg",
      text: "From start to finish, the service was top-notch. Our new metal roof is stunning, and the crew was respectful and efficient.",
    },
  ];

  return (
    <main className="w-full bg-primary text-white py-[60px] mt-[120px] flex flex-col justify-center">
      <section className="flex flex-col gap-4 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="w-5/12 gap-4 flex flex-col">
            <p className="flex flex-row gap-2 items-center text-xl font-semibold">
              {" "}
              <span className="p-[6px] bg-secondary" /> Testimonials{" "}
            </p>
            <p className="text-5xl font-semibold leading-tight">
              Hear From Our Happy Homeowners
            </p>
          </div>
          <div className="w-6/12">
            <p>
              Our clients trust us to deliver durable, high-quality roofing
              solutions. Read their stories to see why we’re the preferred
              choice for homes across the region.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mb-4 ml-auto w-fit">
          <div className="flex flex-row gap-x-6">
            <span
              onClick={handlePrev}
              className="font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer"
            >
              <MdArrowBack />
            </span>
            <span
              onClick={handleNext}
              className="font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer"
            >
              <MdArrowForward />
            </span>
          </div>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            ref={swiperRef}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 0.95, rotate: 5 }}
                  className="w-full h-full cursor-grab  text-black py-[20px]"
                >
                  <div className="px-[20px] py-[30px] flex flex-col gap-4 bg-white hover:shadow-2xl shadow-secondary/30 transition-all duration-200 ease-linear">
                    {/* <div className="size-[60px] rounded-full  border border-secondary flex items-center justify-center">
                      <Image
                        src={testimonial.image}
                        width={60}
                        height={60}
                        alt={testimonial.name}
                      />
                    </div> */}
                    {testimonial.text}
                    <div className="w-fit p-4 border-secondary border text-secondary ml-auto">
                      ~ {testimonial.name}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
