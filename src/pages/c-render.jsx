import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const meta = {
  createdAt: "9/6/2026, 19.11.16",
  title: "Render Data",
  description: "Belajar Conditional Rendering",
  level: "Basic",
  icon: "📈",
  slug: "render-app",
};

const siswa = [
  {
    nama: "Rafli",
    kelas: "XII-4",
    absen: 3,
  },
  {
    nama: "Jaya",
    kelas: "XII-4",
    absen: 2,
  },
  {
    nama: "Zida",
    kelas: "XII-4",
    absen: 22,
  },
];

export default function RenderApp() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-950 flex justify-center items-center p-4">
      {/* Kartu Utama: Diperlebar max-w-xl agar lebih responsif dibanding w-1/3 yang kekecilan di mobile */}
      <div className="w-full max-w-xl h-auto rounded-2xl shadow-2xl shadow-black/50 bg-slate-900 border border-slate-800 p-8 transition-all duration-300">
        
        {/* Bagian Atas: Header & Tombol Sakelar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <h1 className="font-bold text-xl text-white tracking-wide">
              Conditional Rendering
            </h1>
            <p className={`text-xs mt-1 font-medium transition-colors duration-300 ${show ? "text-emerald-400" : "text-slate-500"}`}>
              {show ? "● Sedang menampilkan data" : "○ Data tidak ditampilkan"}
            </p>
          </div>
          
          <button 
            onClick={() => setShow(!show)}
            className={`font-semibold text-sm text-white rounded-xl w-full sm:w-32 h-12 transition-all duration-300 active:scale-95 cursor-pointer shadow-lg ${
              show 
                ? "bg-rose-500 hover:bg-rose-400 shadow-rose-500/10" 
                : "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/10"
            }`}
          >
            {show ? "Sembunyikan" : "Tampilkan"}
          </button>
        </div>

        {/* REKASASA ANIMASI DENGAN ANIMATEPRESENCE */}
        <AnimatePresence>
          {show && (

            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-4 overflow-hidden" // Dihapus grid-rows-3 dan h-96 agar tingginya dinamis otomatis
            >
              {siswa.map((item, idx) => {
                return (
                  /* Animasi Muncul untuk Masing-masing Kartu Siswa (Efek Berjejer/Staggered) */
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: idx * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                    className="relative p-5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-indigo-500/30 group transition-all duration-200"
                  >
                    {/* Nomor Indeks Mini */}
                    <span className="absolute top-4 right-4 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-500 border border-slate-800 group-hover:text-indigo-400 transition-colors">
                      #{idx + 1}
                    </span>

                    {/* Susunan Teks Menggunakan space-y-1 */}
                    <div className="space-y-1 text-sm font-medium">
                      <h1 className="text-slate-400">Nama: <span className="text-white font-bold tracking-wide">{item.nama}</span></h1>
                      <h1 className="text-slate-400">Kelas: <span className="text-slate-200">{item.kelas}</span></h1>
                      <h1 className="text-slate-400">Absen: <span className="text-indigo-300 font-mono text-xs">{item.absen}</span></h1>
                    </div>
                  </motion.div>
                ) 
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}