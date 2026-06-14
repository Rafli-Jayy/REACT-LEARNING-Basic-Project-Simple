
export default function TaskTodo({ id, kategori, isDone, judul, onTask, onDelete }) {
  return (
    <div
      className={`group text-sm font-medium px-5 py-4 rounded-xl flex justify-between items-center border transition-all duration-300 ${
        isDone
          ? "text-slate-500 bg-slate-950/40 border-slate-900"
          : "text-slate-300 bg-slate-700/20 hover:bg-slate-700/40 border-slate-800/60 hover:border-slate-700"
      }`}
    >
      <div className={`flex flex-col gap-2 truncate pr-4 ${isDone ? "opacity-50" : ""}`}>
        <h1 className={`font-normal ${
          isDone 
            ? "line-through" 
            : "text-slate-200 group-hover:text-white transition-colors duration-300"
        }`}>
          {judul}
        </h1>

        <span className={`text-[10px] w-fit font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${
          isDone
            ? "bg-slate-800 text-slate-400 border-slate-700"
            : "bg-blue-500/10 text-blue-400 border-blue-500/20"
        }`}>
          {kategori}
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <button
          className={
            isDone
              ? "px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-semibold cursor-pointer"
              : "px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white text-xs font-semibold transition-all duration-200 cursor-pointer"
          }
          onClick={() => onTask(id)}
        >
          {isDone ? "Batal" : "Selesai"}
        </button>
        
        <button 
        onClick={() => onDelete(id)} 

        disabled={!isDone} 
        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
            !isDone 
            ? "bg-slate-800 text-slate-400 border border-slate-700/50 opacity-40 cursor-not-allowed" // 💡 DESAIN SAAT DISABLED
            : "bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-transparent cursor-pointer" // DESAIN AKTIF
        }`}
        >
        Hapus
        </button>
      </div>
    </div>
  );
}