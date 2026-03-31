'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading } from '@/app/components/ui';
import { type FormEvent } from 'react';

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="py-14 md:py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="text-purple-100">{t.contact.title}</SectionHeading>
        
        <p className="reveal-item text-lg text-purple-200 mb-8 text-center max-w-3xl mx-auto">
          {t.contact.subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="reveal-item reveal-delay-1 space-y-5 text-left max-w-3xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-200">{t.contact.form.name}</label>
            <input
              type="text"
              id="name"
              placeholder={t.contact.form.namePlaceholder}
              required
              className="w-full px-4 py-3 glass-input rounded-lg transition-all outline-none text-gray-100 placeholder-gray-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-purple-200">{t.contact.form.email}</label>
            <input
              type="email"
              id="email"
              placeholder={t.contact.form.emailPlaceholder}
              required
              className="w-full px-4 py-3 glass-input rounded-lg transition-all outline-none text-gray-100 placeholder-gray-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-purple-200">{t.contact.form.message}</label>
            <textarea
              id="message"
              rows={5}
              placeholder={t.contact.form.messagePlaceholder}
              required
              className="w-full px-4 py-3 glass-input rounded-lg transition-all outline-none text-gray-100 placeholder-gray-500 resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-200 font-medium"
          >
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}







