import Image from "next/image";
import { useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";

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

const meowvenTheme = createTheme({
  palette: {
    primary: {
      main: "#ff6a00", // This is your exact orange!
    },
  },
});

export default function GroBookingModal({
  isOpen,
  onClose,
  cats,
  selectedCat,
  onSelectCat,
}: GroBookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const isFormValid =
    selectedCat !== null && selectedDate !== null && selectedTime !== null;

  if (!isOpen) return null;

  return (
    <ThemeProvider theme={meowvenTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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

                      <span
                        className={`text-xl font-bold transition-colors duration-300 ${
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
              {/* 4. THE MUI DATE PICKER (Much cleaner!) */}
              <div className="mt-4">
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Select Date
                </label>
                {/* 4. THE MUI PICKER (Much cleaner!) */}
                <MobileDatePicker
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  disablePast
                  shouldDisableDate={(date) => date.day() === 0} // Blocks Sundays
                  slotProps={{
                    textField: {
                      fullWidth: true,

                    },
                  }}
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

            <div className="flex flex-col items-center gap-4 mt-8 p-4 rounded-lg text-sm text-orange-600">
              {/* 1. CONFIRM BUTTON (The Gatekeeper) */}
              <button
                disabled={!isFormValid} // Disable button until form is valid
                onClick={() => {
                  console.log(
                    "Booking for Cat ID:",
                    selectedCat,
                    "on",
                    selectedDate?.format("MMMM D, YYYY"),
                    "at",
                    selectedTime,
                  );
                  onClose(); // In the future, this will be your handleSave function
                }}
                className={`w-full py-3 bg-orange-500  text-white rounded-lg transition-colors ${
                  isFormValid
                    ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
                    : "bg-stone-200 text-stone-400 cursor-not-allowed"
                }`}
              >
                {isFormValid
                  ? "Confirm Booking!"
                  : "Please Select a Cat & Time"}
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
      </LocalizationProvider>
    </ThemeProvider>
  );
}
