import TaskTodo from "../components/taskTodo"

export function TodoList ({ list, filter, onDelete, onTask, onFilter}) {
    return (
        <div className="w-full min-h-24 h-auto bg-slate-800/40 px-5 pb-5 pt-4 rounded-xl border border-slate-700/40 flex flex-col gap-4 backdrop-blur-sm">
            
            {/* AREA TOMBOL FILTER DENGAN CONDITIONAL DESIGN YANG BENER */}
            <div className="flex gap-2 border-b border-slate-800/60 pb-3 overflow-x-auto">

                {/* Tombol Semua */}
                <button 
                    onClick={() => onFilter("Semua")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                        filter === "Semua" 
                            ? "bg-slate-800 text-emerald-400 border border-slate-700/50" 
                            : "text-slate-400 hover:text-white bg-transparent border border-transparent"
                    }`}
                >
                    ✨ Semua
                </button>
                
                {/* Tombol Kerja */}
                <button 
                    onClick={() => onFilter("Kerja")} // 💡 Kirim string murni tanpa emoji ke otak
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                        filter === "Kerja" // 💡 Cek kecocokan kategori Kerja
                            ? "bg-slate-800 text-emerald-400 border border-slate-700/50" 
                            : "text-slate-400 hover:text-white bg-transparent border border-transparent"
                    }`}
                >
                    💼 Kerja
                </button>

                {/* Tombol Pribadi */}
                <button 
                    onClick={() => onFilter("Pribadi")} 
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                        filter === "Pribadi" // 💡 Cek kecocokan kategori Pribadi
                            ? "bg-slate-800 text-emerald-400 border border-slate-700/50" 
                            : "text-slate-400 hover:text-white bg-transparent border border-transparent"
                    }`}
                >
                    🏠 Pribadi
                </button>

                {/* Tombol Belanja */}
                <button 
                    onClick={() => onFilter("Belanja")} 
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                        filter === "Belanja" // 💡 Cek kecocokan kategori Belanja
                            ? "bg-slate-800 text-emerald-400 border border-slate-700/50" 
                            : "text-slate-400 hover:text-white bg-transparent border border-transparent"
                    }`}
                >
                    🛒 Belanja
                </button>
            </div>

            {/* DAFTAR DATA TODO MAP */}
            <div className="flex flex-col gap-3">
                {list.map((item) => (
                    <TaskTodo 
                        key={item.id}
                        id={item.id}
                        kategori={item.kategori}
                        judul={item.judul}
                        isDone={item.isDone}
                        onTask={onTask}
                        onDelete={onDelete}
                    />
                ))}

                {/* Kondisi Tambahan: Jika list kosong setelah disaring */}
                {list.length === 0 && (
                    <div className="w-full h-20 flex justify-center items-center bg-slate-700/10 rounded-xl border border-dashed border-slate-800">
                        <h2 className="text-xs font-medium text-slate-500">Belum ada tugas di kategori ini</h2>
                    </div>
                )}
            </div>
        </div>
    )
}