"use client";
import { useState } from "react";

import ServiceCard from "@/components/ServiceCard";
import GroBookingModal from "@/components/modals/GroBookingModal";
export default function GroomingPage() {
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [ModalOpen, setModalOpen] = useState(false);
  const myCats = [
    { id: 1, name: "Zen", image: "/images/Zen.jpg" },
    { id: 2, name: "Opi", image: "/images/Opi.jpg" },
  ];
  const GroomingServices = [
    {
      id: 1,
      name: "Basic Grooming",
      image: "/images/basicgroom.jpg",
      description: "Includes bath and brush.",
      button: "Book Now",
    },
    {
      id: 2,
      name: "Full Grooming",
      image: "/images/fullgroom.jpg",
      description: "Includes bath, brush, and haircut.",
      button: "Book Now",
    },
    {
      id: 3,
      name: "Nail Trim",
      image: "/images/nailgroom.jpg",
      description: "Professional nail trimming service.",
      button: "Book Now",
    },
    {
      id: 4,
      name: "Full Spa",
      image: "/images/spagroom.jpg",
      description: "Includes bath, brush, haircut, and nail trim.",
      button: "Book Now",
    },
  ];
  return (
    <div className="p-8 min-h-screen bg-orange-600/85">
      <h1 className="mt-15 md:mt-2 text-white text-4xl md:text-7xl font-bold ">
        Grooming Service
      </h1>
      <p className="mt-4 text-white text-lg">
        Please select a grooming service to book
      </p>

      <section className="mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {GroomingServices.map((service) => (
            //We using the component we created in ServiceCard.tsx and passing the data from
            // the GroomingServices array as props to the component. We also pass a function to
            // open the modal when the button is clicked.
            <ServiceCard
              key={service.id}
              name={service.name}
              image={service.image}
              description={service.description}
              button={service.button}
              onBook={() => setModalOpen(true)}
            />
          ))}
        </div>
      </section>

      {/* --- MODAL GOES HERE --- */}
      <GroBookingModal
        isOpen={ModalOpen}
        onClose={() => setModalOpen(false)}
        cats={myCats}
        selectedCat={selectedCat}
        onSelectCat={setSelectedCat}
      />
    </div>
  );
}
