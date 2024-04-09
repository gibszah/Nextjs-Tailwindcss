"use client";
import React from "react";
import Image from "next/image";
import Backdrop from "../UI/backdrop";

const About = () => {
  return (
    <>
      <div>
        <Backdrop />
        <div className="absolute opacity-10 right-1/4">
          <Image
            alt=""
            src="/huricane.svg"
            width={315}
            height={315}
            className="animate-spinMSlow"
          />
        </div>
      </div>
      <div className="mt-5 animate-fadeIn">
        <div className="relative z-10 font-poppins">
          <div className="flex flex-col justify-start mx-3 ">
            <div className="text-3xl font-bold font-poppins"> It&apos;s me</div>{" "}
            <span className="text-4xl font-bold tracking-wide font-poppins text-stone-200">
              Sobirin Az.
            </span>
          </div>
        </div>

        <div className="relative z-10 mt-5 max-w-auto font-poppins">
          <article className="max-w-[700px] text-end">
            <div className="flex mx-5 float-end top-24">
              <Image
                alt=""
                width={115}
                height={215}
                src="/itsme.jpg"
                className="z-10"
              />
            </div>
            <p className="mx-5 tracking-wide sm:text-lg animate-slideInRight">
              As an enthusiastic full-stack developer, I specialize in{" "}
              <strong>Next.js</strong> , React.js, MongoDB, Express.js, and
              Tailwind CSS.
            </p>
            <p className="mx-5 mt-1 tracking-wide sm:text-lg animate-slideInRight">
              {" "}
              A significant accomplishment of mine is leading the development of
              a cashier offline <strong>application</strong> for a pharmacy
              store.
            </p>
            <p className="mx-2 mt-3 animate-slideInRight">
              &quot; Let &apos;s team up to create impactful digital experiences
              that drive success and innovation. &quot;
            </p>
          </article>

          <table className="mx-3 mt-5 tracking-wide">
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
    </>
  );
};

export default About;
