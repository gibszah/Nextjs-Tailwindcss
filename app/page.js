import Navbar from "@/components/header/navbar";
import ProjectPage from "@/components/project/proj";
import Backdrop from "@/components/UI/backdrop";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="fixed inset-0 z-0">
        <Backdrop />
      </div>

      <div className="fixed w-full h-full bg-center bg-cover opacity-5">
        <Image
          alt=""
          width={750}
          height={150}
          src="/line.jpg"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="fixed h-full opacity-5">
        <Image
          alt=""
          width={450}
          height={150}
          src="/spingsun.svg"
          className="object-cover w-full h-full animate-spinSLow"
        />
      </div>

      <div className="mt-14 animate-fadeIn">
        <div className="animate-slideInRight">
          <strong className="font-bold font-poppins text-[40px] mx-5">
            Project List
          </strong>
        </div>
        <ProjectPage />
      </div>
    </>
  );
}
