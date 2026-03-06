import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Loader2,
  Mail,
  Send,
  X
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeading from './components/SectionHeading';
import Reveal from './components/Reveal';
import BackToTop from './components/BackToTop';
import useKountSecurity from './hooks/useKountSecurity';
import {
  certifications,
  education,
  experienceHighlights,
  personal,
  projects,
  skills,
  socialLinks
} from './data/portfolioData';

const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visitCount, setVisitCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio_theme') || 'dark');
  const [selectedProject, setSelectedProject] = useState(null);
  useKountSecurity();

  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: '-30% 0px -55% 0px',
      threshold: 0.01
    }),
    []
  );

  const allSkills = useMemo(() => {
    const flattened = skills.flatMap((group) => group.items);
    return [...new Set(flattened)];
  }, []);

  const getSkillEmoji = (skill) => {
    const known = {
      HTML5: '🌐',
      CSS3: '🎨',
      'JavaScript (ES6+)': '🟨',
      TypeScript: '🔷',
      'React.js': '⚛️',
      'Next.js': '▲',
      'Tailwind CSS': '💨',
      'Framer Motion': '🎞️',
      'Shadcn UI': '🧩',
      'REST APIs': '🔌',
      JSON: '🧾',
      'Redux Toolkit': '🛠️',
      'React Router': '🧭',
      'Node.js': '🟢',
      'Express.js': '🚂',
      MongoDB: '🍃',
      PostgreSQL: '🐘',
      Git: '🧬',
      GitHub: '🐱',
      Vite: '⚡',
      'VS Code': '🧑‍💻',
      Postman: '📮',
      npm: '📦',
      ESLint: '🧹',
      Prettier: '✨',
      Kount: '🛡️'
    };
    return known[skill] || '💻';
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [observerOptions]);

  useEffect(() => {
    const key = 'portfolio_total_visits';
    const current = Number(window.localStorage.getItem(key) || '0');
    const next = current + 1;
    window.localStorage.setItem(key, String(next));
    setVisitCount(next);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio_theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const company = formData.get('company');
    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (company) return;

    if (!formEndpoint) {
      setFormStatus({
        type: 'error',
        message: 'Form endpoint is not configured. Add VITE_FORMSPREE_ENDPOINT in your .env file.'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setFormStatus({ type: 'idle', message: '' });

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Contact - ${name}`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully.'
      });
      form.reset();
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Message could not be sent. Please try again or use direct email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        theme === 'light' ? 'theme-light bg-slate-200 text-slate-900' : 'bg-slateDeep text-slate-100'
      }`}
    >
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        <section id="about" className="section-shell">
          <SectionHeading title="About Me" />
          <Reveal>
            <div className="glass-card mx-auto max-w-4xl p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{personal.about}</p>
            </div>
          </Reveal>
        </section>

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
                {allSkills.map((skill, index) => (
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

        <section id="projects" className="section-shell pt-0">
          <SectionHeading
            title="My Projects"
            subtitle="Here are some of the projects I'm proud of. Each one was a unique challenge and a great learning experience."
          />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="project-card h-full p-0">
                  <div className="project-preview-wrap">
                    {project.previewImage ? (
                      <img
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        className="project-preview-image"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="project-preview-fallback"
                        style={{
                          backgroundImage: project.previewGradient
                        }}
                      >
                        Preview coming soon
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        {project.inProgress ? (
                          <>
                            <span className="project-icon-btn opacity-55">
                              <Globe size={17} />
                            </span>
                            <span className="project-icon-btn opacity-55">
                              <Github size={17} />
                            </span>
                          </>
                        ) : (
                          <>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="project-icon-btn"
                              aria-label={`${project.title} live demo`}
                            >
                              <Globe size={17} />
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="project-icon-btn"
                              aria-label={`${project.title} github repository`}
                            >
                              <Github size={17} />
                            </a>
                          </>
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-base leading-relaxed text-slate-300">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="project-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-sky-300"
                      >
                          More details <ArrowRight size={16} />
                      </button>
                      {project.inProgress ? (
                        <div className="progress-badge inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
                          <Loader2 size={14} className="animate-spin" />
                          In Progress
                        </div>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-slate-400 transition hover:text-slate-200"
                        >
                          Repository
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-6xl text-sm text-slate-300">
              More projects on{' '}
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-300 transition hover:text-sky-200"
              >
                Github
              </a>
            </p>
          </Reveal>
        </section>

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

        <section id="experience" className="section-shell pt-0">
          <SectionHeading
            title="Experience"
            subtitle="Fresher profile with practical project depth and high execution discipline."
          />
          <Reveal>
            <article className="glass-card mx-auto max-w-5xl p-6 sm:p-8">
              <p className="text-xl font-semibold text-white">Fresher</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200 sm:text-base">
                {experienceHighlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </section>

        <section id="contact" className="section-shell pt-0 pb-24">
          <SectionHeading
            title="Contact"
            subtitle="Open to frontend developer opportunities, internships, and collaborative product work."
          />

          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="glass-card h-full p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
                <div className="mt-5 space-y-3 text-sm text-slate-200">
                  <a href={`mailto:${personal.email}`} className="contact-link">
                    <Mail size={16} className="text-sky-300" /> {personal.email}
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="chip transition hover:border-sky-300/70 hover:text-white"
                      >
                        <Icon size={14} /> {social.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <motion.form
                onSubmit={handleSubmit}
                whileHover={{ y: -2 }}
                className="glass-card space-y-4 p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold text-white">Quick Message</h3>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="input-field"
                  autoComplete="name"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="input-field"
                  autoComplete="email"
                />
                <input
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your opportunity"
                  className="input-field resize-none"
                />
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
                {formStatus.message ? (
                  <p
                    className={`text-xs ${
                      formStatus.type === 'success' ? 'text-emerald-300' : 'text-rose-300'
                    }`}
                  >
                    {formStatus.message}
                  </p>
                ) : null}
              </motion.form>
            </Reveal>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-slate-950/70 p-3 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="project-modal mx-auto max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.55)] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="text-3xl font-semibold text-white">{selectedProject.title}</h3>
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                  className="project-icon-btn"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="project-modal-preview">
                {selectedProject.previewImage ? (
                  <img
                    src={selectedProject.previewImage}
                    alt={`${selectedProject.title} preview`}
                    className="project-modal-image"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="project-modal-image"
                    style={{
                      backgroundImage: selectedProject.previewGradient
                    }}
                  />
                )}
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">{selectedProject.details}</p>

              <div className="mt-6">
                <p className="text-lg font-semibold text-white">Technologies Used</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {selectedProject.inProgress ? (
                  <button type="button" disabled className="btn-secondary cursor-not-allowed opacity-70">
                    Visit
                  </button>
                ) : (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn-secondary">
                    Visit
                  </a>
                )}
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  Source Code
                </a>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-2xl font-semibold text-white">Features</h4>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {selectedProject.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white">What I Learned</h4>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {selectedProject.learned.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <footer
        className={`border-t py-8 text-center text-sm ${
          theme === 'light'
            ? 'border-slate-300 bg-slate-200 text-slate-700'
            : 'border-white/10 bg-slate-950/70 text-slate-400'
        }`}
      >
        <div
          className={`mx-auto inline-flex items-center gap-2 rounded-xl px-4 py-2 text-base font-medium ${
            theme === 'light'
              ? 'border border-slate-300 bg-slate-100 text-slate-700'
              : 'border border-white/15 bg-white/5 text-slate-200'
          }`}
        >
          <span aria-hidden="true">👀</span>
          <span>
            Total Visits:{' '}
            <span className={`font-bold ${theme === 'light' ? 'text-sky-700' : 'text-sky-300'}`}>{visitCount}</span>
          </span>
        </div>
        <p className={`mt-4 text-base ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
          Thanks for scrolling! 👋 - Built by {personal.name}
        </p>
        <p className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>

      <BackToTop />
      <Analytics />
    </div>
  );
};

export default App;
