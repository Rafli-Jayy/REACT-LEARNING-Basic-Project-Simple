import { motion } from "framer-motion";

export function ModalInput({ setModal, priority, onPriority, onSubmit, judul, desc, onJudul, onDesc, error }) {
  return (
    // 1. Backdrop Animasi (Fade In)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={setModal} // Klik latar belakang otomatis nutup modal
    >
      {/* 2. Ubah div biasa ini jadi motion.div (Efek Pop-up) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }} // Mulai dari agak kecil & turun sedikit
        animate={{ opacity: 1, scale: 1, y: 0 }}    // Meluncur pas ke posisi normal
        transition={{ type: "spring", duration: 0.3 }} // Pake efek pegas halus
        className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full max-w-md shadow-2xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()} // 🔥 KUNCI: Biar diklik di dalam form gak nge-trigger setModal
      >
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 className="text-base font-bold text-white">Buat Tugas Baru</h3>
          <button 
            className="text-slate-400 hover:text-white text-sm cursor-pointer"
            onClick={setModal}
          >
            ✕
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Judul Tugas</label>
            <input 
              type="text" 
              placeholder="Misal: Perbaiki Bug Navbar" 
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm outline-none" 
              value={judul}
              onChange={onJudul}
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Deskripsi Singkat</label>
            <textarea 
              placeholder="Jelaskan detail tugas di sini..." 
              rows="3" 
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm outline-none resize-none" 
              value={desc}
              onChange={onDesc}
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Tingkat Prioritas</label>
            <select 
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm outline-none"
              value={priority}
              onChange={onPriority}
            >
              <option value="Tinggi">🔴 Tinggi</option>
              <option value="Sedang">🟡 Sedang</option>
              <option value="Rendah">🟢 Rendah</option>
            </select>
          </div>

          {/* 🔥 Hanya muncul jika ada string error-nya */}
          {error && (
            <span className="text-[11px] font-medium text-rose-400 mt-1 pl-2 flex items-center gap-1 animate-fade-in">
              ⚠️ {error}
            </span>
          )}

          <div className="flex gap-3 mt-2 justify-end border-t border-slate-800 pt-4">
            <button 
              className="px-4 py-2 border border-slate-800 hover:bg-slate-800 text-slate-400 text-xs font-bold rounded-xl transition"
              onClick={setModal}
            >
              Batal
            </button>
            <button 
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-indigo-950/20"
              onClick={onSubmit}
            >
              Simpan Tugas
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}