// Humne "props" ko bracket mein pakra (Destructuring)
export default function ProjectCard({ title, desc }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{desc}</p>
        <button className="mt-4 text-red-600 font-bold hover:underline">
          Read More →
        </button>
      </div>
    );
  }