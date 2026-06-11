import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Karena pake ES Modules, kita harus definisikan __dirname manual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log("=== 🛠️ PAGE CREATOR WITH META AUTOMATION ===\n");

  const title = await askQuestion('Masukkan Judul (Title): ') || 'App Baru';
  const description = await askQuestion('Masukkan Deskripsi: ') || 'Belajar React';
  const level = await askQuestion('Masukkan Level (Basic/Medium/Advanced): ') || 'Basic';
  const icon = await askQuestion('Masukkan Emoji Ikon: ') || '🚀';
  
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const componentName = title.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, '');

  const targetDir = path.join(__dirname, 'src', 'pages');
  const filePath = path.join(targetDir, `${componentName}.jsx`);

  if (!fs.existsSync(targetDir)){
      fs.mkdirSync(targetDir, { recursive: true });
  }

  if (fs.existsSync(filePath)) {
    console.error(`\n❌ Gagal: File ${componentName}.jsx udah ada, bro!`);
    rl.close();
    return;
  }

  const timestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

  const template = `import { useState } from "react";

export const meta = {
  title: "${title}",
  description: "${description}",
  level: "${level}",
  icon: "${icon}",
  slug: "${slug}",
  createdAt: "${timestamp}"
};

export default function ${componentName}(){

  return (
    <div className="min-h-screen bg-slate-800 text-slate-700 flex items-center justify-center flex-col">
      <div className="h-auto w-xl bg-white rounded-xl shadow-sm p-14 mx-auto flex items-center flex-col gap-12">

      </div>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, template, 'utf8');
  console.log(`\n✅ Mantap! File src/pages/${componentName}.jsx berhasil dibuat.`);
  rl.close();
}

main();