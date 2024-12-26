import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInVariants } from "../../lib/utils";
import {
  Heart,
  Lightbulb,
  Shield,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { FeatureHighlight } from "./FeatureHighlight";

const features = [
  {
    icon: Heart,
    title: "Design Sur Mesure",
    description:
      "Chaque projet est unique et mérite une attention particulière. Je crée des designs qui reflètent parfaitement votre identité.",
  },
  {
    icon: Shield,
    title: "Qualité Premium",
    description:
      "Les dernières technologies pour garantir performance, sécurité et évolutivité de votre site.",
  },
  {
    icon: Clock,
    title: "Délais Respectés",
    description:
      "Je m'engage à livrer votre projet dans les temps, avec une communication transparente tout au long du processus.",
  },
];

const additionalFeatures = [
  {
    icon: Lightbulb,
    title: "Conseils Experts",
    description:
      "Bénéficiez de mon expertise pour faire les meilleurs choix techniques et stratégiques pour votre projet.",
  },
  {
    icon: Sparkles,
    title: "Résultats Garantis",
    description:
      "Votre satisfaction est ma priorité. Je travaille jusqu'à ce que vous soyez pleinement satisfait du résultat.",
  },
  {
    icon: MessageSquare,
    title: "Support Réactif",
    description:
      "Un accompagnement personnalisé et un support technique réactif pour répondre à tous vos besoins.",
  },
];

export function WhyChooseMe() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInVariants()} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Pourquoi Me Choisir ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Je m'engage à créer non seulement un site web magnifique, mais
              aussi une expérience exceptionnelle pour vous et vos utilisateurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureHighlight
                key={feature.title}
                {...feature}
                isActive={activeFeature === feature.title}
                onClick={() =>
                  setActiveFeature(
                    activeFeature === feature.title ? null : feature.title
                  )
                }
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <FeatureHighlight
                key={feature.title}
                {...feature}
                isActive={activeFeature === feature.title}
                onClick={() =>
                  setActiveFeature(
                    activeFeature === feature.title ? null : feature.title
                  )
                }
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
