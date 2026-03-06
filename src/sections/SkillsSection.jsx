import { memo } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { getSkillEmoji } from '../utils/getSkillEmoji';

const SkillsSection = ({ skillsList }) => (
  <section id="skills" className="section-shell pt-0">
    <SectionHeading
      title="Skills"
      subtitle="Modern frontend capabilities across development, interaction design, APIs, and tooling."
    />
    <Reveal>
      <article className="glass-card mx-auto max-w-6xl p-5 sm:p-8">
        <h3 className="text-center text-2xl font-semibold text-white sm:text-left sm:text-3xl">Skills</h3>
        <p className="mt-3 text-center text-sm text-slate-300 sm:text-left sm:text-base">
          From frontend frameworks to APIs and developer tools, here&apos;s what I use.
        </p>
        <div className="skills-pill-wrap mt-6">
          {skillsList.map((skill, index) => (
            <span key={skill} className="skill-modern-pill">
              <span
                className="skill-modern-badge"
                style={{
                  backgroundColor: `hsl(${(index * 35) % 360} 85% 55% / 0.18)`,
                  color: `hsl(${(index * 35) % 360} 95% 72%)`
                }}
              >
                {getSkillEmoji(skill)}
              </span>
              <span>{skill}</span>
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  </section>
);

export default memo(SkillsSection);
