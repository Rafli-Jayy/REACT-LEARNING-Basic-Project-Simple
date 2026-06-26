import React from 'react';
import { motion } from 'framer-motion';
import { BiTrash, BiCalendarAlt, BiChevronRight, BiCircleQuarter } from 'react-icons/bi';

// ✅ Di luar komponen
const SPRING = { type: 'spring', stiffness: 380, damping: 30 };

const FILTERS = ['semua', 'pemasukan', 'pengeluaran'];

const EMPTY_MSG = {
  pemasukan:    { title: 'Belum ada riwayat pemasukan',    desc: 'Catat pemasukan atau gaji pertamamu untuk melihat riwayatnya di sini.' },
  pengeluaran:  { title: 'Belum ada riwayat pengeluaran',  desc: 'Bagus! Kamu belum mencatat pengeluaran apa pun hari ini.' },
  semua:        { title: 'Belum ada transaksi',            desc: 'Semua pengeluaran dan pemasukan yang kamu catat akan muncul di sini.' },
};

// ✅ Pisah komponen row agar React bisa memo & skip re-render
const TransactionRow = React.memo(function TransactionRow({ item, onDelete }) {
  const isPemasukan = item.tipe === 'pemasukan';
  const color = isPemasukan ? 'emerald' : 'rose';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      // ✅ Hapus whileHover scale & backgroundColor — pakai CSS hover saja
      className="p-4 bg-slate-950/40 rounded-xl border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/30 flex justify-between items-center transition-colors group shadow-sm"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* SISI KIRI */}
      <div className="flex items-center gap-4">
        {/* ✅ Ganti animate-ping → static dot, hemat CPU */}
        <span className={`inline-flex rounded-full h-2 w-2 flex-shrink-0 ${isPemasukan ? 'bg-emerald-500' : 'bg-rose-500'}`} />

        <div className="space-y-1">
          <h4 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
            {item.deskripsi}
          </h4>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md text-slate-400 font-medium text-[10px]">
              {item.kategori}
            </span>
            <span className="flex items-center gap-1">
              <BiCalendarAlt size={12} /> {item.tanggal}
            </span>
          </div>
        </div>
      </div>

      {/* SISI KANAN */}
      <div className="flex items-center gap-4">
        <span className={`font-mono text-sm font-semibold tracking-tight ${isPemasukan ? 'text-emerald-400' : 'text-rose-400'}`}>
          {isPemasukan ? '+' : '−'} Rp {item.jumlah.toLocaleString('id-ID')}
        </span>

        <div className="flex items-center w-6 justify-center relative">
          <span className="text-slate-700 hidden md:block md:group-hover:hidden">
            <BiChevronRight size={18} />
          </span>
          <button
            type="button"
            className="text-slate-500 hover:text-rose-400 p-1.5 bg-slate-900/60 border border-slate-800 rounded-lg transition-colors shadow-md block md:hidden md:group-hover:block md:opacity-0 md:group-hover:opacity-100"
            onClick={() => onDelete(item.id)}
          >
            <BiTrash size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default function TransactionList({ transactions, onDelete, onFilter, filter }) {
  const emptyMsg = EMPTY_MSG[filter] ?? EMPTY_MSG.semua;

  return (
    <section className="lg:col-span-2 space-y-6">

      {/* HEADER & FILTER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-900 pb-4">
        <div>
          <h2 className="text-md font-semibold text-slate-200 tracking-wide">Aktivitas Transaksi</h2>
          <p className="text-xs text-slate-500">Memantau riwayat keluar masuknya dana kamu.</p>
        </div>

        <div className="flex p-1 bg-slate-950/80 border border-slate-800/50 rounded-lg self-start sm:self-auto relative isolate">
          {/* ✅ 3 tombol → map */}
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => onFilter(f)}
              className={`relative px-3 py-1 text-xs font-medium rounded-md transition-colors duration-300 z-10 capitalize ${
                filter === f ? 'text-slate-200' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {f}
              {filter === f && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-slate-800 border border-slate-700/30 rounded-md -z-10"
                  transition={SPRING}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {transactions.length === 0 ? (
        // EMPTY STATE
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          // ✅ Ganti scale → y, lebih ringan
          className="flex flex-col items-center justify-center text-center p-12 bg-slate-950/20 border border-slate-900 rounded-2xl border-dashed py-16 space-y-4"
        >
          <div className="p-4 bg-slate-900/50 rounded-full text-slate-700 border border-slate-800/60 shadow-inner">
            <BiCircleQuarter size={32} className="opacity-60" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-slate-400">{emptyMsg.title}</h3>
            <p className="text-xs text-slate-600 max-w-65 mx-auto">{emptyMsg.desc}</p>
          </div>
        </motion.div>
      ) : (
        // LIST
        <div className="space-y-3">
          {transactions.map((item, index) => (
            <TransactionRow
              key={item.id}
              item={item}
              onDelete={onDelete}
              // ✅ Cap delay max 0.2s agar list panjang tidak lag
              style={{ animationDelay: `${Math.min(index * 0.04, 0.2)}s` }}
            />
          ))}
        </div>
      )}
    </section>
  );
}