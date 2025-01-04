import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, Heart } from 'lucide-react';

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projets", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Développement Web", href: "/services" },
    { name: "Design UI/UX", href: "/services" },
    { name: "Applications Mobiles", href: "/services" },
    { name: "Maintenance", href: "/services" },
  ],
  legal: [
    { name: "Mentions légales", href: "/legal" },
    { name: "Politique de confidentialité", href: "/privacy" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: "https://github.com/Lameuhton" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aurelianeg-webdev/",
    },
    { name: "Email", icon: Mail, href: "aurelianeg2000@gmail.com" },
    { name: "CV", icon: FileText, href: "/CV.pdf", download: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-rose-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-rose-800 dark:text-rose-300 font-display font-semibold text-lg mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-rose-800 dark:text-rose-300 font-display font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-rose-800 dark:text-rose-300 font-display font-semibold text-lg mb-4">
              Légal
            </h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-rose-800 dark:text-rose-300 font-display font-semibold text-lg mb-4">
              Me suivre
            </h3>
            <div className="flex gap-4 mb-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  download={item.download}
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-rose-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
            Créé avec <Heart className="w-4 h-4 text-rose-500" /> par Auréliane Gagliardi © 2024
          </p>
        </div>
      </div>
    </footer>
  );
}