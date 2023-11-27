import { FC, ReactNode, useRef } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  children: ReactNode | string;
}

const WavyText: FC<Props> = ({
  delay = 0,
  duration = 0.05,
  children,
  ...props
}: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<any>(null); // Using any for inViewRef

  const [inView, setInView] = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Intersection threshold
    rootMargin: "0px", // Adjust as needed
  });

  inViewRef.current = inView;

  const text = children.toString();
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      ref={textRef}
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate={inViewRef.current ? "visible" : "hidden"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WavyText;
