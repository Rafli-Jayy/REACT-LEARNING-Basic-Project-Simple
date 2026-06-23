import React from 'react';
import { Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import TimerDisplay from '../components/Stopwatch/TimerDisplay';
import TimerControls from '../components/Stopwatch/TimerControls';
import useStopwatch from '../hooks/useStopwatch'


export const meta = {
  title: "Stopwatch",
  description: "Belajar Hooks",
  level: "Medium",
  icon: "⌚",
  slug: "stopwatch",
  createdAt: "21/6/2026, 17.39.36"
};

export default function StopwatchCard() {
  // 2. Destructuring fungsi dan state dari custom hook
  const { time, isRunning, start, pause, reset } = useStopwatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 mx-4 bg-slate-900/50 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-8 bg-slate-800/40 px-4 py-1.5 rounded-full border border-slate-700/50">
          <Timer className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Stopwatch</span>
        </div>

        {/* 3. Oper data seperti biasa ke komponen anak */}
        <TimerDisplay time={time} />
        
        <TimerControls 
          isRunning={isRunning} 
          onStart={start} 
          onPause={pause} 
          onReset={reset} 
        />

      </motion.div>
    </div>
  );
}