import Link from "next/link";
import { delay, motion } from "framer-motion";

const links = [
  { href: "/", name: "Inicio" },
  { href: "/", name: "Explorar" },
  { href: "/", name: "Sobre" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contato" },
];

const letterAnim = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: "1",
      ease: [0.6, 0, 0.2, 1],
      delay: i[0],
    },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.08,
      ease: [0.6, 0, 0.2, 1],
      delay: i[1],
    },
  }),
};

const getLetter = (name) => {
  let letters = [];
  name.split("").forEach((letter, i) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[i * 0.04, (name.length - i) * 0.01]}
        key={i}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

function NavList() {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, i) => {
        return (
          <Link
            href={link.href}
            key={i}
            className="flex overflow-hidden hover:text-white transition-all"
          >
            {getLetter(link.name)}
          </Link>
        );
      })}
    </ul>
  );
}

export default NavList;
