import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Comment se déroule la collaboration ?",
    answer: "La collaboration commence par une consultation gratuite où nous discutons de votre projet. Je vous propose ensuite un devis détaillé et un planning. Une fois le projet lancé, nous maintenons une communication régulière avec des points d'étape pour assurer que tout correspond à vos attentes."
  },
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer: "La durée varie selon la complexité du projet. Un site vitrine prend généralement 3-4 semaines, tandis qu'un projet e-commerce peut prendre 2-3 mois. Je vous fournis un planning détaillé dès le début du projet avec des jalons clairs."
  },
  {
    question: "Que comprennent vos services de maintenance ?",
    answer: "Mes services de maintenance incluent les mises à jour de sécurité, les sauvegardes régulières, le monitoring des performances, les corrections de bugs et un support technique réactif. Je propose différentes formules selon vos besoins."
  },
  {
    question: "Le site sera-t-il optimisé pour les moteurs de recherche ?",
    answer: "Absolument ! Chaque site que je crée intègre les meilleures pratiques SEO : structure optimisée, temps de chargement rapide, métadonnées personnalisées, et compatibilité mobile. Je peux également proposer des services SEO plus avancés selon vos besoins."
  },
  {
    question: "Proposez-vous des services de refonte de site existant ?",
    answer: "Oui, je propose des services de refonte complète ou partielle de sites existants. Cela inclut une analyse de votre site actuel, des recommandations d'amélioration, et une modernisation tout en préservant votre référencement existant."
  },
  {
    question: "Comment assurez-vous la sécurité du site ?",
    answer: "La sécurité est une priorité. J'implémente des protocoles de sécurité robustes : HTTPS, protection contre les injections SQL, authentification sécurisée, et sauvegardes régulières. Je maintiens également les technologies à jour pour prévenir les vulnérabilités."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={false}
      className="border-b border-primary-100 dark:border-gray-700 last:border-none"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-display font-semibold pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-primary-500 dark:text-primary-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? "1.5rem" : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInVariants()} className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Tout ce que vous devez savoir pour démarrer votre projet web
            </p>
          </motion.div>

          <motion.div
            variants={fadeInVariants(0.2)}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}