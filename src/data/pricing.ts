import {
  Code2,
  Globe,
  ShoppingCart,
  RefreshCw,
  FileEdit,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Solution {
  name: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  popular?: boolean;
}

export interface Service {
  name: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  frequency: string;
  popular?: boolean;
}

export const websiteSolutions: Solution[] = [
  {
    name: "Site One Page",
    description:
      "Idéal pour présenter votre activité de manière concise et efficace",
    features: [
      "Une page unique percutante",
      "Design responsive moderne",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement première année inclus",
      "Support technique (3 mois)",
    ],
    icon: Code2,
  },
  {
    name: "Site Vitrine",
    description:
      "Parfait pour les entreprises qui souhaitent une présence web professionnelle",
    features: [
      "Jusqu'à 5 pages personnalisées",
      "Design responsive premium",
      "Formulaires interactifs",
      "Optimisation SEO avancée",
      "Intégration réseaux sociaux",
      "Support technique (6 mois)",
      "Formation administration",
    ],
    icon: Globe,
    popular: true,
  },
  {
    name: "Site E-commerce",
    description: "Solution complète pour vendre vos produits en ligne",
    features: [
      "Catalogue produits illimité",
      "Système de paiement sécurisé",
      "Gestion des stocks",
      "Espace client personnalisé",
      "Dashboard administrateur",
      "SEO e-commerce optimisé",
      "Formation complète incluse",
    ],
    icon: ShoppingCart,
  },
  {
    name: "Sur Mesure & Refonte",
    description:
      "Pour les projets spécifiques ou la modernisation de votre site existant",
    features: [
      "Analyse de vos besoins",
      "Architecture personnalisée",
      "Fonctionnalités sur mesure",
      "Migration de données",
      "Préservation du SEO existant",
      "Optimisation des performances",
      "Support prioritaire",
    ],
    icon: RefreshCw,
  },
];

export const recurringServices: Service[] = [
  {
    name: "Maintenance Technique",
    description: "Gardez votre site sécurisé et performant",
    features: [
      "Mises à jour de sécurité",
      "Sauvegardes régulières",
      "Monitoring 24/7",
      "Corrections de bugs",
      "Optimisation des performances",
      "Support technique prioritaire",
    ],
    icon: Wrench,
    frequency: "mensuel",
    popular: true,
  },
  {
    name: "Gestion de Contenu",
    description: "Gardez votre site vivant et à jour",
    features: [
      "Mise à jour des textes",
      "Ajout de nouveaux contenus",
      "Optimisation des images",
      "Mise à jour du blog",
      "Rapport mensuel",
      "Recommandations SEO",
    ],
    icon: FileEdit,
    frequency: "mensuel",
  },
  {
    name: "Pack Complet",
    description: "Solution tout-en-un pour une tranquillité totale",
    features: [
      "Maintenance technique complète",
      "Gestion de contenu régulière",
      "SEO mensuel",
      "Rapport de performance",
      "Support prioritaire 24/7",
      "Évolutions mineures incluses",
    ],
    icon: RefreshCw,
    frequency: "mensuel",
  },
];
