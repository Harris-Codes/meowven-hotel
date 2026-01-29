export default function Navbar() { 
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-6 bg-white shadow-sm">
      <div className="text-2xl font-bold text-orange-600">🐾 Meowven</div>
      <div className="hidden md:flex gap-6 font-medium">
        <a href="#" className="hover:text-orange-600">Home</a>
        <a href="#" className="hover:text-orange-600">Services</a>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
          Book Meow
        </button>
      </div>
      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl">☰</div>
    </nav>
  );
}

