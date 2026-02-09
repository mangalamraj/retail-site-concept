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
    <section className="container m-auto text-center overflow-hidden mt-10 mb-10">
      <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Trusted by
      </h2>
      <div className="[--duration:20s] w-200 m-auto flex justify-center ">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="relative mx-4 mt-4 w-20 flex items-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={80}
              height={60}
              className="h-12 w-auto object-contain grayscale color-white dark:fill-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
