export function ReceiptSummary({totalHarga, nominal, setNominal, kembalian, bayar, pesan, reset, keranjang}) {
  return (
    <div className="border-t border-slate-800 pt-4 flex flex-col gap-3">
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-400">Total Harga</span>
        <span className="font-bold text-emerald-400 text-base">{totalHarga}</span>
      </div>

      {/* INPUT PEMBAYARAN */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-400">Uang Tunai Pembeli</label>
        <input 
          type="number"
          value={nominal}
          onChange={setNominal}
          placeholder="Masukkan nominal uang..." 
          className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200"
        />
      </div>

      <div className="flex justify-between items-center text-sm bg-slate-950/40 p-3 rounded-xl border border-slate-800/40 mt-1">
        <span className="text-slate-400">Kembalian</span>
        <span className="font-extrabold text-white">Rp {totalHarga === 0 ? 0 : kembalian(totalHarga, nominal)}</span>
      </div>
        {pesan.length !== 0 && (
        <span className={`mt-2 text-xs ${pesan.includes("berhasil") ? "text-emerald-600" : "text-red-500"} ml-1`}>
          {pesan}
        </span>
        )}

      {/* TOMBOL TRANSAKSI */}
      <div className="grid grid-cols-2 gap-3 mt-2">
        <button 
          onClick={reset}
          className="py-2.5 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer"
        >
          Reset
        </button>
        <button 
          onClick={() => bayar(totalHarga, nominal)}
          className="py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-950/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          Selesai Bayar
        </button>
      </div>
    </div>
  );
}