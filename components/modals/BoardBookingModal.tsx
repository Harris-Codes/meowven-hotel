import Image from "next/image";
import { useState } from "react";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { MultiInputDateRangeField } from "@mui/x-date-pickers-pro/MultiInputDateRangeField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// 1. Swap this adapter!
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

if (typeof window !== "undefined") {
  const originalWarn = console.warn; // MUI sometimes sends it as a warning
  const originalError = console.error;

  console.warn = (...args) => {
    if (args[0]?.includes?.("MUI X: Missing license key")) return;
    originalWarn(...args);
  };

  console.error = (...args) => {
    if (args[0]?.includes?.("MUI X: Missing license key")) return;
    originalError(...args);
  };
}

interface Cat {
  id: number;
  name: string;
  image: string;
}

interface BoardingBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cats: Cat[];
  selectedCats: number[];
  onToggleCat: (id: number) => void;
}
const meowvenTheme = createTheme({
  palette: {
    primary: {
      main: "#ff6a00",
    },
  },
  components: {
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            color: "#ff6a00 !important",
          },
        },
      },
    },
  },
});

export default function BoardBookingModal({
  isOpen,
  onClose,
  cats,
  selectedCats,
  onToggleCat,
}: BoardingBookingModalProps) {
  // Use Dayjs types for the state
  const [bookingRange, setBookingRange] = useState<
    [Dayjs | null, Dayjs | null]
  >([null, null]);

  

  const isFormValid =
    selectedCats.length > 0 && //Must have atleast 1 cat
    bookingRange[0] !== null && //Must have Start date
    bookingRange[1] !== null;//Must have a End date

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
              Select a cat to book this boarding service
            </p>

            <form className="space-y-5">
              {/* Cat selection (Same as before) */}
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {cats.map((cat) => {
                  const isSelected = selectedCats?.includes(cat.id) || false;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => onToggleCat(cat.id)}
                      className="flex flex-col items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`relative w-24 h-24 rounded-full border-4 transition-all duration-300 overflow-hidden ${
                          isSelected
                            ? "border-orange-500 scale-110 shadow-lg"
                            : "border-stone-100 shadow-sm"
                        }`}
                      >
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        className={`text-xl font-bold ${isSelected ? "text-orange-500" : "text-stone-600"}`}
                      >
                        {cat.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-stone-100">
                <label className="block text-sm font-semibold text-stone-700 mb-4">
                  Select Boarding Duration
                </label>
                <div className="w-full">
                  <MobileDateRangePicker
                    slots={{ field: MultiInputDateRangeField }}
                    value={bookingRange}
                    onChange={(newValue) => setBookingRange(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                      },
                      day: {
                        sx: {
                          "& .MuiPickersDay-root.Mui-selected": {
                            backgroundColor: "#ff6a00 !important",
                            color: "white",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </form>

            <div className="flex flex-col items-center gap-4 mt-8 p-4">
              <button
                disabled={!isFormValid}
                onClick={() => {
                  console.log(
                    "Booking for Cat IDs:",
                    selectedCats, // Log the array
                    "From:",
                    bookingRange[0]?.format("YYYY-MM-DD"),
                    "To:",
                    bookingRange[1]?.format("YYYY-MM-DD"),
                  );
                  onClose();
                }}
                className={`w-full py-3 rounded-lg transition-colors ${
                  isFormValid
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-stone-200 text-stone-400"
                }`}
              >
                {isFormValid
                  ? "Confirm Booking!"
                  : "Please Select a Cat & Dates"}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-24 py-2 font-bold text-stone-400 hover:text-white hover:bg-red-500 rounded-xl  transition-colors"
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
