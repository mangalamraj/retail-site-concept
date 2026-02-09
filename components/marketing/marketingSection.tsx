import Image from "next/image";
import { Button } from "../ui/button";
import { DottedMap } from "../ui/dotted-map";

const MarketingSection = () => {
  return (
    <div className="relative w-[60%] m-auto flex justify-center ">
      <DottedMap dotRadius={0.1} className="absolute" width={150} />

      <div className="z-2 ">
        <div className="text-4xl font-medium text-center mb-20">
          <p>Make your retail operations AI-ready. </p>No heavy setup required.
        </div>
        <div className="mb-10 text-2xl">
          <div className="md:w-[70%] m-auto mb-5">
            Traditional retail systems move slow. Decisions come later than they
            should.
          </div>
          <div className="md:w-[70%] m-auto">
            With RetailReadyAI, you get real-time intelligence across inventory,
            orders, compliance, and workflows—powered by AI that understands
            your data instantly. Automate rule checks, catch issues before they
            escalate, and scale operations without adding manual overhead. No
            complex integrations, no rigid workflows—just faster, smarter retail
            execution.
          </div>
        </div>
        <div className=" md:w-[70%] m-auto flex justify-center z-3">
          <div className="group relative overflow-hidden rounded-full shadow-2xl dark:shadow-gray-500/100 cursor-pointer z-40">
            <div className="h-20 w-10 -top-4 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute -left-16 group-hover:left-[150%] duration-700 blur-sm  -rotate-45 " />
            <div
              className="rounded-full p-[1.5px]"
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
        </div>
      </div>
      <div className="absolute w-[120%] m-auto flex items-center">
        <div className="w-[100%] h-[420px] m-auto z-0">
          <Image
            src="/line2.svg"
            alt="transition line"
            fill
            className="object-contain m-auto dark:opacity-95 opacity-25"
          />
        </div>

        {/*<div className="flex w-[100%] m-auto items-end justify-between h-[250px]">
          <div className="flex flex-col items-center gap-4 ml-2 -mb-13 z-1">
            <div className="w-4 h-4 rounded-full bg-black dark:bg-white " />
            <div className="text-3xl">Manual Ops</div>
          </div>

          <div className="flex flex-col items-center gap-4 md:mb-14 z-1">
            <div className="w-4 h-4 rounded-full bg-black dark:bg-white" />
            <div className="text-3xl">AI Driven Ops</div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default MarketingSection;
