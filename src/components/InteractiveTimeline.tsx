import { motion } from "framer-motion";
import { fadeInVariants } from "../lib/utils";
import {
  BookOpen,
  Code2,
  Laptop,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const timeline = [
  {
    year: "2019",
    icon: BookOpen,
    title: "Début de l'Aventure",
    description: "Première ligne de code et découverte de la programmation",
    details:
      "C'est ici que tout a commencé ! Ma première rencontre avec HTML et CSS a été une révélation.",
    tech: ["HTML", "CSS"],
  },
  {
    year: "2020",
    icon: Code2,
    title: "Immersion JavaScript",
    description: "Apprentissage intensif du développement web moderne",
    details:
      "Plongée dans l'univers de JavaScript et découverte des frameworks modernes.",
    tech: ["JavaScript", "React", "Node.js"],
  },
  {
    year: "2021",
    icon: Laptop,
    title: "Premiers Projets",
    description: "Création de projets personnels et collaboratifs",
    details:
      "Développement de plusieurs applications web complètes, de la conception au déploiement.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    year: "2022",
    icon: GraduationCap,
    title: "Formation Avancée",
    description: "Spécialisation en développement full-stack",
    details:
      "Approfondissement des connaissances en architecture logicielle et bonnes pratiques.",
    tech: ["MongoDB", "PostgreSQL", "Docker"],
  },
  {
    year: "2023",
    icon: Briefcase,
    title: "Freelance",
    description: "Lancement en tant que développeuse indépendante",
    details:
      "Début de l'aventure entrepreneuriale et premiers projets clients.",
    tech: ["AWS", "CI/CD", "Testing"],
  },
];

export function InteractiveTimeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeInVariants()}
            className="text-4xl font-display font-bold text-center mb-16"
          >
            Mon Parcours
          </motion.h2>

          <div className="relative">
            {/* Timeline line - Hidden on mobile */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-rose-200 dark:bg-rose-800" />

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeInVariants(index * 0.1)}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } justify-center`}
              >
                {/* Timeline dot - Adjusted for mobile */}
                <div
                  className={`
                  absolute w-4 h-4 rounded-full bg-rose-400 dark:bg-rose-600 z-10
                  md:left-[50%] md:-translate-x-1/2
                  left-0 top-6 -translate-x-1/2
                  md:top-auto
                `}
                />

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`
                    bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg
                    w-full ml-6
                    md:w-[45%] md:ml-0
                    ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                  `}
                >
                  <div className="flex items-start gap-4 flex-col sm:flex-row">
                    <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                        {item.details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-rose-100 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
