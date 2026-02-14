"use client";
import Image from "next/image";
import { useState } from "react";
import AddCatModal from "@/components/modals/AddCatModal";
import UserBookingTable from "@/components/UserBookingTable";
import MyCats from "@/components/MyCats";
export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const myCats = [
    { id: 1, name: "Zen", image: "/images/Zen.jpg" },
    { id: 2, name: "Opi", image: "/images/Opi.jpg" },
  ];

  const bookings = [
    {
      id: 1,
      service: "Grooming",
      icon: "fi-bs-barber-shop",
      cats: ["Opi"],
      date: "Feb 12, 2026",
    },
    {
      id: 2,
      service: "Boarding",
      icon: "fi-bs-hotel",
      cats: ["Opi", "Zen"],
      date: "Feb 15, 2026",
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-orange-600/85">
      <h1 className="mt-15 md:mt-2 text-white text-4xl md:text-7xl font-bold ">
        Hello, Harris!
      </h1>
      <p className="text-stone-200 text-lg">
        Your furry friends are waiting for you.
      </p>

      {/* 2. The Main Content Container (Your White Box) */}
      <div className="mt-10">
        {/* --- MY CATS SECTION --- */}
        <MyCats cats={myCats} onAddCat={() => setModalOpen(true)} />

        {/* --- UPCOMING BOOKINGS SECTION --- */}
        <UserBookingTable bookings={bookings} />
      </div>
      {/* --- MODAL GOES HERE --- */}
      <AddCatModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
