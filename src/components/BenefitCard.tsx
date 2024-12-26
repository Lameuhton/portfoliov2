import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

export function BenefitCard({
  icon: Icon,
  title,
  description,
  details,
}: BenefitCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="group p-6 rounded-xl bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
    >
      <motion.div layout className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
          <motion.div
            layout
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 italic pt-2 border-t border-gray-100 dark:border-gray-700">
              {details}
            </p>
          </motion.div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors mt-2"
          >
            {isExpanded ? "Voir moins" : "En savoir plus"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
