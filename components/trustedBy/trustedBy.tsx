import Image from "next/image";

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
    <section className="container m-auto text-center">
      <h2 className=" text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Trusted by
      </h2>

      <div className="flex gap-12 mt-4 items-center justify-center">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="relative group rounded-2xl overflow-hidde"
          >
            <div className="relative flex items-center justify-center w-20">
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={80}
                className="h-12 w-auto object-contain grayscale color-white dark:fill-white"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
