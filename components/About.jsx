"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Nossa jornada",
    description:
      "Fundada em 2000, a Zenbrew começou como um pequeno café com uma visão de café excepcional. Agora uma marca querida, somos conhecidos pela qualidade e sustentabilidade. Movidos pela paixão, criamos experiências de café memoráveis. Junte-se a nós na exploração do café, uma xícara de cada vez.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Nossa promessa",
    description:
      "Na Zenbrew prometemos o melhor café com impacto positivo. Obtemos grãos de fazendas sustentáveis, respeitando as pessoas e o planeta. Nossa torra meticulosa garante uma experiência rica e satisfatória. Estamos comprometidos com a qualidade, a sustentabilidade e a comunidade.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Nosso time",
    description:
      "Na Zenbrew, nossa equipe dedicada está por trás de cada grande xícara. Nossos baristas qualificados e torrefadores especializados trabalham com paixão e precisão, tornando cada experiência de café especial. Conheça as pessoas que trazem criatividade e cuidado a cada xícara e conheça suas histórias únicas.",
  },
];

function About() {
  const scrollAbleSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollAbleSectionRef}>
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="w-screen h-screen flex flex-col justify-center items-center relative"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />
                      <div className="max-w-[560px] text-center">
                        <h2 className="h2 text-white mb-4">
                          <span className="mr-4">
                            {item.title.split(" ")[0]}
                          </span>
                          <span className="text-accent">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>
                        <div className="mb-8">
                          <Separator />
                        </div>
                        <p className="loading-relaxed mb-16 px-8 xl:px-0">
                          {item.description}
                        </p>
                        <button className="btn">Veja mais</button>
                      </div>
                    </div>
                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                      <Image src={item} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
