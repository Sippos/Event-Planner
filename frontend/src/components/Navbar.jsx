import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Event Planner</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-200">Home</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-blue-200">Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
