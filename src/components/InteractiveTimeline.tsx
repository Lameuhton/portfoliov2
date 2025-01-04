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
    year: "2018 à 2023",
    icon: BookOpen,
    title: "Découverte et études",
    description: "HEPL et HELMo",
    details:
      "C'est ici que tout a commencé ! J'ai étudié l'informatique de gestion à la HEPL et la cybersécurité à HELMo, où j'ai acquis des bases solides dans divers langages et domaines. Cependant, la méthode traditionnelle d'apprentissage ne me convenait pas, me poussant à explorer des approches plus adaptées à ma façon d'apprendre.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "Python", "SQL"],
  },
  {
    year: "2024",
    icon: Code2,
    title: "Formation Web Developper",
    description: "Becode.org",
    details:
      "Après ces études, j'ai découvert un bootcamp intensif de 7 mois chez Becode.org, une formation parfaitement alignée avec ma manière d'apprendre. En travaillant sur des projets concrets, seule ou en équipe, j'ai pu maîtriser rapidement des frameworks modernes comme React ou Laravel. Ce format m'a surtout permis de développer une réelle autonomie dans l'apprentissage, une compétence clé pour évoluer constamment dans le domaine du développement web.",
    tech: ["React", "Laravel", "Node.js", "Git", "SCSS"],
  },
  {
    year: "2024",
    icon: Laptop,
    title: "Premiers Projets",
    description: "Création de projets personnels",
    details:
      "Grâce à ces nouvelles compétences acquises pendant ma formation, j'ai commencé à réaliser des projets personnels en parallèle pour m'entraîner. J'ai conçu des portfolios pour moi et pour des connaissances, ainsi que des sites vitrine et e-commerce pour mon entourage, ce qui m'a permis de consolider mes connaissances tout en répondant à des besoins concrets.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    year: "2024",
    icon: Briefcase,
    title: "Stage en Développement Web",
    description: "Webecode, agence web éco-responsable",
    details:
      "À la fin de ma formation, j'ai effectué un stage de 3 mois au sein de l'agence web éco-responsable Webecode. Cette première expérience professionnelle très enrichissante m'a permis d'apprendre à créer des thèmes personnalisés WordPress tout en découvrant les principes de l'éco-conception. J'ai également contribué à la réalisation de maquettes, une activité que j'ai particulièrement appréciée pour son côté créatif et collaboratif.",
    tech: ["Wordpress", "Tailwind CSS"],
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
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
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
