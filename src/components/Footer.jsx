import { memo } from 'react';

const Footer = ({ theme, visitCount, name }) => (
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
      Thanks for scrolling! 👋 - Built by {name}
    </p>
    <p className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
      © {new Date().getFullYear()}. All rights reserved.
    </p>
  </footer>
);

export default memo(Footer);
