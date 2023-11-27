"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
type Props = {};

const Contact = (props: Props) => {
  const transition = {
    delay: 0.3,
    filter: "blur(0)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={transition}
      className="min-h-screen w-11/12 mx-auto font-light"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-32 border-b border-neutral-950">
        <h1 className="text-5xl md:text-[110px] font-light tracking-tight">
          Contact us
        </h1>
        <p className="text-2xl">Got a question? We&apos;ve got the answers.</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between py-32 w-full space-y-10 sm:space-y-0">
        <div className="flex flex-col md:w-[45%] space-y-24">
          <h3 className="text-4xl">
            If you would like to speak with us about our luxury homes or your
            upcoming project, please contact us via any of the following
            channels.
          </h3>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col gap-y-4 text-xl">
              <h4 className="text-3xl">Office</h4>
              <h5>Level 1, 54 Belgravia Street,</h5>
              <h5>Belmont, WA 6104</h5>
            </div>
            <div className="flex flex-col gap-y-4 text-xl">
              <h4 className="text-3xl">Phone</h4>
              <h5>(08) 9373 3999</h5>
            </div>
            <div className="flex flex-col gap-y-4 text-xl">
              <h4 className="text-3xl">Email</h4>
              <h5>jamie@avernahomes.com.au</h5>
            </div>
            <Link
              href="/"
              className="flex gap-x-1 items-center uppercase py-2 px-6 border border-neutral-950 rounded-full w-max text-xl hover:bg-neutral-950 transition-all duration-700 group "
            >
              <p className="group-hover:text-neutral-50 transition-all duration-700">
                Fill out our enquiry form
              </p>
              <div className="group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-50 transition-all duration-700">
                <GoArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="md:w-[50%]">
          <Link
            href="/"
            className=" bg-black hover:rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col"
          >
            <Image
              src="/images/By The Swan.webp"
              width={1000}
              height={1000}
              alt=""
              className="h-full w-full group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
            />
            <p className="text-neutral-50 absolute z-10 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 text-2xl">
              View Home
            </p>
          </Link>
          <div className="flex gap-2 items-center text-lg">
            <h5 className="py-2">By The Swan</h5>
            <div className="w-[150px] h-full border-[1px] border-[#292929]"></div>
            <p>6153</p>
          </div>
        </div>
      </div>
      <div className="sm:my-32 p-4 sm:p-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#eae8e8] rounded-xl">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-5xl">Individual home builders.</h1>
          <p className="text-2xl">
            Your dream home is just around the corner, let&apos;s build it
            together.
          </p>
          <Link
            href="/"
            className="flex gap-x-1 items-center uppercase py-2 px-6 border border-neutral-950 rounded-full w-max text-xl hover:bg-neutral-950 transition-all duration-700 group "
          >
            <p className="group-hover:text-neutral-50 transition-all duration-700">
              View All
            </p>
            <div className="group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-50 transition-all duration-700">
              <GoArrowUpRight />
            </div>
          </Link>
        </div>
        <div>
          <Link
            href=""
            className="bg-black hover:rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col"
          >
            <Image
              src="/images/villa-rose-averna-homes-1024x683.jpg"
              alt=""
              width={1000}
              height={1000}
              className="group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000 object-cover w-full h-full"
            />
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
        <div className="">
          <Link
            href="/"
            className=" bg-black hover:rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col"
          >
            <Image
              src="/images/By The Swan.webp"
              width={1000}
              height={1000}
              alt=""
              className="h-full w-full group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
            />
            <p className="text-neutral-50 absolute z-10 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 text-2xl">
              View Home
            </p>
          </Link>
          <div className="flex gap-2 items-center text-lg">
            <h5 className="py-2">By The Swan</h5>
            <div className="w-[150px] h-full border-[1px] border-[#292929]"></div>
            <p>6153</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
