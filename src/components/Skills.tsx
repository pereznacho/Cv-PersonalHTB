import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Wifi, Lock, Code, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      title: t('skills.webSecurity'),
      icon: <Shield className="w-6 h-6 text-[#eb4f47]" />,
      items: t('skills.webSecurity.items').split(', ')
    },
    {
      title: t('skills.networkSecurity'),
      icon: <Server className="w-6 h-6 text-[#eb4f47]" />,
      items: t('skills.networkSecurity.items').split(', ')
    },
    {
      title: t('skills.mobileWireless'),
      icon: <Wifi className="w-6 h-6 text-[#eb4f47]" />,
      items: t('skills.mobileWireless.items').split(', ')
    },
    {
      title: t('skills.exploitation'),
      icon: <Lock className="w-6 h-6 text-[#eb4f47]" />,
      items: t('skills.exploitation.items').split(', ')
    },
    {
      title: t('skills.programming'),
      icon: <Code className="w-6 h-6 text-[#eb4f47]" />,
      items: t('skills.programming.items').split(', ')
    },
    {
      title: t('skills.certifications'),
      icon: <Award className="w-6 h-6 text-[#eb4f47]" />,
      items: t('skills.certifications.items').split(', ')
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">{t('skills.title')}</h2>
          <p className="text-white/80">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-accent transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/10 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}