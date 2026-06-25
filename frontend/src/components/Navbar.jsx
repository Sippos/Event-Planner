import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Navbar() {
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
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(236,178,255,0.1)]">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16">
          <div className="flex items-center gap-4">
              <Link to="/" className="font-display-lg text-headline-lg-mobile text-primary tracking-tighter neon-text-primary">Mythic Events</Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" className={({ isActive }) => `font-body-md text-body-md duration-300 px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-primary border-b-2 border-primary font-bold pb-1' : 'text-on-surface-variant hover:text-secondary hover:bg-white/10'}`}>Home</NavLink>
          </div>

          <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <div className='flex items-center space-x-4'>
                  <Link
                      to="/create-event"
                      className='hidden md:flex items-center justify-center h-10 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-surface-container-lowest font-body-md font-bold hover:shadow-[0_0_15px_rgba(236,178,255,0.4)] transition-all active:scale-95 duration-200'>
                      Create Event
                  </Link>
                  <button
                      onClick={handleLogout}
                      className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-all h-10">
                      Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                    <Link to="/login" className="hidden md:flex items-center justify-center h-10 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-surface-container-lowest font-body-md font-bold hover:shadow-[0_0_15px_rgba(236,178,255,0.4)] transition-all active:scale-95 duration-200">
                        Login
                    </Link>
                    <Link
                        to="/login"
                        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-white/10 duration-300 transition-all active:scale-95"
                    > 
                        <span className="material-symbols-outlined">person</span>
                    </Link>
                </div>
              )}
              <button className="md:hidden w-10 h-10 flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined">menu</span>
              </button>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
