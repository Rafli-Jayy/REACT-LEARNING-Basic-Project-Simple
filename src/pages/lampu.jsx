import { useState } from "react";

export const meta = {
  createdAt: "9/6/2026, 18.21.59",
  title: "Lampu App",
  description: "Belajar useState",
  level: "Basic",
  icon: "🪔",
  slug: "lampu-app",
};

// 🌕🌑
// Hypercolor.dev
// CSSGradient.io

export default function LampuApp() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center flex-col p-4 transition-all duration-700 ease-in-out ${
        isOn 
          ? "bg-amber-950/20 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_0%,rgba(15,23,42,1)_100%)]" 
          : "bg-slate-950"
      }`}
    >
      <div 
        className={`h-auto w-full max-w-sm rounded-2xl border p-14 mx-auto flex items-center flex-col gap-10 shadow-2xl transition-all duration-500 ${
          isOn 
            ? "bg-slate-900 border-amber-500/30 shadow-amber-500/5 ring-1 ring-amber-500/10" 
            : "bg-slate-900 border-slate-800 shadow-black/50"
        }`}
      >

        <div className="relative flex items-center justify-center">
          {isOn && (
            <div className="absolute w-32 h-32 bg-amber-400/20 rounded-full blur-2xl animate-pulse" />
          )}
          <h1 
            className={`text-8xl select-none transition-all duration-500 transform ${
              isOn ? "scale-110 drop-shadow-[0_0_35px_rgba(251,191,36,0.6)]" : "scale-100 opacity-40"
            }`}
          >
            {isOn ? "🌕" : "🌑"}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h2 
            className={`select-none font-bold text-2xl tracking-wide transition-colors duration-500 ${
              isOn ? "text-amber-400" : "text-slate-400"
            }`}
          >
            Lampu {isOn ? "Menyala" : "Mati"}
          </h2>
          <p className="text-xs text-slate-500 font-medium select-none">
            {isOn ? "Kondisi ruangan terang" : "Kondisi ruangan gelap"}
          </p>
        </div>

        <button
          onClick={() => setIsOn(!isOn)}
          className={`select-none font-semibold text-sm w-full py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-98 tracking-wide cursor-pointer ${
            isOn
              ? "bg-rose-500 text-white hover:bg-rose-400 shadow-rose-500/10"
              : "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/10"
          }`}
        >
          {isOn ? "Matikan Lampu" : "Nyalakan Lampu"}
        </button>
      </div>
    </div>
  );
}
