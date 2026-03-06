import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import useKountSecurity from './hooks/useKountSecurity';
import { SECTION_IDS } from './constants/navigation';
import {
  certifications,
  education,
  experienceHighlights,
  personal,
  projects,
  skills,
  socialLinks
} from './data/portfolioData';

const HomeSection = lazy(() => import('./sections/HomeSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const EducationSection = lazy(() => import('./sections/EducationSection'));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

const SectionFallback = () => <div className="section-shell pt-0" aria-hidden="true" />;

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

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection((prev) => (prev === entry.target.id ? prev : entry.target.id));
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

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const openProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleSubmit = useCallback(async (event) => {
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
  }, []);

  return (
    <div
      className={`min-h-screen ${
        theme === 'light' ? 'theme-light bg-slate-200 text-slate-900' : 'bg-slateDeep text-slate-100'
      }`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90]">
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Suspense fallback={<SectionFallback />}>
          <HomeSection />
          <AboutSection about={personal.about} />
          <SkillsSection skillsList={allSkills} />
          <ProjectsSection projects={projects} githubUrl={personal.github} onOpenProject={openProject} />
          <EducationSection education={education} certifications={certifications} />
          <ExperienceSection highlights={experienceHighlights} />
          <ContactSection
            personal={personal}
            socialLinks={socialLinks}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            formStatus={formStatus}
          />
        </Suspense>
      </main>

      <AnimatePresence>
        {selectedProject ? (
          <Suspense fallback={null}>
            <ProjectModal project={selectedProject} onClose={closeProject} />
          </Suspense>
        ) : null}
      </AnimatePresence>

      <Footer theme={theme} visitCount={visitCount} name={personal.name} />
      <BackToTop />
    </div>
  );
};

export default App;
