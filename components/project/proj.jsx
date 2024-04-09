import Image from "next/image";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mx-10 mt-24 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4">
      <div className="box-border flex items-center justify-center text-center transition-all rounded-md shadow cursor-pointer border-l-pink-600 hover:text-blue-900 hover:scale-110">
        <div className="px-1 py-2 bg-white shadow-xl">
          <a
            href="https://sampling-dp1xuns9a-gibszah.vercel.app/"
            target="_blank"
          >
            <div className="">
              <Image
                alt=""
                src="/japanese.png"
                width={300}
                height={200}
                className="h-40"
              />
            </div>
            <div className="mx-5 text-start">
              <h1 className="text-[20px] font-bold font-poppins text-blue-600/75 ">
                Japanese Company
              </h1>
              <span className="text-[14px] italic tracking-tighter font-poppins">
                I was creating this app for Japanese Company, the purpose of
                this app is for tracking expedition and calculate estimate
                delivery date (ETA).
              </span>
            </div>
          </a>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default ProjectPage;
