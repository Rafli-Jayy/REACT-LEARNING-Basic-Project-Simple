import { createContext, useContext, useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const pages = import.meta.glob("./pages/*.jsx", { eager: true })

const projectList = Object.entries(pages)
  .filter(([_, module]) => module.meta)
  .map(([path, module]) => ({
    component: module.default,
    ...module.meta,
  }))
  .sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return new Date(0)
      const cleanStr = dateStr.replace(", ", ",")
      const [datePart, timePart] = cleanStr.split(",")
      const [day, month, year] = datePart.split("/")
      const pad = (num) => num.toString().padStart(2, "0")
      const formattedDate = `${year}-${pad(month)}-${pad(day)}`
      const formattedTime = timePart ? timePart.replace(/\./g, ":") : "00:00:00"
      return new Date(`${formattedDate}T${formattedTime}`)
    }
    return parseDate(a.createdAt) - parseDate(b.createdAt)
  })

const LEVELS = ["All", "Basic", "Medium", "Advance"]

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border transition-colors duration-200 active:scale-95
                 bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200/70
                 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800/80"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.62 6.38l1.58-1.58M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  )
}

function LevelFilter({ activeLevel, setActiveLevel }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {LEVELS.map((level) => (
        <button
          key={level}
          onClick={() => setActiveLevel(level)}
          className={`text-xs font-semibold px-3 py-1.5 rounded-md border transition-colors duration-200
            ${
              activeLevel === level
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200/70 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800/80"
            }`}
        >
          {level}
        </button>
      ))}
    </div>
  )
}

function EmptyState({ level }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <div className="text-5xl bg-slate-100 dark:bg-slate-800/50 w-fit p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 mb-4">
        🗂️
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        Belum ada project di level {level}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-sm">
        Coba pilih level lain, atau tunggu project baru ditambahin ke sini.
      </p>
    </div>
  )
}

function Home() {
  const [activeLevel, setActiveLevel] = useState("All")

  const filteredProjects =
    activeLevel === "All"
      ? projectList
      : projectList.filter((p) => p.level === activeLevel)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-200">
              Learn React
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-3">
              Tempat eksperimen dan latihan project React.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="mt-8">
          <LevelFilter activeLevel={activeLevel} setActiveLevel={setActiveLevel} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 min-h-[600px]">
        {filteredProjects.length === 0 ? (
          <EmptyState level={activeLevel} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/${project.slug}`}
                className="
                  flex flex-col justify-between
                  bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-800/80
                  p-6 rounded-xl
                  hover:scale-[1.03]
                  hover:border-slate-300 dark:hover:border-slate-700
                  hover:bg-slate-50 dark:hover:bg-slate-900/80
                  transition-colors duration-200
                  shadow-xl
                  group
                "
              >
                <div>
                  <div className="text-4xl bg-slate-100 dark:bg-slate-800/50 w-fit p-3 rounded-lg border border-slate-200 dark:border-slate-700/50 transition-colors duration-200">
                    {project.icon}
                  </div>

                  <h2 className="text-xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed transition-colors duration-200">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between transition-colors duration-200">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.level}
                  </span>

                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                    📅 {project.createdAt ? project.createdAt.split(",")[0] : "Baru aja"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {projectList.map((project) => (
          <Route key={project.slug} path={`/${project.slug}`} element={<project.component />} />
        ))}
      </Routes>
    </ThemeProvider>
  )
}
