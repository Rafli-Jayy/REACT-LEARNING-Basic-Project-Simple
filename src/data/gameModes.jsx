import { FaBrain, FaClock, FaBolt, FaSkull, FaFire, FaEye } from 'react-icons/fa';

export const gameModes = [
    {
      id: 'classic',
      title: 'Classic Mode',
      icon: <FaBrain className="text-emerald-400 text-3xl" />,
      difficulty: 'Easy',
      diffColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      stats: { timer: 'Tidak ada batas', lives: '3 Nyawa' },
      gameplay: ['Cari semua pasangan kartu', 'Salah → nyawa berkurang', 'Tidak dikejar waktu'],
      footer: 'Cocok buat santai dan pemanasan.',
      cardBg: 'from-emerald-500/10 via-slate-900/40 to-slate-900 border-slate-800 hover:border-emerald-500/30'
    },
    {
      id: 'time-attack',
      title: 'Time Attack Mode',
      icon: <FaClock className="text-amber-400 text-3xl" />,
      difficulty: 'Medium',
      diffColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      stats: { timer: '60 Detik', lives: '3 Nyawa' },
      gameplay: ['Waktu terus turun (countdown)', 'Cari pasangan sebanyak mungkin', 'Waktu habis = Kalah'],
      footer: 'Fokus pada kecepatan + keakuratan.',
      cardBg: 'from-amber-500/10 via-slate-900/40 to-slate-900 border-slate-800 hover:border-amber-500/30'
    },
    {
      id: 'speed-run',
      title: 'Speed Run Mode',
      icon: <FaBolt className="text-cyan-400 text-3xl" />,
      difficulty: 'Medium',
      diffColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      stats: { timer: 'Mulai dari 0 (Naik)', lives: 'Unlimited' },
      gameplay: ['Tidak ada countdown', 'Timer menghitung dari awal', 'Simpan dan kejar Best Time kamu'],
      footer: 'Contoh rekor terbaik → Best: 00:35.',
      cardBg: 'from-cyan-500/10 via-slate-900/40 to-slate-900 border-slate-800 hover:border-cyan-500/30'
    },
    {
      id: 'survival',
      title: 'Survival Mode',
      icon: <FaSkull className="text-rose-500 text-3xl" />,
      difficulty: 'Hard',
      diffColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      stats: { timer: 'Ada (Standar)', lives: '1 Nyawa 💔' },
      gameplay: ['Salah sekali langsung kalah!', 'Harus benar-benar ingat posisi kartu', 'Menguji kefokusan tingkat tinggi'],
      footer: 'Jangan sampai panik sendiri pas nyari emoji!',
      cardBg: 'from-rose-500/10 via-slate-900/40 to-slate-900 border-slate-800 hover:border-rose-500/30'
    },
    {
      id: 'hardcore',
      title: 'Hardcore Mode',
      icon: <FaFire className="text-red-500 text-3xl" />,
      difficulty: 'Insane 💀',
      diffColor: 'bg-red-500/20 text-red-400 border-red-500/40',
      stats: { timer: '30 Detik', lives: '1 Nyawa | Preview 1 Detik' },
      gameplay: ['Kartu cuma terlihat sebentar di awal', 'Waktu sangat sedikit dan brutal', 'Satu kesalahan berakibat fatal'],
      footer: 'Hanya untuk para master memori fotografis.',
      cardBg: 'from-red-950/30 via-slate-900/40 to-slate-900 border-red-900/30 hover:border-red-500/40'
    },
    {
      id: 'memory-challenge',
      title: 'Memory Challenge',
      icon: <FaEye className="text-purple-400 text-3xl" />,
      difficulty: 'Special Track',
      diffColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      stats: { timer: 'Berdasarkan langkah', lives: 'Sesuai Level' },
      gameplay: ['Semua kartu terbuka 3 detik di awal', 'Setelah itu semua kartu tertutup kembali', 'Player murni mengandalkan ingatan awal'],
      footer: 'Fokus penuh pada detik-detik pertama!',
      cardBg: 'from-purple-500/10 via-slate-900/40 to-slate-900 border-slate-800 hover:border-purple-500/30'
    }
  ];