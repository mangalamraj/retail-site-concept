import DisplayImage from "@/components/displayImage/displayImage";
import HeroSection from "@/components/hero/heroSection";
import TextReveal from "@/components/textReveal/textReveal";
import TrustedBy from "@/components/trustedBy/trustedBy";

export default function Home() {
  return (
    <div className=" m-auto w-full font-sans flex flex-col gap-18">
      <HeroSection />
      <TrustedBy />
      <DisplayImage />

      <TextReveal />
    </div>
  );
}
