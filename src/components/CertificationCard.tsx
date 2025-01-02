import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CertificationCardProps {
  certification: {
    title: string;
    image: string;
    issuer: string;
    date: string;
  };
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="min-w-full px-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg border border-gray-800"
      >
        {/* Nueva estructura del contenedor de la imagen */}
        <div className="relative h-72 sm:h-96 md:h-[40vh] lg:h-[50vh]">
          <img
            src={certification.image}
            alt={certification.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-accent" />
            <h3 className="text-xl font-semibold text-white">{certification.title}</h3>
          </div>
          
          <div className="space-y-2">
            <p className="text-white/80">
              <span className="font-medium text-accent">{t('certifications.issuer')}:</span> {certification.issuer}
            </p>
            <p className="text-white/80">
              <span className="font-medium text-accent">{t('certifications.date')}:</span> {certification.date}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}