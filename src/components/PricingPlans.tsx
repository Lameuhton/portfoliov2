import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { Check, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Site Vitrine',
    price: '999€',
    description: 'Parfait pour les petites entreprises qui débutent',
    features: [
      'Design personnalisé et responsive',
      'Jusqu\'à 5 pages',
      'Optimisation SEO de base',
      'Formulaire de contact',
      'Hébergement pour 1 an',
      'Support technique (3 mois)',
    ],
    icon: Star,
    accent: 'primary'
  },
  {
    name: 'Business Pro',
    price: '2499€',
    description: 'Solution complète pour les entreprises en croissance',
    features: [
      'Tout du plan Vitrine +',
      'Jusqu\'à 10 pages',
      'Blog intégré',
      'SEO avancé',
      'Intégration réseaux sociaux',
      'Support technique (1 an)',
      'Formation administration',
    ],
    icon: Sparkles,
    accent: 'secondary',
    popular: true
  },
  {
    name: 'Sur Mesure',
    price: 'Sur devis',
    description: 'Pour les projets complexes et spécifiques',
    features: [
      'Fonctionnalités personnalisées',
      'E-commerce possible',
      'Architecture sur mesure',
      'SEO premium',
      'Support prioritaire',
      'Maintenance évolutive',
    ],
    icon: Star,
    accent: 'primary'
  }
];

export function PricingPlans() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInVariants()} className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Des Solutions Adaptées à Vos Besoins
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choisissez la formule qui correspond le mieux à votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInVariants(index * 0.1)}
                className={`relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  plan.popular ? 'border-2 border-primary-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-400 text-white px-4 py-1 rounded-full text-sm">
                    Populaire
                  </div>
                )}
                <plan.icon className="w-10 h-10 text-primary-500 mb-6" />
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center py-3 px-6 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                >
                  Commencer votre projet
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}