export default function home(){
  return(
    <div className="bg-slate-900 h-screen flex flex-col items-center justify-center p-4">
      <div>
        <h1 className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">
        Tailwind is Awesome!
        </h1>
        <p className="text-gray-600 text-lg">
        Main Next.js seekh raha hoon aur ye mera pehla styled component hai.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
        Click Me!
        </button>
      </div>
    </div>
  );
}