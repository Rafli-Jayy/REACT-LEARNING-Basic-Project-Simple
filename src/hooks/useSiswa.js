import { useState, useEffect } from "react";
import { checkValidation, capitalizeWords } from "../utils/inputValidation";

export function useSiswa() {
  // 1. State Utama
  const [daftarSiswa, setDaftarSiswa] = useState(() => {
    const dataLokal = localStorage.getItem("daftarSiswa");
    return dataLokal ? JSON.parse(dataLokal) : [];
  });
  const [namaSiswa, setNamaSiswa] = useState("");
  const [error, setError] = useState("");
  const [diEdit, setDiEdit] = useState(null);

  // 2. Sync ke LocalStorage
  useEffect(() => {
    localStorage.setItem("daftarSiswa", JSON.stringify(daftarSiswa));
  }, [daftarSiswa]);

  // 3. Fungsi Handler Input
  const handleChange = (e) => {
    const value = e.target.value;
    const namaKapital = capitalizeWords(value);
    setNamaSiswa(namaKapital);

    // Karena checkValidation balikin array, kita .join() di sini khusus buat tampilin teks ke UI
    const errArray = checkValidation(namaKapital);
    setError(errArray.join(" dan "));
  };

  // 4. Fungsi Submit (Tambah / Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    const errArray = checkValidation(namaSiswa);
    if (errArray.length > 0 || namaSiswa.trim().length === 0) return;

    if (diEdit) {
      const listDiupdate = daftarSiswa.map((siswa) =>
        siswa.id === diEdit.id ? { ...siswa, nama: namaSiswa.trim() } : siswa
      );
      setDaftarSiswa(listDiupdate);
      setDiEdit(null);
    } else {
      const siswaBaru = {
        id: Date.now(),
        nama: namaSiswa.trim(),
      };
      setDaftarSiswa([...daftarSiswa, siswaBaru]);
    }

    setNamaSiswa("");
    setError("");
  };

  // 5. Fungsi Hapus
  const handleHapus = (id) => {
    const newList = daftarSiswa.filter((siswa) => siswa.id !== id);
    setDaftarSiswa(newList);
    // Jika lagi ngedit terus dihaspus, batalkan mode edit
    if (diEdit && diEdit.id === id) {
      setDiEdit(null);
      setNamaSiswa("");
    }
  };

  // 6. Fungsi Edit
  const handleEdit = (siswa) => {
    setDiEdit(siswa);
    setNamaSiswa(siswa.nama);
    setError("");
  };

  // Kita return semua hal yang dibutuhin sama UI
  return {
    daftarSiswa,
    namaSiswa,
    error,
    diEdit,
    handleChange,
    handleSubmit,
    handleHapus,
    handleEdit,
  };
}