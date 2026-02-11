"use client";
import { useState } from "react";
import Image from "next/image";
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
      <p className="p-4 text-white text-lg">
        Please select a grooming service to book
      </p>

      <section className="mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {GroomingServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-full "
            >
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-orange-600">
                {service.name}
              </h2>

              <p className="text-stone-500">{service.description}</p>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                {service.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL GOES HERE --- */}
      {ModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold text-orange-600 mb-2">
              Choose your cat
            </h2>
            <p className="text-stone-600 mb-6">
              Select a cat to book this grooming service
            </p>
            <form className="space-y-5">
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {myCats.map((cat) => {
                  const isSelected = selectedCat === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCat(cat.id)}
                      className="flex flex-col items-center gap-3 cursor-pointer group"
                    >
                      {/* THE MAIN CIRCLE */}
                      <div
                        className={`relative w-24 h-24 rounded-full border-4 transition-all duration-300 overflow-hidden ${
                          isSelected
                            ? "border-orange-500 scale-110 ring-1 ring-orange-100 shadow-lg"
                            : "border-stone-100 hover:border-orange-300 shadow-sm"
                        }`}
                      >
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill // This makes the image fill the circular div
                          className="object-cover" // This makes sure the cat's face isn't stretched
                        />
                      </div>

                      <span className="text-2xl font-bold text-white">
                        {cat.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </form>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-8 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
