import React from "react";
import Separator from "./Separator";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Expresso",
    description: "Café quente rico e ousado",
    price: "R$3.50",
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Cappuccino",
    description: "Expresso com leite vaporizado e espuma",
    price: "R$4.50",
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Latte",
    description: "Expresso com leite vaporizado",
    price: "R$4.50",
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Americano",
    description: "Expresso com água quente",
    price: "R$3.50",
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Mocha",
    description: "Expresso com chocolate e leite vaporizado",
    price: "R$5.50",
  },
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Mocchiato",
    description: "Expresso com um bocado de espuma",
    price: "R$3.75",
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Flat White",
    description: "Expresso com leite microespuma",
    price: "R$4.25",
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Iced Coffee",
    description: "Café gelado com gelo",
    price: "R$3.75",
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Affogato",
    description: "Dose de café expresso sobre sorvete de baunilha",
    price: "R$6.75",
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Irish Coffe",
    description: "Café com whisky irlandês e creme",
    price: "R$8.50",
  },
];

function Menu() {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Nosso menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero magni
            quod provident blanditiis aspernatur eos, vitae repudiandae eum
            ipsam tempore, sed deserunt facere, aut voluptatum dolore
            accusantium? Fugit, aspernatur quo.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 xl:gap-24">
        <div className="w-10/12 grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
          {menuItems.map((item, i) => {
            const { name, description, price, imgSrc } = item;
            return (
              <MenuItem
                name={name}
                description={description}   
                price={price}
                imgSrc={imgSrc}
                key={i}
              />
            );
          })}
        </div>
        <button className="btn">Veja o menu inteiro</button>
      </div>
    </section>
  );
}

export default Menu;
