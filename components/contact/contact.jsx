"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactMe = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start mx-5 mt-10">
        <h1 className="mb-10 text-4xl font-bold font-jost">Contact Me</h1>
        <div className="flex items-center gap-2 px-2 tracking-wide cursor-pointer font-poppins hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-400">
          <a
            href="https://api.whatsapp.com/send?phone=+6285234125188&text=Halo, dari recruiter"
            target="_blank"
            className="relative"
          >
            <Image alt="" width={42} height={42} src="/wa.png" />
            <span className="absolute flex items-center justify-center w-5 h-5 text-black -right-3 -top-3">
              click
            </span>
          </a>
          +62 877 126 25 275
        </div>
        <div className="flex items-center gap-2 px-2 mt-5 tracking-wide cursor-pointer font-poppins hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-400">
          <Image src="/envelope.svg" alt="" width={32} height={32} />
          <span> ncgibs@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 px-2 mt-5 tracking-wide cursor-pointer font-poppins hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-400">
          <a
            className="flex items-center gap-2"
            href="https://github.com/gibszah"
          >
            <Image src="/github.svg" alt="" width={32} height={32} />
            <span> https://github.com/gibszah </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
