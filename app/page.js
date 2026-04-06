import Navbar from "@/components/Navbar"; // Navbar ko bulaya

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* Ab sirf ek line likhni hai */}
      <Navbar /> 

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            I am a Developer
          </h2>
          <p className="text-gray-500 mt-2">Main Next.js seekh raha hoon.</p>
        </div>
      </main>

    </div>
  );
}