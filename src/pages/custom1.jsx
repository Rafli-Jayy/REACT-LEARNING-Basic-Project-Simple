import { useState } from "react";
import Student from "../components/studentCard";
import { siswa } from "../data/student";


export const meta = {
  createdAt: "10/6/2026, 12.59.23",
  title: "Custom Component",
  description: "Belajar Component",
  level: "Basic",
  icon: "🧱",
  slug: "custom-component-app",
};


export default function StudentList() {

    const [searchQuery, setSearchQuery] = useState("");

    const filteredSiswa = siswa.filter((item) => 
        item.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col items-center p-6 md:p-12 transition-colors duration-300">
        
        {/* Container Konten Utama agar rapi dan tidak terlalu lebar ke pinggir */}
        <div className="max-w-5xl w-full flex flex-col items-center">
            
            {/* Kolom Pencarian Modern dengan Efek Glow Indigo saat Fokus */}
            <div className="w-full max-w-md mb-8 relative group">
            <input 
                className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-900 text-slate-100 placeholder-slate-500 border border-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-lg shadow-black/40 transition-all duration-200 text-sm tracking-wide" 
                placeholder="Cari nama siswa..." 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                spellCheck="false"
            />
            {/* Ikon Kaca Pembesar (Karakter Unicode) di sisi kiri input */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-base group-focus-within:text-indigo-400 transition-colors">
                🔍
            </span>
            </div>

            {/* Grid Box Daftar Siswa: Diubah ke bg-slate-900 dengan garis border transparan */}
            <div className="h-auto w-full bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {filteredSiswa.length > 0 ? (
                filteredSiswa.map((item, idx) => {
                const { nama, kelas, absen } = item;
                return (
                    /* Pembungkus Komponen Student dengan efek hover membal */
                    <div 
                    key={idx}
                    className="hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
                    >
                    <Student 
                        nama={nama} 
                        kelas={kelas} 
                        absen={absen} 
                        idx={idx + 1}
                    />
                    </div>
                );
                })
            ) : (
                /* Tampilan Keren jika Pencarian Kosong / Tidak Ditemukan */
                <div className="col-span-full flex flex-col items-center justify-center text-center text-slate-500 py-16 px-4 border border-dashed border-slate-800 rounded-xl bg-slate-950/40">
                <span className="text-4xl mb-3 opacity-60">📭</span>
                <p className="text-sm font-medium text-slate-400">
                    Siswa dengan nama "<span className="text-indigo-400 font-semibold">{searchQuery}</span>" tidak ditemukan.
                </p>
                <p className="text-xs text-slate-600 mt-1">
                    Periksa kembali ejaan nama yang Anda ketikkan.
                </p>
                </div>
            )}
            </div>

        </div>
        </div>
    )
}
