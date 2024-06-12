import Draft from "@/components/Draft";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative text-white ">
      <div className="absolute z-10 w-full mt-6 p-3 flex justify-center items-center ">
        <Draft />
      </div>
      <Image
          src="/cover.jpg" // Replace with your image path
          alt="Background Image" // Provide an alt text description
          width={6000}
          height={3500}
          priority // Prioritize loading for critical backgrounds
          objectPosition="center"
          className="dark-background z-0 h-[1000px] w-full  object-cover "
          />
    </div>
  );
}
