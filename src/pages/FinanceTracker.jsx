import React, { useState } from 'react';
import Header from '../components/FinanceTracker/header';
import SummaryCards from "../components/FinanceTracker/SummaryCard"
import TransactionForm from "../components/FinanceTracker/TransactionForm"
import TransactionList from '../components/FinanceTracker/TransactionList';
import useFinance from '../hooks/useFinance';

export const meta = {
  title: "Finance Tracker",
  description: "Belajar management data",
  level: "Medium",
  icon: "🪙",
  slug: "finance-tracker",
  createdAt: "17/6/2026, 13.14.11"
};

export default function FinanceTracker() {

  const {
    transaction,
    tipe,
    nominal,
    desc,
    kategori,
    message,
    totalPengeluaran,
    totalPemasukan,
    totalSaldo,
    changeTipe,
    daftarKategori,
    transactionFilter,
    filter,
    handleFilter,
    setKategori,
    changeDesc,
    changeNominal,
    handleTipeChange,
    handleSubmit,
    handleDelete
  } = useFinance();

  const [transactions, setTransactions] = useState([
    { id: 1, deskripsi: 'Gaji Freelance', jumlah: 5000000, tipe: 'pemasukan', kategori: 'Kerja' },
    { id: 2, deskripsi: 'Beli Kopi Kartika', jumlah: 35000, tipe: 'pengeluaran', kategori: 'Makanan' },
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8 selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <Header 
          totalSaldo={totalSaldo}
        />
        
        <SummaryCards 
          totalSaldo={totalSaldo}
          totalPemasukan={totalPemasukan}
          totalPengeluaran={totalPengeluaran}
        />

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TransactionForm 
            tipe={tipe}
            setTipe={handleTipeChange}
            daftarKategori={daftarKategori}
            setKategori={setKategori}
            kategori={kategori}
            nominal={nominal}
            nominalOnChange={changeNominal}
            desc={desc}
            descOnChange={changeDesc}
            onSubmit={handleSubmit}
            msg={message}
            
          />
          
          <TransactionList 
          transactions={transactionFilter}
          onDelete={handleDelete}
          onFilter={handleFilter}
          filter={filter}
           />
        </main>
        
      </div>
    </div>
  );
}