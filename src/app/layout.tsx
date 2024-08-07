import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Lenis from "@studio-freight/lenis";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Averna Homes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.className} bg-white`}>
        <SmoothScroll>
          <Navbar />
          <div
            className="bg-white rounded-b-[20px] md:rounded-b-[60px] relative top-0 z-10 pb-5 overflow-hidden"
            style={{
              boxShadow:
                "0px 7px 7px 0px rgba(0,0,0,0.61), -webkit-box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.61),-moz-box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.61);",
            }}
          >
            <div className="rounded-b-[20px] md:rounded-b-[60px] relative top-0 z-[9] pb-20 shadow-slate-600 shadow-2xl">
              {children}
            </div>
            <Parallax offset={25}>
              <h1 className="text-3xl sm:text-5xl md:text-8xl p-4">
                2023 Averna Homes
              </h1>
            </Parallax>
          </div>
          {/* <Parallax offset={120}> */}
          <Footer />
          {/* </Parallax> */}
        </SmoothScroll>
      </body>
    </html>
  );
}
