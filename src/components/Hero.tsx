import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import { TypingText } from "./hero/TypingText";

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInVariants()} className="mb-8">
            <img
              src="/photo.jpg"
              alt="Portrait"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
            />
          </motion.div>

          <motion.h1 variants={fadeInVariants()} className="mb-6">
            <motion.p className="text-5xl text-gray-600 dark:text-gray-300 mb-2 font-display">
              Bonjour, je suis
            </motion.p>
            <TypingText
              texts={["Auréliane Gagliardi", "Développeuse Web Junior"]}
              className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 text-transparent bg-clip-text"
            />
          </motion.h1>

          <motion.p
            variants={fadeInVariants(0.2)}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            Passionnée par la création d'expériences web uniques et élégantes.
            Je transforme vos idées en réalités numériques avec une touche
            d'originalité.
          </motion.p>

          <motion.div
            variants={fadeInVariants(0.4)}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
            >
              À propos de moi
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-200 dark:border-primary-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Télécharger mon CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeInVariants(0.6)}
            className="flex justify-center gap-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Lameuhton",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aurelianeg-webdev/",
                label: "LinkedIn",
              },
              {
                name: "Email",
                icon: Mail,
                href: "mailto:aurelianeg2000@gmail.com",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 text-primary-600 dark:text-primary-400 transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}