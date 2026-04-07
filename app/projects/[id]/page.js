import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, desc, imgUrl }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container with Hover Zoom */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image 
          src={imgUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 mt-2 text-sm line-clamp-2">
          {desc}
        </p>
        
        {/* Button jo Dynamic Route par le jaye ga */}
        <Link href={`/projects/${title.replace(/\s+/g, '-').toLowerCase()}`}>
          <button className="mt-5 w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            View Case Study
          </button>
        </Link>
      </div>
    </div>
  );
}