export default function SearchBar({value, onChange, onSubmit}){
    return (
        <form onSubmit={onSubmit} className="flex gap-3">
        <div className="relative flex-1">
            <input
            type="text"
            placeholder="Cari nama kota... (misal: Tokyo, Jakarta)"
            value={value}
            onChange={onChange}
            className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 pl-4 pr-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
            />
        </div>
        <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 text-sm shadow-lg shadow-blue-500/20"
        >
            Cari
        </button>
        </form>
    )
}