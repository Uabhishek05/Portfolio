import { memo } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const ExperienceSection = ({ highlights }) => (
  <section id="experience" className="section-shell pt-0">
    <SectionHeading
      title="Experience"
      subtitle="Fresher profile with practical project depth and high execution discipline."
    />
    <Reveal>
      <article className="glass-card mx-auto max-w-5xl p-6 sm:p-8">
        <p className="text-xl font-semibold text-white">Fresher</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-200 sm:text-base">
          {highlights.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  </section>
);

export default memo(ExperienceSection);
