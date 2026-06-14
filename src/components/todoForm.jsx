
export function TodoForm({ input, kategori, onChange, onKategoriChange, onSubmit }) {

  return (
    <div className="w-full bg-slate-800/10 p-5 rounded-xl border border-slate-800/40 flex flex-col gap-4">

      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        

        <div className="flex-1 flex flex-col gap-1">
          <input 
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 font-medium text-sm transition-all duration-300 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-600"
            type="text"
            placeholder="Masukan tugas hari ini..."
            value={input}
            onChange={onChange}
          />
          
        </div>


        <div className="sm:w-35">
          <select 
            value={kategori}      
            onChange={onKategoriChange} 
            className="appearance-none px-4 pr-10 py-2 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 cursor-pointer w-full bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2229%22%20height%3D%2229%22%20viewBox%3D%220%200%2029%2029%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M7%2010l5%205%205-5z%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[position:right_12px_center] bg-no-repeat"
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