import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Footer ko bulaya

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold">Foundation Mazboot Ho Rahi Hai!</h1>
      </main>

      <Footer /> {/* 2. Footer ko yahan rakha */}
    </div>
  );
}