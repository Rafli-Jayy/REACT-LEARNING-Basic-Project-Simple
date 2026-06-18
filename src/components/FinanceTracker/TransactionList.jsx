import React from 'react';
import { motion } from 'framer-motion';
import { BiTrash, BiCalendarAlt, BiChevronRight, BiCircleQuarter } from 'react-icons/bi';

export default function TransactionList({ transactions , onDelete, onFilter, filter}) {
  return (
    <section className="lg:col-span-2 space-y-6">
      
      {/* HEADER LIST & FILTER TABS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-900 pb-4">
        <div>
          <h2 className="text-md font-semibold text-slate-200 tracking-wide">
            Aktivitas Transaksi
          </h2>
          <p className="text-xs text-slate-500">Memantau riwayat keluar masuknya dana kamu.</p>
        </div>
        
        <div className="flex p-1 bg-slate-950/80 border border-slate-800/50 rounded-lg self-start sm:self-auto relative isolate">
              
              {/* 1. TOMBOL: SEMUA */}
              <button 
                type="button" 
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-colors duration-300 z-10 ${
                  filter === 'semua' ? 'text-slate-200' : 'text-slate-500 hover:text-slate-300'
                }`}
                onClick={() => onFilter("semua")}
              >
                Semua
                {filter === 'semua' && (
                  <motion.div 
                    layoutId="activeFilterBg" // 💡 Harus sama di ketiga tombol biar bisa geser
                    className="absolute inset-0 bg-slate-800 border border-slate-700/30 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* 2. TOMBOL: PEMASUKAN */}
              <button 
                type="button" 
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-colors duration-300 z-10 ${
                  filter === 'pemasukan' ? 'text-slate-200' : 'text-slate-500 hover:text-slate-300'
                }`}
                onClick={() => onFilter("pemasukan")}
              >
                Pemasukan
                {filter === 'pemasukan' && (
                  <motion.div 
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-slate-800 border border-slate-700/30 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* 3. TOMBOL: PENGELUARAN */}
              <button 
                type="button" 
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-colors duration-300 z-10 ${
                  filter === 'pengeluaran' ? 'text-slate-200' : 'text-slate-500 hover:text-slate-300'
                }`}
                onClick={() => onFilter("pengeluaran")}
              >
                Pengeluaran
                {filter === 'pengeluaran' && (
                  <motion.div 
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-slate-800 border border-slate-700/30 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

        </div>
      </div>

      {transactions.length === 0 ? (
        /* TAMPILAN JIKA TIDAK ADA DATA (EMPTY STATE) */
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center p-12 bg-slate-950/20 border border-slate-900 rounded-2xl border-dashed py-16 space-y-4"
        >

          <div className="p-4 bg-slate-900/50 rounded-full text-slate-700 border border-slate-800/60 shadow-inner">
            <BiCircleQuarter size={32} className="animate-spin-[spin_4s_linear_infinite] opacity-60" />
          </div>
          
          <div className="space-y-1">
  
            <h3 className="text-sm font-medium text-slate-400">
              {filter === "pemasukan" 
                ? "Belum ada riwayat pemasukan" 
                : filter === "pengeluaran" 
                ? "Belum ada riwayat pengeluaran" 
                : "Belum ada transaksi"}
            </h3>
            
            <p className="text-xs text-slate-600 max-w-65 mx-auto">
              {filter === "pemasukan"
                ? "Catat pemasukan atau gaji pertamamu untuk melihat riwayatnya di sini."
                : filter === "pengeluaran"
                ? "Bagus! Kamu belum mencatat pengeluaran apa pun hari ini."
                : "Semua pengeluaran dan pemasukan yang kamu catat akan muncul di sini."}
            </p>
          </div>
        </motion.div>
      ) : (
        
        /* TAMPILAN JIKA DATA ADA (LIST TRANSAKSI) */
        <div className="space-y-3">
          {transactions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ scale: 1.002, backgroundColor: 'rgba(30, 41, 59, 0.2)' }}
              className="p-4 bg-slate-950/40 rounded-xl border border-slate-900 hover:border-slate-800/80 flex justify-between items-center transition-all group shadow-sm"
            >
              {/* SISI KAI: DETAIL */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-3 w-3 items-center justify-center">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-20 ${item.tipe === 'pemasukan' ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${item.tipe === 'pemasukan' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                </div>
                
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

              {/* SISI KANAN: NOMINAL & ACTION */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className={`font-mono text-sm font-semibold tracking-tight ${item.tipe === 'pemasukan' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {item.tipe === 'pemasukan' ? '+' : '-'} Rp {item.jumlah.toLocaleString('id-ID')}
                  </span>
                </div>
                
                <div className="flex items-center w-6 justify-center relative">
                  {/* 1. ICON CHEVRON: Muncul di PC (hilang saat hover), tapi di HP otomatis tersembunyi */}
                  <span className="text-slate-700 transition-all hidden md:block md:group-hover:hidden">
                    <BiChevronRight size={18} />
                  </span>

                  {/* 2. TOMBOL TRASH: Di HP langsung muncul, di PC tersembunyi dan baru muncul pas hover */}
                  <button 
                    type="button" 
                    className="text-slate-500 hover:text-rose-400 p-1.5 bg-slate-900/60 border border-slate-800 rounded-lg transition-all shadow-md
                              block md:hidden md:group-hover:block md:opacity-0 md:group-hover:opacity-100"
                    onClick={() => onDelete(item.id)}
                  >
                    <BiTrash size={14} />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}