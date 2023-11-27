"use client";
import React, { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
