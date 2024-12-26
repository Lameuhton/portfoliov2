import { motion } from "framer-motion";
import { fadeInVariants } from "../lib/utils";
import {
  Globe,
  TrendingUp,
  Users,
  Clock,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { BenefitCard } from "./BenefitCard";

const benefits = [
  {
    icon: Globe,
    title: "Visibilité 24h/24",
    description:
      "Votre entreprise reste accessible à vos clients potentiels même en dehors des heures d'ouverture.",
    details:
      "Un site web, c'est comme une vitrine qui ne ferme jamais ! Vos clients peuvent découvrir vos services et produits à toute heure, même pendant votre sommeil. C'est votre meilleur commercial qui travaille sans relâche.",
  },
  {
    icon: TrendingUp,
    title: "Crédibilité Professionnelle",
    description:
      "Un site web moderne renforce votre image de marque et la confiance de vos clients.",
    details:
      "Dans le monde d'aujourd'hui, 81% des clients recherchent une entreprise en ligne avant tout achat. Un site web professionnel est votre première impression auprès de vos futurs clients.",
  },
  {
    icon: Users,
    title: "Plus de Clients",
    description:
      "Élargissez votre portée au-delà de votre zone géographique habituelle.",
    details:
      "Internet n'a pas de frontières ! Votre site web vous permet d'atteindre des clients que vous n'auriez jamais pu toucher autrement, où qu'ils soient.",
  },
  {
    icon: Clock,
    title: "Gain de Temps",
    description:
      "Automatisez vos tâches répétitives comme la prise de rendez-vous.",
    details:
      "Imaginez : pendant que vous travaillez, votre site répond aux questions fréquentes, prend les rendez-vous et même traite des commandes. C'est comme avoir un assistant 24h/24 !",
  },
  {
    icon: ShieldCheck,
    title: "Investissement Durable",
    description:
      "Un site web continue de générer des résultats année après année.",
    details:
      "Contrairement à la publicité traditionnelle qui s'arrête dès que vous cessez de payer, votre site web continue de travailler pour vous. C'est un investissement qui s'enrichit avec le temps.",
  },
  {
    icon: Smartphone,
    title: "Pour Tous les Écrans",
    description: "Votre site s'adapte automatiquement à tous les appareils.",
    details:
      "Avec plus de 60% des recherches sur mobile, votre site sera parfait sur tous les écrans. Smartphone, tablette ou ordinateur : vos clients auront toujours une expérience optimale.",
  },
];

export function WhyWebsite() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInVariants()} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Pourquoi Avoir un Site Web ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dans le monde numérique d'aujourd'hui, avoir un site web n'est
              plus un luxe, c'est une nécessité. Découvrez pourquoi :
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInVariants(index * 0.1)}
              >
                <BenefitCard {...benefit} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
