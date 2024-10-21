import Image from "next/image";
import Separator from "./Separator";
import Badge from "./Badge";

function OpeningHours() {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center ">
        <Image
          src="/assets/opening-hours/img.png"
          fill
          alt=""
          quality={100}
          priority
          className="object-cover"
        />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>

      <div></div>
    </section>
  );
}

export default OpeningHours;
