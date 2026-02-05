"use client"; // Required for the click toggle state
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu is close by default

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-6 bg-white shadow-sm">
      <div className="text-2xl font-bold text-orange-600">🐾 Meowven</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 font-medium items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-orange-600 transition"
          >
            {link.name}
          </Link>
        ))}
        <Link href="/login">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
            Book Meow
          </button>
        </Link>
      </div>

      {/* Mobile Menu Icon - ADDED ONCLICK HERE */}
      <div
        className="md:hidden text-3xl cursor-pointer text-orange-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </div>

      {/* Actual Mobile Menu - ADDED THIS BLOCK */}
      {isMenuOpen && ( // && means "if isMenuOpen is true, then show the menu becuase menu is set to false byd default"
        //The && allows you to say: "Show this, or show nothing
        <div className="absolute top-full left-0 w-full bg-white border-b border-orange-100 flex flex-col items-center gap-6 py-8 md:hidden shadow-lg animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)} // Closes menu after clicking one of the links
              className="text-lg font-semibold text-stone-700"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full">
              Book Meow
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
