'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal, HorizontalTimeline } from '@/app/components/ui';

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  const timelineItems = t.experience.items.map((exp) => ({
    id: exp.id,
    title: exp.title,
    companyOrInstitution: exp.company,
    period: exp.period,
    description: exp.description,
  }));

  return (
    <SectionReveal id="experience" className="py-2 w-full h-auto md:h-full flex flex-col justify-start md:justify-center" direction="right">
      <div className="max-w-6xl mx-auto w-full my-0 md:my-auto">




        <SectionHeading number="03">{t.experience.title}</SectionHeading>


        
        {/* Modern Horizontal Timeline Carousel */}
        <HorizontalTimeline items={timelineItems} itemsPerPage={3} />
      </div>
    </SectionReveal>
  );
}
