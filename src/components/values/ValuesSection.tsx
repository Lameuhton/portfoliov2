import { Heart, Lightbulb, MessageSquare } from "lucide-react";
import { ValueCard } from "./ValueCard";

const values = [
  {
    icon: Heart,
    title: "Passion & Qualité",
    description:
      "Chaque projet est une nouvelle aventure que j'aborde avec enthousiasme et rigueur pour créer des solutions exceptionnelles.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Créativité",
    description:
      "Je reste à l'affût des dernières technologies pour proposer des solutions modernes et innovantes.",
  },
  {
    icon: MessageSquare,
    title: "Communication & Transparence",
    description:
      "Une communication claire et régulière est la clé d'une collaboration réussie et d'un projet abouti.",
  },
];

export function ValuesSection() {
  return (
    <section className="pt-20 pb-36 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Mes Valeurs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Les principes qui guident mon travail au quotidien
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
