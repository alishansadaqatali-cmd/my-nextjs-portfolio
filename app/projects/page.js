import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-20">
        <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
        <p className="mt-4 text-gray-600 text-xl">
          yeh prject page bna h jo m n practice j toor pr kiya h
        </p>
      </main>
      <Footer />
    </div>
  );
}