import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInVariants()} className="mb-6">
            <Sparkles className="w-12 h-12 mx-auto text-primary-500 dark:text-primary-400" />
          </motion.div>
          <motion.h2
            variants={fadeInVariants(0.1)}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Besoin d’une développeuse web créative et efficace ?
          </motion.h2>
          <motion.p
            variants={fadeInVariants(0.2)}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            Disponible pour une nouvelle opportunité, je suis prête à mettre mes
            compétences en développement web au service de votre équipe.
          </motion.p>
          <motion.div
            variants={fadeInVariants(0.3)}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
            >
              Contactez-moi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}