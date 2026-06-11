import { motion } from "framer-motion";
import { useState } from "react";

export const meta = {
  createdAt: "8/6/2026, 18.54.17",
  title: "Counter App",
  description: "Belajar useState",
  level: "Basic",
  icon: "🔢",
  slug: "counter-app",
};

export default function CounterApp() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center flex-col p-4">
      {/* Kartu Utama: Diubah ke bg-slate-900 dengan border tipis transparan agar lebih pop-out */}
      <div className="h-auto bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl shadow-black/50 p-14 mx-auto flex items-center flex-col gap-12 max-w-sm w-full">
        
        {/* Judul: Diubah menjadi putih bersih agar kontras */}
        <h1 className="text-3xl font-semibold text-white tracking-wide select-none">
          Counter App
        </h1>
        
        {/* Angka Counter: Menggunakan warna emas/cyan/putih dengan efek glow halus */}
        <motion.p
          key={counter}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="select-none text-8xl font-black text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.2)]"
        >
          {counter}
        </motion.p>

        {/* Baris Tombol Aksi */}
        <div className="flex gap-4 w-full justify-center">
          {/* Tombol Tambah: Tetap emerald tetapi disesuaikan tingkat kecerahannya */}
          <button 
            onClick={() => setCounter(counter + 1)} 
            className="select-none font-semibold text-sm cursor-pointer px-5 py-4 bg-emerald-500 rounded-xl text-slate-950 hover:bg-emerald-400 transition-all duration-150 active:scale-95 shadow-lg shadow-emerald-500/10"
          >
            Tambah
          </button>
          
          {/* Tombol Kurang: Warna merah disesuaikan, saat disabled menyatu dengan border slate */}
          <button 
            onClick={() => setCounter(counter - 1)} 
            disabled={counter <= 0} 
            className="select-none disabled:cursor-not-allowed font-semibold text-sm px-5 py-4 bg-rose-500 rounded-xl text-white hover:bg-rose-400 transition-all duration-150 active:scale-95 shadow-lg shadow-rose-500/10 disabled:bg-slate-800 disabled:text-slate-600 disabled:shadow-none"
          >
            Kurang
          </button>
          
          {/* Tombol Reset: Diubah menjadi slate-700 agar tidak bertabrakan dengan background */}
          <button 
            onClick={() => setCounter(0)}
            className="select-none font-semibold text-sm cursor-pointer px-5 py-4 bg-slate-800 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-150 active:scale-95 border border-slate-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
