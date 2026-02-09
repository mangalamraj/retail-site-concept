"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    title: "Smart Order Processing",
    desc: "Start your fulfillment journey with our intuitive mobile interface. Directed packout workflows ensure accuracy from the first step.",
    image: "/p1.webp",
  },
  {
    title: "Proactive Compliance Checks",
    desc: "Prevent costly mistakes before they happen. Our system automatically validates retailer requirements, ensuring every SKU meets compliance standards before shipping.",
    image: "/p2.webp",
  },
  {
    title: "Guided Packaging Process",
    desc: "Follow clear, step-by-step instructions for proper labeling and packaging. Our system ensures every box is correctly labeled and ready for shipment.",
    image: "/p3.webp",
  },
  {
    title: "Verified Success",
    desc: "Celebrate each perfectly packed order! Our system confirms successful completion, giving you confidence that every shipment meets the highest standards.",
    image: "/p4.webp",
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-380 m-auto md:mt-10 md:mb-10 z-10">
      <div className="w-[80%] flex flex-col md:flex-row gap-10 m-auto justify-between">
        <div className="flex h-[600px] md:w-[55%] flex-col justify-between">
          <div className="text-4xl ">Order Processing</div>

          <div className="flex flex-col gap-3">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-gray-200/40 dark:bg-zinc-950 dark:border dark:text-black "
                    : " hover:scale-[1.01]"
                }`}
              >
                <div className="text-base dark:text-white ">{step.title}</div>
                <div
                  className={`text-sm font-semibold ${
                    activeIndex === index
                      ? "text-sm dark:text-gray-400 text-gray-500 "
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-full flex items-center">
          <div key={activeIndex} className="animate-[fadeUp_0.5s_ease-out]">
            <Image
              src={steps[activeIndex].image}
              alt="process"
              width={420}
              height={420}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
