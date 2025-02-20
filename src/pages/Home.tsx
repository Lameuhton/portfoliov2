import { Hero } from '../components/Hero';
import { WhyChooseMe } from '../components/WhyChooseMe';
import { WhyWebsite } from "../components/WhyWebsite";
import { PricingPlans } from '../components/PricingPlans';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { FAQ } from '../components/FAQ';
import { CallToAction } from '../components/CallToAction';
import { Process } from '../components/Process';
import { ValuesSection } from '../components/values/ValuesSection';
import { SEOHead } from "../components/SEOHead";


export function Home() {
  return (
    <>
      <SEOHead
        title="Accueil"
        description="Développeuse web créant des sites modernes et performants, à la recherche d’une nouvelle opportunité professionnelle."
      />
      <Hero />
      <WhyChooseMe />
      <ProjectShowcase />
      <ValuesSection />
      <CallToAction />
    </>
  );
}