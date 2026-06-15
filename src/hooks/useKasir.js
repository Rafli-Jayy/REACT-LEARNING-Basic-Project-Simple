import { useState } from "react";

export function useKasir(){
    const [keranjang, setKeranjang] = useState([]);
    const [nominal, setNominal] = useState("");
    const [pesan, setPesan] = useState("");
    
    const tambahKeranjang = (produk) => {
        setPesan("");
        const findProduct = keranjang.find((item) => item.id === produk.id);
        if(findProduct){
            const keranjangBaru = keranjang.map((item) => 
                item.id === produk.id ? {...item, qty: item.qty + 1} : item
            );

            setKeranjang(keranjangBaru);
        } else {
            setKeranjang([...keranjang, {...produk, qty: 1}])
        }
    }

    const hapusProduk = (id) => {
        const dataHapus = keranjang.filter((item) => item.id !== id);
        setKeranjang(dataHapus);
    }


    const totalHarga = keranjang.reduce((total, {harga, qty}) => {
        return total + (harga * qty);
    }, 0);

    const qtyEdit = (id, tipe) => {
        const targetProduk = keranjang.find((item) => item.id === id);
        if(!targetProduk) return;

        if(tipe === "delete" && targetProduk.qty === 1){
            hapusProduk(id);
            return;
        }

        const keranjangBaru = keranjang.map((item) => {
            if(item.id === id){
                return {...item, qty: tipe === "add" ? item.qty + 1 : item.qty - 1}
            }

            return item;
        });

        setKeranjang(keranjangBaru);
    }

    const onChangeNominal = (e) => {
        setNominal(e.target.value);
        setPesan("");
    }


    const hitungKembalian = (totalBelanja, uangBayar) => {
        const uangMurni = Number(uangBayar); 
        

        if (uangMurni < totalBelanja) return 0;
        
        return uangMurni - totalBelanja;
    };

    const bayarPesanan = (totalHarga, nominal) => {
        if(keranjang.length === 0){
            setPesan("Anda harus memesan terlebih dahulu!");
            return;
        }

        const uangBayar = Number(nominal);
        if (uangBayar >= totalHarga) {
            setKeranjang([]);
            setNominal("");
            setPesan(`Pembayaran berhasil! Terima kasih. Kembalian anda ${hitungKembalian(totalHarga, nominal)}`);

            setTimeout(() => {
                setPesan("");
            }, 20000);

        } else {
            setPesan("Uang anda tidak cukup!")
        }
    }

    const reset = () => {
        setKeranjang([]);
        setNominal("");
        setPesan("");
    }

    return {
        keranjang,
        totalHarga,
        nominal,
        pesan,
        hitungKembalian,
        onChangeNominal,
        tambahKeranjang,
        qtyEdit,
        hapusProduk,
        bayarPesanan,
        reset
    }

}