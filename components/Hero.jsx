"use client";

import Badge from "./Badge";
import Separator from "./Separator";

function Hero() {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]"></div>

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento video
      </video>

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full">
          <Badge />

          <h1 className="h1 text-white">
            <span className="text-accent">Coffe</span> & Joy
          </h1>

          <Separator />

          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Experience the joy of exceptional coffee in our cozy space, where
            every cup is crafted with passion and warmth
          </p>

          <button className="btn">Nosso menu</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
