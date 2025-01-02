import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import useCarousel from '../hooks/useCarousel';

const certifications = [

  {
    title: 'HackTheBox CBBH (Certified Bug Bounty Hunter)',
    image: '/img/cbbh.jpg',
    issuer: 'HackTheBox',
    date: '2021',
  },
  {
    title: 'HackTheBox Dante ProLab',
    image: '/img/Dante.jpg',
    issuer: 'HackTheBox',
    date: '2022',
  },

  {
    title: 'HackTheBox CPT (Certified Penetration Tester)',
    image: '/img/cpt.jpg',
    issuer: 'EC-Council',
    date: '2016',
  },
];

export default function Certifications() {
  const { t } = useLanguage();
  const { currentIndex, next, previous } = useCarousel(certifications.length);

  return (
    <section id="certifications" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            {t ? t('certifications.title') : 'Certifications'}
          </h2>
          <p className="text-white/80">
            {t ? t('certifications.subtitle') : 'Explore my certifications'}
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Desplaza 100% del contenedor por imagen
            }}
          >
            {certifications.map((cert, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="w-full h-[50vh] flex items-center justify-start"> {/* Imagen alineada a la izquierda */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain mx-auto"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Botones de navegación */}
          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-accent/10 rounded-full text-accent hover:bg-accent/20 transition-colors"
            aria-label="Previous certification"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-accent/10 rounded-full text-accent hover:bg-accent/20 transition-colors"
            aria-label="Next certification"
          >
            →
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 gap-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-accent' : 'bg-gray-600'
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}