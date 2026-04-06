import Link from "next/link";
export default function Navbar() {
    return (
      <nav className="bg-white p-4 shadow-sm flex justify-between items-center px-10">
        <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li>Home</li>
          <li>
            <Link href="/about" className="hover:text-blue-600 cursor-pointer">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600 cursor-pointer">Project</Link>
          </li>
        </ul>
      </nav>
    );
  }