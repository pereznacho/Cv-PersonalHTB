import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser'; // Importa EmailJS
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      await emailjs.sendForm(
        '[EMAILJS_SERVICE_ID]', 
        '[EMAILJS_TEMPLATE_ID]', 
        form, 
        '[EMAILJS_USER_ID]'
      );
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">{t('contact.title')}</h2>
          <p className="text-white/80 mb-8">{t('contact.description')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('contact.info.email')}</h3>
                <p className="text-white/80">{t('contact.info.email.value')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('contact.info.location')}</h3>
                <p className="text-white/80">{t('contact.info.location.value')}</p>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent/80 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-500 text-center">{t('contact.success')}</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-500 text-center">{t('contact.error')}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}