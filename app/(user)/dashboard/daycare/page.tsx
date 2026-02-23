"use client";
import { useState } from "react";
import DaycareCard from "@/components/DaycareCard";
import DaycareModal from "@/components/modals/DaycareModal";

export default function DaycarePage() {
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [ModalOpen, setModalOpen] = useState(false);
  const myCats = [
    { id: 1, name: "Zen", image: "/images/Zen.jpg" },
    { id: 2, name: "Opi", image: "/images/Opi.jpg" },
  ];

  const toggleCat = (id: number) => {
    setSelectedCats((prev) => {
      // If the cat is already in the array, remove it (filter)
      if (prev.includes(id)) {
        return prev.filter((catId) => catId !== id);
      }
      // If it's not there, add it to the array (spread)
      return [...prev, id];
    });
  };

  const [selectedCats, setSelectedCats] = useState<number[]>([]);

  const Daycare = [
    {
      id: 1,
      name: "Daycare Indoors",
      image: "/images/cat-daycare3.jpg",
      description: "Premium indoor boarding featuring climate-controlled suites, specialized grooming services, and dedicated one-on-one playtime to keep your feline friend comfortable and engaged",
      button: "Book Now",
    },

    {
      id: 2,
      name: "Daycare Outdoors",
      image: "/images/cat-daycare2.jpg",
      description: "The ultimate staycation for your cat! Our indoor daycare includes refreshing baths, professional brushing, and plenty of cozy spots for those essential afternoon naps",
      button: "Book Now",
    },
  ];
  return (
    <div className="p-8 min-h-screen bg-orange-600/85">
      <h1 className="mt-15 md:mt-2 text-white text-4xl md:text-7xl font-bold ">
        Daycare Service
      </h1>
      <p className="mt-4 text-stone-200 text-lg">Welcome to the Daycare Page</p>
      <section className="mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {Daycare.map((service) => (
            //We using the component we created in ServiceCard.tsx and passing the data from
            // the GroomingServices array as props to the component. We also pass a function to
            // open the modal when the button is clicked.
            <DaycareCard
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
            <DaycareModal
              isOpen={ModalOpen}
              onClose={() => setModalOpen(false)}
              cats={myCats}
              selectedCats={selectedCats}
              onToggleCat={toggleCat}
            />
    </div>
  );
}
