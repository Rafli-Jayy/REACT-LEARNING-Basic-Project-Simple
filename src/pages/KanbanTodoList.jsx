
import { CardTask } from "../components/KanbanApp/CardTask";
import { KanbanColumn } from "../components/KanbanApp/KanbanColumn";
import { ModalInput } from "../components/KanbanApp/ModalInput";
import useKanban from "../hooks/useKanban";

export const meta = {
  title: "Kanban Todo List",
  description: "Belajar object",
  level: "Medium",
  icon: "📃",
  slug: "kanban-todo-list",
  createdAt: "15/6/2026, 12.14.53"
};

export default function KanbanApp() {

  const {
        tasks,
        statusModal,
        priority,
        judul,
        desc,
        error,
        buttonKanan,
        buttonKiri,
        handleHapus,
        setModal,
        handleSubmit,
        handleChangePriority,
        handleChangeDesc,
        handleChangeJudul,
  } = useKanban()

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const ongoingTasks = tasks.filter((t) => t.status === "ongoing");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* ================= HEADER APPLICATION ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              📋 KANBANFLOW <span className="text-xs font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md">v1.0</span>
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">Pantau alur kerja tokomu dengan visual manajemen yang rapi.</p>
          </div>
          <button 
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-950/30 active:scale-[0.98] transition-all duration-200 cursor-pointer self-start sm:self-center flex items-center gap-1.5"
            onClick={setModal}
          >
            <span>➕</span> Tambah Tugas
          </button>
        </div>

        {/* ================= MAIN KANBAN BOARD ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-2">
          
          {/* ----- 1. KOLOM TO DO ----- */}
          <KanbanColumn title="To Do" count={todoTasks.length} dotColor="bg-slate-400">
            {todoTasks.length > 0 ? (
              todoTasks.map((item) => (
                <CardTask 
                  key={item.id} 
                  title={item.title} 
                  desc={item.desc} 
                  priority={item.priority}
                  status={item.status}
                  id={item.id}
                  onHapus={handleHapus}
                  onRightClick={() => buttonKanan(item.id, item.status)}
                  onLeftClick={() => buttonKiri(item.id, item.status)}
                  isFirst 
                />
              ))
            ) : (
              /* 🔥 Muncul kalau kolom To Do kosong */
              <div className="flex flex-col items-center justify-center py-10 px-4 border-2 border-dashed border-slate-800/60 rounded-2xl text-center text-slate-500">
                <span className="text-xl mb-1.5 opacity-70">📭</span>
                <p className="text-[11px] font-medium tracking-wide">Belum ada rencana tugas</p>
              </div>
            )}
          </KanbanColumn>

          {/* ----- 2. KOLOM IN PROGRESS ----- */}
          <KanbanColumn title="In Progress" count={ongoingTasks.length} dotColor="bg-amber-400 animate-pulse">
            {ongoingTasks.length > 0 ? (
              ongoingTasks.map((item) => (
                <CardTask 
                  key={item.id} 
                  title={item.title} 
                  desc={item.desc}
                  status={item.status}
                  priority={item.priority}
                  id={item.id}
                  onHapus={handleHapus}
                  onRightClick={() => buttonKanan(item.id, item.status)}
                  onLeftClick={() => buttonKiri(item.id, item.status)}
                />
              ))
            ) : (
              /* 🔥 Muncul kalau kolom In Progress kosong */
              <div className="flex flex-col items-center justify-center py-10 px-4 border-2 border-dashed border-slate-800/60 rounded-2xl text-center text-slate-500">
                <span className="text-xl mb-1.5 opacity-70">⚡</span>
                <p className="text-[11px] font-medium tracking-wide">Tidak ada tugas yang dikerjakan</p>
              </div>
            )}
          </KanbanColumn>

          {/* ----- 3. KOLOM DONE ----- */}
          <KanbanColumn title="Done" count={doneTasks.length} dotColor="bg-emerald-400">
            {doneTasks.length > 0 ? (
              doneTasks.map((item) => (
                <CardTask 
                  key={item.id} 
                  title={item.title} 
                  desc={item.desc} 
                  status={item.status}
                  priority={item.priority}
                  id={item.id}
                  onHapus={handleHapus}
                  onRightClick={() => buttonKanan(item.id, item.status)}
                  onLeftClick={() => buttonKiri(item.id, item.status)}
                  isLast 
                />
              ))
            ) : (
              /* 🔥 Muncul kalau kolom Done kosong */
              <div className="flex flex-col items-center justify-center py-10 px-4 border-2 border-dashed border-slate-800/60 rounded-2xl text-center text-slate-500">
                <span className="text-xl mb-1.5 opacity-70">🎉</span>
                <p className="text-[11px] font-medium tracking-wide">Belum ada tugas yang selesai</p>
              </div>
            )}
          </KanbanColumn>

        </div>
      </div>

      {statusModal && (
        <ModalInput 
          priority={priority}
          setModal={setModal}
          onPriority={handleChangePriority}
          onSubmit={handleSubmit}
          onJudul={handleChangeJudul}
          onDesc={handleChangeDesc}
          judul={judul}
          desc={desc}
          error={error}
        />
      )}

    </div>
  );
}
