'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal, HorizontalTimeline } from '@/app/components/ui';

export function Education() {
  const { language } = useLanguage();
  const t = translations[language];

  const timelineItems = t.education.items.map((edu) => ({
    id: edu.id,
    title: edu.degree,
    companyOrInstitution: edu.institution,
    period: edu.period,
    details: edu.details,
  }));

  return (
    <SectionReveal id="education" className="py-2 w-full h-auto md:h-full flex flex-col justify-center" direction="left">
      <div className="max-w-6xl mx-auto w-full my-auto">



        <SectionHeading number="02">{t.education.title}</SectionHeading>


        
        {/* Modern Horizontal Timeline */}
        <HorizontalTimeline items={timelineItems} itemsPerPage={3} />
      </div>
    </SectionReveal>
  );
}
