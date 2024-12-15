import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { Code, Layout, Smartphone, Globe, Sparkles, Lightbulb } from 'lucide-react';
import { WebsiteSolutions, RecurringServices } from '../components/pricing';
import { ProcessDetailed } from '../components/ProcessDetailed';
import { CallToAction } from '../components/CallToAction';

const services = [
  {
    icon: Layout,
    title: 'Design UI/UX',
    description: 'Je crée des interfaces élégantes et intuitives qui captivent vos utilisateurs dès le premier regard.',
    features: [
      'Maquettes personnalisées',
      'Design responsive',
      'Expérience utilisateur optimisée',
      'Identité visuelle cohérente'
    ]
  },
  {
    icon: Code,
    title: 'Développement Frontend',
    description: 'Je donne vie à vos maquettes avec des animations fluides et une attention particulière aux détails.',
    features: [
      'Sites web modernes',
      'Animations fluides',
      'Performance optimisée',
      'Code maintenable'
    ]
  },
  {
    icon: Globe,
    title: 'Développement Backend',
    description: 'Je construis des APIs robustes et sécurisées pour supporter vos applications.',
    features: [
      'APIs RESTful',
      'Base de données optimisée',
      'Sécurité renforcée',
      'Architecture évolutive'
    ]
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Je développe des applications mobiles cross-platform modernes et performantes.',
    features: [
      'Applications iOS & Android',
      'Expérience native',
      'Performance optimale',
      'Maintenance simplifiée'
    ]
  },
  {
    icon: Sparkles,
    title: 'Optimisation SEO',
    description: 'J\'optimise votre site pour une meilleure visibilité sur les moteurs de recherche.',
    features: [
      'Audit SEO complet',
      'Optimisation technique',
      'Contenu optimisé',
      'Suivi des performances'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Conseil & Formation',
    description: 'Je vous accompagne dans la gestion et l\'évolution de votre projet web.',
    features: [
      'Conseil stratégique',
      'Formation personnalisée',
      'Support technique',
      'Veille technologique'
    ]
  }
];

export function Services() {
  return (
    <div className="min-h-screen">
      <section className="py-36 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.div
              variants={fadeInVariants()}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Mes Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Des solutions web sur mesure pour répondre à tous vos besoins
                digitaux
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInVariants(index * 0.1)}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <WebsiteSolutions />
      <RecurringServices />
      <ProcessDetailed />
      <CallToAction />
    </div>
  );
}