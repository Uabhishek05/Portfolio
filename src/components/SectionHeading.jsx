import { memo } from 'react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-8">
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    {subtitle ? <p className="mt-3 text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
  </div>
);

export default memo(SectionHeading);
