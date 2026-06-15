import { useState } from "react";
import { ProductList } from "../components/KasirApp/ProductList";
import { CartList } from "../components/KasirApp/CartList";
import { ReceiptSummary } from "../components/KasirApp/ReceiptSummary";
import { useKasir } from "../hooks/useKasir";

export const meta = {
  title: "Kasir Sederhana",
  description: "Belajar Management dan Penghitungan Data",
  level: "Medium",
  icon: "🔖",
  slug: "kasir-sederhana",
  createdAt: "14/6/2026, 19.26.41"
};


export default function KasirApp() {
  const dummyProduk = [
    { id: 1, nama: "Kopi Hitam", harga: 15000, emoji: "☕" },
    { id: 2, nama: "Roti Bakar", harga: 20000, emoji: "🍞" },
    { id: 3, nama: "Es Teh Manis", harga: 5000, emoji: "🥤" },
    { id: 4, nama: "Kentang Goreng", harga: 18000, emoji: "🍟" },
  ];

  const {
    keranjang,
    totalHarga,
    nominal,
    pesan,
    reset,
    hitungKembalian,
    onChangeNominal,
    tambahKeranjang,
    qtyEdit,
    hapusProduk,
    bayarPesanan
  } = useKasir();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        <div className="border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            🏪 FOODEASE <span className="text-xs font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">POS v1.0</span>
          </h1>
          <p className="text-sm text-slate-400 mt-0.5">Sistem kasir digital minimalis dan responsif.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          <div className="lg:col-span-2">
            <ProductList 
              produk={dummyProduk}
              onAdd={tambahKeranjang}
            />
            
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-5 sticky top-6">
            <h2 className="text-base font-bold text-slate-200 tracking-wide uppercase border-b border-slate-800 pb-3">
              Keranjang Belanja
            </h2>

            <CartList 
              keranjang={keranjang}
              qtyEdit={qtyEdit}
              hapusProduk={hapusProduk}
            />
            <ReceiptSummary 
              totalHarga={totalHarga}
              setNominal={onChangeNominal}
              nominal={nominal}
              kembalian={hitungKembalian}
              bayar={bayarPesanan}
              pesan={pesan}
              keranjang={keranjang}
              reset={reset}
            />
          </div>

        </div>
      </div>
    </div>
  );
}