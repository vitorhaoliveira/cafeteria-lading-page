import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", name: "Inicio" },
  { href: "/", name: "Explorar" },
  { href: "/", name: "Sobre" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contato" },
];

const getLetter = (name) => {
  let letters = [];
  name.split("").forEach((letter, i) => {
    letters.push(<span key={i}>{letter}</span>);
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
            {link.name}
          </Link>
        );
      })}
    </ul>
  );
}

export default NavList;
