import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiPlus, BiMinus } from 'react-icons/bi';

// ✅ Semua variants di luar komponen — tidak dibuat ulang tiap render
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    // ✅ Hapus scale — translateY saja cukup & lebih ringan
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
};

const messageVariants = {
  hidden: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.15 } },
  // ✅ Ganti height animasi → opacity saja, hindari reflow
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const SPRING_LAYOUT = { type: 'spring', stiffness: 380, damping: 30 };

// ✅ Komponen ErrorMsg agar AnimatePresence tidak inline berulang
function FieldMsg({ msg }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.span
          variants={messageVariants}
          initial="hidden"
          animate="animate"
          exit="exit"
          className="text-[11px] font-medium text-rose-400 pl-2 flex items-center gap-1 mt-1.5"
        >
          ⚠️ {msg}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

const TYPE_CONFIG = {
  pengeluaran: {
    icon: BiMinus,
    label: 'Pengeluaran',
    active: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
  },
  pemasukan: {
    icon: BiPlus,
    label: 'Pemasukan',
    active: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
};

export default function TransactionForm({
  tipe, setTipe,
  daftarKategori, kategori, setKategori,
  nominal, nominalOnChange,
  desc, descOnChange,
  msg, onSubmit,
}) {
  return (
    <section className="lg:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl shadow-black/40 space-y-6">
      
      <div>
        <h2 className="text-md font-semibold text-slate-200 tracking-wide">Transaksi Baru</h2>
        <p className="text-xs text-slate-500">Catat keuanganmu secara instan di sini.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">

        {/* SWITCH TIPE */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800/60 relative isolate">
          {Object.entries(TYPE_CONFIG).map(([type, { icon: Icon, label, active, bg }]) => (
            <button
              key={type}
              type="button"
              onClick={() => setTipe(type)}
              className={`relative flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-lg transition-colors duration-300 z-10 ${
                tipe === type ? active : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon size={14} /> {label}
              {tipe === type && (
                <motion.div
                  layoutId="activeTypeBg"
                  className={`absolute inset-0 border rounded-lg -z-10 ${bg}`}
                  transition={SPRING_LAYOUT}
                />
              )}
            </button>
          ))}
        </div>

        {/* INPUT: NOMINAL */}
        <div>
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
          <FieldMsg msg={msg.jumlah} />
        </div>

        {/* INPUT: KETERANGAN */}
        <div>
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
          <FieldMsg msg={msg.deskripsi} />
        </div>

        {/* PILIHAN KATEGORI */}
        <div>
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
              {daftarKategori[tipe]?.map((item) => (
                <motion.button
                  key={item.nama}
                  variants={itemVariants}
                  // ✅ whileTap pakai opacity, bukan scale
                  whileTap={{ opacity: 0.7 }}
                  type="button"
                  onClick={() => setKategori(item.nama)}
                  className={`py-2 px-1 text-xs rounded-xl border transition-all duration-200 font-medium ${
                    kategori === item.nama
                      ? 'bg-slate-800 text-slate-100 border-slate-700 shadow-md'
                      : 'bg-slate-950/40 text-slate-500 border-slate-900/60 hover:border-slate-800 hover:text-slate-300'
                  }`}
                >
                  {item.emoji} {item.nama}
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PESAN DONE */}
        <AnimatePresence>
          {msg.done && (
            <motion.span
              variants={messageVariants}
              initial="hidden"
              animate="animate"
              exit="exit"
              className="text-[11px] font-medium text-emerald-400 pl-2 flex items-center gap-1"
            >
              ✨ {msg.done}
            </motion.span>
          )}
        </AnimatePresence>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-slate-100 hover:bg-white text-slate-950 font-semibold py-3 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg active:scale-[0.98] mt-2"
        >
          Add Transaction
        </button>

      </form>
    </section>
  );
}