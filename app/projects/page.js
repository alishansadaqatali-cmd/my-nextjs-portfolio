import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard"; // 1. Card ko bulaya

export default function Projects() {
  const myProjects = [
    { 
      id: 1, 
      title: "Dental Clinic", 
      desc: "WordPress and ACF Expert work",
      imgUrl: "/dental.jpg" // Agar image ka naam dental.jpg hai
    },
    { 
      id: 2, 
      title: "Foster Care", 
      desc: "UK Based client project",
      imgUrl: "/foster.png" // Agar image ka naam foster.png hai
    },
    { 
      id: 3, 
      title: "Next.js App", 
      desc: "Learning Props and Components",
      imgUrl: "/nextjs.png" 
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {myProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            desc={project.desc} 
            imgUrl={project.imgUrl} // Ye line lazmi add karein
          />
        ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}