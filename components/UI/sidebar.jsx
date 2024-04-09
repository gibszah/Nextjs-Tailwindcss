"use client";

import React from "react";
import Link from "next/link";
import Button from "./button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/dashboard/about";
  const isContact = pathname === "/dashboard/contact";

  return (
    <>
      <div className="absolute h-auto py-1 mt-3 rounded-md bg-gradient-to-r from-cyan-600 to-indigo-100 sm:top-32 top-12 md:top-32 lg:top-32 xl:top-32 right-2">
        <div className="inline-flex items-center justify-center gap-2 lg:gap-5 md:gap-5 xl:gap-5 lg:flex lg:flex-col md:flex md:flex-col xl:flex xl:flex-col opacity-40 hover:opacity-100 focus:opacity-100 ">
          <div className="mt-1">
            <Button>
              <Link
                href="/"
                className=" text-md flex flex-col focus:bg-green-500 focus:scale-100 text-center items-center justify-center font-poppins transition duration-150 ease-in-out ..."
              >
                <Image
                  width={8}
                  height={8}
                  className={`w-7 h-7 ${isHome ? "scale-150" : ""}`}
                  alt=""
                  src="/home.svg"
                />
                home
              </Link>
            </Button>
          </div>

          <div className="mt-1">
            <Button>
              <Link
                href="/dashboard/about"
                className=" text-md flex flex-col focus:bg-green-500 focus:scale-100 text-center items-center justify-center font-poppins transition duration-150 ease-in-out ..."
              >
                <Image
                  width={8}
                  height={8}
                  className={`w-7 h-7 ${isAbout ? "scale-150" : ""}`}
                  alt=""
                  src="/aboutme.svg"
                />
                <span className="text-[12px]">about me</span>
              </Link>
            </Button>
          </div>
          <div className="mt-1">
            <Button>
              <Link
                href="/dashboard/contact"
                className=" text-md flex flex-col text-center focus:bg-green-500 focus:scale-100  items-center justify-center font-poppins transition duration-150 ease-in-out ..."
              >
                <Image
                  width={8}
                  height={8}
                  className={`w-5 h-7 ${
                    isContact ? "scale-150" : "-scale-x-60"
                  }`}
                  alt=""
                  src="/contact.svg"
                />
                contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
