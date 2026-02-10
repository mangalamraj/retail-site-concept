"use client";
import { ClockCheck, Cog, Smartphone, Zap } from "lucide-react";
import { useState } from "react";
import { GlareCard } from "../ui/glare-card";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";

const Features = () => {
  const [hover, setHover] = useState(true);
  return (
    <div className="max-w-380   m-auto md:text-center z-10">
      <div className=" md:text-4xl w-[90%] md:w-full m-auto text-2xl font-medium  mb-1">
        The Challenge of Retail Compliance
      </div>
      <div className="text-base md:text-lg w-[90%] md:w-full m-auto  text-gray-400 font-normal mb-10">
        Retailers have complex shipping requirements that lead to costly
        chargebacks. <p>Heres how RetailReady solves this.</p>
      </div>
      <div className="flex gap-4 flex-col md:flex-row w-[90%] justify-center m-auto">
        <div
          className={` bg-gray-300/20 dark:bg-zinc-950  border-zinc-800 dark:border md:w-1/4   rounded-xl flex bg-[url(/cardeffect.svg)] bg-cover bg-center`}
        >
          <div className="flex flex-col md:gap-12 m-4  text-left">
            <div className="group flex m-2 gap-2  text-white p-1 rounded-full items-center duration-300 group-hover:px-4 font-semibold cursor-pointer">
              <div className=" rounded-full  bg-black hover:rotate-180 duration-300">
                <div className="p-3 rounded-full border-2 border-gray-600">
                  <Zap size={18} />
                </div>
              </div>{" "}
            </div>
            <div className="py-4 px-2">
              <div className="text-xl  pb-2">Lightning Fast Setup</div>
              <div className="text-sm font-base text-gray-600 dark:text-gray-400">
                Lightning Fast Setup Deploy across your warehouse network in
                days, not months. Immediate impact on operations.
              </div>
            </div>
          </div>
        </div>
        <div
          className={` bg-gray-300/20 dark:bg-zinc-950  border-zinc-800 dark:border  md:w-1/4   border-zinc-800 dark:border-2    rounded-xl flex bg-[url(/cardeffect.svg)] bg-cover bg-center`}
        >
          <div className="flex flex-col md:gap-12 m-4  text-left">
            <div className="group flex m-2 gap-2  text-white p-1 rounded-full items-center duration-300 group-hover:px-4 font-semibold cursor-pointer">
              <div className=" rounded-full  bg-black hover:rotate-360 duration-300">
                <div className="p-3 rounded-full border-2 border-gray-700">
                  <ClockCheck size={18} />
                </div>
              </div>{" "}
            </div>
            <div className="py-4 px-2 ">
              <div className="text-xl  pb-2">Real-time Updates</div>
              <div className="text-sm  text-gray-600 dark:text-gray-400">
                Stay ahead with instant notifications about compliance changes
                and requirements.
              </div>
            </div>
          </div>
        </div>
        <div
          className={` bg-gray-300/20 100 dark:bg-zinc-950  border-zinc-800 dark:border  md:w-1/4   border-zinc-800 dark:border-2    rounded-xl flex bg-[url(/cardeffect.svg)] bg-cover bg-center`}
        >
          <div className="flex flex-col md:gap-12 m-4  text-left">
            <div className="group flex m-2 gap-2  text-white p-1 rounded-full items-center duration-300 group-hover:px-4 font-semibold cursor-pointer">
              <div className=" rounded-full  bg-black hover:rotate-180 duration-300">
                <div className="p-3 rounded-full border-2 border-gray-700">
                  <Smartphone size={18} />
                </div>
              </div>{" "}
            </div>
            <div className="py-4 px-2">
              <div className="text-xl  pb-2">Mobile First</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Intuitive mobile interface designed for warehouse operations and
                on-the-go management.
              </div>
            </div>
          </div>
        </div>
        <div
          className={` bg-gray-300/20 100 dark:bg-zinc-950  border-zinc-800  dark:border-2  md:w-1/4   border-zinc-800   rounded-xl flex bg-[url(/cardeffect.svg)] bg-cover bg-center`}
        >
          <div className="flex flex-col md:gap-12 m-4  text-left">
            <div className="group flex m-2 gap-2  text-white p-1 rounded-full items-center duration-300 group-hover:px-4 font-semibold cursor-pointer">
              <div className=" rounded-full  bg-black hover:rotate-180 duration-300">
                <div className="p-3 rounded-full border-2 border-gray-700">
                  <Cog size={20} />
                </div>
              </div>{" "}
            </div>
            <div className="py-4 px-2">
              <div className="text-xl  pb-2">Automated Workflows</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Streamline operations with AI-powered task management and
                compliance checks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
