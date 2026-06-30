import React from 'react'
import TemperatureInput from '../components/TempraturConverter/TemperaturInput';
import useTemp from '../hooks/useTemp'

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
    // Background Halaman (Slate 950)
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 antialiased">
      
      {/* Surface / Card Area (Slate 900) dengan border (Slate 800) */}
      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-800">
        
        {/* Header - Text Primary (Slate 50) & Text Muted (Slate 400) */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-slate-50">Konversi Suhu</h1>
          <p className="text-sm text-slate-400 mt-1">Ubah satuan suhu secara real-time</p>
        </div>

        {/* Form Container */}
        <div className="space-y-4">
          
          {/* Input Celsius (Contoh State Normal / Tidak Aktif) */}
          <TemperatureInput 
            label="Celsius"
            symbol="°C"
            placeholder="0"
            isActive={scale === 'c'}
            onChange={handleCelciusChange}
            value={celcius}
          />

          {/* Divider Line (Border Slate 800) */}
          <div className="flex items-center my-2">
            <div className="flex-1 border-t border-slate-800"></div>
            <span className="px-3 text-xs text-slate-500 uppercase tracking-wider">ke</span>
            <div className="flex-1 border-t border-slate-800"></div>
          </div>

          {/* Input Fahrenheit (Contoh State Aktif / Fokus) */}
          <TemperatureInput 
            label="Fahrenheit"
            symbol="°F"
            placeholder="32"
            isActive={scale === 'f'}
            onChange={handleFahrenheitChange}
            value={fahrenheit} 
          />

        </div>

        {/* Footer Card */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            Rumus otomatis diterapkan saat angka dimasukkan.
          </p>
        </div>

      </div>
    </div>
  );
}
