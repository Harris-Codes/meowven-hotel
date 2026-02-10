import Image from "next/image";
export default function GroomingPage() {
  const GroomingServices = [
    { id: 1, name: "Basic Grooming", image: "/images/basicgroom.jpg", description: "Includes bath and brush." , button: "Book Now"  },
    { id: 2, name: "Full Grooming", image: "/images/fullgroom.jpg", description: "Includes bath, brush, and haircut." , button: "Book Now" },
    { id: 3, name: "Nail Trim", image: "/images/nailgroom.jpg", description: "Professional nail trimming service." , button: "Book Now" },
    { id: 4, name: "Full Spa", image: "/images/spagroom.jpg", description: "Includes bath, brush, haircut, and nail trim." , button: "Book Now" },
  ];
  return (
    <div className="p-8 min-h-screen bg-orange-600/85">
      <h1 className="mt-15 md:mt-2 text-white text-4xl md:text-7xl font-bold ">
        Grooming Service
      </h1>
      <p className="p-4 text-white text-lg">Please select a grooming service to book</p>

      <section className="mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {GroomingServices.map((service) => (
            <div
              key={service.id} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-full "
            >

              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>  
              <h2 className="text-xl font-bold text-orange-600">{service.name}</h2>
              
              <p className="text-stone-500">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                {service.button}
              </button>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}