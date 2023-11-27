"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Parallax from "@/components/Parallax";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoArrowUpRight } from "react-icons/go";

type Props = {};

const awards = [
  {
    year: "2023",
    data: [
      "2023 Housing Industry Association – Australian Spec Home of the Year – Winner",
    ],
  },
  {
    year: "2022",
    data: [
      "2022 Housing Industry Association – Western Australian Spec Home of the Year – Winner",
      "2022 Housing Industry Association – “Australian / National” Outdoor Project of the Year – Winner",
      "2022 Housing Industry Association – “Australian / National” People’s Choice Home – Finalist",
      "2022 Housing Industry Association – “Australian / National” Custom Built Home – Finalist",
      "2022 Housing Industry Association – “Australian/ National” Bathroom of the Year – Finalist",
      "2022 Housing Industry Association – Perth Spec Home of the Year – Winner",
      "2022 Housing Industry Association – New Kitchen $80,001 to $100,000 – Winner",
    ],
  },
  {
    year: "2021",
    data: [
      "2021 Housing Industry Association – Western Australian Home of the Year – Winner",
      "2021 Housing Industry Association – Western Australian Custom Built Home of the Year – Winner",
      "2021 Housing Industry Association – Western Australian Residential Building Designer of the Year – Winner",
      "2021 Housing Industry Association – Western Australian Outdoor Project of the Year – Winner",
      "2021 Housing Industry Association – Perth Home of the Year – Winner",
      "2021 Housing Industry Association – Perth Custom Built Home, Over $3 Million – Winner",
      "2021 Housing Industry Association – Perth John Pietersen Award for Custom Built Home of the Year – Winner",
      "2021 Housing Industry Association – Perth Outdoor Project Over $150,001 – Winner",
      "2021 Housing Industry Association – Perth Outdoor Project of the Year – Winner",
      "2021 Housing Industry Association – Perth Residential Building Designer of the Year – Winner",
      "2021 Housing Industry Association – Western Australian New Bathroom over $60,001 – Winner",
      "2021 Housing Industry Association – Western Australian New Bathroom of the Year – Winner",
      "2021 Housing Industry Association – Western Australian Bathroom of the Year – Winner",
      "2021 Housing Industry Association – Perth Spec Home Over $500,001 – Finalist",
    ],
  },
  {
    year: "2020",
    data: [
      "2020 Housing Industry Association Western Australian Spec Home of the Year – Winner",
      "2020 Housing Industry Association Western Australian Home of the Year – Finalist",
      "2020 Housing Industry Association Perth Winner – Spec Home $500,001 & over",
      "2020 Housing Industry Association Perth Winner – Spec Home of the Year",
      "2020 Housing Industry Association Perth Finalist – New Bathroom $35,001 & over",
      "2020 Housing Industry Association Perth Finalist – Home of the Year",
    ],
  },
  {
    year: "2019",
    data: [
      "2019 Housing Industry Association Perth Finalist – Spec Home $750,001 & over",
      "2019 Housing Industry Association Perth Finalist – Excellence in Service (Medium Builder)",
    ],
  },
  {
    year: "2018",
    data: [
      "2018 Housing Industry Association “AUSTRALIAN / NATIONAL” Winner – Australian Custom Spec Home",
      "2018 Housing Industry Association “AUSTRALIAN / NATIONAL” Finalist – Australian Home of the Year",
    ],
  },
  {
    year: "2017",
    data: [
      "2017 Housing Industry Association WA Winner – Custom Spec Home of the Year",
      "2017 Housing Industry Association Perth Winner – Residential Building Designer of the Year",
      "2017 Housing Industry Association Perth Winner – Custom Spec Built Home $500,000 & Over",
      "2017 Housing Industry Association Perth Winner – Custom Spec Home of the Year",
      "2017 Housing Industry Association Perth Finalist – Home of the Year Perth",
      "2017 Housing Industry Association “AUSTRALIAN / NATIONAL” Winner – Australian Custom Spec Home",
      "2017 Housing Industry Association “AUSTRALIAN / NATIONAL” Finalist – Australian Home of the Year",
    ],
  },
  {
    year: "2016",
    data: [
      "2016 Housing Industry Association WA Winner – Custom Spec Home of the Year",
      "2016 Housing Industry Association Finalist – Custom Built Home $625,001 – $900,000",
      "2016 Housing Industry Association Winner – Custom Spec Home",
      "2016 Housing Industry Association Winner – Custom Spec Home of the Year",
      "2016 Housing Industry Association Finalist – Home of the Year Perth",
    ],
  },
  {
    year: "2015",
    data: [
      "2015 Housing Industry Association Finalist – Custom Built Home $625,001 – $900,000 (Hurdles Drive, Floreat)",
    ],
  },
  {
    year: "2014",
    data: [
      "2014 Housing Industry Association Winner – Custom Built Home $625,001 – $900,000 ( Hirundo Place, Waterford)",
      "2014 Housing Industry Association Winner – Custom Built Home $900,001 – $1,200,000 ( Salvado Road, Floreat)",
      "2014 Housing Industry Association Finalist – Custom Built Home of the Year",
    ],
  },
  {
    year: "2013",
    data: [
      "2013 Master Builders Awards Finalist – Contract Homes $750,000 – $800,000",
      "2013 Master Builders Awards Finalist – Contract Homes $800,000 – $1,000,000",
      "2013 Housing Industry Association Winner – Custom Built Home $625,001 – $900,000",
    ],
  },
  {
    year: "2012",
    data: [
      "2012 40under40 Winner – Paul Serra",
      "2012 Master Builders Awards Winner – Bankwest Best Customer Service Award Small / Medium Builder",
      "2012 Master Builders Awards Finalist – Contract Homes $500,000 – $575,000",
    ],
  },
  {
    year: "2011",
    data: [
      "2011 Master Builders Awards Winner – Bankwest Best Customer Service Award Small / Medium Builder",
      "2011 Master Builders Awards Winner – Contract Homes $650,000 – $750,000",
      "2011 Master Builders Awards Winner – Contract Homes $500,000 – $650,000",
      "2011 Master Builders Awards Finalist – Contract Homes $400,000 – $500,000",
    ],
  },
  {
    year: "2010",
    data: [
      "2010 Rising Stars – Luxury homebuilder providing individually-designed homes",
      "2010 Master Builders Awards Winner – Villa Royale – Contract Homes $750,000 – $800,000",
    ],
  },
  {
    year: "2009",
    data: [
      "2009 Master Builders Awards Winner – Best New Builder",
      "2009 Master Builders Awards Winner – Villa Rosso – Contract Homes $400,000 – $500,000",
      "2009 Master Builders Awards Winner – Villa Bianco – Contract Homes $230,000 – $280,000",
    ],
  },
];

const Awards = (props: Props) => {
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
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:border-b border-black">
        <div className="flex flex-col items-start gap-y-10 py-16 md:py-32">
          <h1 className="text-5xl md:text-7xl lg:text-[110px] font-light tracking-tight">
            Awards
          </h1>
          <div className="flex gap-5 md:gap-10 text-lg lg:text-3xl font-light">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/on-show">On Show</Link>
            <Link href="/awards" className="opacity-60">
              Awards
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 font-light md:w-[600px]">
          <h2 className="text-3xl">Award-winning home builders.</h2>
          <p className="text-xl">
            Since its inception, Averna Homes has been recognised by its
            industry peers for building bespoke homes in Perth, underpinned by
            superior workmanship and quality materials.
          </p>
        </div>
      </div>
      <div className="py-16 md:py-32 flex flex-col-reverse md:flex-row justify-between gap-x-6">
        <p className="text-3xl md:text-5xl font-light">
          We&apos;ve won countless building and housing industry awards over the
          years, creating unique homes for our clients.
        </p>
        <div>
          <Link
            href=""
            className="bg-black rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col h-[500px] md:h-[600px] md:w-[800px]"
          >
            <Parallax offset={75}>
              <Image
                src="/images/The-Shangri-La/The-Shangri-La-2.webp"
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
      </div>
      <div className="py-16 md:py-32 flex flex-col-reverse lg:flex-row justify-between items-start gap-x-6 gap-y-16">
        <div>
          <Link
            href=""
            className="bg-black rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col h-[500px] md:h-[800px] md:w-[600px]"
          >
            <Parallax offset={75}>
              <Image
                src="/images/villa-mia/Villa-Mia-2.webp"
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
        <Accordion type="multiple" className="w-full">
          {awards.map((award, index) => (
            <AccordionItem key={index} value={award.year}>
              <AccordionTrigger className="text-lg hover:bg-gray-200 pl-4 data-[state=open]:pl-6 duration-500">
                {award.year}
              </AccordionTrigger>
              <AccordionContent className="border-b-0">
                {award.data.map((item, index) => (
                  <div className="w-11/12 mx-auto" key={index}>
                    <div className="py-2 text-base">– {item}</div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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

export default Awards;
