import { Brush, Lightbulb, MessageSquare } from "lucide-react";
import { ValueCard } from "./ValueCard";

const values = [
  {
    icon: Lightbulb,
    title: "Adaptabilité & Apprentissage",
    description:
      "Je m’adapte rapidement aux nouvelles technologies et aux défis rencontrés. Autodidacte et curieuse, j’apprends en continu pour améliorer mes compétences et optimiser mon travail.",
  },
  {
    icon: Brush,
    title: "Innovation & Créativité",
    description:
      "Je reste à l'affût des dernières tendances et technologies pour créer des projets uniques et performants.",
  },
  {
    icon: MessageSquare,
    title: "Communication & Esprit d'équipe",
    description:
      "Travailler en équipe est essentiel pour mener un projet à bien. J’apprécie échanger des idées, apprendre des autres et contribuer efficacement à un environnement collaboratif.",
  },
];

export function ValuesSection() {
  return (
    <section className="pt-20 pb-36 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Mes Valeurs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Les principes qui guident mon travail au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={value.title} {...value} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
