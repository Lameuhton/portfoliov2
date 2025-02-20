import { motion } from "framer-motion";
import { fadeInVariants } from "../lib/utils";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";
import { SEOHead } from "../components/SEOHead";

const projects = [
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
    title: "Site de la Sandwicherie Deliziosa",
    description:
      "Projet réalisé entièrement par moi-même pour une connaissance, ce site vitrine présente de manière attrayante les services et produits de la sandwicherie.",
    image: "/images/projet-sandwicherie.png",
    tech: ["NextJS", "Tailwind"],
    github: null,
    demo: null,
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
  {
    title: "Craftify - Site eCommerce",
    description:
      "Projet de groupe visant à créer une plateforme où les artisans peuvent exposer et vendre leurs créations faites main.",
    image: "/images/craftify-home.png",
    tech: ["React", "Tailwind", "Express"],
    github: "https://github.com/YasmineSan/The_Project",
    demo: "https://ecommerce-craftify.netlify.app/", // Pas de démo disponible
  },
  {
    title: "Landing page site immobilier",
    description:
      "Repris d'un design template, ce projet a été réalisé pour m'entraîner et affiner mes compétences.",
    image: "/images/projet-panto.png",
    tech: ["React", "NextJS", "Tailwind"],
    github: "https://github.com/Lameuhton/PantoProject",
    demo: "https://panto-project.vercel.app/", // Pas de démo disponible
  },
  {
    title: "Catalogue de jeux",
    description:
      "Site web regroupant tous les jeux vidéo populaires, permettant aux utilisateurs de parcourir, trier et rechercher des titres par genre, plateforme et autres critères via une barre de recherche.",
    image: "/images/projet-bestgamez.png",
    tech: ["React", "SCSS"],
    github:
      "https://github.com/Junior-dev-Track/16-react-everyonegames-christophe-aureliane",
    demo: "https://bestgamez.netlify.app/", // Pas de démo disponible
  },
  {
    title: "Application Todolist",
    description:
      "Application interactive de gestion de tâches permettant de visualiser, ajouter, modifier et supprimer des tâches, tout en conservant celles-ci après la fermeture de l'application.",
    image: "/images/projet-todoapp.png",
    tech: ["React"],
    github: "https://github.com/Lameuhton/todoapp",
    demo: "https://aurelianegtodolist.netlify.app/", // Pas de démo disponible
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
    <>
      <SEOHead
        title="Projets"
        description="Politique de confidentialité détaillant la gestion et la protection de vos données personnelles sur le site d'Auréliane Gagliardi."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-800">
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
                Un aperçu des projets que j'ai réalisés pour mettre en pratique
                mes compétences en développement web.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="pt-20 pb-36 bg-white dark:bg-gray-900">
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
    </>
  );
}
