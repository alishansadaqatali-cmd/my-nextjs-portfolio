import Image from "next/image"; // Pehle tool ko bulaya

export default function ProjectCard({ title, desc, imgUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border">
      
      {/* 1. Image wala Section (Naya Code) */}
      <div className="relative h-48 w-full bg-gray-200">
        <Image 
          src={imgUrl}             // Ye rasta hum page.js se bhejenge
          alt={title}              // SEO ke liye zaroori
          fill                     // Box ko poora bharne ke liye
          className="object-cover"  // Image ko stretch hone se bachane ke liye
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{desc}</p>
        <button className="mt-4 text-red-600 font-bold hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
}