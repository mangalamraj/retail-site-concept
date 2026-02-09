import Footer from "@/components/common/footer/footer";
import { CTA } from "@/components/cta/cta";
import DisplayImage from "@/components/displayImage/displayImage";
import EmailSection from "@/components/email/emailSection";
import { FaqComponent } from "@/components/faq/faqComponent";
import Features from "@/components/features/features";
import HeroSection from "@/components/hero/heroSection";
import MarketingSection from "@/components/marketing/marketingSection";
import Process from "@/components/process/process";
import StakeHolders from "@/components/stakeholders/stakeholders";
import TextReveal from "@/components/textReveal/textReveal";
import TrustedBy from "@/components/trustedBy/trustedBy";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="m-auto bg-zinc-50 w-full font-sans flex flex-col md:gap-30 gap-20  dark:bg-black ">
      <BackgroundRippleEffect rows={80} cols={40} />
      <HeroSection />

      <Features />
      <MarketingSection />
      <div className="container m-auto md:w-[60%] ">
        <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
      </div>
      <StakeHolders />
      <Process />
      <div className="container m-auto md:w-[60%] ">
        <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
      </div>
      <FaqComponent />
      <Footer />
    </div>
  );
}
