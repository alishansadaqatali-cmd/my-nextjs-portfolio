import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard"; // 1. Card ko bulaya

export default function Projects() {
  const myProjects = [
    { id: 1, title: "Dental Clinic", desc: "WordPress and ACF Expert work" },
    { id: 2, title: "Foster Care", desc: "UK Based client project" },
    { id: 3, title: "Next.js App", desc: "Learning Props and Components" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {myProjects.map((project) => (
            // 2. Parcel bheja (title aur desc)
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              desc={project.desc} 
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}