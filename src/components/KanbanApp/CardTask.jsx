import { LuTrash2 } from "react-icons/lu";
import { motion } from "framer-motion";

export function CardTask({ title, priority, desc, isFirst, isLast, onHapus, id, status, onRightClick, onLeftClick}) {
  // Helper warna badge prioritas
  const priorityColor = {
    Tinggi: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    Sedang: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Rendah: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };

  return (
    <motion.div
      // 2. Tambahkan magic props dari framer motion di bawah ini
      layout // 🔥 Ini yang bikin efek geser antar kolom jadi smooth abis!
      initial={{ opacity: 0, y: 20, scale: 0.95 }} // Posisi pas baru lahir
      animate={{ opacity: 1, y: 0, scale: 1 }}     // Posisi pas udah nongol
      exit={{ opacity: 0, scale: 0.9 }}            // Pas dihapus
      transition={{ 
        type: "spring", // Efek membal kayak per biar kelihatan premium
        stiffness: 300, 
        damping: 25 
      }} className="bg-slate-950/50 border border-slate-800/60 rounded-xl p-4 flex flex-col gap-3 group hover:border-slate-700/80 transition-all duration-200 shadow-sm"
      >
      <div className="flex justify-between items-start gap-2">
        <h3 className="text-sm font-bold text-white tracking-wide">{title}</h3>
        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${priorityColor[priority]}`}>
          {priority}
        </span>
      </div>
      
      {desc && <p className="text-xs text-slate-400 leading-relaxed wrap-break-word">{desc}</p>}
      
      <div className="flex justify-between items-center border-t border-slate-900/60 pt-2.5 mt-1">
        <button 
        disabled={status !== "done"}
        className="text-slate-500 hover:text-rose-400 p-1 rounded transition cursor-pointer disabled:opacity-35 disabled:hover:text-slate-500 disabled:cursor-not-allowed group"
        title="Hapus Tugas"
        onClick={() => onHapus(id)}
        >
          <LuTrash2 className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        <div className="flex gap-1.5">
          {/* Tombol Kiri */}
          {!isFirst && (
            <button 
            className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-xs rounded-md text-slate-400 border border-slate-800 transition cursor-pointer"
            onClick={onLeftClick}
            >
              ◀
            </button>
          )}
          {/* Tombol Kanan */}
          {!isLast && (
            <button 
            className="px-2 py-1 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-xs font-bold rounded-md text-indigo-400 transition cursor-pointer"
            onClick={onRightClick}
            >
              ▶
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}