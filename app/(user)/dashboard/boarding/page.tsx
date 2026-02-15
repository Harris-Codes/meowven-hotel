"use client";

import BoardingCard from "@/components/BoardingCard";
import BoardBookingModal from "@/components/modals/BoardBookingModal";
import { use, useState } from "react";

export default function BoardingPage() {
  const [ModalOpen, setModalOpen] = useState(false);
  const myCats = [
    { id: 1, name: "Zen", image: "/images/Zen.jpg" },
    { id: 2, name: "Opi", image: "/images/Opi.jpg" },
  ];
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const boardingRooms = [
    {
      id: 1,
      name: "Standard Room",
      image: "/images/standardroom.jpg",
      description: "A cozy room with a comfortable bed and toys.",
      button: "Book Now",
    },
    {
      id: 2,
      name: "Premium Room",
      image: "/images/premiumroom.jpg",
      description: "A spacious room with premium amenities.",
      button: "Book Now",
    },
    {
      id: 3,
      name: "Luxury Suite",
      image: "/images/luxuryroom.jpg",
      description:
        "A luxurious suite with a private play area and premium bedding.",
      button: "Book Now",
    },
  ];
  return (
    <div className="p-8 min-h-screen bg-orange-600/85">
      <h1 className="mt-15 md:mt-2 text-white text-4xl md:text-7xl font-bold ">
        Boarding Service
      </h1>
      <p className="mt-4 text-white text-lg">
        Please select a boarding room to book
      </p>

      <section className="mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {boardingRooms.map((room) => (
            <BoardingCard
              key={room.id}
              name={room.name}
              image={room.image}
              description={room.description}
              button={room.button}
              onBook={() => {
                // This is where you would handle the booking logic, such as opening a modal or redirecting to a booking page
                setModalOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* --- MODAL GOES HERE --- */}
      <BoardBookingModal
        isOpen={ModalOpen}
        onClose={() => setModalOpen(false)}
        cats={myCats}
        selectedCat={selectedCat}
        onSelectCat={setSelectedCat}
      />
    </div>
  );
}
