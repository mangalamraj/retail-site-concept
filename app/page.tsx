import Footer from "@/components/common/footer/footer";
import { CTA } from "@/components/cta/cta";
import DisplayImage from "@/components/displayImage/displayImage";
import { FaqComponent } from "@/components/faq/faqComponent";
import Features from "@/components/features/features";
import HeroSection from "@/components/hero/heroSection";
import Process from "@/components/process/process";
import StakeHolders from "@/components/stakeholders/stakeholders";
import TextReveal from "@/components/textReveal/textReveal";
import TrustedBy from "@/components/trustedBy/trustedBy";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="m-auto bg-zinc-50 w-full font-sans flex flex-col gap-18 dark:bg-zinc-900">
      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>
      <DisplayImage />

      <TextReveal />
      <Features />
      <div className="container m-auto w-[60%] my-28">
        <Separator />
      </div>
      <StakeHolders />
      <Process />
      <div className="container m-auto w-[60%] my-18">
        <Separator />
      </div>
      <FaqComponent />
      <CTA />
      <Footer />
    </div>
  );
}
