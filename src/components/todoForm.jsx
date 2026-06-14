
export function TodoForm({ input, kategori, onChange, onKategoriChange, onSubmit }) {

  return (
    <div className="w-full bg-slate-800/10 p-5 rounded-xl border border-slate-800/40 flex flex-col gap-4">

      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        

        <div className="flex-1 flex flex-col gap-1">
          <input 
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 font-medium text-sm transition-all duration-300 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-600"
            type="text"
            placeholder="Apa yang mau kamu kerjakan hari ini?..."
            value={input}
            onChange={onChange}
          />
          
        </div>


        <div className="sm:w-40">
          <select 
            value={kategori}      
            onChange={onKategoriChange} 
            className="w-full h-full px-3 py-3 sm:py-0 bg-slate-950 border border-slate-700 rounded-xl text-slate-300 font-medium text-sm outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="Kerja">💼 Kerja</option>
            <option value="Pribadi">🏠 Pribadi</option>
            <option value="Belanja">🛒 Belanja</option>
          </select>
        </div>

        <button type="submit" className="group flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 active:scale-[0.98] transition-all duration-200 text-sm tracking-wide cursor-pointer">
          <span>Tambah Tugas</span>
        </button>
      </form>
    </div>
  );
}