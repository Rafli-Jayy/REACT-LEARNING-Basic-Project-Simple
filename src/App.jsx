import { Routes, Route, Link } from "react-router-dom";

const pages = import.meta.glob("./pages/*.jsx", {
  eager: true,
});

const projectList = Object.entries(pages)
  .filter(([_, module]) => module.meta)
  .map(([path, module]) => ({
    component: module.default,
    ...module.meta,
  }))
.sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return new Date(0);
      
      const cleanStr = dateStr.replace(', ', ',');
      const [datePart, timePart] = cleanStr.split(',');
      const [day, month, year] = datePart.split('/');
      
      const pad = (num) => num.toString().padStart(2, '0');
      const formattedDate = `${year}-${pad(month)}-${pad(day)}`;
      const formattedTime = timePart ? timePart.replace(/\./g, ':') : '00:00:00';
      
      return new Date(`${formattedDate}T${formattedTime}`);
    };

    return parseDate(a.createdAt) - parseDate(b.createdAt);
  });

console.log("Hasil Urutan ProjectList:", projectList.map(p => ({ title: p.title, date: p.createdAt })));

  

function Home() {
  return (
    <div className="min-h-screen h-auto bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-5xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Learn React
        </h1>
        <p className="text-slate-400 mt-3">
          Tempat eksperimen dan latihan project React.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projectList.map((project) => (
            <Link
              key={project.slug}
              to={`/${project.slug}`}
              className="
                flex
                flex-col
                justify-between
                bg-slate-900
                border
                border-slate-800/80
                p-6
                rounded-xl
                hover:scale-[1.03]
                hover:border-slate-700
                hover:bg-slate-900/80
                transition-all
                duration-200
                shadow-xl
                group
              "
            >
              {/* Bagian Atas: Ikon, Judul, Deskripsi */}
              <div>
                <div className="text-4xl bg-slate-800/50 w-fit p-3 rounded-lg border border-slate-700/50 group-hover:scale-110 transition-transform duration-200">
                  {project.icon}
                </div>

                <h2 className="text-xl font-bold mt-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>

                <p className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bagian Bawah: Metadata (Level & CreatedAt) */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.level}
                </span>
                
                {/* INI STYLING CREATED AT NYA, BRO */}
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                  📅 {project.createdAt ? project.createdAt.split(',')[0] : 'Baru aja'}
                </span>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </div>
  );
}

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      {projectList.map((project) => (
        <Route
          key={project.slug}
          path={`/${project.slug}`}
          element={<project.component />}
        />
      ))}

    </Routes>
  );
}