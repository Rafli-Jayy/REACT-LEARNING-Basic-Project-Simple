import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Fungsi helper internal untuk format rupiah tanpa simbol Rp biar gampang dipecah
const formatAngka = (val) => {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 0,
  }).format(Math.abs(val));
};

export function AnimatedRupiah({ value }) {
  const isMinus = value < 0;
  const stringAngka = formatAngka(value); // Hasilnya misal: "1.500.000"
  const arrayKarakter = stringAngka.split(""); // Dipecah jadi: ["1", ".", "5", ...]

  return (
    <h3 className="text-2xl font-bold font-mono text-slate-100 tracking-tight flex items-center overflow-hidden h-9">
      {/* 1. Simbol Rp di depan tetap diam */}
      <span>Rp {isMinus && "-"}</span>

      {/* 2. Looping setiap karakter biar bisa jalan sendiri-sendiri */}
      {arrayKarakter.map((char, index) => {
        // Kalau karakter berupa titik (.), tampilin biasa tanpa animasi biar gak pusing
        if (char === ".") {
          return <span key={index}>.</span>;
        }

        // Kalau angka, kasih animasi slide up/down per digit
        return (
          <span key={index} className="relative h-full w-[0.65em] flex justify-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={char} // Kunci utama: pas angka berubah, key ganti, animasi jalan
                initial={{ y: "100%", opacity: 0 }}   // Muncul dari bawah
                animate={{ y: "0%", opacity: 1 }}     // Berhenti di tengah
                exit={{ y: "-100%", opacity: 0 }}     // Hilang kabur ke atas
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="absolute"
              >
                {char}
              </motion.span>
            </AnimatePresence>
          </span>
        );
      })}
    </h3>
  );
}