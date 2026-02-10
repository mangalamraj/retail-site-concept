"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { AuroraBackground } from "../ui/aurora-background";
import TrustedBy from "../trustedBy/trustedBy";
import DisplayImage from "../displayImage/displayImage";
import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";

const HeroSection = () => {
  return (
    <div className=" max-w-380  m-auto flex flex-col gap-5 md:gap-10 justify-center md:items-center">
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
      <div className="relative m-auto  w-[90%] flex flex-col md:gap-4 gap-2 items-start md:items-center md:text-center mt-40 md:mt-60 ">
        <Badge variant={"outline"} className="p-2 px-4  md:text-center">
          Retail Simplified
        </Badge>

        <TextAnimate
          animation="blurInUp"
          duration={0.6}
          once
          by="word"
          segmentClassName="text-4xl md:text-7x  text-left md:text-center lg:text-9xl font-bold tracking-tight bg-linear-to-b text-black from-60% dark:from-gray-200 dark:to-gray-800 bg-clip-text dark:text-transparent"
        >
          Retail Ready
        </TextAnimate>
        <div className="text-lg md:text-center text-left inline md:text-2xl text-gray-400">
          <TextAnimate animation="blurInUp" once delay={1}>
            Meet the system enabling brands and 3PLs to achieve zero chargebacks
          </TextAnimate>
          <TextAnimate animation="blurInUp" once delay={1.2}>
            while helping retailers process inbound shipments faster.
          </TextAnimate>
        </div>
      </div>
      <BlurFade
        delay={1.25}
        className="z-4 w-[90%] m-auto md:flex md:justify-center"
      >
        <div className="group relative w-fit md:w-inherit overflow-hidden rounded-full shadow-2xl dark:shadow-gray-500/100 cursor-pointer ">
          <div className="h-20 w-10  -top-4 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute -left-16 group-hover:left-[150%] duration-700 blur-sm  -rotate-45 " />
          <div
            className="rounded-full p-[1.5px] w-fit md:w-inherit"
            style={{
              background:
                "linear-gradient(90deg, rgb(30,30,30) 0%, rgb(51,51,51) 18%, rgb(156,156,156) 66%, rgb(30,30,30) 100%)",
              boxShadow: "rgba(255,255,255,0.25) 0px 4px 32px",
            }}
          >
            <Button
              className="rounded-full bg-black px-6 py-2 text-white hover:bg-black border-none"
              style={{
                paddingTop: "25px",
                paddingBottom: "25px",
                paddingLeft: "35px",
                paddingRight: "35px",
              }}
            >
              Meet With Us
            </Button>
          </div>
        </div>
      </BlurFade>
      <DisplayImage />

      {/*<TrustedBy />*/}
    </div>
  );
};

export default HeroSection;
