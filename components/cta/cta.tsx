"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <div className="container m-auto h-[30rem] w-[65%] rounded-2xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased mb-10">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the future{" "}
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Many warehouses have already transformed their operations with
          RetailReady. Experience how our platform can revolutionize your supply
          chain compliance.
        </p>
        <div className="group relative overflow-hidden rounded-full dark:shadow-xl shadow-lg shadow-gray-500/50 z-40 w-35 m-auto">
          <div className="h-20 w-10 -top-4 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute -left-16 group-hover:left-[150%] duration-700 blur-sm  -rotate-45 " />
          <Button className="cursor-pointer rounded-full p-6 text-white bg-black  hover:bg-black border-2 border-gray-800">
            Meet With Us
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
