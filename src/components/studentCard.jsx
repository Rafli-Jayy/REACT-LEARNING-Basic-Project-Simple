export default function Student({ nama, kelas, absen, idx }) {
  return (
    <div className="relative w-auto h-auto rounded-xl p-6 shadow-md bg-slate-800/90 border border-slate-700/60 hover:border-indigo-400/50 shadow-black/10 group/card transition-all duration-300">
      
      {/* Nomor Absensi (#) di Pojok Kanan Atas: Lebih Terang */}
      <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 font-mono font-bold text-xs border border-indigo-400/30 group-hover/card:bg-indigo-500 group-hover/card:text-slate-950 group-hover/card:border-transparent transition-all duration-300">
        #{idx}
      </div>

      {/* Konten Biodata Siswa */}
      <div className="space-y-3 pr-10">
        <div className="flex flex-col">
          {/* Label diubah menjadi abu-abu terang keperakan */}
          <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Nama Siswa</span>
          {/* Teks nama diubah menjadi putih bersih bersih */}
          <span className="font-bold text-white text-base tracking-wide group-hover/card:text-indigo-300 transition-colors duration-200 truncate">
            {nama}
          </span>
        </div>

        <div className="flex gap-4 pt-1">

          <div className="flex flex-col bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700/40 min-w-18.75">
            <span className="text-[10px] text-slate-400 font-medium uppercase">Kelas</span>
            <span className="font-extrabold text-indigo-300 text-xs mt-0.5">{kelas}</span>
          </div>

          <div className="flex flex-col bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700/40 min-w-18.75">
            <span className="text-[10px] text-slate-400 font-medium uppercase">Absen</span>
            <span className="font-extrabold text-indigo-300 text-xs mt-0.5">{absen}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
