import React from 'react';

export default function Header({totalSaldo}) {
  return (
    <header className="flex justify-between items-center border-b border-slate-900 pb-4">
      <div>
        <h1 className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          DuitKu Tracker
        </h1>
        <p className="text-xs text-slate-400">Kelola keuanganmu tanpa pusing</p>
      </div>
      <div className="text-right">
        <span className={`text-xs bg-slate-900 px-3 py-1 rounded-full ${totalSaldo < 0 ? "text-red-500" : "text-emerald-400"} font-mono border border-slate-800`}>
          Status: {totalSaldo < 0 ? "Bahaya" : "Aman"}
        </span>
      </div>
    </header>
  );
}