import { Hero } from '../components/Hero';
import { WhyChooseMe } from '../components/WhyChooseMe';
import { WhyWebsite } from "../components/WhyWebsite";
import { PricingPlans } from '../components/PricingPlans';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { FAQ } from '../components/FAQ';
import { CallToAction } from '../components/CallToAction';
import { Process } from '../components/Process';


export function Home() {
  return (
    <>
      <Hero />
      <WhyWebsite />
      <WhyChooseMe />
      <Process />
      <PricingPlans />
      <ProjectShowcase />
      <FAQ />
      <CallToAction />
    </>
  );
}