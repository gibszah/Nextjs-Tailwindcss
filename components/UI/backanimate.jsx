import Image from "next/image";
import React from "react";

const BackAnimate = () => {
  return (
    <div className="absolute px-5 py-3 top-2 right-52">
      <div className="rounded-full animate-wiggle bg-gradient-to-r from-green-700 to-green-100">
        <Image alt="" width={50} height={50} src="/earth.svg" />
      </div>
    </div>
  );
};

export default BackAnimate;
