import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-20">
        <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
        <p className="mt-4 text-gray-600 text-xl">
          Main ek WordPress developer hoon jo ab Next.js ka champion ban raha hai!
        </p>
      </main>
      <Footer />
    </div>
  );
}