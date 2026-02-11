"use client";
import Image from "next/image";
import { useState } from "react";
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
        <section>
          <h2 className="text-4xl font-bold text-white mb-8">My Cats</h2>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {myCats.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center gap-3">
                {/* This container needs 'relative' and 'overflow-hidden' for the circle effect */}
                <div className="relative w-24 h-24 md:h-48 md:w-48 rounded-full border-4 border-orange-50 shadow-inner overflow-hidden">
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
            ))}
            {/* The 'Add Cat' Button from your sketch */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="w-24 h-24 md:h-48 md:w-48 rounded-full border-4 border-dashed border-white flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-all group"
              >
                <i className="fi fi-bs-plus text-3xl text-white group-hover:text-orange-500"></i>
              </button>

              <span className="font-bold opacity-0 select-none">Add</span>
            </div>
          </div>
        </section>

        {/* --- UPCOMING BOOKINGS SECTION --- */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
          <h1 className="p-5 text-2xl font-bold text-orange-600">
            My Bookings
          </h1>
          <div className="overflow-x-auto">
            {" "}
            {/* This makes it responsive on mobile view */}
            <table className="w-full text-left border-collapse">
              <thead className="bg-orange-100 border-b border-stone-100">
                <tr className="text-orange-600">
                  <th className="p-5 font-semibold text-sm">Service</th>
                  <th className="p-5  font-semibold text-sm">Cats</th>
                  <th className="p-5  font-semibold text-sm">Date</th>
                  {/* Add more <th> here later for Price, etc. */}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-stone-50 transition-colors"
                  >
                    {/* Column 1: Service Icon + Name */}
                    <td className="p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                        <i className={`fi ${booking.icon} `}></i>
                      </div>
                      <span className="font-bold text-stone-800">
                        {booking.service}
                      </span>
                    </td>
                    {/* Column 2: Cats (Handles multiple) */}
                    <td className="p-5 text-stone-600 font-medium">
                      {booking.cats.join(", ")}
                    </td>

                    {/* Column 3: Date */}
                    <td className="p-5 text-stone-500 text-sm">
                      {booking.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* --- MODAL GOES HERE --- */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold text-orange-600 mb-2">
              Add New Cat
            </h2>
            <p className="text-stone-600 mb-6">
              Fill in the details for your new cat.
            </p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Cat Name
                </label>
                <input
                  type="text"
                  placeholder="Enter cat's name"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Please upload your cat photo
                </label>
                <label
                  htmlFor="file-upload"
                  className="group relative flex flex-col items-center justify-center w-full h-30 border-2 border-dashed border-stone-300 rounded-xl cursor-pointer hover:border-orange-500 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <i className="fi fi-bs-cloud-upload text-3xl text-stone-400 group-hover:text-orange-600 transition-colors mb-2"></i>
                    <p className="text-sm text-stone-500 group-hover:text-stone-600">
                      <span className="font-bold text-orange-600">
                        Click to upload
                      </span>{" "}
                       or drag and drop
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      PNG OR JPG (max.5MB)
                    </p>
                  </div>

                  {/* THE HIDDEN INPUT */}
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => console.log(e.target.files?.[0])}
                  />
                </label>
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
