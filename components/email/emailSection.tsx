import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const EmailSection = () => {
  return (
    <>
      <div className="m-auto md:w-[70%] w-[90%]">
        <div className="container m-auto md:w-[80%] ">
          <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 gap-4 md:items-center md:justify-center py-10 md:py-0">
          <div className="text-2xl font-medium md:py-20 py-4">
            Get exclusive deals.
          </div>
          <Input
            className="md:w-[30%] py-6 rounded-full"
            placeholder="john@gmail.com"
          ></Input>
          <Button className="rounded-full py-6 px-8">Send</Button>
        </div>
        <div className="container m-auto md:w-[80%] ">
          <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
        </div>
      </div>
    </>
  );
};

export default EmailSection;
