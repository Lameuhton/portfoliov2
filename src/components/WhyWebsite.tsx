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

const benefits = [
  {
    icon: Globe,
    title: "Visibilité 24h/24",
    description:
      "Votre entreprise reste accessible à vos clients potentiels même en dehors des heures d'ouverture.",
    explanation:
      "C'est comme avoir une vitrine qui ne ferme jamais ! Vos clients peuvent découvrir vos services à tout moment.",
  },
  {
    icon: TrendingUp,
    title: "Crédibilité Professionnelle",
    description:
      "Un site web moderne et professionnel renforce votre image de marque et la confiance de vos clients.",
    explanation:
      "Aujourd'hui, 81% des clients recherchent une entreprise en ligne avant tout achat. Sans site web, vous risquez de perdre leur confiance.",
  },
  {
    icon: Users,
    title: "Touchez Plus de Clients",
    description:
      "Élargissez votre portée au-delà de votre zone géographique et attirez de nouveaux clients.",
    explanation:
      "C'est comme avoir un commercial qui travaille pour vous 24h/24, touchant des clients que vous n'auriez jamais pu atteindre autrement.",
  },
  {
    icon: Clock,
    title: "Gain de Temps",
    description:
      "Automatisez certaines tâches comme la prise de rendez-vous ou les réponses aux questions fréquentes.",
    explanation:
      "Imaginez : pendant que vous dormez, votre site web informe vos clients et prend même des réservations !",
  },
  {
    icon: ShieldCheck,
    title: "Investissement Durable",
    description:
      "Un site web est un investissement rentable qui continue de générer des résultats année après année.",
    explanation:
      "Contrairement à la publicité traditionnelle qui s'arrête dès que vous cessez de payer, votre site web continue de travailler pour vous.",
  },
  {
    icon: Smartphone,
    title: "Adaptabilité Totale",
    description:
      "Votre site s'adapte à tous les appareils : ordinateurs, tablettes et smartphones.",
    explanation:
      "Plus de 60% des recherches se font sur mobile. Votre site sera parfaitement lisible peu importe l'appareil utilisé.",
  },
];

export function WhyWebsite() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
              plus un luxe, c'est une nécessité. Voici pourquoi :
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInVariants(index * 0.1)}
                className="group p-6 rounded-xl bg-gradient-to-br from-rose-50 to-white dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/10 rounded-lg mt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    <span className="font-semibold text-rose-600 dark:text-rose-400 block mb-1">
                      Le saviez-vous ?
                    </span>
                    {benefit.explanation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
