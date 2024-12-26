import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

interface InfoTooltipProps {
  tip: string;
  className?: string;
}

export function InfoTooltip({ tip, className = "" }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-800/30 transition-colors"
        aria-label="Plus d'informations"
      >
        <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop pour fermer en cliquant à l'extérieur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-72 p-4 mt-2 -right-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-primary-100 dark:border-primary-800"
            >
              {/* Flèche */}
              <div className="absolute -top-2 right-4 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-primary-100 dark:border-primary-800 transform rotate-45" />

              <div className="relative text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {tip}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
