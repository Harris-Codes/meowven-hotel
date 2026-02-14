
import Image from "next/image";
interface MyCats {
  id: number;
  name: string;
  image: string;
 
}

interface MyCatsProps {
  cats: MyCats[];
   onAddCat: () => void; // This is a function that will open the modal in the parent when the "Add Cat" button is clicked
}

export default function MyCats({ cats, onAddCat }: MyCatsProps ) {
  return (
    <section>
      <h2 className="text-4xl font-bold text-white mb-8">My Cats</h2>
      <div className="flex flex-wrap items-center gap-6 md:gap-10">
        {cats.map((cat) => (
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
            <span className="text-2xl font-bold text-white">{cat.name}</span>
          </div>
        ))}
        {/* The 'Add Cat' Button from your sketch */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={onAddCat} // When the button is clicked, it will call the onAddCat function passed from the parent
            className="w-24 h-24 md:h-48 md:w-48 rounded-full border-4 border-dashed border-white flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-all group"
          >
            <i className="fi fi-bs-plus text-3xl text-white group-hover:text-orange-500"></i>
          </button>

          <span className="font-bold opacity-0 select-none">Add</span>
        </div>
      </div>
    </section>
  );
}
