import Image from "next/image";

// We define "Props" to tell the card what data it needs to show
interface ServiceCardProps {
  name: string;
  image: string;
  description: string;
  button: string;
  onBook: () => void; // This is a function tthat will open the modal in the parent 
}

export default function ServiceCard({ name, image, description, button, onBook }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-full ">
      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
        <Image src={image} alt={name} fill className="object-cover" />                      
        </div>
        <h2 className="text-xl font-bold text-orange-600">{name}</h2>
        <p className="text-stone-500">{description}</p>
        <button
          onClick={onBook} // When the button is clicked, it will call the onBook function passed from the parent   
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          {button}
        </button>       
    </div>
    );

}   
