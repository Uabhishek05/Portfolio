import { memo } from 'react';
import { ArrowRight, Github, Globe, Loader2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const ProjectsSection = ({ projects, githubUrl, onOpenProject }) => (
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
                  decoding="async"
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
                  onClick={() => onOpenProject(project)}
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
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-sky-300 transition hover:text-sky-200"
        >
          Github
        </a>
      </p>
    </Reveal>
  </section>
);

export default memo(ProjectsSection);
