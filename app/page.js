export default function Home() {
  return (
    <div className="bg-slate-900 h-screen flex flex-col items-center justify-center p-4">
      
      {/* Yeh Main White Box Hai */}
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md">
        
        <h1 className="text-3xl font-black text-blue-600 mb-4">
          Tailwind is Awesome!
        </h1>
        
        <p className="text-gray-500 text-lg">
          Main Next.js seekh raha hoon aur ye mera pehla styled component hai.
        </p>
        
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg">
          Click Me!
        </button>

      </div>

    </div>
  );
}