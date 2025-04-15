"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Image from "next/image";

import david from "../../assets/testimonials/david.jpg";
import emily from "../../assets/testimonials/emily.jpg";
import laura from "../../assets/testimonials/laura.jpg";
import micheal from "../../assets/testimonials/micheal.jpg";
import sarah from "../../assets/testimonials/sarah.jpg";

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
      image: sarah,
      text: "The team replaced our aging roof in just two days! Their attention to detail and cleanup was impeccable. Our home feels secure now.",
    },
    {
      name: "Michael Reeves",
      position: "Homeowner, Oakwood",
      image: micheal,
      text: "After a storm damaged our shingles, they repaired everything quickly and professionally. The roof looks better than ever, and no leaks since!",
    },
    {
      name: "Emily Rodriguez",
      position: "Homeowner, Riverside",
      image: emily,
      text: "We chose them for a full roof installation, and the quality is outstanding. They guided us through every step with clear communication.",
    },
    {
      name: "David Patel",
      position: "Homeowner, Hillcrest",
      image: david,
      text: "Their free inspection caught issues we didn’t notice. The repairs were done on time, and the warranty gives us peace of mind.",
    },
    {
      name: "Laura Bennett",
      position: "Homeowner, Cedar Lane",
      image: laura,
      text: "From start to finish, the service was top-notch. Our new metal roof is stunning, and the crew was respectful and efficient.",
    },
  ];

  return (
    <main className="w-full bg-primary text-white py-[60px] mt-[60px] md:mt-[120px] flex flex-col justify-center px-[20px]">
      <section className="flex flex-col gap-4 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-5/12 gap-4 flex flex-col">
            <p className="flex flex-row gap-2 items-center text-xl font-semibold">
              {" "}
              <span className="p-[6px] bg-secondary" /> Testimonials{" "}
            </p>
            <p className="text-3xl md:text-5xl font-semibold leading-tight">
              Hear From Our Happy Homeowners
            </p>
          </div>
          <div className="w-full md:w-6/12">
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
                  <div className="border-2 shadow-lg shadow-white/20 border-secondary flex flex-col relative min-h-[400px]">
                    <div className="h-[250px] py-[60px] text-center flex items-center justify-center bg-gradient-to-tr from-secondary to-orange-600">
                      {testimonial.text && (
                        <p className="text-white max-w-xs px-[20px]">
                          {testimonial.text}
                        </p>
                      )}
                    </div>
                    <div className="absolute top-[calc(250px-35px)] right-[50%] translate-x-[50%]">
                      <Image
                        src={testimonial.image}
                        alt="testimonial"
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px] object-cover object-center shadow-md shadow-primary/50"
                      />
                    </div>
                    <div className="h-[150px] py-[30px] flex flex-col items-center justify-center text-center bg-white">
                      <p>{testimonial.name}</p>
                      <p>{testimonial.position}</p>
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
