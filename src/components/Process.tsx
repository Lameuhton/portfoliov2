import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { CheckCircle2, Coffee, MessageSquare, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discussion initiale',
    description: 'On échange sur vos besoins, objectifs et vision pour votre projet.',
  },
  {
    icon: Coffee,
    title: 'Planification',
    description: 'Je prépare une proposition détaillée avec planning et devis.',
  },
  {
    icon: CheckCircle2,
    title: 'Développement',
    description: 'Je code votre projet avec des points réguliers pour validation.',
  },
  {
    icon: Rocket,
    title: 'Lancement',
    description: 'Mise en ligne et support pour assurer votre succès.',
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeInVariants()}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          >
            Comment je travaille
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInVariants(index * 0.1)}
                className="text-center"
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-primary-200 dark:bg-primary-800" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}