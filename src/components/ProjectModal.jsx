import { memo } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[70] bg-slate-950/70 p-3 sm:p-6"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="project-modal mx-auto max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.55)] sm:p-8"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
        <button type="button" aria-label="Close project details" onClick={onClose} className="project-icon-btn">
          <X size={18} />
        </button>
      </div>

      <div className="project-modal-preview">
        {project.previewImage ? (
          <img src={project.previewImage} alt={`${project.title} preview`} className="project-modal-image" loading="lazy" />
        ) : (
          <div
            className="project-modal-image"
            style={{
              backgroundImage: project.previewGradient
            }}
          />
        )}
      </div>

      <p className="mt-6 text-lg leading-relaxed text-slate-300">{project.details}</p>

      <div className="mt-6">
        <p className="text-lg font-semibold text-white">Technologies Used</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.inProgress ? (
          <button type="button" disabled className="btn-secondary cursor-not-allowed opacity-70">
            Visit
          </button>
        ) : (
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary">
            Visit
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
          Source Code
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-2xl font-semibold text-white">Features</h4>
          <ul className="mt-3 space-y-2 text-slate-300">
            {project.features.map((item) => (
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
            {project.learned.map((item) => (
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
);

export default memo(ProjectModal);
