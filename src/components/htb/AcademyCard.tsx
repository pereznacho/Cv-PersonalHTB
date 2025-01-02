import { motion } from 'framer-motion';
import { Academy } from '../../types/htb';
import { HtbBox } from '../icons/HtbBox';
import { useLanguage } from '../../context/LanguageContext';

interface AcademyCardProps {
  academy: Academy;
}

export default function AcademyCard({ academy }: AcademyCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1A1B1E] rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{academy.name}</h3>
        <p className="text-white/60 mb-4">{academy.description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <HtbBox className="w-4 h-4 text-[#9fef00]" />
            <span className="text-white/80">
              {academy.completed ? t('htb.completed') : `${academy.progress}% ${t('htb.completed')}`}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}