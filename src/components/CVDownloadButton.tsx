import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface CVDownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function CVDownloadButton({ className = '', variant = 'primary' }: CVDownloadButtonProps) {
  return (
    <motion.a
      href="/CV-aureliane-gagliardi-webdev.pdf"
      download
      className={`
        inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-lg hover:shadow-xl' 
          : 'border-2 border-rose-200 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-900/20'
        }
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download className="w-5 h-5" />
      Télécharger mon CV
    </motion.a>
  );
}