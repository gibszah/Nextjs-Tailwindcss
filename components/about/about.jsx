"use client";
import React from "react";
import Image from "next/image";
import Backdrop from "../UI/backdrop";

const About = () => {
  return (
    <div className="">
      <div>
        <Backdrop />
      </div>
      <div className="relative z-10 font-poppins">
        <div className="flex flex-col justify-start mx-3 ">
          <div className="text-3xl font-poppins"> It&apos;s me</div>{" "}
          <span className="text-4xl font-poppins">Sobirin Az.</span>
        </div>
      </div>

      <div className="relative z-10 mt-5 max-w-auto font-poppins">
        <article className="max-w-[700px] text-end">
          <div className="flex float-end top-24  lg:w-[225px] lg:h-[225px] mx-2  sm:w-12 sm:h-12  md:w-12 md:h-12">
            <Image
              alt=""
              width={215}
              height={215}
              src="/itsme.jpg"
              className="rounded-full"
            />
          </div>
          <p className="mx-5 tracking-wide sm:text-lg">
            As an enthusiastic full-stack developer, I specialize in{" "}
            <strong>Next.js</strong> , React.js, MongoDB, Express.js, and
            Tailwind CSS.
          </p>
          <p className="mx-5 mt-1 tracking-wide sm:text-lg">
            {" "}
            A significant accomplishment of mine is leading the development of a
            cashier <strong>application</strong> for a pharmacy store.
          </p>
          <p className="mx-2 mt-3 tracking-wide sm:text-lg">
            Let &apos;s team up to create impactful digital experiences that
            drive success and innovation.
          </p>
        </article>

        <table className="mx-3 mt-5 tracking-wide ">
          <tbody className="gap-4">
            <tr>
              <td className="align-top">Age</td>
              <td className="align-top">:</td>
              <td className="">32</td>
            </tr>
            <tr>
              <td className="align-top">Residence</td>
              <td className="align-top">:</td>
              <td>Indonesia</td>
            </tr>
            <tr>
              <td className="align-top">Address</td>
              <td className="align-top">:</td>
              <td>East Java, INA</td>
            </tr>
            <tr>
              <td className="align-top">Education</td>
              <td className="align-top">:</td>
              <td className="text-wrap">
                Bachelor Degree of Electrical Engineering
              </td>
            </tr>
            <tr>
              <td className="align-top">Passionate</td>
              <td className="align-top">:</td>
              <td>Programming</td>
            </tr>
            <tr>
              <td className="align-top">Skill Proficiency</td>
              <td className="align-top">:</td>
              <td>
                Nextjs, React, Redux, React Native, Mongodb, Graphql,
                Tailwindcss, Javascript
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
