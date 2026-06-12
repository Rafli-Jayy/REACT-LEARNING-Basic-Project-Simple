// Perhatikan props { children, className }
export function CardContainer({ children, className = "" }) {
  return (
    <div className={`h-auto w-full bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-slate-800 backdrop-blur-md flex flex-col gap-8 ${className}`}>
      
      {children}
      
    </div>
  );
}