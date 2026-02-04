"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { AuroraBackground } from "../ui/aurora-background";
import TrustedBy from "../trustedBy/trustedBy";

const HeroSection = () => {
  return (
    <div className="container m-auto flex flex-col gap-10 justify-center items-center">
      {/*<div className="absolute -top-100 bottom-0 flex gap-20">
        <Image
          src="/gradient2.svg"
          alt="gradient"
          width={900}
          height={900}
        ></Image>
        <Image
          src="/gradient2.svg"
          alt="gradient"
          width={900}
          height={900}
        ></Image>
      </div>*/}
      <div className="relative   flex flex-col gap-4 items-center text-center  mt-60 ">
        <Badge variant={"outline"} className="p-2 px-4">
          Retail Simplified
        </Badge>

        <div className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight bg-linear-to-b text-black from-60% dark:from-white dark:to-gray-800 bg-clip-text dark:text-transparent">
          Rolls Royce
        </div>
        <div className="text-2xl text-gray-400">
          <p>
            Meet the system enabling brands and 3PLs to achieve zero chargebacks
          </p>
          <p>while helping retailers process inbound shipments faster.</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-full dark:shadow-xl shadow-lg shadow-gray-500/50">
        <div className="h-20 w-10 -top-4 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute -left-16 group-hover:left-[150%] duration-700 blur-sm  -rotate-45 " />
        <Button className="cursor-pointer rounded-full p-6 text-white bg-black  hover:bg-black dark:border-2">
          Meet With Us
        </Button>
      </div>
      <TrustedBy />
    </div>
  );
};

export default HeroSection;
