import { memo } from 'react';
import { Briefcase, CalendarCheck, ExternalLink, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const EducationSection = ({ education, certifications }) => (
  <section id="education" className="section-shell pt-0">
    <SectionHeading
      title="Education & Certifications"
      subtitle="Academic foundation with continuous learning toward production-ready frontend craftsmanship."
    />
    <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
      <Reveal>
        <article className="glass-card h-full p-6">
          <div className="mb-4 inline-flex rounded-lg bg-sky-400/15 p-2 text-sky-300">
            <GraduationCap size={20} />
          </div>
          {education.map((item) => (
            <div key={item.degree}>
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <p className="mt-1 text-slate-300">{item.institution}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400">
                <CalendarCheck size={14} /> {item.year}
              </p>
            </div>
          ))}
        </article>
      </Reveal>

      <Reveal delay={0.1}>
        <article className="glass-card h-full p-6">
          <div className="mb-4 inline-flex rounded-lg bg-sky-400/15 p-2 text-sky-300">
            <Briefcase size={20} />
          </div>
          <h3 className="text-lg font-semibold text-white">Certifications</h3>
          <div className="mt-4 space-y-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">{cert.title}</p>
                <p className="mt-1 text-sm text-slate-300">{cert.issuer}</p>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs text-sky-300 transition hover:text-sky-200"
                  >
                    View Certificate <ExternalLink size={13} />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </article>
      </Reveal>
    </div>
  </section>
);

export default memo(EducationSection);
