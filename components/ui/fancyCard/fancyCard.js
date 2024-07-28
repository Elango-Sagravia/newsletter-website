import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FancyCard() {
  return (
    <div className="flex mt-8 min-h-96">
      <div className="hidden flex-1 sm:block relative">
        <Image
          src="https://hedonova.b-cdn.net/Hedonova%20images/%20All%20Hedonova%20blogs/How%20to%20calculate%20your%20retirement%20needs/How%20to%20calculate%20your%20retirement%20needs.webp"
          alt="Example"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 bg-black text-white flex flex-col justify-center py-8">
        <span className="text-[12px] text-nl_background font-bold mb-2 block px-16">
          4 JUL 2024 <span className="text-4xl">.</span> 9 MIN READ
        </span>
        <a
          href="#"
          className="text-3xl px-16 leading-10 hover:decoration-solid hover:underline"
        >
          Single-family rentals (SFR): A beginner&apos;s guide to real estate
          investing
        </a>
        <div className="px-16 mt-4 flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="ml-4 text-[12px]">By Helen Lewis</span>
        </div>
      </div>
    </div>
  );
}
