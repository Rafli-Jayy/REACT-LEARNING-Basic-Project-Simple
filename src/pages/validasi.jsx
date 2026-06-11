import { useState } from "react";

export const meta = {
  createdAt: "10/6/2026, 19.46.32",
  title: "Validation Input",
  description: "Belajar Validasi Input",
  level: "Basic",
  icon: "📑",
  slug: "validasi-input-app",
};

export default function ValidasiInput() {   

    const [value, setValue] = useState("");

    const checkVal = (value) => {
        if (value.length <= 0) return "Nama wajib diisi"
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center flex-col p-4 select-none">

            <div className="h-auto w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-10 mx-auto flex flex-col gap-8 border border-slate-800 backdrop-blur-md">
                

                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text">
                        Validasi Input
                    </h1>
                    <p className="text-sm text-slate-400">
                        Masukkan data Anda dengan benar untuk melanjutkan proses.
                    </p>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">
                        Nama Lengkap
                    </label>
                    <input 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="Contoh: John Doe"
                        className="w-full px-5 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 font-medium text-sm transition-all duration-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-600"
                    />
                    <span className="text-xs text-slate-500 ml-1 transition-all duration-200">
                        *Total karakter {value.length} <br />
                        {(value.length > 10) && "*Nama terlalu panjang"}
                    </span>
                </div>

                <button onClick={checkVal(value)} className="w-full py-3.5 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 text-sm tracking-wide">
                    Verifikasi Data
                </button>

            </div>
        </div>
    );
}


