import React from 'react';

export default function CardFooter() {
  return (
    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
      <span className="text-slate-400 dark:text-slate-500">
        Last synced: Just now
      </span>
      <button className="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
        Manage Account
      </button>
    </div>
  );
}