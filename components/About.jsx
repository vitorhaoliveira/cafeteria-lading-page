"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Nossa jornada",
    description:
      "Fundada em 2000, a Zenbrew começou como um pequeno café com uma visão de café excepcional. Agora uma marca querida, somos conhecidos pela qualidade e sustentabilidade. Movidos pela paixão, criamos experiências de café memoráveis. Junte-se a nós na exploração do café, uma xícara de cada vez.",
  },
];

function About() {
  return <div>About</div>;
}

export default About;
