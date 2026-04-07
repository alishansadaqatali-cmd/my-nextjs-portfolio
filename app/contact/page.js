"use client"; // Interactivity ke liye lazmi hai
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  // 1. User ka naam save karne ke liye state
  const [name, setName] = useState("");

  // 2. Button click hone par kya ho?
  const handleAlert = () => {
    alert("Assalam-o-Alaikum " + name + "! Humne aapka data pakar liya.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="p-20 bg-gray-50 flex-grow">
        <h1 className="text-3xl font-bold mb-5">Contact Me</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <label className="block mb-2 font-semibold">Aapka Naam:</label>
          
          {/* 3. onChange Event: Jo bhi type hoga, wo 'name' state mein jayega */}
          <input 
            type="text" 
            placeholder="Yahan apna naam likhein..."
            className="border p-3 w-full rounded mb-4"
            onChange={(e) => setName(e.target.withValue)} // 'e.target.value' se typing pakri jati hai
          />

          <p className="mb-4 text-blue-600 font-medium">Typing: {name}</p>

          <button 
            onClick={handleAlert}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Data Send Karein
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}