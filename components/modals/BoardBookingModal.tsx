import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Cat {
  id: number;
  name: string;
  image: string;
}

interface BoardingBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cats: Cat[];
  selectedCat: number | null; //Keep track of who is selected
  onSelectCat: (id: number) => void; // Function to change the selection
}

export default function BoardBookingModal({
  isOpen,
  onClose,
  cats,
  selectedCat,
  onSelectCat,
}: BoardingBookingModalProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const isFormValid =
    selectedCat !== null && startDate !== null && endDate !== null;
  if (!isOpen) return null;

  return (
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
            {cats.map((cat) => {
              const isSelected = selectedCat === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => onSelectCat(cat.id)}
                  className="flex flex-col items-center gap-3 cursor-pointer group"
                >
                  {/* Select Cat for Booking */}
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

                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    isSelected
                      ? "text-orange-500"
                      : "text-stone-600 group-hover:text-orange-500"
                  }`}
                  >
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row items-center gap-4">
            <div className="mt-4">
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Select Boarding Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date!)}
                minDate={new Date()}
                filterDate={(date) => date.getDay() !== 0}
                // Added more Tailwind classes here to match your theme
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Until
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date!)}
                minDate={new Date()}
                filterDate={(date) => date.getDay() !== 0}
                // Added more Tailwind classes here to match your theme
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                dateFormat="MMMM d, yyyy"
              />
            </div>
          </div>
        </form>

        <div className="flex flex-col items-center gap-4 mt-8 p-4 rounded-lg text-sm text-orange-600">
          {/* 1. CONFIRM BUTTON (The Gatekeeper) */}
          <button
            disabled={!isFormValid} // Disable button until form is valid
            onClick={() => {
              console.log(
                "Booking for Cat ID:",
                selectedCat,
                "on",
                startDate,
                "at",
                endDate,
              );
              onClose(); // In the future, this will be your handleSave function
            }}
            className={`w-full py-3 bg-orange-500  text-white rounded-lg transition-colors ${
              isFormValid
                ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
                : "bg-stone-200 text-stone-400 cursor-not-allowed"
            }`}
          >
            {isFormValid ? "Confirm Booking!" : "Please Select a Cat & Time"}
          </button>

          {/* 2. CANCEL BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="w-24 py-3 bg-stone-300 hover:bg-red-600 text-white rounded-xl transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
