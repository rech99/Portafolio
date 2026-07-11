'use client';

import { useState, type FormEvent } from 'react';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading } from '@/app/components/ui';

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const successMessage = language === 'es' 
    ? '¡Mensaje enviado con éxito!' 
    : 'Message sent successfully!';
  const defaultErrorMessage = language === 'es' 
    ? 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' 
    : 'There was an error sending the message. Please try again.';
  const sendingText = language === 'es' ? 'Enviando...' : 'Sending...';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || defaultErrorMessage);
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(defaultErrorMessage);
    }
  };

  return (
    <section
      id="contact"
      className="py-14 md:py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="text-slate-100">{t.contact.title}</SectionHeading>
        
        <p className="reveal-item text-lg text-slate-300 mb-8 text-center max-w-3xl mx-auto">
          {t.contact.subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="reveal-item reveal-delay-1 space-y-5 text-left max-w-3xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">{t.contact.form.name}</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.form.namePlaceholder}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 glass-input rounded-lg transition-all outline-none text-gray-100 placeholder-gray-500 disabled:opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">{t.contact.form.email}</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.form.emailPlaceholder}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 glass-input rounded-lg transition-all outline-none text-gray-100 placeholder-gray-500 disabled:opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">{t.contact.form.message}</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.form.messagePlaceholder}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 glass-input rounded-lg transition-all outline-none text-gray-100 placeholder-gray-500 resize-none disabled:opacity-50"
            />
          </div>

          {status === 'success' && (
            <div className="p-4 bg-teal-500/10 border border-teal-500/30 text-teal-300 rounded-lg text-sm font-medium animate-fadeIn">
              {successMessage}
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg text-sm font-medium animate-fadeIn">
              {errorMessage}
            </div>
          )}
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {sendingText}
              </>
            ) : (
              t.contact.form.submit
            )}
          </button>
        </form>
      </div>
    </section>
  );
}








