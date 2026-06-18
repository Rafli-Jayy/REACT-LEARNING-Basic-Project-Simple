import React from 'react';
import { motion } from 'framer-motion';
import { BiWallet, BiTrendingUp, BiTrendingDown } from 'react-icons/bi';
import { AnimatedRupiah } from '../../utils/animatedRupiah';

const formatRupiah = (angka) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(angka);
};

export default function SummaryCards({totalSaldo, totalPemasukan, totalPengeluaran}) {
  // Animasi spring yang snappy dan padat
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* 1. CARD SALDO (Tema: Deep Solid Slate) */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ translateY: -2, borderColor: 'rgba(59, 130, 246, 0.3)' }}
        className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between shadow-lg transition-colors duration-200"
      >
        <div className="space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Total Saldo</span>
          <AnimatedRupiah value={totalSaldo} />
        </div>
        <div className="p-3 bg-slate-950 rounded-xl text-blue-400 text-xl border border-slate-800 shadow-inner">
          <BiWallet />
        </div>
      </motion.div>

      {/* 2. CARD PEMASUKAN (Tema: Emerald Glow Border) */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.05 }}
        whileHover={{ translateY: -2, borderColor: 'rgba(16, 185, 129, 0.3)' }}
        className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between shadow-lg transition-colors duration-200"
      >
        <div className="space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Total Pemasukan</span>
          <AnimatedRupiah value={totalPemasukan} />
        </div>
        <div className="p-3 bg-slate-950 rounded-xl text-emerald-400 text-xl border border-slate-800 shadow-inner">
          <BiTrendingUp />
        </div>
      </motion.div>

      {/* 3. CARD PENGELUARAN (Tema: Rose Glow Border) - DIJAMIN AMAN */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        whileHover={{ translateY: -2, borderColor: 'rgba(244, 63, 94, 0.3)' }}
        className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between shadow-lg transition-colors duration-200"
      >
        <div className="space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Total Pengeluaran</span>
          <AnimatedRupiah value={totalPengeluaran} />
        </div>
        <div className="p-3 bg-slate-950 rounded-xl text-rose-400 text-xl border border-slate-800 shadow-inner">
          <BiTrendingDown />
        </div>
      </motion.div>

    </section>
  );
}