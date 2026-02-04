"use client";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";

const StakeHolders = () => {
  const [hover, setHover] = useState(true);
  return (
    <div className="container m-auto text-center font-semibold pb-10 mb-20">
      <div className="text-4xl">Value for every stakeholder</div>
      <div className="text-base font-semibold text-gray-400 mt-2">
        We value all of our stakeholders
      </div>
      <div className="flex gap-4 w-[80%] m-auto mt-10 text-white ">
        <div
          className={`${hover ? "w-2/3" : "w-1/4"} relative duration-400  bg-black rounded-xl cursor-pointer overflow-hidden text-left flex p-5 hover:p-8 mt`}
        >
          <div className="flex flex-col justify-end align-text-bottom h-full w-full">
            <div className="text-2xl font-bold">For 3PLs.</div>
            <div
              className={`text-lg font-semibold  ${hover ? "w-full h-fit text-whit" : "w-0 h-0"}   overflow-hidden duration:300`}
            >
              Streamline Your Operations
            </div>
            <div
              className={`flex gap-2 text-xs font-bold w-0 h-0 ${hover ? "w-full h-fit text-white mt-4" : "w-0 h-0"} overflow-hidden duration:300`}
            >
              <Badge className=" text-gray-400 dark:text-black">
                Smart Packout Flow
              </Badge>
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  Task Management
                </div>
              </Badge>
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  EDI Services
                </div>
              </Badge>
              <Badge>
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
            className={`absolute w-[480px] h-[300px] rounded-2xl -top-4 -right-4 ${hover ? "opacity-75 blur-none" : "opacity-40 blur-sm"}`}
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
          className="relative group w-1/4 hover:w-2/3 duration-400  bg-black rounded-xl cursor-pointer overflow-hidden text-left flex p-5 hover:p-8 mt"
          onMouseOver={() => {
            setHover(false);
          }}
          onMouseLeave={() => {
            setHover(true);
          }}
        >
          <div className="flex flex-col justify-end align-text-bottom h-full w-full">
            <div className="text-2xl font-bold">For Brands.</div>
            <div className="text-lg font-semibold w-0 h-0 group-hover:w-full group-hover:h-fit group-hover:text-white overflow-hidden duration:300">
              Maximize Your Performance
            </div>
            <div className="flex gap-2 text-xs font-bold  w-0   h-0 group-hover:w-full group-hover:h-fit group-hover:text-white group-hover:mt-4 overflow-hidden duration:300">
              <Badge className=" text-gray-400 dark:text-black">
                AI Chargeback Processing
              </Badge>
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  Analytics Dashboard
                </div>
              </Badge>
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  Vendor Scorecard
                </div>
              </Badge>
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  Dispute Analytics
                </div>
              </Badge>
            </div>
          </div>
          <div className="mt-auto rounded-full bg-gray-700 p-2 border border-gray-600 hover:-translate-y-1.5 hover:translate-x-1.5 duration-300">
            <ArrowRight size={20} className="-rotate-45" />
          </div>
          <div className="absolute w-[480px] h-[300px] rounded-2xl -top-4 -right-4 group-hover:opacity-75 opacity-40 blur-sm group-hover:blur-none">
            <Image
              src="/brandnew.webp"
              fill
              alt="3pl"
              className="rounded-md fixed"
            />
          </div>
        </div>
        <div
          className="relative group w-1/4 hover:w-2/3 duration-400 h-[400px] bg-black rounded-xl cursor-pointer overflow-hidden text-left flex p-5 hover:p-8 mt"
          onMouseOver={() => {
            setHover(false);
          }}
          onMouseLeave={() => {
            setHover(true);
          }}
        >
          <div className="flex flex-col justify-end align-text-bottom h-full w-full">
            <div className="text-2xl font-bold">For Retailers.</div>
            <div className="text-lg font-semibold w-0 h-0 group-hover:w-full group-hover:h-fit group-hover:text-white overflow-hidden duration:300">
              Optimize Your Receiving Process
            </div>
            <div className="flex gap-2 text-xs font-bold  w-0   h-0 group-hover:w-full group-hover:h-fit group-hover:text-white group-hover:mt-4 overflow-hidden duration:300">
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  Requirements Control
                </div>
              </Badge>
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  Inbound Automation
                </div>
              </Badge>
              <Badge>
                <div className=" text-gray-400 dark:text-black">
                  Vendor Management
                </div>
              </Badge>
            </div>
          </div>
          <div className="mt-auto rounded-full bg-gray-700 p-2 border border-gray-600 hover:-translate-y-1.5 hover:translate-x-1.5 duration-300">
            <ArrowRight size={20} className="-rotate-45" />
          </div>
          <div className="absolute w-[480px] h-[300px] rounded-2xl -top-4 -right-4 group-hover:opacity-75 opacity-40 blur-sm group-hover:blur-none">
            <Image
              src="/form.webp"
              fill
              alt="3pl"
              className="rounded-md fixed"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 text-xs text-gray-400">
        Many warehouses have already transformed their operations with
        RetailReady.
      </div>
    </div>
  );
};

export default StakeHolders;
