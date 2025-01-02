import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">{t('experience.title')}</h2>
          <p className="text-white/80">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="space-y-6">
          {/* Haxor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-accent transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{t('experience.role.haxor')}</h3>
                <p className="text-accent">{t('experience.company.haxor')}</p>
              </div>
              <span className="text-white/60">{t('experience.period.haxor')}</span>
            </div>
            <p className="text-white/80">{t('experience.desc.haxor')}</p>
          </motion.div>

          {/* CyberFoundersGroup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-accent transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{t('experience.role.cyber')}</h3>
                <p className="text-accent">{t('experience.company.cyber')}</p>
              </div>
              <span className="text-white/60">{t('experience.period.cyber')}</span>
            </div>
            <p className="text-white/80">{t('experience.desc.cyber')}</p>
          </motion.div>

          {/* Coalfire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-accent transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{t('experience.role.coalfire')}</h3>
                <p className="text-accent">{t('experience.company.coalfire')}</p>
              </div>
              <span className="text-white/60">{t('experience.period.coalfire')}</span>
            </div>
            <p className="text-white/80">{t('experience.desc.coalfire')}</p>
          </motion.div>

          {/* Neuralys */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-accent transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{t('experience.role.neuralys')}</h3>
                <p className="text-accent">{t('experience.company.neuralys')}</p>
              </div>
              <span className="text-white/60">{t('experience.period.neuralys')}</span>
            </div>
            <p className="text-white/80">{t('experience.desc.neuralys')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}