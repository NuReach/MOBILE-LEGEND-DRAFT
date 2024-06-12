import Draft from "@/components/Draft";
import HeroPatch from "@/components/HeroPatch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative text-white ">
      <Image
          src="/cover.jpg" // Replace with your image path
          alt="Background Image" // Provide an alt text description
          width={6000}
          height={3500}
          priority // Prioritize loading for critical backgrounds
          objectPosition="center"
          className="dark-background z-0 h-screen w-full  object-cover "
          />
    </div>
  );
}
