import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];


interface Cat {
  id: number;
  name: string;
  image: string;
}

interface GroBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cats: Cat[];
  selectedCat: number | null; //Keep track of who is selected
  onSelectCat: (id: number) => void; // Function to change the selection
}

export default function GroBookingModal({
  isOpen,
  onClose,
  cats,
  selectedCat,
  onSelectCat,
}: GroBookingModalProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
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

                  <span className="text-xl font-bold text-stone-300 group-hover:text-orange-500 transition-colors">
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Select Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date!)}
              minDate={new Date()}
              filterDate={(date) => date.getDay() !==0}
              // Added more Tailwind classes here to match your theme
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
              dateFormat="MMMM d, yyyy"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedTime(slot)} // Save the picked time
                className={`py-2 px-3 border text-xs font-bold rounded-lg transition-colors ${
                  selectedTime === slot
                    ? "bg-orange-500 text-white border-orange-500" // Picked style
                    : "bg-white text-orange-500 border-orange-500 hover:bg-orange-50" // Unpicked style
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </form>
        <button
          onClick={onClose}
          className="mt-8 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
        >
            Confirm Booking!
        </button>
      </div>
    </div>
  );
}
