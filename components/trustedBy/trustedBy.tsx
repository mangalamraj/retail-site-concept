import Image from "next/image";
import { Marquee } from "../ui/marquee";
const logos = [
  { name: "JCPenney", src: "/JCPenney (1).webp" },
  { name: "KeHE", src: "/Kehe RetailReady.webp" },
  { name: "Kroger", src: "/Kroger RetailReady.png" },
  { name: "Petco", src: "/Petco RetailReady.webp" },
  { name: "UNFI", src: "/RetailReady UNFI.png" },
  { name: "Chewy", src: "/Chewy RetailReady.webp" },
];

const TrustedBy = () => {
  return (
    <div className="container m-auto text-center overflow-hidden mt-5 md:mb-10 ">
      <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Trusted by
      </h2>
      <div className="relative [--duration:20s] md:w-200 m-auto flex justify-center ">
        <Marquee pauseOnHover className="[--duration:20s] bg-transparent">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative mx-4 mt-2 md:mt-4 md:w-20 flex items-center  w-14.5 h-10"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="h-12  w-full object-contain grayscale color-white dark:fill-white bg-transparent"
              />
            </div>
          ))}
        </Marquee>
        <div className="dark:from-black from-zinc-50 pointer-events-none absolute inset-y-1 pl-2 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="dark:from-black from-zinc-50 pointer-events-none absolute inset-y-1 pr-2 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </div>
  );
};

export default TrustedBy;
