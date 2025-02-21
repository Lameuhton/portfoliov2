import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { Book, Code2, Users, Brain, Heart, Coffee } from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Compétences Techniques",
    description:
      "Maîtrise des technologies web modernes comme React, Next.js ou Laravel. Toujours à jour avec les dernières pratiques.",
  },
  {
    icon: Brain,
    title: "Capacité d'Apprentissage",
    description:
      "Grande capacité d'adaptation et d'apprentissage rapide. Passionnée par les nouvelles technologies et méthodologies.",
  },
  {
    icon: Users,
    title: "Esprit d'Équipe",
    description:
      "Excellentes capacités de communication et de collaboration. Habituée au travail d'équipe.",
  },
  {
    icon: Book,
    title: "Formation Solide",
    description:
      "Formation en développement web avec des projets pratiques. Bases solides en algorithmique et bonnes pratiques.",
  },
  {
    icon: Heart,
    title: "Passion du Code",
    description:
      "Véritable passion pour le développement et l'innovation. Toujours motivée pour apprendre et progresser.",
  },
  {
    icon: Coffee,
    title: "Projets Personnels",
    description:
      "Développement régulier de projets personnels pour approfondir mes connaissances et explorer de nouvelles technologies.",
  },
];

export function WhyChooseMe() {
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
              Pourquoi Me Choisir ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              J'aime donner vie aux designs en créant des interfaces intuitives
              et réactives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInVariants(index * 0.1)}
                className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}