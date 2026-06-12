import { useState, useEffect } from "react";
import { Trash2, SquarePen } from "lucide-react";

export const meta = {
  title: "Student Manager",
  description: "Belajar Manage Data",
  level: "Medium",
  icon: "📄",
  slug: "student-manager",
  createdAt: "11/6/2026, 12.15.44"
};


export default function StudentManager(){

  const [daftarSiswa, setDaftarSiswa] = useState(() => {
    const dataLokal = localStorage.getItem("daftarSiswa");
    return dataLokal ? JSON.parse(dataLokal) : [];
  });
  
  const [namaSiswa, setNamaSiswa] = useState("");
  const [error, setError] = useState("");
  const [diEdit, setDiEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("daftarSiswa", JSON.stringify(daftarSiswa));
  }, [daftarSiswa]);

  const checkValidation = (nama) => {
    const regexHanyaHuruf = /^[a-zA-Z\s]*$/;
    const error = [];

    if (nama.trim().length <= 4) {
      error.push("harus lebih dari 4 karakter");
    }

    if(nama.length > 30){
      error.push("maksimal 30 karakter")
    }
    if (!regexHanyaHuruf.test(nama)) {
      error.push("tidak boleh mengandung angka atau simbol");
    }

    return error.join(" dan ");
  }

  const handleChange = (e) => {
    const value = e.target.value;

    const namaKapital = value.replace(/\b\w/g, (char) => char.toUpperCase());

    setNamaSiswa(namaKapital);

    const err = checkValidation(namaKapital);
    setError(err);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const err = checkValidation(namaSiswa);
    if (err || namaSiswa.trim().length === 0) return;

    if (diEdit) {
 
      const listDiupdate = daftarSiswa.map((siswa) =>
        siswa.id === diEdit.id ? { ...siswa, nama: namaSiswa.trim() } : siswa
      );
      setDaftarSiswa(listDiupdate);
      setDiEdit(null); 
    } else {

      const siswaBaru = {
        id: Date.now(),
        nama: namaSiswa.trim()
      };
      setDaftarSiswa([...daftarSiswa, siswaBaru]);
    }


    setNamaSiswa("");
    setError("");
  };

  const handleHapus = (id) => {
    const newList = daftarSiswa.filter((siswa) => siswa.id !== id );

    setDaftarSiswa(newList);
  }

  const handleEdit = (siswa) => {
    setDiEdit(siswa);
    setNamaSiswa(siswa.nama);
    setError("");
  }
  
  return (

  <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6">

    <div className="h-auto w-full max-w-2xl bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mx-auto border border-slate-800 backdrop-blur-md flex flex-col gap-8">
      

      <div className="border-b border-slate-800/60 pb-5">
        <h1 className="text-2xl font-extrabold text-white tracking-tight bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text">
          Student Manager
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Management data siswa.
        </p>
      </div>


      <div className="flex flex-col gap-2 w-full bg-slate-800/10 p-5 rounded-xl border border-slate-800/40">
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-1">
            Nama Lengkap
          </label>
          <input 
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 font-medium text-sm transition-all duration-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-600"
            type="text"
            placeholder="Masukkan nama lengkap siswa..."
            value={namaSiswa}
            onChange={handleChange}
            spellCheck="false"
          />
          <span className="text-xs text-slate-500 ml-1">
            {error ? `* ${error}` : `* Harus lebih dari 4 karakter dan maksimal 30 karakter`}
          </span>
          
          <button disabled={checkValidation(namaSiswa).length > 0 || namaSiswa.trim().length === 0} className="mt-4 w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all duration-200 text-sm tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            {diEdit ? "Simpan Perubahan" : "Tambah Siswa"}
          </button>
        </form>
        {diEdit && (
          <button
            type="button"
            onClick={() => {
              setDiEdit(null);
              setNamaSiswa("");
              setError("");
            }}
            className="mt-2 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 font-medium rounded-xl text-xs transition-all duration-200"
          >
            Batal Edit
          </button>
        )}
      </div>
      

      <div className="w-full min-h-24 h-auto bg-slate-800/40 px-5 pb-5 pt-1 rounded-xl border border-slate-700/40 flex flex-col gap-3 backdrop-blur-sm">
        

        <div className="mt-4 mb-2 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h1 className="text-xs font-bold text-slate-400 tracking-widest uppercase">
              Daftar Nama
            </h1>
          </div>
          <span className="text-xs text-slate-500 font-medium bg-slate-900/40 px-2.5 py-0.5 rounded-full border border-slate-700/30">
            {daftarSiswa.length} Siswa
          </span>
        </div>

        {daftarSiswa.map((siswa, idx) => (
          <div key={idx} className="group text-sm font-medium tracking-wide text-slate-300 bg-slate-700/30 hover:bg-slate-700/60 hover:text-white px-5 py-3 rounded-lg flex justify-between items-center transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-slate-600/40 shadow-sm hover:shadow-md">
            <h1 className="truncate pr-4 font-normal transition-colors duration-300 group-hover:text-white">
              {siswa.nama}
            </h1>
            <div className="flex gap-1.5 items-center h-7">
              <button onClick={() => handleEdit(siswa)} className="p-1.5 rounded-md hover:bg-emerald-500/10 opacity-0 translate-x-3 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0" title="Edit">
                <SquarePen color="#10b981" size={18} />
              </button>
              <button onClick={() => handleHapus(siswa.id)} className="p-1.5 rounded-md hover:bg-rose-500/10 opacity-0 translate-x-3 transition-all duration-300 ease-in-out delay-75 group-hover:opacity-100 group-hover:translate-x-0" title="Hapus">
                <Trash2 color="#f43f5e" size={18} />
              </button>
            </div>
          </div>
        ))}
        {daftarSiswa.length <= 0 && (
          <div className="w-full h-15 flex justify-center items-center bg-slate-700/30 rounded-lg">
            <h2 className="text-xs font-medium text-slate-500">Tidak ada data siswa</h2>
          </div>
        )}

      </div>
    </div>
  </div>


  );
}
