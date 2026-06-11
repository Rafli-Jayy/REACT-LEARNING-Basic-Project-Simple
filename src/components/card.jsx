export default function Card({ children, namaClass}) {
    return (
        // Ditambahkan bg-slate-800 ke dalam Card agar warna ikut melengkung
        <div className={`w-auto h-auto p-8 rounded-xl overflow-hidden ${namaClass}`}>
            {children}
        </div>
    )
}
