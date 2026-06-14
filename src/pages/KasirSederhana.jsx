import { useState } from "react";

export const meta = {
  title: "Kasir Sederhana",
  description: "Belajar Management dan Penghitungan Data",
  level: "Medium",
  icon: "🔖",
  slug: "kasir-sederhana",
  createdAt: "14/6/2026, 19.26.41"
};

export default function KasirApp() {
  // Data dummy statis cuma buat gambaran UI di layar
  const dummyProduk = [
    { id: 1, nama: "Kopi Hitam", harga: 15000, emoji: "☕" },
    { id: 2, nama: "Roti Bakar", harga: 20000, emoji: "🍞" },
    { id: 3, nama: "Es Teh Manis", harga: 5000, emoji: "🥤" },
    { id: 4, nama: "Kentang Goreng", harga: 18000, emoji: "🍟" },
  ];

  const dummyKeranjang = [
    { id: 1, nama: "Kopi Hitam", harga: 15000, qty: 2, emoji: "☕" },
    { id: 2, nama: "Roti Bakar", harga: 20000, qty: 1, emoji: "🍞" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* HEADER APPLICATION */}
        <div className="border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            🏪 FOODEASE <span className="text-xs font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">POS v1.0</span>
          </h1>
          <p className="text-sm text-slate-400 mt-0.5">Sistem kasir digital minimalis dan responsif.</p>
        </div>

        {/* MAIN LAYOUT: KIRI (PRODUK) & KANAN (STRUK/KERANJANG) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* ================= BAGIAN KIRI: DAFTAR MENU ================= */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-base font-bold text-slate-200 tracking-wide uppercase">Daftar Menu Utama</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {dummyProduk.map((produk) => (
                <div 
                  key={produk.id} 
                  className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-slate-700 transition-all duration-200 group cursor-pointer"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-200">{produk.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-slate-200 text-sm">{produk.nama}</h3>
                    <p className="text-xs text-emerald-400 font-bold mt-0.5">Rp {produk.harga.toLocaleString()}</p>
                  </div>
                  <button className="w-full mt-1 py-1.5 bg-slate-800 group-hover:bg-emerald-600 text-slate-300 group-hover:text-white text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer">
                    Tambah
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ================= BAGIAN KANAN: KERANJANG & NOTA ================= */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-5 sticky top-6">
            <h2 className="text-base font-bold text-slate-200 tracking-wide uppercase border-b border-slate-800 pb-3">Keranjang Belanja</h2>

            {/* LIST BARANG DI KERANJANG */}
            <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
              {dummyKeranjang.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-slate-950/50 border border-slate-800/60 rounded-xl gap-3">
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-xl">{item.emoji}</span>
                    <div className="truncate">
                      <h4 className="text-xs font-semibold text-slate-200 truncate">{item.nama}</h4>
                      <p className="text-[11px] text-slate-400">Rp {(item.harga * item.qty).toLocaleString()}</p>
                    </div>
                  </div>

                  {/* TOMBOL PENGATUR QUANTITY */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="w-6 h-6 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer">-</button>
                    <span className="text-xs font-bold text-slate-300 w-4 text-center">{item.qty}</span>
                    <button className="w-6 h-6 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer">+</button>
                    <button className="ml-1 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer">🗑️</button>
                  </div>
                </div>
              ))}
            </div>

            {/* RINGKASAN PEMBAYARAN */}
            <div className="border-t border-slate-800 pt-4 flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Total Harga</span>
                <span className="font-bold text-emerald-400 text-base">Rp 50,000</span>
              </div>

              {/* INPUT PEMBAYARAN */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400">Uang Tunai Pembeli</label>
                <input 
                  type="number" 
                  placeholder="Masukkan nominal uang..." 
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200"
                />
              </div>

              <div className="flex justify-between items-center text-sm bg-slate-950/40 p-3 rounded-xl border border-slate-800/40 mt-1">
                <span className="text-slate-400">Kembalian</span>
                <span className="font-extrabold text-white">Rp 0</span>
              </div>
            </div>

            {/* TOMBOL TRANSAKSI */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <button className="py-2.5 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer">
                Reset
              </button>
              <button className="py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-950/20 active:scale-[0.98] transition-all duration-200 cursor-pointer">
                Selesai Bayar
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}