"use client";
import { motion } from "framer-motion";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const OnShow = (props: Props) => {
  const transition = {
    delay: 0.3,
    filter: "blur(0)",
  };
  return (
    <motion.div
      className="w-11/12 mx-auto"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={transition}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:border-b border-black">
        <div className="flex flex-col items-start gap-y-10 py-16 md:py-32">
          <h1 className="text-5xl md:text-[110px] font-light tracking-tight">
            On Show
          </h1>
          <div className="flex gap-5 md:gap-10 text-lg md:text-3xl font-light">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/on-show" className="opacity-60">
              On Show
            </Link>
            <Link href="/awards">Awards</Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 font-light md:w-[600px]">
          <h2 className="text-2xl">
            Want to be the first to see our new show homes? Sign up for an
            exclusive preview.
          </h2>
          <form className="flex gap-3">
            <input
              placeholder="Enter your email"
              className="border-b border-black w-full bg-transparent h-12 placeholder:text-sm placeholder:tracking-wider focus:outline-none"
            />
            <button className="bg-neutral-950 text-neutral-50 px-3 py-2 rounded-2xl">
              GO
            </button>
          </form>
        </div>
      </div>
      <div className="my-32">
        <Link
          href=""
          className="bg-black rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col h-[800px] w-[600px]"
        >
          <Parallax offset={75}>
            <Image
              src="/images/villa-rose-averna-homes-1024x683.jpg"
              alt=""
              width={1000}
              height={1000}
              className="group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000 object-cover h-[900px] scale-110"
            />
          </Parallax>
          <p className="text-neutral-50 absolute z-10 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 text-2xl">
            View Home
          </p>
        </Link>
        <div className="flex gap-2 items-center text-lg">
          <h5 className="py-2">Villa Rosé</h5>
          <div className="w-[150px] h-full border-[1px] border-[#292929]"></div>
          <p>6151</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OnShow;
