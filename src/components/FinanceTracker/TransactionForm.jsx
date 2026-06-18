import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiPlus, BiMinus } from 'react-icons/bi';

export default function TransactionForm({
  tipe,
  setTipe,
  daftarKategori,
  setKategori,
  kategori,
  nominal,
  nominalOnChange,
  desc,
  descOnChange,
  msg,
  onSubmit,
}) {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    }
  };

  // Variasi animasi halus untuk pesan error/sukses agar tidak merusak layout
  const messageVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    animate: { 
      opacity: 1, 
      height: "auto", 
      marginTop: 6,
      transition: { type: "spring", stiffness: 500, damping: 35 }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      marginTop: 0,
      transition: { duration: 0.15 }
    }
  };

  return (
    // Menggunakan motion.section + layout agar card beradaptasi dengan mulus saat tingginya berubah
    <motion.section 
      layout
      className="lg:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl shadow-black/40 space-y-6"
    >
      {/* HEADER FORM */}
      <div>
        <h2 className="text-md font-semibold text-slate-200 tracking-wide">
          Transaksi Baru
        </h2>
        <p className="text-xs text-slate-500">Catat keuanganmu secara instan di sini.</p>
      </div>
      
      {/* 💡 PERBAIKAN: Handler onSubmit dipindahkan ke tag form yang benar */}
      <form onSubmit={onSubmit} className="space-y-4">
        
        {/* SWITCH TIPE */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800/60 relative isolate">
          <button 
            type="button" 
            onClick={() => setTipe('pengeluaran')}
            className={`relative flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-lg transition-colors duration-300 z-10 ${
              tipe === 'pengeluaran' ? 'text-rose-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <BiMinus size={14} /> Pengeluaran
            {tipe === 'pengeluaran' && (
              <motion.div 
                layoutId="activeTypeBg"
                className="absolute inset-0 bg-rose-500/10 border border-rose-500/20 rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          
          <button 
            type="button" 
            onClick={() => setTipe('pemasukan')}
            className={`relative flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-lg transition-colors duration-300 z-10 ${
              tipe === 'pemasukan' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <BiPlus size={14} /> Pemasukan
            {tipe === 'pemasukan' && (
              <motion.div 
                layoutId="activeTypeBg"
                className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* INPUT: NOMINAL */}
        <motion.div layout>
          <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1.5">
            Nominal Uang
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-sm font-semibold text-slate-400 font-mono">Rp</span>
            <input 
              type="text"
              placeholder="0" 
              value={nominal}
              onChange={nominalOnChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-lg font-mono text-slate-100 placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all" 
            />
          </div>
          <AnimatePresence>
            {msg.jumlah && (
              <motion.span 
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                exit="exit"
                className="text-[11px] font-medium text-rose-400 pl-2 flex items-center gap-1 overflow-hidden block"
              >
                ⚠️ {msg.jumlah}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* INPUT: KETERANGAN */}
        <motion.div layout>
          <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1.5">
            Keterangan
          </label>
          <input 
            type="text" 
            value={desc}
            onChange={descOnChange}
            placeholder="Misal: Langganan Spotify, Token Listrik..." 
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all" 
          />
          <AnimatePresence>
            {msg.deskripsi && (
              <motion.span 
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                exit="exit"
                className="text-[11px] font-medium text-rose-400 pl-2 flex items-center gap-1 overflow-hidden block"
              >
                ⚠️ {msg.deskripsi}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* PILIHAN KATEGORI */}
        <motion.div layout>
          <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-2">
            Pilih Kategori
          </label>
          <AnimatePresence mode="wait">
            <motion.div 
              key={tipe} 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-3 gap-2"
            >
              {daftarKategori[tipe]?.map((item) => {
                const isSelected = kategori === item.nama;
                return (
                  <motion.button 
                    key={item.nama}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }} 
                    type="button" 
                    onClick={() => setKategori(item.nama)}
                    className={`py-2 px-1 text-xs rounded-xl border transition-all duration-200 font-medium ${
                      isSelected 
                        ? 'bg-slate-800 text-slate-100 border-slate-700 shadow-md scale-[1.02]' 
                        : 'bg-slate-950/40 text-slate-500 border-slate-900/60 hover:border-slate-800 hover:text-slate-300'
                    }`}
                  >
                    {item.emoji} {item.nama}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* PESAN SELESAI */}
        <AnimatePresence>
          {msg.done && (
            <motion.span
              variants={messageVariants}
              initial="hidden"
              animate="animate"
              exit="exit"
              className="text-[11px] font-medium text-emerald-400 pl-2 flex items-center gap-1 overflow-hidden block"
            >
              ✨ {msg.done}
            </motion.span>
          )}
        </AnimatePresence>

        {/* BUTTON SUBMIT */}
        <motion.button 
          layout
          type="submit" // 💡 PERBAIKAN: Diubah ke type="submit" asli bawaan form HTML
          className="w-full bg-slate-100 hover:bg-white text-slate-950 font-semibold py-3 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg active:scale-[0.98] mt-2"
        >
          Add Transaction
        </motion.button>

      </form>
    </motion.section>
  );
}