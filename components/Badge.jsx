import Image from "next/image";
import React from "react";

function Badge({ containerStyles }) {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src="/assets/badge.svg"
        fill
        alt=""
        className="object-container"
      />
    </div>
  );
}

export default Badge;
