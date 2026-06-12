import { useState, useEffect } from "react";

export const meta = {
  title: "WeatherApp",
  description: "Belajar UseEffect dan Fetch Data",
  level: "Medium",
  icon: "⛅",
  slug: "wheater-app",
  createdAt: "12/6/2026, 17.39.21"
};

export default function WeatherApp(){

  const [city, setCity] = useState('Jakarta');
  const [inputCity, setInputCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
  
        const responseData = await fetch(`https://wttr.in/${city}?format=j1`);
        if(!responseData.ok){
          throw new Error('Kota tidak ditemukan atau server bermasalah');
        }

        const data = await responseData.json();
        setWeatherData(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (inputCity.trim() !== '') {
      setCity(inputCity);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6">
      <div className="h-auto w-full max-w-2xl bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mx-auto border border-slate-800 backdrop-blur-md flex flex-col gap-8">
        {/* --- 1. HEADER & FORM PENCARIAN --- */}
        <div className="flex flex-col gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-white bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Weather Radar
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Pantau kondisi cuaca kota di seluruh dunia secara real-time.
            </p>
          </div>

          {/* Form Input */}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Cari nama kota... (misal: Tokyo, Jakarta)"
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 pl-4 pr-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 text-sm shadow-lg shadow-blue-500/20"
            >
              Cari
            </button>
          </form>
        </div>

        {/* --- 2. KONDISIONAL RENDERING (LOADING & ERROR) --- */}
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

        {/* --- 3. KONTEN UTAMA CUACA (TAMPIL JIKA DATA ADA) --- */}
        {!loading && !error && weatherData && (
          <div className="flex flex-col gap-8 animate-fade-in">
            {/* Grid Atas: Info Utama */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-950/40 p-6 rounded-2xl border border-slate-800/60 gap-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white capitalize">{city}</h2>
                <p className="text-4xl font-black text-slate-100 mt-2 tracking-tight">
                  {weatherData.current_condition[0].temp_C}°C
                </p>
              </div>
              
              {/* Status Cuaca */}
              <div className="flex flex-col items-center sm:items-end">
                <span className="text-4xl mb-1 filter drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
                  {/* Logika simpel nentuin emoji berdasarkan teks cuaca */}
                  {weatherData.current_condition[0].weatherDesc[0].value.toLowerCase().includes('rain') ? '🌧️' : 
                  weatherData.current_condition[0].weatherDesc[0].value.toLowerCase().includes('cloud') ? '☁️' : '☀️'}
                </span>
                <p className="text-sm font-semibold text-blue-400 text-center sm:text-right">
                  {weatherData.current_condition[0].weatherDesc[0].value}
                </p>
              </div>
            </div>

            {/* Grid Bawah: Detail Tambahan */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Kartu Kelembapan */}
              <div className="bg-slate-950/30 border border-slate-800/50 p-4 rounded-xl flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Kelembapan</span>
                <span className="text-lg font-bold text-slate-200">{weatherData.current_condition[0].humidity}%</span>
              </div>

              {/* Kartu Kecepatan Angin */}
              <div className="bg-slate-950/30 border border-slate-800/50 p-4 rounded-xl flex flex-col gap-1">
                <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Kecepatan Angin</span>
                <span className="text-lg font-bold text-slate-200">{weatherData.current_condition[0].windspeedKmph} km/h</span>
              </div>

              {/* Kartu Jarak Pandang (Visibility) */}
              <div className="bg-slate-950/30 border border-slate-800/50 p-4 rounded-xl flex flex-col gap-1 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Jarak Pandang</span>
                <span className="text-lg font-bold text-slate-200">{weatherData.current_condition[0].visibility} km</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
