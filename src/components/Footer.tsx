import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHackthebox } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://app.hackthebox.eu/profile/[TU_USERID]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
          >
            <SiHackthebox size={24} />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:tucorreo@mail.com"
            className="text-white hover:text-accent transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="mt-4 text-center text-white/80">
          &copy; {new Date().getFullYear()} HTB Hacker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;