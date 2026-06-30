import React from 'react';

export default function CardHeader() {
  return (
    <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800/60">
      <div>
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          Preferences
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Customize your workspace theme.
        </p>
      </div>
    </div>
  );
}