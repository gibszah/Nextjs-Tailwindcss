"use client";
import React, { useState } from "react";
import Link from "next/link";

import Meprofile from "../UI/meimage";
import Barnav from "../UI/bar.jsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // const [show, setShow] = useState(true);

  // const handleChange = () => {
  //   setShow(!show);
  // };

  return (
    <>
      <header className="w-full bg-neutral">
        {/* {show ? (
          <div className="flex flex-row items-center justify-between py-3">
            <div className="mx-4">
              <Link href="/" className="flex items-center space-x-2">
                <Meprofile />
                <span className="font-semibold font-poppins">
                  It&apos;s me
                </span>{" "}
              </Link>
            </div>
            <div className="flex items-center mx-4 space-x-3">
              <Link href="/dashboard" className="flex items-center w-auto py-3">
                <span className="px-10 py-2 bg-white border border-blue-800 rounded-full font-poppins border-spacing-2">
                  Download CV
                </span>
              </Link>
              <span onClick={handleChange} className="">
                <Barnav />
              </span>
            </div>
          </div>
        ) : (
          <div className="flex-col px-1 py-3 mx-3 mt-1 border shadow justify-items-center">
            <div className="mx-4">
              <Link href="/" className="flex items-center space-x-2">
                <Meprofile />
                <span className="font-semibold font-poppins">
                  It&apos;s me
                </span>{" "}
              </Link>
            </div>
            <div className="flex items-center ">
              <div className="flex flex-col w-full gap-2 hover font-poppins">
                <Link href="/" className="py-1 text-center border rounded-full">
                  home
                </Link>

                <Link
                  href="/dashboard/about"
                  className="py-1 text-center border rounded-full"
                >
                  about
                </Link>
                <Link
                  className="py-1 text-center border rounded-full"
                  href="/dashboard/contact"
                >
                  contact
                </Link>
              </div>
            </div>

            <div>
              <Link
                href="/dashboard"
                className="bottom-0 flex items-center w-auto py-3"
              >
                <span className="px-3 py-1 text-sm bg-blue-200 border border-blue-800 rounded-full font-poppins border-spacing-2">
                  Download CV
                </span>
              </Link>
            </div>
            <div onClick={handleChange} className="text-center">
              x
            </div>
          </div>
        )} */}

        <div className="flex flex-row items-center justify-between py-1">
          <div className="mx-4">
            <Link href="/" className="flex items-center space-x-2">
              <Meprofile />
              <span className="font-semibold font-poppins">
                {pathname === "/dashboard/about"
                  ? "About me"
                  : pathname === "/dashboard/contact"
                  ? "Contact"
                  : "Home"}
              </span>{" "}
            </Link>
          </div>
          <div className="flex items-center mx-4 space-x-3">
            <Link href="/dashboard" className="flex items-center w-auto py-3">
              <span className="px-10 py-1 mb-2 bg-white border border-blue-800 rounded-full font-poppins border-spacing-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
