import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'CEO, TechStart',
    content: 'Un travail exceptionnel ! Notre site e-commerce a vu ses conversions augmenter de 40% après la refonte.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    name: 'Marc Dubois',
    role: 'Fondateur, DesignCo',
    content: 'La meilleure développeuse avec qui j\'ai travaillé. Créative, professionnelle et toujours à l\'écoute.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    name: 'Julie Leroux',
    role: 'Directrice Marketing, InnovateLab',
    content: 'Une expertise technique impressionnante doublée d\'un véritable sens du design. Résultat parfait !',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
            Ce que disent mes clients
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInVariants(index * 0.1)}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl relative"
              >
                <Quote className="w-10 h-10 text-primary-200 dark:text-primary-800 absolute -top-4 -left-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
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