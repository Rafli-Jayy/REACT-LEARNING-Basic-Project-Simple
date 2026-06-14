import { useState } from "react";

export function useTodo() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [kategori, setKategori] = useState("Kerja");
    const [filter, setFilter] = useState("Semua");
    const [error, setError] = useState(""); 

    const handleChange = (e) => {
        setInput(e.target.value);
        if (error) setError("");
    };


    const checkValidation = (nama) => {
        const regexHanyaHuruf = /^[a-zA-Z\s]*$/;
        
        if (nama.trim().length <= 4) {
            return "Tugas harus lebih dari 4 karakter!";
        }
        if (nama.length > 30) {
            return "Tugas maksimal 30 karakter!";
        }
        if (!regexHanyaHuruf.test(nama)) {
            return "Tugas tidak boleh mengandung angka atau simbol!";
        }
        return ""; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

      
        const pesanError = checkValidation(input);
        if (pesanError) {
            setError(pesanError); 
            return;
        }

        const listData = {
            id: Date.now(),
            judul: input,
            kategori: kategori,
            isDone: false
        };

        setList([...list, listData]);
        setInput(""); 
        setError(""); 
    };

    const handleHapus = (id) => {
        const newList = list.filter((task) => task.id !== id);
        setList(newList);
    };

    const handleKategoriChange = (e) => {
        setKategori(e.target.value);
    };

    const handleFilter = (filtering) => {
        setFilter(filtering);
    };

    const handleDone = (id) => {
        const newList = list.map((item) => {
            if (item.id === id) {
                return { ...item, isDone: !item.isDone };
            }
            return item;
        });
        setList(newList);
    };

    const todoFilter = list.filter((item) => {
        if (filter === "Semua") return true;
        return item.kategori === filter;
    });

    return {
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
    };
}