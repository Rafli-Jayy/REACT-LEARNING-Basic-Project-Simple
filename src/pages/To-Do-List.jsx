import { useState } from "react";
import {TodoForm} from "../components/todoForm";
import {TodoList} from "../components/todoList";
import { useTodo } from "../hooks/useTodo"


export const meta = {
  title: "To-do-list",
  description: "Melatih problem solving",
  level: "Medium",
  icon: "🧾",
  slug: "to-do-list",
  createdAt: "13/6/2026, 12.03.31"
};

export default function ToDoList(){

  const {
      input,
      list,
      kategori,
      filter,
      error,
      todoFilter,
      handleChange,
      handleKategoriChange,
      handleSubmit,
      handleHapus,
      handleFilter,
      handleDone

    } = useTodo();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6">
      <div className="h-auto w-full max-w-2xl bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mx-auto border border-slate-800 backdrop-blur-md flex flex-col gap-8">
        
        {/* HEADER */}
        <div className="border-b border-slate-800/60 pb-5">
          <h1 className="text-2xl font-extrabold text-white tracking-tight bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text">
            Task Flow
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Kelola tugas harianmu berdasarkan kategori dengan rapi.
          </p>
        </div>

        <TodoForm
          input={input}
          kategori={kategori}
          onKategoriChange={handleKategoriChange}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        
        <TodoList 
          list={todoFilter}
          filter={filter}
          onDelete={handleHapus}
          onTask={handleDone}
          onFilter={handleFilter}
        />

      </div>
    </div>
  );
}
