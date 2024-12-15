import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInVariants()}
            className="mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Portrait"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
            />
          </motion.div>

          <motion.h1
            variants={fadeInVariants()}
            className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 text-transparent bg-clip-text"
          >
            Développeuse Web Créative
          </motion.h1>
          
          <motion.p
            variants={fadeInVariants(0.2)}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            Passionnée par la création d'expériences web uniques et élégantes.
            Je transforme vos idées en réalités numériques avec une touche d'originalité.
          </motion.p>

          <motion.div
            variants={fadeInVariants(0.4)}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
            >
              Me contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-200 dark:border-primary-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Voir mes projets
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInVariants(0.6)}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
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