"use client";
import { useEffect } from "react";

import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import About from "@/components/About";

function Home() {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <main className="h-full overflow-x-hidden ">
      <Hero />
      <Explore />
      <About />
      <div className="h-[4000px]"></div>
    </main>
  );
}

export default Home;
