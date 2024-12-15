import { motion } from "framer-motion";
import { fadeInVariants } from "../../lib/utils";
import { Check, ArrowRight } from "lucide-react";
import { websiteSolutions } from "../../data/pricing";
import { Link } from "react-router-dom";

export function WebsiteSolutions() {
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
              Solutions Web Sur Mesure
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Des solutions adaptées à vos besoins et à votre budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteSolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                variants={fadeInVariants(index * 0.1)}
                className={`relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  solution.popular ? "border-2 border-primary-400" : ""
                }`}
              >
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-400 text-white px-4 py-1 rounded-full text-sm">
                    Populaire
                  </div>
                )}
                <solution.icon className="w-10 h-10 text-primary-500 mb-6" />
                <h3 className="text-2xl font-display font-bold mb-2">
                  {solution.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center py-3 px-6 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
