import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const EmailSection = () => {
  return (
    <>
      <div className="m-auto w-[70%]">
        <div className="container m-auto w-[80%] ">
          <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="text-2xl font-medium py-20">Get exclusive deals.</div>
          <Input
            className="w-[30%] py-6 rounded-full"
            placeholder="john@gmail.com"
          ></Input>
          <Button className="rounded-full py-6 px-8">Send</Button>
        </div>
        <div className="container m-auto w-[80%] ">
          <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
        </div>
      </div>
    </>
  );
};

export default EmailSection;
