export default function Navbar() {
    return (
      <nav className="bg-white p-4 shadow-sm flex justify-between items-center px-10">
        <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </nav>
    );
  }