import Link from "next/link";
export default function Sidebar() {
  const navLinks = [
    { name: "My Bookings", href: "#", icon: "fi-bs-receipt" },
    { name: "Grooming", href: "#", icon: "fi-bs-barber-shop" },
    { name: "Boarding", href: "#", icon: "fi-bs-hotel" },
    { name: "Daycare", href: "#", icon: "fi-bs-sun" },
  ];
  return (
    <nav className="sticky top-0 left-0 x h-screen w-64 bg-stone-50 flex flex-col items-center gap-6 p-5 rounded-2xl">
      <div className="mt-2 mr-5 text-2xl font-bold text-orange-600">
        🐾 Meowven
      </div>
      <div className="w-full flex flex-col items-center gap-6 mt-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            /* Added 'gap-3' to separate icon from text */
            className="flex items-center justify-center rounded-2xl bg-orange-600 h-14 w-full text-white hover:bg-orange-700 transition text-lg font-bold shadow-md gap-3"
          >
            {/* Notice 'fi-bs' added here to match your Bold Straight import */}
            <i
              className={`fi ${link.icon} flex items-center justify-center`}
            ></i>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
