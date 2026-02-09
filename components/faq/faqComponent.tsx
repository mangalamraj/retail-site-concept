import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export function FaqComponent() {
  return (
    <div className="flex md:gap-20 gap-4 container flex-col md:flex-row w-[90%]  xl:w-[70%] m-auto">
      <div className=" flex flex-col md:w-[680px] md:text-center  md:justify-between justify-center gap-2 md:gap-10">
        <div className="md:text-left flex flex-col">
          <div className="text-2xl font-semibold md:text-4xl md:mb-2">FAQs</div>
          <div className="md:text-base text-[#a1a1aa] md:mb-8 font-semibold">
            Get the Answers You Need: Your Guide to Our Chatbot Solutions{" "}
          </div>
        </div>
        <div className="flex m-auto text-left w-full">
          <Accordion
            type="single"
            collapsible
            className=" bg-gray-100 w-full dark:bg-black px-4 rounded-xl dark:border-2 dark:border-zinc-800"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What makes your chatbot solutions different from others?
              </AccordionTrigger>
              <AccordionContent>
                Our chatbot solutions are powered by advanced AI, offering
                personalized interactions, seamless integrations, and continuous
                learning capabilities to improve customer experience over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How easy is it to integrate your chatbot with our existing
                systems?
              </AccordionTrigger>
              <AccordionContent>
                Integration is simple and straightforward. Our chatbots are
                designed to work seamlessly with a wide range of platforms,
                including websites, mobile apps, and popular messaging services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can the chatbot be customized to match our brands voice and
                style?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Our chatbots can be fully customized to reflect your
                brands tone, style, and visual identity, ensuring a consistent
                user experience across all touchpoints.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Is the chatbot capable of handling multiple languages?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our chatbot solutions support multiple languages, making it
                easy to engage with a global audience and provide localized
                experiences.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What kind of support do you offer post-deployment?
              </AccordionTrigger>
              <AccordionContent>
                We provide ongoing support, including updates, performance
                monitoring, and troubleshooting, to ensure your chatbot
                continues to perform at its best.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="border-t-2 md:w-1/2 md:border-l-2 md:border-t-0 flex flex-col gap-4 dark:border-gray-600/40 border-gray-300/60 flex-1 ">
        <div className="w-full flex flex-col items-center md:items-end mt-4">
          <div className="w-[100%] md:w-[80%] h-[120px] relative border-3 dark:border-gray-600/20  border-gray-300/60 rounded-md">
            <Image
              src="/r1.svg"
              alt="Retail Ready"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="mt-4 flex flex-col items-start w-[100%] md:w-[80%] gap-1">
            <div className="flex flex-col gap-1">
              <div>What is Retail Ready?</div>
              <div className="text-xs text-gray-500">
                RetailReadyAI is an AI-powered operations layer that understands
                your retail data—orders, inventory, rules, and workflows—and
                turns it into real-time, actionable decisions.
              </div>
              <div className="text-sm flex gap-1  ">
                Read more <MoveRight size={16} className="mt-0.5" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center md:items-end ">
          <div className="md:w-[80%] w-[100%] h-[120px] relative border-3 dark:border-gray-600/20  border-gray-300/60 rounded-md">
            <Image
              src="/r2.svg"
              alt="Retail Ready"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="mt-4 flex flex-col items-start w-[100%] md:w-[80%] gap-1">
            <div className="flex flex-col gap-1">
              <div>From Manual Ops to AI-Driven Ops</div>
              <div className="text-xs text-gray-500">
                Eliminate spreadsheets, delayed reviews, and manual checks.
                RetailReadyAI monitors operations in real time and escalates
                only what truly needs human attention.
              </div>
              <div className="text-sm flex gap-1  ">
                Read more <MoveRight size={16} className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
