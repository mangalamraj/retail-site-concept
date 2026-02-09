import Image from "next/image";
import { BlurFade } from "../ui/blur-fade";

const DisplayImage = () => {
  return (
    <div className="relative m-auto z-2">
      <div className="absolute w-[1200px] h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-40 opacity-50">
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
      <div className="container  border-2 rounded-xl bg-gray-300/30 dark:bg-zinc-600/40 bg-[url('/gradient.svg')] m-auto">
        <div className="m-4 border-2 rounded-xl bg-gray-400/20 dark:bg-zinc-800/20">
          <Image
            src="/dashboard1.png"
            width={1000}
            height={400}
            alt="dashboard"
            className="m-2"
          ></Image>
        </div>
      </div>

      <div className="text-xs text-gray-400 pt-6 text-center font-semibold">
        <p>RetailReady is the future of supply chain compliance</p>
      </div>
    </div>
  );
};

export default DisplayImage;
