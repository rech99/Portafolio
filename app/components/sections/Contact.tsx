'use client';

import { useState, type FormEvent } from 'react';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal, SplitReveal } from '@/app/components/ui';

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
    <SectionReveal id="contact" className="py-2 w-full h-auto md:h-full flex flex-col justify-start md:justify-center" direction="left">
      <div className="max-w-6xl mx-auto w-full my-0 md:my-auto">

        <SectionHeading number="06">{t.contact.title}</SectionHeading>
        
        <SplitReveal
          left={
            <div className="space-y-3 sm:space-y-6">
              <h3 className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                {t.contact.title}
              </h3>
              
              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed font-normal">
                {t.contact.subtitle}
              </p>

              <div className="border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 font-mono text-[10px] sm:text-xs">
                <div className="p-2 sm:p-4 flex items-center justify-between">
                  <span className="text-zinc-500">EMAIL</span>
                  <a 
                    href="mailto:rech_99@hotmail.com" 
                    className="text-white hover:text-orange-500 transition-colors truncate max-w-[170px] sm:max-w-none"
                  >
                    rech_99@hotmail.com ↗
                  </a>
                </div>

                <div className="p-2 sm:p-4 flex items-center justify-between">
                  <span className="text-zinc-500">GITHUB</span>
                  <a 
                    href="https://github.com/rech99" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    github.com/rech99 ↗
                  </a>
                </div>

                <div className="p-2 sm:p-4 flex items-center justify-between">
                  <span className="text-zinc-500">LINKEDIN</span>
                  <a 
                    href="https://www.linkedin.com/in/raul-enrique-campbell-hidalgo-80868527a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-orange-500 transition-colors truncate max-w-[160px] sm:max-w-none"
                  >
                    linkedin.com/in/raul-enrique-campbell ↗
                  </a>
                </div>
              </div>
            </div>
          }
          right={
            <div className="border border-zinc-800 bg-zinc-950 p-3.5 sm:p-8">

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 sm:mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-white focus:outline-none text-xs sm:text-sm font-mono transition-colors disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 sm:mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-white focus:outline-none text-xs sm:text-sm font-mono transition-colors disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 sm:mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3.5 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-white focus:outline-none text-xs sm:text-sm font-mono transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                    ✓ {successMessage}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 bg-red-950/40 border border-red-500/40 text-red-400 text-xs font-mono">
                    ✕ {errorMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-2.5 sm:px-8 sm:py-4 bg-white text-zinc-950 font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 border border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-3 h-3 border-2 border-zinc-950 border-t-transparent animate-spin inline-block" />
                      <span>{sendingText}</span>
                    </>
                  ) : (
                    <span>{t.contact.form.submit} →</span>
                  )}
                </button>
              </form>
            </div>
          }
        />
      </div>
    </SectionReveal>
  );
}
