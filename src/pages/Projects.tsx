import { motion } from "framer-motion";
import { fadeInVariants } from "../lib/utils";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "MongoDB"],
    github: null, // Pas de code disponible
    demo: "https://demo-ecommerce.com",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord analytique avec visualisation de données en temps réel.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["Vue.js", "D3.js", "Firebase"],
    github: "https://github.com/user/dashboard",
    demo: "https://demo-dashboard.com",
  },
  {
    title: "Social Media App",
    description:
      "Application de réseau social avec messagerie instantanée et partage de médias.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    tech: ["React Native", "GraphQL", "AWS"],
    github: "https://github.com/user/social",
    demo: null, // Pas de démo disponible
  },
];

// Extraire toutes les technologies uniques
const technologies = Array.from(
  new Set(projects.flatMap((project) => project.tech))
).sort();

export function Projects() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const filteredProjects = projects.filter(
    (project) =>
      selectedTech.length === 0 ||
      selectedTech.some((tech) => project.tech.includes(tech))
  );

  const toggleTech = (tech: string) => {
    setSelectedTech(
      (prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [tech]) // Ne sélectionner qu'une seule technologie à la fois
    );
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInVariants()}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Mes Réalisations
            </motion.h1>
            <motion.p
              variants={fadeInVariants(0.2)}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Découvrez une sélection de projets qui illustrent mon expertise et
              ma passion pour le développement web.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span className="font-semibold">Technologies :</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech([])}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTech.length === 0
                      ? "bg-rose-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  Tous
                </button>
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTech.includes(tech)
                        ? "bg-rose-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeInVariants(index * 0.1)}
                  className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-rose-100 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded-full"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
