import { memo } from 'react';
import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const ContactSection = ({ personal, socialLinks, handleSubmit, isSubmitting, formStatus }) => (
  <section id="contact" className="section-shell pt-0 pb-14 sm:pb-16">
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
        <motion.form onSubmit={handleSubmit} whileHover={{ y: -2 }} className="glass-card space-y-4 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">Quick Message</h3>

          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            placeholder="Your name"
            className="input-field"
            autoComplete="name"
          />

          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="input-field"
            autoComplete="email"
          />

          <input name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows="5"
            placeholder="Tell me about your opportunity"
            className="input-field resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
          </button>
          {formStatus.message ? (
            <p className={`text-xs ${formStatus.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
              {formStatus.message}
            </p>
          ) : null}
        </motion.form>
      </Reveal>
    </div>
  </section>
);

export default memo(ContactSection);
