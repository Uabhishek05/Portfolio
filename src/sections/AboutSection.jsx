import { memo } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const AboutSection = ({ about }) => (
  <section id="about" className="section-shell">
    <SectionHeading title="About Me" />
    <Reveal>
      <div className="glass-card mx-auto max-w-4xl p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{about}</p>
      </div>
    </Reveal>
  </section>
);

export default memo(AboutSection);
