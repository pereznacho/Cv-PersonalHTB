import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t, switchLanguage, currentLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Desplazamiento suave a las secciones
  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`La sección con el ID "${id}" no existe en el DOM.`);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-primary/80 backdrop-blur-sm z-50 border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.h1
            className="text-xl font-bold text-accent"
            whileHover={{ scale: 1.05 }}
          >
            HTB Hacker
          </motion.h1>

          {/* Icono de menú hamburguesa para dispositivos móviles */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-accent focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navegación principal (desktop) */}
          <nav className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => handleScrollToSection('#about')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => handleScrollToSection('#experience')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => handleScrollToSection('#skills')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              {t('nav.skills')}
            </button>

            <button
              onClick={() => handleScrollToSection('#contact')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={() => switchLanguage(currentLanguage === 'en' ? 'es' : 'en')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              {currentLanguage === 'en' ? 'ES' : 'EN'}
            </button>
          </nav>

          {/* Botones sociales */}
          <div className="hidden sm:flex items-center gap-4">
            <LanguageToggle />
            <motion.a
              href="https://app.hackthebox.eu/profile/[TU-ID]]"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/80 hover:text-accent"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAcfSURBVGhD7Zl7aNZVGMcfw8zsaqaRlVYQlF3U+iNCUtOCkCghGmFkQUEipXSDMFLKQCtSRNPNvdfN6aapEQsLEs0i7UJhDRzmsvKy63t12ry+fb7nPe/YoM3Xbc5RPnDY7/2d5zzP9zzn+zznnN/svPyXJLrfhpQlbbD/2felKG5XBFP2SChuG8NxKw812qS19Xap7+57sjZjAwIxuy+askIAn1x1xDKlzZZhAnHa4nC9jZmXsf5evW9IuNFuBexb4YTFyv62TDRtmRJAlxzKttLDlqGvhvbqylq7yQ87d1J0wEaEYvZCOGk7FWGBjNJWH3WRPh5JWqashXepLHhNKJKyrZG4TV++x4Z5M70ngV12WThtUwFZKbCrAAcgB9JH9/tg3OYGm+wDnqvXHEeHiWkiq4+5SZ2INtuqUMqmhDM20Js9u1KcsImA/QhALRUns2AEVuAA/wc8X0y7w6sbE5gA0DXox8iDXNQzemalUvxeVFxv47x6z0uw3kZDi7dxdqDCA1CrOOUAJMMxi9A/xau3ky1brD958DQrtAldN0km4qglW0ykhvdvrDhoo/yQ7svSRhvOks/C6XdlcHcVydfWOeA3hZrsmS15VIziOrsGW2/C+Z2rPX1kQxSTXXxsU84UVdvVfsiZS1HGLiSKT5QesU9lfM2JLC3kTDzF+Y+hhL2ycp9d74fkLdT5ewG4BLsN5djVyikY5VBPSU1FWkcCP5rJWD8/JD+JJmwshksj8HKdpwUGM4o44A/C24UBdLx6V6VfoNGmUkYrmMAxl7SxrC/5xE8tfoojMbvd63cu8G5YMGbrP2Yw0c5g2C3nmmyJ2wDgB7xqj0jwoA0NJW0afn8QZeRLPkUdJTA+36fsDvLqHQs8vAvge7XrOSO+aUkxWL6WLd2r9pgUN9ltRHuHop7zl6tWYCmrSNpVXrVjKayzO5nlHmV8W+AqYVCnhb5vaTPnVdkAP6TLUpaxwdiaQ67sxIfbsFr98azdl/5wXoc1D/y3tsBzBsU/n6QpIlRJ8j7sh52RKOmKG20aHN5MQFp8smd96S/+ugccrsmg284x4oxiXEuobR2dP4nWslCD3eKHn1bQvZuSWB5JW70AO0oCMucHapyinegWcNVqgH0VTFoBEY7KoNu6cSLDvsqo/u4i+q935qCwwa6lQiwAzB4BUvJprGzpGZ8pArWQSTwp6pQxqS4D91m9saTWLikmQaJxe4wKsF0RV7+cij4uqZLWzMS20Ao4vl7gzbn9gAg/R/sFoK7suYnTZAf7p3i/MdhgE1Q9iPwQVnWbanqXgWs7JyErl3Kb8d1G7R3Ou5cxvk/lkmi38lFAeB8DfIS/Y9jmJ8Pjz8IpS+oglpusdDWGVfyJvmcB3LpTyj4R/6ZHgLc1LJnH2UO8xsEKdA8JsJuAj6LygFZHX5NWRO8cYHR8ma1ncvND++0Gb7JVIk123VkDnhMtLeeUh1x1SFqLmwBA1ZQL7QBnJ3QIwGXQ7h7dmLyZdtIrwHOyjDslHJ/BBKrEY1UJH/VsAqathcTbwe/HP/zLLvbD/lV6FXhOAHYj4Ffi+LjKm3OcsGbszdEl2qt1KucEuATwExmfEDVU6/ld7bvyknMGnOPo+LbAocou35WXnI/4eeB5So8Ad7fypG04XQlrK90FLpAA31pO0LoC3J3Hda7g+We24bxvPd0FHqizyYyvlm8BZ3wkL+CtNyAcu+MmE2D3+5UovAZlRni1DqWrwEURNqmXStKcX+SXfcBf5aK0K71axxJM29BggusSHHOfItj9BEBASg5bJeWtoKIT6pwp8LXcpHSiJJc+kS/3YQng7vafspPYmrlkt13k1TsXjqCjOLktwkCtkkRnDxlzX584b9AX7og+ZwI80GDjiXIhthO5zxQ647hzftp2cA6areO0V89fADgFEGGcH1WF0RKKd67apG03/e+urG3/+SAf4IGDNhLqvYONagF2qwkl3YU8afsYM1+U9epdk9Lddrk+n2H4c4FWNDDs/sohUdoeiNmMoprsWSSctnEdAVd1ghLP07c5l/w6PWpV0TvCOaeQ1X7Qq/eMLK+zmwE0m4hUuYxX0rK0PkppeLoe51PFVwecSQo4z7vCe22gO/6iAy3SrsyKFiSfKMjzF1DmKd20vLueF3g5FjDv4SguYMp+RVcrwPv9UKCKCRzzgPTuEE3AavSFIEcLgeb2U0Xfi732sV/ftHF4PwCjADol0JqAqpBKmEDTl/1KAHjlhN7r2ZW4JLejhC2AGqO9yd4VHQWCKZsOkK9d5KFHK+g2TTz2NfkYp8dwIG3jmUzeu/FZk0DcRurzBBH+XQnMJuImIMC5T3k8f8m7gi6Vt7Mp7jNEs40OJW0JZTKhCWjXBfRuKDFLt3ev2jdF90+SbRJ8XgSF5uozcZ/7N2FnAv8HdXST/5+K2T8q3HXCdAIudgAAAABJRU5ErkJggg=="
                alt="HackTheBox"
                className="w-5 h-5"
              />
            </motion.a>
            <motion.a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/80 hover:text-accent"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/tu-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/80 hover:text-accent"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:tucorreo@mail.com"
              whileHover={{ scale: 1.1 }}
              className="text-white/80 hover:text-accent"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 bg-primary border-t border-gray-800 py-4">
            <nav className="flex flex-col items-center gap-4">
              <button
                onClick={() => handleScrollToSection('#about')}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => handleScrollToSection('#experience')}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {t('nav.experience')}
              </button>
              <button
                onClick={() => handleScrollToSection('#skills')}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {t('nav.skills')}
              </button>
              <button
                onClick={() => handleScrollToSection('#htb-community')}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {t('nav.htbCommunity')}
              </button>
              <button
                onClick={() => handleScrollToSection('#contact')}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => switchLanguage(currentLanguage === 'en' ? 'es' : 'en')}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {currentLanguage === 'en' ? 'ES' : 'EN'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}