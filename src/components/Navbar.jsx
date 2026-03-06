import { memo, useCallback, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems, personal } from '../data/portfolioData';

const Navbar = ({ activeSection, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const isLight = theme === 'light';

  const smoothScrollToSection = useCallback((event, id, shouldClose = false) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const navbarOffset = 84;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    if (shouldClose) closeMenu();
  }, [closeMenu]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${
        isLight ? 'border-slate-200 bg-white/75' : 'border-white/10 bg-slate-950/65'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" onClick={(event) => smoothScrollToSection(event, 'home')} className="inline-flex items-center gap-2.5">
          <img
            src={personal.avatar}
            alt="Abhishek avatar"
            className="h-8 w-8 rounded-lg border border-sky-300/40 object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <span
            className={`text-sm font-semibold tracking-[0.25em] ${
              isLight ? 'text-slate-800' : 'text-slate-200'
            }`}
          >
            ABHISHEK
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => smoothScrollToSection(event, item.id)}
              className={`nav-link rounded-full px-4 py-2 text-sm transition ${
                activeSection === item.id
                  ? isLight
                    ? 'is-active bg-slate-200 text-slate-900'
                    : 'is-active bg-white/15 text-white'
                  : isLight
                    ? 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={`rounded-lg border p-2 transition ${
              isLight
                ? 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'
                : 'border-white/20 bg-white/5 text-slate-200 hover:bg-white/10'
            }`}
          >
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={`rounded-lg border p-2 transition ${
              isLight
                ? 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'
                : 'border-white/20 bg-white/5 text-slate-200 hover:bg-white/10'
            }`}
          >
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            aria-label="Toggle navigation"
            className={`rounded-lg p-2 transition ${
              isLight ? 'text-slate-800 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'
            }`}
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={`border-t px-4 py-4 backdrop-blur-xl md:hidden ${
            isLight ? 'border-slate-200 bg-white/95' : 'border-white/10 bg-slate-950/95'
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => smoothScrollToSection(event, item.id, true)}
                className={`rounded-lg px-3 py-2 text-sm ${
                  activeSection === item.id
                    ? isLight
                      ? 'bg-slate-100 text-slate-900'
                      : 'bg-white/10 text-white'
                    : isLight
                      ? 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
};

export default memo(Navbar);
