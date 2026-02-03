import Link from "next/link";
import Image from "next/image";
const services = [
  {
    title: "Grooming",
    description:
      "Give your cat the royal treatment with our low-stress grooming sessions...",
    image: "/images/cat-grooming.jpg",
  },
  {
    title: "Boarding",
    description:
      "Leave your worries at the door. Our climate-controlled private suites...",
    image: "/images/cat-boarding.jpg",
  },
  {
    title: "Daycare",
    description:
      "The perfect solution for active cats. Our daycare provides a stimulating...",
    image: "/images/cat-daycare3.jpg",
  },
];
export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* 2. HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-orange-50 to-stone-50">
        <h1 className="text-5xl md:text-6xl font-extrabold text-stone-800 leading-tight">
          Welcome to <span className="text-orange-600">🐾Meowven</span>
        </h1>
        <p className="mt-4 text-xl text-stone-600 max-w-2xl">
          The Purr-fect Getaway – Luxury boarding and grooming for the
          sophisticated feline.
        </p>
        <Link
          href="/login"
          className="mt-8 bg-orange-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
        >
          BOOK STAY NOW
        </Link>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Royal Services
        </h2>

        {/* The Magic Responsive Grid: 1 column on phone, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Grooming */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center hover:shadow-md transition">
            <div className="text-4xl mb-4">✂️</div>
            <h3 className="text-2xl font-bold mb-2">Grooming</h3>
            <p className="text-stone-500">
              Premium baths, brushing, and paw-dicures to keep them looking
              sharp.
            </p>
          </div>

          {/* Card 2: Boarding */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center hover:shadow-md transition">
            <div className="text-4xl mb-4">🛌</div>
            <h3 className="text-2xl font-bold mb-2">Boarding</h3>
            <p className="text-stone-500">
              Private luxury suites with climate control and 24/7 cat-cam
              access.
            </p>
          </div>

          {/* Card 3: Daycare */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center hover:shadow-md transition">
            <div className="text-4xl mb-4">🧶</div>
            <h3 className="text-2xl font-bold mb-2">Daycare</h3>
            <p className="text-stone-500">
              Interactive play sessions and organic treats while you are at
              work.
            </p>
          </div>
        </div>
      </section>

      {/* 4.Smart way of mapping services instead of repeating the same thing */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className={`flex items-center border-y-4 border-orange-600 ${
            index % 2 === 0
              ? "flex-col md:flex-row"
              : "flex-col md:flex-row-reverse"
          }`}
        >
          {/* 1. Image Side (ALWAYS first in code) */}
          <div className="w-full md:w-1/2 aspect-square relative overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* 2. Text Side (ALWAYS second in code) */}
          <div className="flex-col text-center w-full md:w-1/2 px-10 bg-stone-50 aspect-square flex items-center justify-center gap-8">
            <h2 className="text-4xl font-extrabold text-orange-500">
              {service.title}
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>
      ))}

      {/* 4. FOOTER */}
      <footer className="border-t border-stone-200 py-10 px-6 text-center text-stone-500">
        <p>© 2026 Meowven Inc. | Privacy | Terms</p>
      </footer>
    </div>
  );
}
