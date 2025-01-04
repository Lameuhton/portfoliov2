import { motion } from "framer-motion";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";

interface TypingTextProps {
  texts: string[];
  className?: string;
}

export function TypingText({ texts, className = "" }: TypingTextProps) {
  const currentText = useTypingAnimation({
    texts,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
  });

  return (
    <div className={`relative ${className}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-block"
      >
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-1 inline-block w-0.5 h-8 bg-rose-500 dark:bg-rose-400"
        />
      </motion.span>
    </div>
  );
}
