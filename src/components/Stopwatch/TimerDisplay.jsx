import React from 'react';

// Menerima props 'time' dari parent
export default function TimerDisplay({ time }) {
  
  // Rumus matematika untuk mengubah milidetik ke format waktu biasa
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const centiseconds = Math.floor((time / 10) % 100);

  // padStart(2, '0') berfungsi agar jika angkanya satuan (misal: 5), otomatis ditulis "05"
  const mins = minutes.toString().padStart(2, '0');
  const secs = seconds.toString().padStart(2, '0');
  const cents = centiseconds.toString().padStart(2, '0');

  return (
    <div className="flex items-baseline font-mono text-7xl font-bold tracking-tight text-slate-100 mb-12 select-none">
      <span className="w-20 text-center">{mins}</span>
      <span className="text-slate-500 animate-pulse">:</span>
      <span className="w-20 text-center">{secs}</span>
      <span className="text-xl text-emerald-400 ml-2 font-semibold w-10">{cents}</span>
    </div>
  );
}