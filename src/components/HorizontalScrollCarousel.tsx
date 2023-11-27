"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/images/Carousel/Building your luxury dream home in Perth.jpg",
    title: "Building your luxury dream home in Perth",
    id: 1,
  },
  {
    url: "/images/Carousel/Two-storey homes in Perth.jpg",
    title: "Two-storey homes in Perth",
    id: 2,
  },
  {
    url: "/images/Carousel/Averna Homes Wins 2018 HIA-CSR Australian Housing Awards Spec Home Award.jpg",
    title:
      "Averna Homes Wins 2018 HIA-CSR Australian Housing Awards Spec Home Award!",
    id: 3,
  },
  {
    url: "/images/Carousel/2017 HIA Australian Spec Home Winner.webp",
    title: "2017 HIA Australian Spec Home Winner",
    id: 4,
  },
  {
    url: "/images/Carousel/How technology influences custom home designs.webp",
    title: "How technology influences custom home designs",
    id: 5,
  },
  {
    url: "/images/Carousel/Where in Perth to build a luxury home.webp",
    title: "Where in Perth to build a luxury home",
    id: 6,
  },
  {
    url: "/images/Carousel/Project vs private builders in Perth.webp",
    title: "Project vs private builders in Perth",
    id: 7,
  },
];
const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default HorizontalScrollCarousel;
const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
