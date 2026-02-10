import Image from "next/image";
import { BlurFade } from "../ui/blur-fade";

const DisplayImage = () => {
  return (
    <div className="relative m-auto z-2 w-full">
      <div className="absolute md:w-[1200px] md:h-[1000px] w-[450px] h-[380px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-40 opacity-50 ">
        <div className="relative w-full h-full spinGradient">
          <Image
            src="/gradient.svg"
            alt="gradient"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="md:border-2 border rounded-xl bg-gray-300/30 dark:bg-zinc-600/40 md:w-[70%] m-auto">
        <div className="md:m-4 m-1 border-2 rounded-xl bg-gray-400/20 dark:bg-zinc-800/20 md:p-2 p-1">
          <img
            src="/dashboard1.png"
            alt="dashboard"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="text-xs text-gray-400  m-auto pt-2 md:pt-6 md:text-center font-semibold">
        <div className="inline">
          RetailReady is the future of supply chain compliance.{" "}
          <span className="dark:text-white text-zinc-600 hover:underline cursor-pointer">
            Read More.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
