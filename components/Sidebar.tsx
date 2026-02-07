"use client";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "#", icon: "fi-bs-user" },
    { name: "Grooming", href: "#", icon: "fi-bs-barber-shop" },
    { name: "Boarding", href: "#", icon: "fi-bs-hotel" },
    { name: "Daycare", href: "#", icon: "fi-bs-sun" },
  ];

  return (
    <>
      {/* 1. MOBILE BURGER BUTTON - Only visible on small screens */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-orange-600 text-white rounded-2xl shadow-lg"
      >
        <i className="fi fi-bs-menu-burger flex"></i>
      </button>

      {/* 2. THE SIDEBAR */}
      <nav className={`
        /* Layout Rules */
        fixed md:sticky top-0 left-0 h-screen z-40 bg-stone-50 border-r-2 border-stone-100
        flex flex-col items-center p-5 transition-all duration-300 ease-in-out
        
        /* Mobile Logic: Hide off-screen by default */
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} 
        
        /* Desktop Logic: Always visible, starts narrow (w-20) */
        md:translate-x-0 ${isOpen ? "md:w-64" : "md:w-20"}
      `}>
        
        {/* Toggle Button for Desktop Expansion */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="mb-10 p-2 hover:bg-orange-100 rounded-xl text-orange-600 hidden md:block"
        >
          <i className={`fi ${isOpen ? "fi-bs-angle-small-left" : "fi-bs-menu-burger"} text-xl`}></i>
        </button>

        {/* Close Button for Mobile only */}
        <button 
          onClick={() => setIsOpen(false)}
          className="md:hidden self-end mb-5 p-2 text-stone-400"
        >
          <i className="fi fi-bs-cross"></i>
        </button>

        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span className="text-2xl">🐾</span>
          <span className={`font-bold text-orange-600 text-2xl transition-opacity ${isOpen ? "opacity-100" : "md:opacity-0 w-0"}`}>
            Meowven
          </span>
        </div>

        <div className="w-full flex flex-col items-center gap-6 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => { if(window.innerWidth < 768) setIsOpen(false) }}
              className={`
                flex items-center rounded-2xl bg-orange-600 text-white hover:bg-orange-700 
                transition-all duration-300 shadow-md h-14 w-full
                ${isOpen ? "px-6 justify-start gap-4" : "md:justify-center gap-0"}
              `}
            >
              <i className={`fi ${link.icon} text-xl flex items-center justify-center`}></i>
              <span className={`font-bold text-lg whitespace-nowrap ${isOpen ? "opacity-100" : "md:hidden opacity-0"}`}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* 3. MOBILE OVERLAY - Click outside to close */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity"
        />
      )}
    </>
  );
}