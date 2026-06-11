# ⚡ React Dynamic PlayGround & Learning Automation Kit

Selamat datang di ruang eksperimen React JS! Proyek ini dirancang khusus sebagai *automated playground* untuk membuat, melatih, dan mengelola komponen proyek simpel React dengan instan tanpa pusing memikirkan urusan pembuatan berkas dan jalur *routing* manual.

---

## 🚀 Fitur Unggulan & Otomatisasi

Proyek ini dilengkapi dengan skrip otomatisasi terminal internal untuk mempercepat alur kerja Anda:

*   **⚡ Instant Page Generator (`npm run make-page`)**  
    Cukup jalankan satu perintah ini, sistem CLI akan memandu Anda mengisi nama proyek, deskripsi, level, dan ikon. File halaman `.jsx` baru akan otomatis terbuat di dalam folder `src/pages/` dan langsung terintegrasi ke dalam sistem *auto-routing* halaman utama!
*   **📅 Metadata Auto Patcher (`npm run patch-meta`)**  
    Skrip utilitas cadangan untuk memindai file halaman dan menyuntikkan tanggal serta waktu asli pembuatan file secara akurat ke dalam objek metadata proyek.
*   **🛠️ Dynamic Auto Routing Engine**  
    Menggunakan teknologi `import.meta.glob` untuk membaca seluruh isi folder `src/pages/` secara *real-time*, mengurutkannya berdasarkan tanggal pembuatan, dan merendernya otomatis di dasbor utama.
*   **🎨 Premium Futuristic Dark Mode UI**  
    Dasbor utama dan komponen dasar sudah dibalut dengan palet warna modern `slate-950`, efek pendaran cahaya neon, serta interaksi mikro yang memanjakan mata.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun di atas ekosistem teknologi modern dengan performa tinggi:

*   **Framework Utama:** React JS
*   **Styling Engine:** Tailwind CSS v4 (Modern & Super Ringan)
*   **Animation Engine:** Framer Motion (Untuk efek transisi *spring* & *staggered*)
*   **Ikonografi:** React Icons & Material Symbols

---

## 📂 Struktur Folder Proyek

```text
├── src/
│   ├── pages/             # Tempat berkas proyek latihan Anda disimpan (Counter, Lampu, dll)
│   ├── components/        # Komponen modular yang bisa digunakan kembali (Kartu Siswa, dll)
│   ├── App.jsx            # Mesin routing utama dan pembaca halaman otomatis (meta.glob)
│   ├── index.css          # Pusat kustomisasi animasi CSS dan konfigurasi tema Tailwind
│   └── main.jsx
├── package.json           # Berisi konfigurasi skrip otomatisasi internal
└── README.md
```

---

## 💻 Cara Memulai (Panduan Penggunaan)

Ikuti langkah-langkah di bawah ini untuk langsung menjalankan proyek atau membuat latihan baru:

### 1. Persiapan Awal (Setup)
Clone atau unduh repositori ini, lalu masuk ke terminal proyek dan pasang seluruh dependensi:
```bash
npm install
```

### 2. Jalankan Server Lokal
Nyalakan server pengembangan lokal untuk melihat dasbor utama aplikasi:
```bash
npm run dev
```

### 3. Membuat Proyek Latihan Baru (Otomatis)
Jika Anda ingin membuat latihan baru (misalnya aplikasi konter, daftar kalkulator, atau to-do list), buka terminal baru dan ketik:
```bash
npm run make-page
```
*Ikuti instruksi pengisian nama proyek di terminal, dan lihat folder `src/pages/` Anda! Berkas baru Anda langsung siap dikoding.*

### 4. Sinkronisasi Tanggal Pembuatan
Jika Anda ingin memperbarui atau menambal informasi tanggal riwayat pembuatan dokumen secara massal:
```bash
npm run patch-meta
```

---

## 📝 Catatan Eksperimen yang Sudah Tersedia
Di dalam repositori ini, sudah terdapat beberapa cetak biru latihan siap pakai sebagai bahan belajar:
1.  **Counter App Premium:** Aplikasi hitung digital dengan efek *spring motion* dan pendaran neon hijau.
2.  **Lampu Toggle App:** Simulasi sakelar lampu interaktif dengan efek perubahan atmosfer latar belakang *radial-gradient*.
3.  **Student Management Dashboard:** Filter pencarian siswa *real-time* dengan penataan kartu ID futuristik.

Dibuat dengan 💻 untuk para penjelajah React JS. Selamat Bereksperimen, Bro!
