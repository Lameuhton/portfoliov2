import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: "Site du Dr. François Bernaerts",
    description:
      "Réalisé lors de mon stage chez Webecode, ce site vitrine présente les services du Dr. François Bernaerts, médecin généraliste homéopathe.",
    image: "/images/projet-docteur.png",
    tech: ["Wordpress", "Tailwind"],
    github: null, // Pas de code disponible
    demo: "https://www.docteur.webecode.be/",
  },
  {
    title: "Portfolio",
    description:
      "Ce portfolio est un site moderne et responsive conçu pour présenter des compétences professionnelles avec un design élégant et des animations subtiles.",
    image: "/images/projet-portfoliocolin.png",
    tech: ["NextJS", "Tailwind"],
    github: "https://github.com/Lameuhton/atome_portfolio",
    demo: "https://www.gregoire.dev/",
  },
];

export function ProjectShowcase() {
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
              Projets Récents
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez quelques-unes de mes réalisations récentes et voyez
              comment je peux donner vie à vos idées.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeInVariants(index * 0.1)}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={fadeInVariants(0.2)} className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
            >
              Voir tous les projets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}