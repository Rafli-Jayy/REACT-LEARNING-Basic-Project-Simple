import { useState, useEffect } from "react";
import { WeatherInfoCard } from "../components/WeatherInfoCard";
import { CardContainer } from "../components/cardContainer";
import SearchBar from "../components/SearchBar";
import { useWeather } from "../hooks/useWeather";

export const meta = {
  title: "WeatherApp",
  description: "Belajar UseEffect dan Fetch Data",
  level: "Medium",
  icon: "⛅",
  slug: "wheater-app",
  createdAt: "12/6/2026, 17.39.21"
};

export default function WeatherApp(){

  const {
      city,
      inputCity,
      setInputCity,
      weatherData,
      loading,
      error,
      handleSubmit,
    } = useWeather("Jakarta");

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6">
      <CardContainer className="max-w-2xl">

        <div className="flex flex-col gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-white bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Weather Radar
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Pantau kondisi cuaca kota di seluruh dunia secara real-time.
            </p>
          </div>


          <SearchBar 
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            onSubmit={handleSubmit}
          />

        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-sm text-slate-400 animate-pulse">Mengambil data cuaca...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3 text-red-400 text-sm">
            <span className="text-lg">⚠️</span>
            <p>Gagal: {error}. Coba periksa kembali ejaan nama kota.</p>
          </div>
        )}

        {!loading && !error && weatherData && (
          <div className="flex flex-col gap-8 animate-fade-in">

            <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-950/40 p-6 rounded-2xl border border-slate-800/60 gap-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white capitalize">{city}</h2>
                <p className="text-4xl font-black text-slate-100 mt-2 tracking-tight">
                  {weatherData.current_condition[0].temp_C}°C
                </p>
              </div>
              

              <div className="flex flex-col items-center sm:items-end">
                <span className="text-4xl mb-1 filter drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
  
                  {weatherData.current_condition[0].weatherDesc[0].value.toLowerCase().includes('rain') ? '🌧️' : 
                  weatherData.current_condition[0].weatherDesc[0].value.toLowerCase().includes('cloud') ? '☁️' : '☀️'}
                </span>
                <p className="text-sm font-semibold text-blue-400 text-center sm:text-right">
                  {weatherData.current_condition[0].weatherDesc[0].value}
                </p>
              </div>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
              <WeatherInfoCard 
                title="Kelembapan" 
                value={weatherData.current_condition[0].humidity} 
                unit="%" 
              />

              <WeatherInfoCard 
                title="Kecepatan Angin" 
                value={weatherData.current_condition[0].windspeedKmph} 
                unit=" km/h" 
              />

              <WeatherInfoCard 
                title="Jarak Pandang" 
                value={weatherData.current_condition[0].visibility} 
                unit=" km" 
                className="col-span-2 sm:col-span-1 border-blue-500/30" 
              />

            </div>
          </div>
        )}

      </CardContainer>
    </div>
  );
}
