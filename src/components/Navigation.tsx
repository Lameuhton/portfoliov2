import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Code2,
  Home,
  Mail,
  Settings,
  Menu,
  X,
  User,
  FileText,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { cn } from "../lib/utils";

const links = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/about", label: "À propos", icon: User },
  { to: "/services", label: "Services", icon: Settings },
  { to: "/projects", label: "Projets", icon: Code2 },
  { to: "/contact", label: "Contact", icon: Mail },
];

const menuVariants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
      opacity: { duration: 0.2 },
    },
  },
  open: {
    clipPath: "circle(210% at calc(100% - 3rem) 3rem)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
      opacity: { duration: 0.2 },
    },
  },
};

const linkVariants = {
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.6, 0.05, 0.1, 0.9],
    },
  }),
};

const decorationVariants = {
  closed: { scale: 0, opacity: 0 },
  open: (i: number) => ({
    scale: 1,
    opacity: 0.1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.6, 0.05, 0.1, 0.9],
    },
  }),
};

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-primary-100 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-primary-600 dark:text-primary-400"
            >
              <Code2 className="w-8 h-8" />
              <span>Auréliane G.</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all",
                      location.pathname === to &&
                        "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 p-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: [0.6, 0.05, 0.1, 0.9] }}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-gradient-to-br from-white via-primary-50 to-white dark:from-gray-900 dark:via-primary-900/10 dark:to-gray-900 md:hidden z-40 flex items-center justify-center"
              >
                {/* Decorative Elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={decorationVariants}
                    className="absolute w-64 h-64 rounded-full bg-primary-400 dark:bg-primary-500 blur-3xl"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${20 + i * 20}%`,
                      opacity: 0.1,
                    }}
                  />
                ))}

                <div className="relative z-10 w-full max-w-sm mx-auto px-8 h-full pt-36">
                  <ul className="space-y-6">
                    {links.map(({ to, label, icon: Icon }, index) => (
                      <motion.li
                        key={to}
                        custom={index}
                        variants={linkVariants}
                      >
                        <Link
                          to={to}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-4 text-2xl font-display hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-4 -mx-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50",
                            location.pathname === to &&
                              "text-primary-600 dark:text-primary-400 bg-white/50 dark:bg-gray-800/50"
                          )}
                        >
                          <Icon className="w-6 h-6" />
                          {label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CV Button */}
                  <motion.div
                    variants={linkVariants}
                    custom={links.length}
                    className="pt-4 border-t border-gray-100 dark:border-gray-700"
                  >
                    <a
                      href="/cv.pdf"
                      download
                      className="flex items-center justify-center gap-4 text-xl font-display p-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-500 transition-colors"
                    >
                      <FileText className="w-6 h-6" />
                      Télécharger mon CV
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
 