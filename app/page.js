export default function Home() {
  return (
    // 1. Pura Page (Flexbox se har cheez center mein)
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* 2. Header (Simple Navigation Bar) */}
      <nav className="bg-white p-4 shadow-sm flex justify-between items-center px-10">
        <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </nav>

      {/* 3. Main Content Area */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            I am a Developer
          </h2>
          <p className="text-gray-500 mt-2">Main Next.js aur Tailwind seekh raha hoon.</p>
        </div>
      </main>

    </div>
  );
}