import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export function FeatureHighlight({
  icon: Icon,
  title,
  description,
  isActive,
  onClick,
}: FeatureHighlightProps) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`
        cursor-pointer p-6 rounded-2xl transition-all duration-300
        ${
          isActive
            ? "bg-rose-600 text-white shadow-lg scale-105"
            : "bg-white dark:bg-gray-800 hover:bg-rose-50 dark:hover:bg-gray-700"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div
          className={`
          w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
          ${isActive ? "bg-rose-500" : "bg-rose-100 dark:bg-rose-900/20"}
        `}
        >
          <Icon
            className={`
            w-6 h-6
            ${isActive ? "text-white" : "text-rose-600 dark:text-rose-400"}
          `}
          />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold">{title}</h3>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-rose-100 mt-2"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
