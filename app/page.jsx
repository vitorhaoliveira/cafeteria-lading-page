"use client";
import Hero from "@/components/Hero";
import { useEffect } from "react";

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
      <div className="h-[4000px]"></div>
    </main>
  );
}

export default Home;
