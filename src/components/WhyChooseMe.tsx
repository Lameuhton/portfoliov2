import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { Heart, Lightbulb, Shield, Clock, Sparkles, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Design Sur Mesure',
    description: 'Chaque projet est unique. Je crée des designs personnalisés qui reflètent parfaitement votre identité et vos valeurs.'
  },
  {
    icon: Shield,
    title: 'Qualité Premium',
    description: 'Utilisation des dernières technologies pour garantir performance, sécurité et évolutivité de votre site.'
  },
  {
    icon: Clock,
    title: 'Délais Respectés',
    description: 'Je m\'engage à livrer votre projet dans les temps, avec une communication transparente tout au long du processus.'
  },
  {
    icon: Lightbulb,
    title: 'Conseils Experts',
    description: 'Bénéficiez de mon expertise pour faire les meilleurs choix techniques et stratégiques pour votre projet.'
  },
  {
    icon: Sparkles,
    title: 'Résultats Garantis',
    description: 'Votre satisfaction est ma priorité. Je travaille jusqu\'à ce que vous soyez pleinement satisfait du résultat.'
  },
  {
    icon: MessageSquare,
    title: 'Support Réactif',
    description: 'Un accompagnement personnalisé et un support technique réactif pour répondre à tous vos besoins.'
  }
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
              Je m'engage à créer non seulement un site web magnifique, mais aussi une expérience 
              exceptionnelle pour vous et vos utilisateurs.
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