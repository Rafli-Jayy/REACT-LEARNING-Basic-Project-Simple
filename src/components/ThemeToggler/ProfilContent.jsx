import React from 'react';

export default function ProfileContent() {
  return (
    <div className="py-6 flex items-center gap-4">
      {/* Avatar Bulat dengan Gradasi */}
      <div className="h-12 w-12 rounded-full font-bold text-sm flex items-center justify-center text-white
                      bg-gradient-to-tr from-indigo-500 to-purple-500 
                      dark:from-indigo-600 dark:to-purple-600">
        DX
      </div>
      
      {/* Detail Pengguna */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">
            Alex Dev
          </h3>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded
                           bg-emerald-50 border border-emerald-100 text-emerald-700 
                           dark:bg-emerald-500/10 dark:border-transparent dark:text-emerald-400">
            Pro
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          alex.dev@workspace.io
        </p>
      </div>
    </div>
  );
}