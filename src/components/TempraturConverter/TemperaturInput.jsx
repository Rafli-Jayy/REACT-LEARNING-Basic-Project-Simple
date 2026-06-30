import React from 'react';

export default function TemperatureInput({ label, symbol, placeholder, isActive, onChange, value }) {
  return (
    <div>
      {/* Label Utama - Text Primary (Slate 50) */}
      <label className="block text-sm font-medium text-slate-50 mb-1.5">
        {label}
      </label>
      
      <div className="relative">
        <input
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl text-slate-50 placeholder-slate-500 outline-none transition-all duration-200 border
            ${isActive 
              ? 'bg-[#4F46E5]/10 border-[#4F46E5] ring-2 ring-[#4F46E5]/20' 
              : 'bg-slate-900 border-slate-800'
            }`}
        />
        
        {/* Simbol (°C / °F) berubah warna ke Accent (#4F46E5) jika aktif */}
        <span className={`absolute right-4 top-1/2 -translate-y-1/2 font-medium transition-colors duration-200 
          ${isActive ? 'text-[#4F46E5]' : 'text-slate-400'}`}>
          {symbol}
        </span>
      </div>
    </div>
  );
}