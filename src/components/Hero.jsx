import { ArrowDownRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personal } from '../data/portfolioData';

const typedRole = 'A Frontend developer.';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayText(typedRole.slice(0, index));
      if (index >= typedRole.length) {
        clearInterval(interval);
      }
    }, 85);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
    <div className="hero-ambient" aria-hidden="true" />
    <div className="hero-vectors" aria-hidden="true">
      <span className="vector-ring vector-ring-lg" />
      <span className="vector-ring vector-ring-md" />
      <span className="vector-ring vector-ring-sm" />
      <span className="vector-line vector-line-1" />
      <span className="vector-line vector-line-2" />
      <span className="vector-dot-grid" />
    </div>
    <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Hey, I'm Abhishek👋 -
          <span className="mt-2 block text-2xl font-medium text-sky-300 sm:text-3xl">
            {displayText}
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          I build responsive web applications using React.js, Tailwind CSS, and TypeScript, while
          continuously exploring modern tools and techniques to improve performance and user experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn-primary">
            View Projects <ArrowDownRight size={16} />
          </a>
          <a
            href="https://drive.google.com/file/d/1k2BPCmWc-jA-4aE40TausHAnTdOHONl4/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Download Resume <Download size={16} />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me <Mail size={16} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card relative mx-auto w-full max-w-md p-6 sm:p-8"
      >
        <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-sky-400/20 blur-2xl" />

        <div className="flex items-center gap-3">
          <div className="avatar-shell avatar-shell-sm">
            <img
              src={personal.avatar}
              alt={`${personal.name} avatar`}
              className="h-full w-full rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Profile</p>
            <p className="mt-1 text-base font-semibold text-white">Frontend Developer</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Location</p>
          <p className="mt-1 text-sm font-medium text-white">
            Mumbai, India <span className="text-slate-400">•</span> Open to Internship &amp; Full-Time Roles
          </p>
        </div>

        <div className="mt-3">
          <span className="availability-pill">Available for Frontend Roles</span>
        </div>

        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Tech Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              'React.js',
              'TypeScript',
              'Tailwind CSS',
              'JavaScript (ES6+)',
              'Framer Motion',
              'REST APIs',
              'Vite'
            ].map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Building modern, responsive interfaces with a focus on performance and user experience.
        </p>
      </motion.div>
    </div>
    </section>
  );
};

export default Hero;
