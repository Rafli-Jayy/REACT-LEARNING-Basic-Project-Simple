import React, { useState } from 'react';

const daftarKategori = {
    pengeluaran: [
    { nama: 'Makanan', emoji: '🍔' },
    { nama: 'Travel', emoji: '🚗' },
    { nama: 'Hiburan', emoji: '🎬' },
    { nama: 'Belanja', emoji: '🛍️' },
    { nama: 'Tagihan', emoji: '💡' },
    { nama: 'Lainnya', emoji: '🌐' },
    ],
    pemasukan: [
    { nama: 'Gaji', emoji: '💰' },
    { nama: 'Freelance', emoji: '💻' },
    { nama: 'Investasi', emoji: '📈' },
    { nama: 'Bonus', emoji: '🎁' },
    { nama: 'Lainnya', emoji: '🌐' },
    ]
};

export default function useFinance(){
    const [transaction, setTransaction] = useState([]);
    const [tipe, setTipe] = useState("pengeluaran");
    const [nominal, setNominal] = useState("");
    const [desc, setDesc] = useState("");
    const [filter, setFilter] = useState("semua");
    const [kategori, setKategori] = useState(daftarKategori.pengeluaran[0].nama);
    const [message, setMessage] = useState({ 
        deskripsi: '', 
        jumlah: '' ,
        done: ''
    });

    const handleFilter = (filter) => {
        setFilter(filter);
    }

    const transactionFilter = transaction.filter((item) => {
        if(filter === "semua") return true;
        return item.tipe === filter;
    });

    const changeDesc = (e) => {
        setDesc(e.target.value);
        
        setMessage(prev => ({
            ...prev, 
            deskripsi: "" 
        }));
    }

    const changeNominal = (e) => {
        const nilaiBersih = e.target.value.replace(/\D/g, "");
        const nilaiDiformat = nilaiBersih.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setNominal(nilaiDiformat);
        setMessage(prev => ({
            ...prev, 
            jumlah: "" 
        }));
    }

    const handleTipeChange = (tipeBaru) => {
        setTipe(tipeBaru);
        setKategori(daftarKategori[tipeBaru][0].nama);
    };

    const handleDelete = (id) => {
        const newData = transaction.filter((item) => item.id !== id);
        setTransaction(newData);
    }


    const totalPengeluaran = transaction.reduce((total, { tipe, jumlah }) => {
        return tipe === "pengeluaran" ? total + jumlah : total;
    }, 0);

    const totalPemasukan = transaction.reduce((total, {tipe, jumlah}) => {
        return tipe === "pemasukan" ? total + jumlah : total;
    }, 0)

    const totalSaldo = totalPemasukan - totalPengeluaran;


    const handleSubmit = (e) => {
        e.preventDefault();

        let currentMsg = { deskripsi: '', jumlah: '', done: '' };
        let isValid = true; 

        if (!desc.trim()) {
            currentMsg.deskripsi = 'Deskripsi tidak boleh kosong, bro!';
            isValid = false;
        }

        if (!nominal || Number(nominal) <= 0) {
            currentMsg.jumlah = 'Nominal harus lebih dari Rp 0!';
            isValid = false;
        }

        if (isValid) {
            const newTransaction = {
                id: Date.now(),
                deskripsi: desc,
                jumlah: Number(nominal.replace(/\./g, "")),
                tipe: tipe,
                kategori: kategori,
                tanggal: new Date().toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })
            };
            
            setTransaction([...transaction, newTransaction]);
            
            currentMsg.done = "Anda berhasil menambahkan riwayat transaksi!";
            
            setTimeout(() => {
                setMessage(prev => ({ ...prev, done: "" }));
            }, 10000);
            
            setDesc("");
            setNominal("");
            setKategori(daftarKategori[tipe][0].nama); 
        }

        setMessage(currentMsg); 
    };

    return {
        transaction,
        tipe,
        nominal,
        desc,
        kategori,
        message,
        totalPengeluaran,
        totalPemasukan,
        totalSaldo,
        daftarKategori,
        transactionFilter,
        filter,
        handleFilter,
        setKategori,
        handleTipeChange,
        changeDesc,
        changeNominal,
        handleSubmit,
        handleDelete
    }
}