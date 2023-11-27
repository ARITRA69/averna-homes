"use client";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const leftImages = [
  {
    id: 1,
    name: "Villa Rosé",
    src: "/images/villa-rose-averna-homes-1024x683.jpg",
    number: 6151,
  },
  {
    id: 2,
    name: "Villa Mia",
    src: "/images/villa-mia/Villa-Mia.webp",
    number: 6151,
  },
  {
    id: 3,
    name: "The Shangri-La",
    src: "/images/The-Shangri-La/The-Shangri-La.webp",
    number: 6009,
  },
  {
    id: 4,
    name: "The Glass House",
    src: "/images/The-Glass-House.webp",
    number: 6009,
  },
  {
    id: 5,
    name: "Villa Bella",
    src: "/images/Villa-Bella.webp",
    number: 6153,
  },
  {
    id: 6,
    name: "Villa Nero",
    src: "/images/Villa-Nero.webp",
    number: 6020,
  },
];

const Portfolio = (props: Props) => {
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black">
        <div className="flex flex-col items-start gap-y-10 py-16 md:py-32">
          <h1 className="text-5xl md:text-[110px] font-light tracking-tight">
            Portfolio
          </h1>
          <div className="flex gap-5 md:gap-10 text-lg md:text-3xl font-light">
            <Link href="/portfolio" className="opacity-60">
              Portfolio
            </Link>
            <Link href="/on-show">On Show</Link>
            <Link href="/awards">Awards</Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 font-light">
          <h2 className="text-3xl">Design is our legacy.</h2>
          <p className="text-xl">
            Creating one-of-a-kind homes underpinned by creativity,
            <br />
            craftsmanship and an unrivalled attention to detail.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="">
          {leftImages.map((data) => (
            <div
              key={data.id}
              style={{
                paddingLeft: data.id % 2 !== 0 ? "150px" : "0",
              }}
              className="my-8 md:my-28 scale-50 md:scale-100"
            >
              <Link
                href=""
                className="bg-black rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col h-[800px] w-[600px]"
                style={{
                  height: data.id % 3 === 2 ? "800px" : "500px",
                  width: data.id % 3 === 2 ? "600px" : "800px",
                }}
              >
                <Parallax offset={75}>
                  <Image
                    src={data.src}
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
                <h5 className="py-2">{data.name}</h5>
                <div className="w-[150px] h-full border-[1px] border-[#292929]"></div>
                <p>{data.number}</p>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
