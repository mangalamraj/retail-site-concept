import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";

const DisplayImage = () => {
  return (
    <div className="container m-auto ">
      <WobbleCard
        containerClassName="w-[1000px] bg-blue-50 dark:bg-cyan-950 h-[600px]"
        className="relative  m-2 flex flex-col items-center p-8 rounded-2xl  overflow-hidden"
      >
        <Image
          src="/dashboard1.png"
          width={900}
          height={400}
          alt="dashboard"
          className="absolute top-20"
        ></Image>
      </WobbleCard>
      <div className="text-xs text-gray-400 pt-6 text-center font-semibold">
        <p>RetailReady is the future of supply chain compliance</p>
      </div>
    </div>
  );
};

export default DisplayImage;
