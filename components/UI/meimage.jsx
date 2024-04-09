import Image from "next/image";

export default function Meprofile() {
  return (
    <Image
      className="h-10 rounded-full w-9"
      src="/profil.jpg"
      width={28}
      height={10}
      alt="Picture of the author"
    />
  );
}
