"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";
import Image from "next/image";

export function CTA() {
  return (
    <div className="flex md:mt-20">
      <div className="w-[70%] m-auto flex gap-4 items-center align-middle">
        <div className="relative md:h-[470px] md:w-2/3 bg-[url(/storage.jpg)] bg-cover bg-center rounded-2xl flex flex-col justify-center text-5xl font-bold text-center leading-14">
          <div className="absolute w-full h-full bg-gray-800 opacity-25 z-1 rounded-2xl"></div>

          <div className="z-2 inline text-white">
            Turn{" "}
            <div className="relative inline p-2">
              <Image
                src="https://framerusercontent.com/images/JjcW9Nk5MxzPDLDza3h75BXs.svg?width=213&height=120"
                fill
                alt="circle"
                className="absolute"
              ></Image>
              every
            </div>
          </div>
          <p className="z-2 text-white"> staff into an expert</p>
        </div>
        <div className="container m-auto h-[30rem] w-1/3 rounded-2xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased m">
          <div className="max-w-2xl mx-auto p-4 mt-10">
            <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Join the future{" "}
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Many warehouses have already transformed their operations with
              RetailReady. Experience how our platform can revolutionize your
              supply chain compliance.
            </p>
            <div className="group relative overflow-hidden rounded-full dark:shadow-xl shadow-lg shadow-gray-500/50 z-2 w-35 m-auto">
              <div className="h-20 w-10 -top-4 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute -left-16 group-hover:left-[150%] duration-700 blur-sm  -rotate-45 " />
              <Button className="cursor-pointer rounded-full p-6 text-white bg-black  hover:bg-black border-2 border-gray-800">
                Meet With Us
              </Button>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
}
