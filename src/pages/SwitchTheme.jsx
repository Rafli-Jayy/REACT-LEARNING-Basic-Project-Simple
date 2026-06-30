import React, { useState } from 'react';
import CardHeader from '../components/ThemeToggler/CardHeader';
import ProfileContent  from '../components/ThemeToggler/ProfilContent';
import CardFooter from '../components/ThemeToggler/CardFooter'
import { ThemeProvider } from "../context/ThemeContext"

export const meta = {
  title: "Switch Theme",
  description: "Latihan Use Context",
  level: "Medium",
  icon: "💡",
  slug: "switch-theme",
  createdAt: "30/6/2026, 17.25.30"
};

export default function App() {
  return (
    <ThemeProvider>
      {/* Base Background Halaman */}
      <div className="min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-300
                      bg-slate-50 dark:bg-slate-950">
        
        {/* Kotak Card Utama */}
        <div className="w-full max-w-sm rounded-2xl border p-5 transition-all duration-300
                        bg-white border-slate-200/80 shadow-md shadow-slate-200/50
                        dark:bg-slate-900/40 dark:border-slate-800 dark:shadow-none">
          
          <CardHeader />
          <ProfileContent />
          <CardFooter />
          
        </div>
      </div>
    </ThemeProvider>
  );
}
