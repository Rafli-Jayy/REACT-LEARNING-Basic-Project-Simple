export function KanbanColumn({ title, count, dotColor, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">{title}</h2>
        </div>
        <span className="text-xs font-bold px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md">{count}</span>
      </div>
      
      <div className="flex flex-col gap-3 min-h-100">
        {children}
      </div>
    </div>
  );
}