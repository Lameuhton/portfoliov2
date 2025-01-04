import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { MessageSquare, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    title: "Consultation Gratuite",
    description:
      "Discutons de votre projet, vos objectifs et vos besoins spécifiques. Je vous conseille sur les meilleures solutions.",
    details: [
      "Analyse de vos besoins",
      "Définition des objectifs",
      "Conseils stratégiques",
      "Estimation budgétaire",
    ],
  },
  {
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    title: "Design & Planification",
    description:
      "Création de maquettes et définition de la structure de votre site pour une expérience utilisateur optimale.",
    details: [
      "Maquettes personnalisées",
      "Choix des fonctionnalités",
      "Architecture du site",
      "Planning détaillé",
    ],
  },
  {
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    title: "Développement",
    description:
      "Développement de votre site avec les meilleures technologies, en respectant les standards du web.",
    details: [
      "Code sur mesure",
      "Responsive design",
      "Optimisation SEO",
      "Tests approfondis",
    ],
  },
  {
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    title: "Lancement & Suivi",
    description:
      "Mise en ligne de votre site et accompagnement pour assurer son succès à long terme.",
    details: [
      "Déploiement sécurisé",
      "Formation utilisation",
      "Support technique",
      "Maintenance évolutive",
    ],
  },
];

export function ProcessDetailed() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInVariants()} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Un Processus Clair et Efficace
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              De la première discussion à la mise en ligne, je vous accompagne à
              chaque étape pour créer un site web qui dépasse vos attentes.
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInVariants(index * 0.1)}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="aspect-video bg-primary-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <img src={step.image} className="rounded-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}