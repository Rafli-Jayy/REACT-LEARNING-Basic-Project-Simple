import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'src', 'pages');

function patchOldFiles() {
  console.log("=== 🔍 MENGECEK FILE LAMA DI FOLDER PAGES ===\n");

  if (!fs.existsSync(targetDir)) {
    console.log("❌ Folder src/pages gak ketemu, bro.");
    return;
  }

  const files = fs.readdirSync(targetDir).filter(file => file.endsWith('.jsx'));

  files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // 1. Cek apakah file sudah punya properti createdAt
    if (code.includes('createdAt:')) {
      console.log(`⏩ Skip: ${file} (Sudah punya tanggal)`);
      return;
    }

    // 2. Ambil tanggal lahir file dari Operating System (OS)
    const stats = fs.statSync(filePath);
    const birthTime = stats.birthtime.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    // 3. Inject ke dalam objek meta yang sudah ada
    if (code.includes('export const meta = {')) {
      // Cari posisi 'meta = {' dan sisipkan createdAt di bawahnya
      const updatedCode = code.replace(
        'export const meta = {',
        `export const meta = {\n  createdAt: "${birthTime}",`
      );

      fs.writeFileSync(filePath, updatedCode, 'utf8');
      console.log(`✅ Patched: ${file} -> Ditambahkan tanggal lahir asli OS: (${birthTime})`);
    } else {
      console.log(`⚠️ Warning: ${file} gak punya objek 'export const meta', diskip.`);
    }
  });

  console.log("\n🎉 Proses sinkronisasi file lama selesai!");
}

patchOldFiles();