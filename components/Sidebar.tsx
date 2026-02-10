"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <this hook tells the code exactly which page the user is looking at.

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current url

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: "fi-bs-user" },
    { name: "Grooming", href: "/dashboard/grooming", icon: "fi-bs-barber-shop" },
    { name: "Boarding", href: "/dashboard/boarding", icon: "fi-bs-hotel" },
    { name: "Daycare", href: "/dashboard/daycare", icon: "fi-bs-sun" },
  ];

  return (
    <>
      {/* 1. MOBILE HEADER & BURGER BUTTON on md:screen it will stay hidden */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-stone-100 px-4 flex items-center justify-between z-40 shadow-sm">
        {/* The Burger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-orange-600 text-white rounded-xl shadow-md"
        >
          <i className="fi fi-bs-menu-burger flex"></i>
        </button>

        {/* The Mobile Logo */}
        <div className="text-xl font-bold text-orange-600 flex items-center gap-2">
          <span>🐾</span>
          <span>Meowven</span>
        </div>

        {/* Empty div to balance the logo in the center */}
        <div className="w-10"></div>
      </header>

      {/* 2. THE SIDEBAR */}
      <nav
        className={`
        /* Layout Rules */
        fixed md:sticky top-0 left-0 h-screen z-60 bg-stone-50 border-r-2 border-stone-100
        flex flex-col items-center p-5 transition-all duration-300 ease-in-out
        
        /* Mobile Logic: Hide off-screen by default */
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} 
        
        /* Desktop Logic: Always visible, starts narrow (w-20) */
        md:translate-x-0 ${isOpen ? "md:w-64" : "md:w-20"}
      `}
      >
        {/* Toggle Button for Desktop Expansion */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-10 p-2 hover:bg-orange-100 rounded-xl text-orange-600 hidden md:block"
        >
          <i
            className={`fi ${isOpen ? "fi-bs-angle-small-left" : "fi-bs-menu-burger"} text-xl`}
          ></i>
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
          <span
            className={`font-bold text-orange-600 text-2xl transition-opacity ${isOpen ? "opacity-100" : "md:opacity-0 w-0"}`}
          >
            Meowven
          </span>
        </div>

        {/* We start the 'map' loop. For every object in navLinks, we create a 'link' variable */}
        <div className="w-full flex flex-col items-center gap-6 mt-10">
          {navLinks.map((link) => {
            // 1. We calculate 'isActive' BEFORE we show the UI
            //  compares the browser's url (pathname) with the link's destination (link.href)
            // if they match exactly, isActive = true
            const isActive = pathname === link.href;

            // 2. RETURN: Since we used curly braces { }, we MUST tell JavaScript what to output.
            return (
              <Link
                // KEY: React needs a unique ID for every item in a list to keeep track of them
                key={link.name}
                //  HREF: This is where the user goes when they click
                href={link.href}
                //ONCLICK: A little bit of logic for phones
                // If the screen is small (< 768px), close the sidebar after the user clicks a link.
                onClick={() => {
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
                //CLASSNAME: The "Wardrobe" of your component. We use template literals (``) so we can mix constant styles with dynamic logic.
                className={`
          /* Base styles for all links */
          flex items-center rounded-2xl transition-all duration-300 shadow-md h-14 w-full
          /* Sidebar-Dependent Styles: for normal web browsers
           If the sidebar is OPEN: add padding to the left and push content to the start
           If the sidebar is CLOSED: center the content and remove gap */
          ${isOpen ? "px-6 justify-start gap-4" : "md:justify-center gap-0"}
          
          /* 3. Toggle colors based on isActive */
          ${
            isActive
              ? "bg-orange-600 text-white"
              : "bg-transparent text-stone-500 hover:bg-orange-100 hover:text-orange-600 shadow-none"
          }
        `}
              >
                <i
                  className={`fi ${link.icon} text-xl flex items-center justify-center`}
                ></i>
                <span
                  className={`font-bold text-lg whitespace-nowrap ${isOpen ? "opacity-100" : "md:hidden opacity-0"}`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* 3. MOBILE OVERLAY - Click outside to close */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden transition-opacity"
        />
      )}
    </>
  );
}
