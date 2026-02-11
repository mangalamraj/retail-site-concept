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
    <div className="flex xl:gap-12 gap-4 container flex-col xl:flex-row xl:w-[75%]  w-[90%]   m-auto">
      <div
        className="
        flex flex-col
        w-full
        xl:max-w-[680px]
        md:text-center
        md:justify-between
        justify-center
        gap-10 md:gap-2
      "
      >
        <div className="md:text-left flex flex-col">
          <div className="text-2xl font-semibold md:text-4xl md:mb-2">FAQs</div>
          <div className="md:text-base md:mb-8 text-gray-400  font-normal">
            Everything you need to know about RetailReadyAI and{" "}
            <p>how it simplifies compliance.</p>
          </div>
        </div>
        <div className="flex m-auto text-left w-full">
          <Accordion
            type="single"
            collapsible
            className="bg-gray-100 w-full dark:bg-black px-4 rounded-xl dark:border-2 dark:border-zinc-800"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is RetailReadyAI and who is it for?
              </AccordionTrigger>
              <AccordionContent>
                RetailReadyAI is an AI-powered compliance and automation
                platform designed for brands, manufacturers, and sellers to
                ensure their products meet retailer and marketplace requirements
                before launch. It helps teams avoid rejections, delays, and
                compliance errors across the supply chain.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How does RetailReadyAI help with retailer compliance?
              </AccordionTrigger>
              <AccordionContent>
                RetailReadyAI automatically validates product data against
                retailer guidelines, GS1 standards, and marketplace rules. It
                flags issues early, suggests fixes, and ensures your listings
                are retail-ready before submission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Does RetailReadyAI support GTIN, barcode, and GS1 standards?
              </AccordionTrigger>
              <AccordionContent>
                Yes. RetailReadyAI supports GTIN validation, barcode checks, and
                GS1 data requirements to ensure your product identifiers are
                accurate, compliant, and accepted across global retailers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Can RetailReadyAI integrate with our existing systems?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. RetailReadyAI is built to integrate seamlessly with
                your existing PIM, ERP, e-commerce platforms, and internal
                workflows, making adoption fast and disruption-free.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How does AI improve accuracy compared to manual checks?
              </AccordionTrigger>
              <AccordionContent>
                Our AI continuously learns from retailer feedback, past
                rejections, and compliance updates. This allows RetailReadyAI to
                catch issues humans often miss, reduce manual effort, and
                improve accuracy over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Is RetailReadyAI suitable for global and multi-marketplace
                brands?
              </AccordionTrigger>
              <AccordionContent>
                Yes. RetailReadyAI supports multi-region compliance and helps
                brands manage different retailer requirements, languages, and
                standards across global markets from a single platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                What kind of support do you offer after onboarding?
              </AccordionTrigger>
              <AccordionContent>
                We provide continuous support, system updates, monitoring, and
                guidance to ensure RetailReadyAI evolves with changing retailer
                rules and your growing business needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="border-t-2 xl:w-1/2 xl:border-l-2 xl:border-t-0 flex flex-col gap-4 dark:border-gray-600/40 border-gray-300/60 flex-1 ">
        <div className="w-full flex flex-col items-center md:items-end mt-4">
          <div className="w-[100%] xl:w-[80%] h-[120px] relative border-3 dark:border-gray-600/20  border-gray-300/60 rounded-md">
            <Image
              src="/r1.svg"
              alt="Retail Ready"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="mt-2 flex flex-col items-start w-[100%] xl:w-[80%] gap-1">
            <div className="flex flex-col gap-2">
              <div>What is Retail Ready?</div>
              <div className="text-xs text-gray-500">
                RetailReadyAI is an AI-powered operations layer that understands
                your retail data—orders, inventory, rules, and workflows—and
                turns it into real-time, actionable decisions.
                <div className="text-sm flex gap-1 text-black ">
                  Read more <MoveRight size={16} className="mt-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center xl:items-end ">
          <div className="xl:w-[80%] w-[100%] h-[120px] relative border-3 dark:border-gray-600/20  border-gray-300/60 rounded-md">
            <Image
              src="/r2.svg"
              alt="Retail Ready"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="mt-2 flex flex-col items-start w-[100%] xl:w-[80%] gap-1">
            <div className="flex flex-col gap-2">
              <div>From Manual Ops to AI-Driven Ops</div>
              <div className="text-xs text-gray-500">
                Eliminate spreadsheets, delayed reviews, and manual checks.
                RetailReadyAI monitors operations in real time and escalates
                only what truly needs human attention.
                <div className="text-sm flex gap-1  text-black">
                  Read more <MoveRight size={16} className="mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
