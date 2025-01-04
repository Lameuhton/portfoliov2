import { motion } from "framer-motion";
import { fadeInVariants } from "../lib/utils";
import { Code2, Heart, Star, Coffee } from "lucide-react";
import { InteractiveTimeline } from "../components/InteractiveTimeline";
import { CVDownloadButton } from "../components/CVDownloadButton";
import { ValuesSection } from "../components/values/ValuesSection";

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-36 bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInVariants()} className="mb-8">
              <img
                src="/photo.jpg"
                alt="Auréliane Gagliardi"
                className="w-40 h-40 rounded-full mx-auto shadow-xl"
              />
            </motion.div>
            <motion.h1
              variants={fadeInVariants(0.1)}
              className="text-5xl font-display font-bold mb-6"
            >
              À propos de moi
            </motion.h1>
            <motion.p
              variants={fadeInVariants(0.2)}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Passionnée, je crée des expériences numériques
              uniques qui allient esthétique et performance. Je recherche
              actuellement un poste de développeuse web, notamment en front-end,
              pour contribuer à des projets innovants.
            </motion.p>
            <motion.div variants={fadeInVariants(0.3)}>
              <CVDownloadButton />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <InteractiveTimeline />

      {/* Skills Section */}
      <section className="py-20 bg-rose-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInVariants()}
              className="text-4xl font-display font-bold mb-12 text-center"
            >
              Mes Compétences
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Code2,
                  title: "Technologies Frontend",
                  skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
                },
                {
                  icon: Star,
                  title: "Technologies Backend",
                  skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
                },
                {
                  icon: Heart,
                  title: "Design",
                  skills: [
                    "UI/UX Design",
                    "Figma",
                    "Adobe XD",
                    "Responsive Design",
                  ],
                },
                {
                  icon: Coffee,
                  title: "Outils & Méthodes",
                  skills: ["Git", "Agile", "CI/CD", "Testing"],
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={fadeInVariants(index * 0.1)}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <category.icon className="w-8 h-8 text-rose-600 dark:text-rose-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ValuesSection />
    </>
  );
}
