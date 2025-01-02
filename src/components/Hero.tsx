import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
          <img
            src="/img/Usuario.png"
            alt="HTB Hacker"
            style={{ width: '300px', height: '300px' }}
            className="rounded-full mx-auto mb-8 object-cover border-4 border-accent shadow-lg"
          />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-4 text-white"
          >
            HTB Hacker
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-white/80 mb-8 flex items-center justify-center gap-2"
          >
            <Shield className="text-accent" />
            {t('hero.role')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-12"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent-hover transition-colors"
            >
              {t('hero.contact')}
            </a>
            <a
              href="#experience"
              className="bg-transparent text-accent px-8 py-3 rounded-full border border-accent hover:bg-accent/10 transition-colors"
            >
              {t('hero.experience')}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ArrowDown className="text-accent animate-bounce" />
      </motion.div>
    </section>
  );
}