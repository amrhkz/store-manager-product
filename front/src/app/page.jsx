import FAQ from "@/components/faq/faq";
import Features from "@/components/features/features";
import FinalCTA from "@/components/final-cta/final-cta";
import HowItWorks from "@/components/how-it-works/how-it-works";
import Pricing from "@/components/pricing/pricing";
import Problems from "@/components/problems/problems";
import Showcase from "@/components/show-case/show-case";
import Solution from "@/components/solution/solution";
import TargetBusinesses from "@/components/target-business/target-business";
import Testimonials from "@/components/testimonials/testimonials";
import WhyUs from "@/components/why-us/why-us";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <HowItWorks />
      <Showcase />
      <TargetBusinesses />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
