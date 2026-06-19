import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import LoginPage from './LoginPage';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

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

          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                  Logout
                </button>
            ) : (
            <button
            onClick={() => setIsModalOpen(true)}
            className="w-10 h-10 bg-gray-600 rounded full flex items-center justify-center hover:bg-gray-500 transition"
            > 👤
            </button>
            )}
          </div>
        </ul>
      </div>
      <LoginPage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={() => setIsLoggedIn(true)} />
    </nav>
  );
}

export default Navbar;
