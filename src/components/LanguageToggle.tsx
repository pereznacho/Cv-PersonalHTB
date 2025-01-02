import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
    >
      <Languages size={20} />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </motion.button>
  );
}