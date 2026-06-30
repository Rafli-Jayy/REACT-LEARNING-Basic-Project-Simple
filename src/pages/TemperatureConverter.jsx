import React from 'react';
import TemperatureInput from '../components/TempraturConverter/TemperaturInput';
import useTemp from '../hooks/useTemp';

export const meta = {
  title: "Temperature Converter",
  description: "Lifting state up di React",
  level: "Basic",
  icon: "🚬",
  slug: "temperature-converter",
  createdAt: "29/6/2026, 17.52.59"
};

export default function TemperatureConverter() {
  const {
    celcius,
    fahrenheit,
    scale,
    handleCelciusChange,
    handleFahrenheitChange
  } = useTemp();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 antialiased transition-colors duration-300
                    bg-slate-50 dark:bg-slate-950">
      
      {/* 2. CARD SURFACE: Putih bersih vs Hitam transparan (Vercel style) */}
      <div className="w-full max-w-md rounded-2xl p-6 transition-all duration-300 border
                      bg-white border-slate-200/80 shadow-md shadow-slate-200/50
                      dark:bg-slate-900/40 dark:border-slate-800 dark:shadow-none">
        
        {/* HEADER AREA (Sejajar dengan Tombol Toggle) */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Konversi Suhu
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Ubah satuan suhu secara real-time
            </p>
          </div>
          
        </div>

        {/* Form Container */}
        <div className="space-y-4">
          
          {/* Input Celsius */}
          <TemperatureInput 
            label="Celsius"
            symbol="°C"
            placeholder="0"
            isActive={scale === 'c'}
            onChange={handleCelciusChange}
            value={celcius}
          />

          {/* 3. DIVIDER LINE: Menyesuaikan warna garis pembatas */}
          <div className="flex items-center my-2">
            <div className="flex-1 border-t border-slate-100 dark:border-slate-800/60"></div>
            <span className="px-3 text-xs uppercase tracking-wider font-medium text-slate-400 dark:text-slate-500">
              ke
            </span>
            <div className="flex-1 border-t border-slate-100 dark:border-slate-800/60"></div>
          </div>

          {/* Input Fahrenheit */}
          <TemperatureInput 
            label="Fahrenheit"
            symbol="°F"
            placeholder="32"
            isActive={scale === 'f'}
            onChange={handleFahrenheitChange}
            value={fahrenheit} 
          />

        </div>

        {/* 4. FOOTER CARD */}
        <div className="mt-6 pt-4 border-t text-center border-slate-100 dark:border-slate-800/60">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Rumus otomatis diterapkan saat angka dimasukkan.
          </p>
        </div>

      </div>
    </div>
  );
}