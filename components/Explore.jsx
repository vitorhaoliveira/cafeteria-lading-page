import Image from "next/image";

function Explore() {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="bg-yellow-200 w-full flex flex-col lg:flex-row gap-12 xl:gap-20 ">
          <div className="flex-1 bg-blue-200 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-1.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Misturas ricas de café expresso
                </h3>
                <p className="max-w-[400px]">
                  Delicie-se com os sabores profundos e robustos das nossas
                  misturas de café expresso habilmente elaboradas. Perfeito para
                  um lanche rápido ou um deleite descontraído à tarde.
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-1.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Misturas ricas de café expresso
                </h3>
                <p className="max-w-[400px]">
                  Delicie-se com os sabores profundos e robustos das nossas
                  misturas de café expresso habilmente elaboradas. Perfeito para
                  um lanche rápido ou um deleite descontraído à tarde.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="flex-1 bg-pink-200 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
          <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-1.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Misturas ricas de café expresso
                </h3>
                <p className="max-w-[400px]">
                  Delicie-se com os sabores profundos e robustos das nossas
                  misturas de café expresso habilmente elaboradas. Perfeito para
                  um lanche rápido ou um deleite descontraído à tarde.
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-1.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Misturas ricas de café expresso
                </h3>
                <p className="max-w-[400px]">
                  Delicie-se com os sabores profundos e robustos das nossas
                  misturas de café expresso habilmente elaboradas. Perfeito para
                  um lanche rápido ou um deleite descontraído à tarde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
