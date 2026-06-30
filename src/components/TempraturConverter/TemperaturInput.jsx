import React from 'react';

export default function TemperatureInput({ label, symbol, placeholder, isActive, onChange, value }) {
  return (
    <div>
      {/* 1. Label Utama: Default abu-abu gelap, saat dark jadi Slate 100 */}
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-100 mb-1.5">
        {label}
      </label>
      
      <div className="relative">
        <input
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 border
            ${isActive 
              ? 'bg-indigo-600/5 border-indigo-600 ring-2 ring-indigo-600/20 text-slate-900 dark:bg-indigo-600/10 dark:border-indigo-500 dark:ring-indigo-500/20 dark:text-slate-50' 
              : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-50 dark:placeholder-slate-500'
            }`}
        />
        
        {/* 2. Simbol (°C / °F): Menyesuaikan warna accent indigo saat aktif */}
        <span className={`absolute right-4 top-1/2 -translate-y-1/2 font-medium transition-colors duration-200 
          ${isActive 
            ? 'text-indigo-600 dark:text-indigo-400' 
            : 'text-slate-400 dark:text-slate-500'
          }`}>
          {symbol}
        </span>
      </div>
    </div>
  );
}