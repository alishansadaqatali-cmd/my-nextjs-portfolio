"use client"; // 1. Browser interactivity ke liye lazmi hai

import Image from "next/image";
import { useState } from "react"; // 2. State ka tool mangwaya

export default function ProjectCard({ title, desc, imgUrl }) {
  // 3. Ek "State" banayi jo shuru mein 'false' (chupi hui) hai
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border transition-all">
      <div className="relative h-48 w-full bg-gray-200">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        
        {/* 4. Logic: Agar showDetails true hai, toh hi desc dikhao */}
        {showDetails && (
          <p className="text-gray-600 mt-2 italic">{desc}</p>
        )}

        {/* 5. Button par click karne se state ulat (toggle) ho jayegi */}
        <button 
          onClick={() => setShowDetails(!showDetails)} 
          className="mt-4 text-red-600 font-bold hover:underline block"
        >
          {showDetails ? "Show Less ←" : "Read More →"}
        </button>
      </div>
    </div>
  );
}