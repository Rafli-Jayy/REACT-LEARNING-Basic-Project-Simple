export function ProductList({ produk, onAdd }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base font-bold text-slate-200 tracking-wide uppercase">
        Daftar Menu Utama
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {produk.map((item) => (
          <div 
            key={item.id} 
            className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-slate-700 transition-all duration-200 group cursor-pointer"
          >
            <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
              {item.emoji}
            </span>
            <div>
              <h3 className="font-semibold text-slate-200 text-sm">{item.nama}</h3>
              <p className="text-xs text-emerald-400 font-bold mt-0.5">
                Rp {item.harga.toLocaleString()}
              </p>
            </div>
            <button 
            onClick={() => onAdd(item)}
            className="w-full mt-1 py-1.5 bg-slate-800 group-hover:bg-emerald-600 text-slate-300 group-hover:text-white text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer"
            >
              Tambah
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}