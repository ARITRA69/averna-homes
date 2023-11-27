"use client";
import React, { useEffect, useState } from "react";
import LocalFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

type Props = {};

const Dune_Rise = LocalFont({ src: "../../public/fonts/Dune_Rise.ttf" });

const navs = [
  {
    id: 1,
    title: "Home",
    content: [
      {
        subContent: "Portfolio",
        link: "/portfolio",
      },
      {
        subContent: "On Show",
        link: "/on-show",
      },
      {
        subContent: "Awards",
        link: "/awards",
      },
    ],
  },
  {
    id: 2,
    title: "Journey",
    content: [
      {
        subContent: "The Process",
        link: "/the-process",
      },
    ],
  },
  {
    id: 3,
    title: "About",
    content: [
      {
        subContent: "Our Story",
        link: "/our-story",
      },
      {
        subContent: "Our People",
        link: "/our-people",
      },
      {
        subContent: "Latest News",
        link: "/latest-news",
      },
      {
        subContent: "Media",
        link: "/media",
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    content: [
      {
        subContent: "Contact us",
        link: "/contact",
      },
    ],
  },
];

const Navbar = (props: Props) => {
  const [active, setActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div
      className={`w-full py-6 z-50 sticky top-0  ${
        active
          ? "bg-gradient-to-b from-gray-700 to-transparent text-neutral-50"
          : "text-black"
      }`}
    >
      <div className="w-11/12 mx-auto flex justify-between">
        <Link href="/" className={`${Dune_Rise.className} uppercase text-3xl`}>
          Averna
        </Link>
        <div className="md:flex items-start justify-center gap-6 relative hidden">
          {navs.map((nav) => (
            <div
              key={nav.id}
              className="text-xl font-light uppercase"
              onMouseEnter={() => toggleDropdown(nav.id)}
              onMouseLeave={closeDropdown}
            >
              {nav.title}
              <div className="pt-4">
                {openDropdown === nav.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 w-full py-4 rounded bg-white p-4"
                  >
                    {nav.content.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="group flex-col justify-between text-gray-800 w-full"
                      >
                        <div className="flex justify-between group-hover:opacity-50 transition-all duration-500">
                          {item.subContent}
                          <div className="group-hover:-translate-y-1 transition-all duration-500">
                            <GoArrowUpRight />
                          </div>
                        </div>
                        {index < nav.content.length - 1 && (
                          <div className="w-full border-[0.1px] border-neutral-950 my-2"></div>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
