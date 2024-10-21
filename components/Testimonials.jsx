import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    message:
      "O café aqui é absolutamente incrível! Os baristas são habilidosos e o ambiente é perfeito tanto para trabalho quanto para relaxamento.",
    name: "Alice Johnson",
    profession: "Designer gráfico",
  },
  {
    message:
      "Adoro vir a este café. Os doces são sempre frescos e a equipe é extremamente simpática. É o meu local preferido para reuniões.",
    name: "Michael Lee",
    profession: "Escritor freelancer",
  },
  {
    message:
      "Uma jóia escondida! O ambiente é aconchegante e o cardápio oferece uma grande variedade. O chai latte é imperdível.",
    name: "Samantha Green",
    profession: "Especialista em marketing",
  },
];

function Testimonials() {
  return (
    <section className="h-[60px] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        <Swiper
          navigation={true}
          modules={{ Navigation }}
          className="h-[400px]"
        >
          {testimonials.map((person, i) => {
            return (
              <SwiperSlide key={i} className="w-full h-full">
                <div className="flex justify-center h-full xl:pt-14">
                  <div className="max-w-[60%] text-primary">
                    <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                    <p className="text-2xl font-secundary text-center mb-8">
                      {person.message}
                    </p>
                    <div className="text-center">
                      <p className="text-xl font-bold mb-1">{person.name}</p>
                      <p className="text-secundary">{person.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
