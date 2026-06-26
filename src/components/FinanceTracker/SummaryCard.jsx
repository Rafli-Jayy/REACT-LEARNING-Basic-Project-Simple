import React from 'react';
import { motion } from 'framer-motion';
import { BiWallet, BiTrendingUp, BiTrendingDown } from 'react-icons/bi';
import { AnimatedRupiah } from '../../utils/animatedRupiah';

// Pindah ke luar — tidak dibuat ulang tiap render
const CARD_SPRING = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const CARDS = [
  { label: 'Total Saldo',       key: 'saldo',       icon: BiWallet,      color: 'text-blue-400',    delay: 0    },
  { label: 'Total Pemasukan',   key: 'pemasukan',   icon: BiTrendingUp,  color: 'text-emerald-400', delay: 0.05 },
  { label: 'Total Pengeluaran', key: 'pengeluaran', icon: BiTrendingDown,color: 'text-rose-400',    delay: 0.1  },
];

export default function SummaryCards({ totalSaldo, totalPemasukan, totalPengeluaran }) {
  const values = { saldo: totalSaldo, pemasukan: totalPemasukan, pengeluaran: totalPengeluaran };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {CARDS.map(({ label, key, icon: Icon, color, delay }) => (
        <motion.div
          key={key}
          variants={CARD_SPRING}
          initial="hidden"
          animate="visible"
          transition={{ delay }}
          // style ini paksa browser promote ke GPU layer sejak awal
          style={{ willChange: 'transform, opacity' }}
          className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between shadow-lg"
        >
          <div className="space-y-1">
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</span>
            <AnimatedRupiah value={values[key]} />
          </div>
          <div className={`p-3 bg-slate-950 rounded-xl text-xl border border-slate-800 shadow-inner ${color}`}>
            <Icon />
          </div>
        </motion.div>
      ))}
    </section>
  );
}