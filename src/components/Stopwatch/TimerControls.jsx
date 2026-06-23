import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

// Menerima props dari parent
export default function TimerControls({ isRunning, onStart, onPause, onReset }) {
  return (
    <div className="flex items-center gap-4 w-full">
      
      {/* Tombol Reset */}
      <button 
        onClick={onReset}
        className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all duration-200 border border-slate-700 font-medium text-slate-300"
      >
        <RotateCcw className="w-5 h-5" />
        Reset
      </button>

      {/* Kondisi Tombol Play / Pause */}
      {isRunning ? (
        <button 
          onClick={onPause}
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-200"
        >
          <Pause className="w-5 h-5 fill-current" />
          Pause
        </button>
      ) : (
        <button 
          onClick={onStart}
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all duration-200"
        >
          <Play className="w-5 h-5 fill-current" />
          Start
        </button>
      )}
    </div>
  );
}