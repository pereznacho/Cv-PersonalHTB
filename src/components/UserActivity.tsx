import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from '../context/LanguageContext'; // Importamos el contexto de idiomas

interface Machine {
  id: number;
  name: string;
  date: string;
  machine_avatar: string;
}

const UserActivity: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchMachines = async () => {
      setLoading(true);
      setError(null);

      const apiUrl = 'https://tu-api.onrender.com/';

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const machinesData = data.machines.map((machine: any) => ({
          id: machine.id,
          name: machine.name,
          date: machine.date,
          machine_avatar: machine.machine_avatar,
        }));

        setMachines(machinesData || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchMachines();
  }, []);

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
        <h3 className="text-xl font-semibold text-red-500 mb-2">{t('htb.error.title')}</h3>
        <p className="text-white/80 text-center mb-4">{error}</p>
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

  // Agrupamos las máquinas en columnas de 10
  const groupedMachines = [];
  for (let i = 0; i < machines.length; i += 10) {
    groupedMachines.push(machines.slice(i, i + 10));
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Ajuste para dispositivos móviles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Ajuste para tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="htb" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white">{t('htb.title')}</h2>
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{
              __html: t('htb.subtitle').replace(
                '{count}',
                `<span style="color: #9fef00;">${machines.length}</span>`
              ),
            }}
          />
        </motion.div>

        {/* Carrusel */}
        <Slider {...sliderSettings}>
          {groupedMachines.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.map((machine) => (
                <motion.div
                  key={machine.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-accent transition-colors m-2"
                >
                  <div className="flex items-start space-x-4">
                    {machine.machine_avatar && (
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={machine.machine_avatar}
                          alt={machine.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            console.error(`Error loading image for ${machine.name}:`, target.src);
                          }}
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white">{machine.name}</h3>
                      <p className="text-white/80">
                        {t('htb.solvedOn')} {new Date(machine.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UserActivity;