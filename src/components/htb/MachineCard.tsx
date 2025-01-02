import { motion } from 'framer-motion';
import { Machine } from '../../types/htb';
import { HtbBox } from '../icons/HtbBox';
import { useLanguage } from '../../context/LanguageContext';

interface MachineCardProps {
  machine: Machine;
}

export default function MachineCard({ machine }: MachineCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1A1B1E] rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img
          src={machine.machine_avatar}
          alt={machine.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/img/default-machine.png';
          }}
        />
        <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/50 text-xs font-medium">
          {machine.os}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{machine.name}</h3>
        <div className="flex items-center justify-between text-sm mb-2">
          <span className={`text-${getDifficultyColor(machine.difficulty)}`}>
            {machine.difficulty}
          </span>
          <div className="flex items-center space-x-2">
            <HtbBox className="w-4 h-4 text-[#9fef00]" />
            <span className="text-white/80">
              {t('htb.solvedOn')} {new Date(machine.completed_at).toLocaleDateString(t('locale'))}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'green-500';
    case 'medium':
      return 'yellow-500';
    case 'hard':
      return 'red-500';
    case 'insane':
      return 'purple-500';
    default:
      return 'gray-500';
  }
}