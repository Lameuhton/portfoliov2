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
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    x: "0%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: 20,
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 border-b border-primary-100 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display z-40">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-primary-600 dark:text-primary-400"
            >
              <Code2 className="w-8 h-8" />
              <span>Auréliane G.</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
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
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 p-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
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
              <>
                {/* Overlay sombre */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black lg:hidden z-40"
                  onClick={() => setIsOpen(false)}
                />

                {/* Menu */}
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl lg:hidden z-40"
                >
                  <div className="h-full flex flex-col justify-center p-8">
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
                              "flex items-center gap-4 p-4 rounded-2xl transition-all",
                              location.pathname === to
                                ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                                : "hover:bg-primary-50 dark:hover:bg-primary-900/20"
                            )}
                          >
                            <Icon className="w-6 h-6" />
                            <span className="text-xl font-sans">{label}</span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CV Button */}
                    <motion.div
                      variants={linkVariants}
                      custom={links.length}
                      className="mt-8 pt-8 border-t border-primary-100 dark:border-primary-800"
                    >
                      <a
                        href="/CV.pdf"
                        download
                        className="flex items-center justify-center gap-4 w-full p-4 bg-primary-600 dark:bg-primary-500 text-white rounded-2xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                      >
                        <FileText className="w-6 h-6" />
                        <span className="text-xl font-display">
                          Télécharger mon CV
                        </span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
