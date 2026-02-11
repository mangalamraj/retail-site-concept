"use client";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";

const StakeHolders = () => {
  const [hover, setHover] = useState(true);
  return (
    <div className="md:container w-[90%] m-auto md:text-center  ">
      <div className="md:text-4xl md:w-full m-auto text-2xl font-medium">
        Value for every stakeholder
      </div>
      <div className="text-base md:text-lg  md:w-full m-auto  text-gray-400  font-normal mt-1">
        We value all of our stakeholders
      </div>
      <div className="flex flex-col xl:flex-row gap-4 md:w-[80%] w-full h-full m-auto mt-10 text-white ">
        <div
          className={`${hover ? "xl:w-2/3" : "xl:w-1/4"} relative h-[400px] duration-400 bg-black dark:bg-zinc-950 rounded-xl border cursor-pointer overflow-hidden text-left flex p-5 md:hover:p-8 mt`}
        >
          <div className="flex flex-col justify-end align-text-bottom h-full w-full">
            <div className="text-2xl font-medium">For 3PLs.</div>
            <div
              className={`text-base  ${hover ? "w-full h-fit text-white" : "md:w-0 md:h-0"}   overflow-hidden md:duration:300`}
            >
              Streamline Your Operations
            </div>
            <div
              className={`flex gap-2 text-xs font-bold w-0 h-0 ${hover ? "md:w-full md:h-fit text-white mt-4" : "md:w-0 md:h-0"} overflow-hidden duration:300`}
            >
              <Badge className=" text-gray-400 dark:text-black border border-zinc-600 dark:border-0">
                Smart Packout Flow
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Task Management
                </div>
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  EDI Services
                </div>
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Automated ASN
                </div>
              </Badge>
            </div>
          </div>
          <div className="mt-auto rounded-full bg-gray-700 p-2 border border-gray-600 hover:-translate-y-1.5 hover:translate-x-1.5 duration-300">
            <ArrowRight size={20} className="-rotate-45" />
          </div>
          <div
            className={`absolute w-[480px] h-[300px] rounded-2xl -top-4 -right-4 md:${hover ? "opacity-75 md:blur-none" : "opacity-40 md:blur-sm"}`}
          >
            <Image
              src="/threepl.webp"
              fill
              alt="3pl"
              className="rounded-md fixed"
            />
          </div>
        </div>
        <div
          className="relative group xl:w-1/4 xl:hover:w-2/3 duration-400 h-[400px] bg-black dark:bg-zinc-950 border rounded-xl cursor-pointer overflow-hidden text-left flex p-5 hover:p-8 mt"
          onMouseOver={() => {
            setHover(false);
          }}
          onMouseLeave={() => {
            setHover(true);
          }}
        >
          <div className="flex flex-col justify-end align-text-bottom h-full w-full">
            <div className="text-2xl font-medium">For Brands.</div>
            <div className="text-base md:w-0 md:h-0 w-full md:group-hover:w-full md:group-hover:h-fit group-hover:text-white overflow-hidden duration:300">
              Maximize Your Performance
            </div>
            <div className="flex gap-2 text-xs font-bold  w-0  h-0 md:group-hover:w-full md:group-hover:h-fit group-hover:text-white md:group-hover:mt-4 overflow-hidden duration:300">
              <Badge className=" text-gray-400 dark:text-black border border-zinc-600 dark:border-0">
                AI Chargeback Processing
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Analytics Dashboard
                </div>
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Vendor Scorecard
                </div>
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Dispute Analytics
                </div>
              </Badge>
            </div>
          </div>
          <div className="mt-auto rounded-full bg-gray-700 p-2 border border-gray-600 hover:-translate-y-1.5 hover:translate-x-1.5 duration-300">
            <ArrowRight size={20} className="-rotate-45" />
          </div>
          <div className="absolute w-[480px] h-[300px] rounded-2xl -top-4 -right-4 md:group-hover:opacity-75 md:opacity-40 md:blur-sm md:group-hover:blur-none">
            <Image
              src="/brandnew.webp"
              fill
              alt="3pl"
              className="rounded-md fixed"
            />
          </div>
        </div>
        <div
          className="relative group xl:w-1/4 xl:hover:w-2/3 duration-400 h-[400px] bg-black dark:bg-zinc-950 border rounded-xl cursor-pointer overflow-hidden text-left flex p-5 hover:p-8 mt"
          onMouseOver={() => {
            setHover(false);
          }}
          onMouseLeave={() => {
            setHover(true);
          }}
        >
          <div className="flex flex-col justify-end align-text-bottom h-full w-full">
            <div className="text-2xl font-medium">For Retailers.</div>
            <div className="text-base md:w-0 md:h-0 w-full md:group-hover:w-full md:group-hover:h-fit group-hover:text-white overflow-hidden duration:300">
              Optimize Your Receiving Process
            </div>
            <div className="flex gap-2 text-xs font-bold  w-0   h-0 md:group-hover:w-full md:group-hover:h-fit md:group-hover:text-white md:group-hover:mt-4 overflow-hidden duration:300">
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Requirements Control
                </div>
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Inbound Automation
                </div>
              </Badge>
              <Badge className="border border-zinc-600 dark:border-0">
                <div className=" text-gray-400 dark:text-black">
                  Vendor Management
                </div>
              </Badge>
            </div>
          </div>
          <div className="mt-auto rounded-full bg-gray-700 p-2 border border-gray-600 md:hover:-translate-y-1.5 md:hover:translate-x-1.5 md:duration-300">
            <ArrowRight size={20} className="-rotate-45" />
          </div>
          <div className="absolute w-[480px] h-[300px] rounded-2xl -top-4 -right-4 md:group-hover:opacity-75 md:opacity-40 md:blur-sm md:group-hover:blur-none">
            <Image
              src="/form.webp"
              fill
              alt="3pl"
              className="rounded-md fixed"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 text-xs text-gray-400 font-semibold ">
        Many warehouses have already transformed their operations with
        RetailReady.{" "}
        <span className="dark:text-white text-zinc-600 hover:underline cursor-pointer ">
          Know More
        </span>
      </div>
    </div>
  );
};

export default StakeHolders;
