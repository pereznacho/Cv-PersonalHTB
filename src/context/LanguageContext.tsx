import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define los tipos de idioma disponibles
export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language; // Idioma actual
  toggleLanguage: () => void; // Función para alternar idioma
  t: (key: string) => string; // Función para traducir claves
  switchLanguage: (lang: Language) => void; // Cambiar directamente a un idioma específico
  currentLanguage: Language; // Idioma actual (sinónimo de `language`)
}

// Traducciones centralizadas
const translations = {
  en: {
    'locale': 'en-US',
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'hero.title': 'Hi, I\'m HTB Hacker',
    'hero.role': 'Cybersecurity Role 01',
    'hero.subtitle': 'Security Engineer',
    'hero.description': 'My personal Description',
    'hero.contact': 'Contact me',
    'hero.experience': 'View Experience',
    'hero.cta': 'Get in touch',
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',
    'experience.role.haxor': 'Security role 01',
    'experience.company.haxor': 'Company 01',
    'experience.period.haxor': 'October 2024 - Present',
    'experience.desc.haxor': 'Leading security operations and strategic initiatives',
    'experience.role.cyber': 'Security Role 02',
    'experience.company.cyber': 'Company 02',
    'experience.period.cyber': 'July 2022 - September 2024',
    'experience.desc.cyber': 'Description of the role',
    'experience.role.coalfire': 'Senior Security Expert',
    'experience.company.coalfire': 'Company 02',
    'experience.period.coalfire': 'January 2021 - June 2022',
    'experience.desc.coalfire': 'Performing advanced penetration testing',
    'experience.role.neuralys': 'Offensive Security Specialist',
    'experience.company.neuralys': 'Company 03',
    'experience.period.neuralys': 'June 2019 - January 2021',
    'experience.desc.neuralys': 'Conducting security assessments and audits',
    'experience.current': 'Current',
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies I work with',
    'skills.webSecurity': 'Web Security',
    'skills.webSecurity.items': 'OWASP Top 10, Web Exploitation, Business Logic Vulnerabilities, Penetration Testing',
    'skills.networkSecurity': 'Network Security',
    'skills.networkSecurity.items': 'Network Assessment, Penetration Testing, Vulnerability Analysis, Infrastructure Security',
    'skills.mobileWireless': 'Mobile & Wireless',
    'skills.mobileWireless.items': 'GPRS & LTE, Wireless Cracking, Mobile Pentesting, Android Security',
    'skills.exploitation': 'Exploitation',
    'skills.exploitation.items': 'Buffer Overflow, Social Engineering, Password Cracking, Exploit Development',
    'skills.programming': 'Programming',
    'skills.programming.items': 'Python, Bash Scripting, Automation, Security Tools Development',
    'skills.certifications': 'Certifications',
    'skills.certifications.items': 'Certified Ethical Hacker (CEH), Certified Bug Bounty Hunter (CBBH)',
    'community.title': 'HackTheBox Argentina Community Ambassador',
    'community.subtitle': 'In June 2021, I embarked on a journey to create a community where we could learn by playing, face challenges, connect people, help new professionals, and learn from each other. This idea of building a cybersecurity community to share knowledge has turned into an inspiring space for everyone, including myself.',
    'community.mission.title': 'Our Mission',
    'community.mission.description': 'As the HackTheBox Argentina Community Ambassador, I am dedicated to fostering an inspiring, inclusive community of cybersecurity enthusiasts. We offer a platform for knowledge sharing, collaboration, and hands-on learning. Whether you are a beginner or an expert, there is always something new to explore. Join us and let\'s grow together in the exciting world of cybersecurity!',
    'community.impact.title': 'What We Offer',
    'community.impact.description': 'Learning is best when it is engaging and fun. As part of HackTheBox Argentina, we provide workshops, CTF challenges, and open discussions that enhance your skills and help you collaborate with others. Join us as we solve real-world problems and celebrate each other’s achievements. The cybersecurity world is vast and ever-changing, and together, we can explore it!',
    'community.networking.title': 'Networking Opportunities',
    'community.networking.description': 'Our community is an excellent place for both digital and physical networking. Through our meetups, we help professionals expand their networks, connect with experts, and even support newcomers in landing their first cybersecurity job.',
    'community.prizes.title': 'Exciting Prizes',
    'community.prizes.description': 'At HackTheBox Argentina, we offer exciting prizes to all participants in our meetups. These prizes, provided directly by HackTheBox, include exclusive access, swag, and more. It\'s our way of recognizing the efforts of our members and making our community events even more rewarding.',
    'community.joinButton': 'Join HackTheBox Argentina Community',
    'htb.title': 'HackTheBox Machines Completed', // Nueva clave para el título
    'htb.subtitle': 'Here are the {count} machines I have completed.', // Nueva clave para el subtítulo
    'htb.solvedOn': 'Solved on:',
    'htb.error.title': 'Error',
    'htb.noAchievements': 'No machines found.',
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Professional qualifications and achievements',
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch',
    'contact.description': 'Have a question or want to work together? Fill out the form below and I\'ll get back to you as soon as possible.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message. Please try again.',
    'contact.form.validation.name': 'Please enter your name',
    'contact.form.validation.email': 'Please enter a valid email',
    'contact.form.validation.message': 'Please enter your message',
    'contact.info.email': 'Email',
    'contact.info.email.value': 'tucorreo@mail.com',
    'contact.info.location': 'Location',
    'contact.info.location.value': 'Buenos Aires, Argentina',
    'footer.rights': 'All rights reserved',
    'footer.copyright': ' 2024 Ignacio Pérez. All rights reserved',
  },
  es: {
    'locale': 'es-ES',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.certifications': 'Certificaciones',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    'hero.title': 'Hola, soy HTB Hacker',
    'hero.role': 'Rol de seguridad 01',
    'hero.subtitle': 'Ingeniero de Seguridad',
    'hero.description': 'Mi descripcion personal.',
    'hero.contact': 'Contáctame',
    'hero.experience': 'Ver Experiencia',
    'hero.cta': 'Contactar',
    'experience.title': 'Experiencia',
    'experience.subtitle': 'Mi trayectoria profesional',
    'experience.role.haxor': 'Mi puesto actual 01',
    'experience.company.haxor': 'La empresa actual 01',
    'experience.period.haxor': 'Octubre 2024 - Presente',
    'experience.desc.haxor': 'Descripcion 01',
    'experience.role.cyber': 'Puesto Anterior 02',
    'experience.company.cyber': 'Empresa 01',
    'experience.period.cyber': 'Julio 2022 - Septiembre 2024',
    'experience.desc.cyber': 'Descripcion 02',
    'experience.role.coalfire': 'Empresa 03',
    'experience.company.coalfire': 'Empresa 03',
    'experience.period.coalfire': 'Enero 2021 - Junio 2022',
    'experience.desc.coalfire': 'Descripcion 03',
    'experience.role.neuralys': 'Posicion empresa 04',
    'experience.company.neuralys': 'Empresa 04',
    'experience.period.neuralys': 'Junio 2019 - Enero 2021',
    'experience.desc.neuralys': 'Descripcion 04',
    'experience.current': 'Actual',
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías con las que trabajo',
    'skills.webSecurity': 'Seguridad Web',
    'skills.webSecurity.items': 'OWASP Top 10, Explotación Web, Vulnerabilidades de Lógica de Negocio, Pruebas de Penetración',
    'skills.networkSecurity': 'Seguridad de Redes',
    'skills.networkSecurity.items': 'Evaluación de Redes, Pruebas de Penetración, Análisis de Vulnerabilidades, Seguridad de Infraestructura',
    'skills.mobileWireless': 'Móvil e Inalámbrico',
    'skills.mobileWireless.items': 'GPRS y LTE, Cracking Inalámbrico, Pentesting Móvil, Seguridad Android',
    'skills.exploitation': 'Explotación',
    'skills.exploitation.items': 'Desbordamiento de Buffer, Ingeniería Social, Cracking de Contraseñas, Desarrollo de Exploits',
    'skills.programming': 'Programación',
    'skills.programming.items': 'Python, Scripting en Bash, Automatización, Desarrollo de Herramientas de Seguridad',
    'skills.certifications': 'Certificaciones',
    'skills.certifications.items': 'Certified Ethical Hacker (CEH), Certified Bug Bounty Hunter (CBBH)',
    'community.title': 'Embajador de la comunidad HackTheBox Argentina',
    'community.subtitle': 'En junio de 2021, inicié un viaje para crear una comunidad donde pudiéramos aprender jugando, enfrentar desafíos, conectar personas, ayudar a nuevos profesionales y aprender unos de otros. Esta idea de construir una comunidad de ciberseguridad para compartir conocimientos se ha convertido en un espacio inspirador para todos, incluido yo.',
    'community.mission.title': 'Nuestra Misión',
    'community.mission.description': 'Como Embajador de la Comunidad HackTheBox Argentina, mi misión es fomentar un espacio inspirador e inclusivo para entusiastas de la ciberseguridad. Ofrecemos una plataforma para compartir conocimientos, colaborar y aprender de manera práctica. Ya seas principiante o experto, siempre hay algo nuevo por descubrir. ¡Únete a nosotros y crezcamos juntos en el emocionante mundo de la ciberseguridad!',
    'community.impact.title': 'Lo Que Ofrecemos',
    'community.impact.description': 'Aprender es más divertido cuando es atractivo y emocionante. Como parte de HackTheBox Argentina, ofrecemos talleres, desafíos CTF y discusiones abiertas que mejoran tus habilidades y te ayudan a colaborar con otros. Únete a nosotros mientras resolvemos problemas del mundo real y celebramos los logros de cada uno. El mundo de la ciberseguridad es vasto y siempre está cambiando, ¡y juntos podemos explorarlo!',
    'community.networking.title': 'Oportunidades de Networking',
    'community.networking.description': 'Nuestra comunidad es un excelente lugar tanto para hacer networking digital como físico. A través de nuestros meetups, ayudamos a los profesionales a expandir sus redes, conectar con expertos y, incluso, apoyar a los recién llegados a conseguir su primer trabajo en ciberseguridad.',
    'community.prizes.title': 'Premios emocionantes',
    'community.prizes.description': 'En HackTheBox Argentina, ofrecemos premios emocionantes a todos los participantes de nuestros meetups. Estos premios, proporcionados directamente por HackTheBox, incluyen acceso exclusivo, productos de merchandising y más. Es nuestra manera de reconocer los esfuerzos de nuestros miembros y hacer que nuestros eventos comunitarios sean aún más gratificantes.',
    'community.joinButton': 'Únete a la Comunidad HackTheBox Argentina',
    'htb.title': 'Máquinas de HackTheBox Completadas', // Traducción del título
    'htb.subtitle': 'Aquí estan las {count} máquinas que he completado.', // Traducción del subtítulo
    'htb.solvedOn': 'Resuelto en:',
    'htb.error.title': 'Error',
    'htb.noAchievements': 'No se encontraron máquinas.',
    'certifications.title': 'Certificaciones',
    'certifications.subtitle': 'Cualificaciones y logros profesionales',
    'contact.title': 'Contacto',
    'contact.subtitle': 'Ponte en contacto',
    'contact.description': '¿Tienes alguna pregunta o quieres trabajar juntos? Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu correo electrónico',
    'contact.form.message': 'Tu mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado con éxito!',
    'contact.form.error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    'contact.form.validation.name': 'Por favor, ingresa tu nombre',
    'contact.form.validation.email': 'Por favor, ingresa un correo electrónico válido',
    'contact.form.validation.message': 'Por favor, ingresa tu mensaje',
    'contact.info.email': 'Correo electrónico',
    'contact.info.email.value': 'tucorreo@mail.com',
    'contact.info.location': 'Ubicación',
    'contact.info.location.value': 'Buenos Aires, Argentina',
    'footer.rights': 'Todos los derechos reservados',
    'footer.copyright': ' 2024 Ignacio Pérez. Todos los derechos reservados',
  }
};

// Creación del contexto
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Proveedor del contexto
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // Idioma inicial

  // Alternar entre los idiomas
  const toggleLanguage = () => {
    setLanguage((curr) => (curr === 'en' ? 'es' : 'en'));
  };

  // Cambiar a un idioma específico
  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  // Función para traducir claves
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ 
        language, 
        toggleLanguage, 
        t, 
        switchLanguage, 
        currentLanguage: language // Proporcionamos `currentLanguage`
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};