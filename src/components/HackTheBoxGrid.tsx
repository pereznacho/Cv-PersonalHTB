import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fetchHtbMachines } from '../services/htb';
import { Machine } from '../types/htb';
import MachineCard from './htb/MachineCard';

export default function HackTheBoxGrid() {
  const { t } = useLanguage();
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMachines = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchHtbMachines();
        setMachines(data.machines);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : t('htb.error.loading');
        console.error('HackTheBox data loading error:', err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadMachines();
  }, [t]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 bg-red-500/10 rounded-lg">
        <AlertCircle className="text-red-500 w-12 h-12 mb-4" />
        <h3 className="text-xl font-semibold text-red-500 mb-2">{t('htb.error.title')}</h3>
        <p className="text-white/80 text-center mb-4">{error}</p>
        <p className="text-white/60 text-center text-sm">{t('htb.error.checkToken')}</p>
      </div>
    );
  }

  if (machines.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white/80">{t('htb.noAchievements')}</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">{t('htb.achievements.title')}</h2>
          <p className="text-white/80">{t('htb.achievements.subtitle')}</p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
            <Box className="text-accent" />
            {t('htb.completedMachines')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}