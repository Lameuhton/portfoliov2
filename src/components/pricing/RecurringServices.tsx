import { motion } from "framer-motion";
import { fadeInVariants } from "../../lib/utils";
import { Check, ArrowRight } from "lucide-react";
import { recurringServices } from "../../data/pricing";
import { Link } from "react-router-dom";

export function RecurringServices() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInVariants()} className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Services Récurrents
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Pour maintenir et faire évoluer votre site dans le temps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recurringServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={fadeInVariants(index * 0.1)}
                className={`relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  service.popular ? "border-2 border-primary-400" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-400 text-white px-4 py-1 rounded-full text-sm">
                    Recommandé
                  </div>
                )}
                <service.icon className="w-10 h-10 text-primary-500 mb-6" />
                <h3 className="text-2xl font-display font-bold mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {service.description}
                </p>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-6">
                  Engagement {service.frequency}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
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
 