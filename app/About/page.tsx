"use client";
import React from "react";
import { motion } from "motion/react";
import Header from "@/components/Header";
const page = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />

      <div className=" text-white text-center mt-20 ">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-center  "
        >
          |About Us|
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white w-150 font-light ml-80 mt-10"
        >
          Founded in 2025 in the heart of Kathmandu, Nepal, VybeStudio is a
          creative brand that celebrates individuality through print. Known for
          its bold approach to design, VybeStudio offers both original
          collections and the freedom to customize your own—blending personal
          expression with artistic flair. Drawing inspiration from local
          culture, global trends, and the spirit of self-made style, each piece
          is crafted to reflect the unique vibe of its wearer. Whether you're
          exploring the city streets or curating your own creative space,
          VybeStudio’s prints are designed to move with you versatile,
          expressive, and unapologetically yours.
        </motion.p>
      </div>
    </div>
  );
};

export default page;
