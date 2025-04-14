"use client";

import React from "react";

const Button = ({ text, icon, onClick }) => {
  return (
      <button onClick={onClick} className="hover:bg-primary/90 cursor-pointer px-4 py-2 bg-primary text-white flex items-center justify-center gap-2 w-full">{text} <span>{icon}</span> </button>
  );
};

export default Button;
