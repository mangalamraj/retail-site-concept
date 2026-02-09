import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqComponent() {
  return (
    <div className="container  xl:w-[60%] md:m-auto text-center flex flex-col md:flex-row md:justify-between justify-center gap-2 md:gap-10">
      <div className="md:text-left flex flex-col  m-auto">
        <div className="text-2xl font-semibold md:text-4xl md:mb-2">FAQs</div>
        <div className="md:text-base text-[#a1a1aa] md:mb-8 font-semibold">
          Get the Answers You Need: Your Guide to Our{" "}
          <p className="dark:text-white text-black inline ">
            Chatbot Solutions{" "}
          </p>
        </div>
      </div>
      <div className="flex m-auto text-left ">
        <Accordion
          type="single"
          collapsible
          className="w-[800px] bg-gray-100 dark:bg-black px-4 rounded-xl dark:border-2 dark:border-zinc-800"
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
              Can the chatbot be customized to match our brands voice and style?
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
              monitoring, and troubleshooting, to ensure your chatbot continues
              to perform at its best.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
