//Defines what a single row looks like
interface UserBookingTable {
  id: number;
  service: string;
  icon: string;
  cats: string[];
  date: string;
}

//Defines what the entire component receive. Since the component is a table, its job is to take an Array of those single rows and render them. So we define the props as an array of UserBookingTable objects, which we call bookings. This way, when we use the component, we can pass in an array
interface UserBookingTableProps {
  bookings: UserBookingTable[];
}

export default function UserBookingTable({ bookings }: UserBookingTableProps) {
  return (
    <div className="mt-12 bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
      <h1 className="p-5 text-2xl font-bold text-orange-600">My Bookings</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-orange-100 border-b border-stone-100">
            <tr className="text-orange-600">
              <th className="p-5 font-semibold text-sm">Service</th>
              <th className="p-5 font-semibold text-sm">Cats</th>
              <th className="p-5 font-semibold text-sm">Date</th>
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
                    <i className={`fi ${booking.icon}`}></i>
                  </div>
                  <span className="font-bold text-stone-800">
                    {booking.service}
                  </span>
                </td>

                {/* Column 2: Cats */}
                <td className="p-5 text-stone-600 font-medium">
                  {booking.cats.join(", ")}
                </td>

                {/* Column 3: Date */}
                <td className="p-5 text-stone-500 text-sm">{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
