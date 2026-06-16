export function CartList({ keranjang, qtyEdit, hapusProduk }) {
  return (
    <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
      {keranjang.length === 0 ? 
        (
          <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-slate-800 rounded-2xl bg-slate-950/20 text-center">
            <span className="text-4xl mb-3 animate-pulse">🛒</span>
            <h3 className="text-sm font-semibold text-slate-300">
              Belum Ada Pesanan
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-50">
              Silakan pilih menu di sebelah kiri untuk menambahkan item.
            </p>
          </div>
        ) : (
          keranjang.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-slate-950/50 border border-slate-800/60 rounded-xl gap-3"
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="text-xl">{item.emoji}</span>
                <div className="truncate">
                  <h4 className="text-xs font-semibold text-slate-200 truncate">
                    {item.nama}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Rp {(item.harga * item.qty).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => qtyEdit(item.id, "delete")}
                  className="w-6 h-6 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="text-xs font-bold text-slate-300 w-4 text-center">
                  {item.qty}
                </span>
                <button
                  onClick={() => qtyEdit(item.id, "add")}
                  className="w-6 h-6 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
                <button
                  onClick={() => hapusProduk(item.id)}
                  className="ml-1 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
    </div>
  );
}
