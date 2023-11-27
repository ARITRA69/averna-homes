"use client";
import Parallax from "@/components/Parallax";
import WavyText from "@/components/WavyText";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "react-fast-marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";

const images = [
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
];

export default function Home() {
  const transition = {
    delay: 0.3,
    filter: "blur(0)",
  };
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={transition}
      className="min-h-screen"
    >
      <div className="top-0 relative">
        <video
          src="https://avernahomes.com.au/wp-content/uploads/2023/08/Averna-Dalkeith-30s.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover aspect-video"
        ></video>
        <div className="absolute bottom-8 left-8 text-3xl sm:text-5xl md:text-8xl text-white">
          <WavyText delay={0.1} duration={0.1}>
            Averna Homes
          </WavyText>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col items-start gap-y-10 py-16 md:py-32">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <h2 className="text-3xl md:text-5xl font-light md:w-[50%] w-full">
              Creating one-of-a-kind homes underpinned by creativity,
              craftsmanship and an unrivalled attention to detail.
            </h2>
            <p className="text-xl md:text-2xl md:w-[50%] w-full">
              Every Averna home starts with a blank piece of paper because we
              recognise that no two clients are the same. Our designers meet
              with clients to discuss their lifestyle, needs and budget, and
              from there, the journey to creating their dream luxury home in
              Perth begins.
            </p>
          </div>
          <div className="md:w-[50%]">
            <Link
              href="/"
              className=" bg-black rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col"
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
        <div className="flex items-center gap-3 w-full">
          <div className="border-b border-black h-1 w-full"></div>
          <Link
            href="/"
            className="flex gap-x-1 items-center uppercase py-2 px-6 border border-neutral-950 rounded-full w-auto text-xl hover:bg-neutral-950 transition-all duration-700 group "
          >
            <p className="group-hover:text-neutral-50 transition-all duration-700 whitespace-nowrap">
              About Averna
            </p>
            <div className="group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-50 transition-all duration-700">
              <GoArrowUpRight />
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-start gap-y-10 py-16 md:py-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-3 w-full">
            <h2 className="text-3xl md:text-5xl font-light">
              Design is our legacy.
            </h2>
            <p className="text-xl md:text-2xl">When are we creating yours?</p>
          </div>
          <div className="w-full">
            <Link
              href="/"
              className=" bg-black rounded-lg transition-all duration-500 overflow-hidden relative group flex justify-center items-center flex-col"
            >
              <Image
                src="/images/The-Shangri-La/The-Shangri-La.webp"
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
              <h5 className="py-2 whitespace-nowrap">By The Swan</h5>
              <div className="w-full h-1 border-b border-[#292929]"></div>
              <p>6153</p>
            </div>
          </div>
        </div>
        <p className="text-3xl md:text-5xl font-light text-center py-16 md:py-32 md:w-4/5 mx-auto">
          Averna Homes was crafted from a desire to build quality individual
          homes, with a focus on providing clients with a personal, and
          enjoyable building experience.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-y-10 py-16">
          <h2 className="text-3xl md:text-5xl font-light md:w-full">
            Luxury Homes
          </h2>
          <Link
            href="/"
            className="flex gap-x-1 items-center uppercase py-2 px-6 border border-neutral-950 rounded-full w-auto text-xl hover:bg-neutral-950 transition-all duration-700 group "
          >
            <p className="group-hover:text-neutral-50 transition-all duration-700 whitespace-nowrap">
              Portfolio
            </p>
            <div className="group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-50 transition-all duration-700">
              <GoArrowUpRight />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:gap-10 md:py-32">
          {images.map((data) => (
            <div
              key={data.id}
              style={{
                paddingLeft: data.id % 2 !== 0 ? "50px" : "0",
              }}
              className="md:my-28 scale-50 md:scale-100"
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
        <div className="w-full aspect-video relative overflow-x-hidden rounded-2xl bg-black md:mb-32">
          <Image
            src="/images/your-journey.jpg"
            width={2000}
            height={2000}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover grayscale opacity-60"
          />
          <Marquee
            autoFill
            pauseOnHover
            className="relative overflow-hidden top-6"
          >
            <div className="flex items-center gap-6 w-full text-white">
              <div className="border-b border-white h-1 w-[50px]"></div>
              <p className="text-3xl md:text-5xl font-light whitespace-nowrap">
                Your Journey
              </p>
              <div className="border-b border-white h-1 w-[50px]"></div>
            </div>
          </Marquee>
          <div className="w-full flex flex-col items-end gap-y-4 text-2xl font-light absolute bottom-16 right-6 text-white">
            <p className="md:w-[50%] flex justify-end ">
              Averna Homes is committed to creating beautiful new homes that
              reflect the unique vision and style of their clients. With a focus
              on quality craftsmanship and attention to detail, the journey to
              creating a dream home with Averna Homes will surely be a rewarding
              and exciting experience.
            </p>
            <Link
              href="/the-process"
              className="flex gap-x-1 items-center uppercase py-2 px-6 border border-neutral-50 hover:border-neutral-950 rounded-full w-auto text-xl hover:bg-neutral-50 transition-all duration-700 group "
            >
              <p className="group-hover:text-neutral-950 transition-all duration-700 whitespace-nowrap">
                Discorver Now
              </p>
              <div className="group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-950 transition-all duration-700">
                <GoArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 py-16 md:py-36">
          <div className="flex flex-col items-start gap-y-3 md:w-[50%] lg:w-[35%]">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-light">
              Perth&apos;s award-winning luxury home builder.
            </h1>
            <p className="text-lg md:text-2xl">
              Recognition from our industry peers.
            </p>
          </div>
          <Link
            href="/awards"
            className="flex gap-x-1 items-center uppercase py-2 px-6 border border-neutral-950 rounded-full w-max text-xl hover:bg-neutral-950 transition-all duration-700 group "
          >
            <p className="group-hover:text-neutral-50 transition-all duration-700">
              View Awards
            </p>
            <div className="group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-50 transition-all duration-700">
              <GoArrowUpRight />
            </div>
          </Link>
        </div>
        <div className="py-16 md:pt-36">
          <Accordion type="multiple" className="w-full">
            {awards.map((award, index) => (
              <AccordionItem key={index} value={award.year}>
                <AccordionTrigger className="text-2xl md:text-3xl hover:bg-gray-200 pl-4 data-[state=open]:pl-6 duration-500 h-16 md:h-24 font-light">
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
      </div>
    </motion.div>
  );
}
