import Navbar from "@/components/header/navbar";
import Backdrop from "@/components/UI/backdrop";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="fixed inset-0 z-0">
        <Backdrop />
      </div>
    </>
  );
}
