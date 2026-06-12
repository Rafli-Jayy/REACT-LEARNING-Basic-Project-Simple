export function WeatherInfoCard({ title, value, unit, className = "" }) {
  return (
    <div className={`bg-slate-950/30 border border-slate-800/50 p-4 rounded-xl flex flex-col gap-1 w-full ${className}`}>
      <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">
        {title}
      </span>
      <span className="text-lg font-bold text-slate-200">
        {value}{unit}
      </span>
    </div>
  );
}