import Image from "next/image";
import React from "react";

function MenuItem({ imgSrc, name, description, price }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={imgSrc}
          fill
          alt=""
          priority
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default MenuItem;
