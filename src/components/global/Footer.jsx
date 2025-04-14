"use client";

import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--primary)]">
      {/* Top Section: Logo, Tagline, and Newsletter */}
      <main className="bg-[var(--background)] border-b border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8 max-w-[1600px] mx-auto">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Link
              href="/"
              aria-label="RoofRight Solutions Home"
              className="flex items-end gap-2"
            >
              <Image
                src={logo}
                alt="RoofRight Solutions Logo"
                className="border-2 border-[var(--primary)] rounded p-1"
                width={50}
                height={50}
              />
              <span className="text-2xl leading-none font-sans font-bold text-[var(--primary)]">
                RoofRight <br /> Solutions
              </span>
            </Link>
            <p className="mt-2 italic text-sm text-gray-400 flex items-center gap-1">
              Building Roofs That Last a Lifetime
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-auto max-w-md text-center md:text-left">
            <h3 className="text-base md:text-lg font-sans font-bold text-[var(--primary)] mb-2">
              Stay Updated on Roofing Tips
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for expert advice, seasonal maintenance tips, and
              exclusive offers on our roofing services.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              className="flex gap-2 mb-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email for newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
                className="p-2 border border-gray-300 rounded-md w-full text-sm text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="p-2 bg-[var(--primary)] text-white rounded-md text-sm hover:bg-[var(--primary)]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Middle Section: Navigation, Services, and Contact */}
      <main className="bg-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-4 justify-between p-6 md:p-8">
          {/* Quick Links (Explore) */}
          <div className="flex-1 min-w-[200px] mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-base font-sans font-bold text-[var(--primary)] mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", to: "home" },
                { name: "Services", to: "services" },
                { name: "About", to: "about" },
                { name: "Contact", to: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-sm text-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-[200px] mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-base font-sans font-bold text-[var(--primary)] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">Roof Installation</li>
              <li className="text-sm">Roof Repairs</li>
              <li className="text-sm">Roof Maintenance</li>
              <li className="text-sm">Roof Inspections</li>
              <li className="text-sm">Emergency Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] text-center md:text-left">
            <h3 className="text-base font-sans font-bold text-[var(--primary)] mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-[var(--primary)] mb-2">
              123 Shelter Lane, Springville, TX 75001, USA
            </p>
            <p className="text-sm text-[var(--primary)] mb-2">
              Phone: (888) 555-ROOF
            </p>
            <p className="text-sm text-[var(--primary)] mb-2">
              Email: info@roofrightsolutions.com
            </p>
            <p className="text-sm text-[var(--primary)] mb-2">
              Mon-Fri: 8 AM – 6 PM, Sat: 9 AM – 3 PM, Sun: Closed
            </p>
            <a
              href="https://www.google.com/maps/place/Springville,+TX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--primary)] hover:text-orange-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </main>

      {/* Bottom Section: Social Media and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-4 bg-[var(--background)] max-w-[1600px] mx-auto">
        {/* Social Media */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-sm font-sans font-bold text-[var(--primary)] mb-2">
            Follow Us!
          </h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://instagram.com/roofrightsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow RoofRight Solutions on Instagram"
              className="text-[var(--primary)] hover:text-[var(--primary)] transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://facebook.com/roofrightsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow RoofRight Solutions on Facebook"
              className="text-[var(--primary)] hover:text-[var(--primary)] transition-colors"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://tiktok.com/@roofrightsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow RoofRight Solutions on TikTok"
              className="text-[var(--primary)] hover:text-[var(--primary)] transition-colors"
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-300">
            © 2025 RoofRight Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
