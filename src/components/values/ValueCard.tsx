import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ValueCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow-lg"
    >
      <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-primary-100 dark:bg-primary-900/20 rounded-full opacity-50" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
