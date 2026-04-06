import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Projects() {
  const myProjects = [
    { id: 1, title: "Dental Clinic", desc: "Built with WordPress" },
    { id: 2, title: "Foster Care Site", desc: "Custom ACF Project" },
    { id: 3, title: "Next.js Portfolio", desc: "My first React app" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-10 bg-gray-50">
        <h1 className="text-3xl font-bold mb-8">My Work</h1>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {myProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-blue-500">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.desc}</p>
              <button className="mt-4 text-blue-600 font-semibold text-sm">View Details →</button>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}