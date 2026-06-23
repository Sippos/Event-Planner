import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import LoginPage from './components/LoginPage.jsx'
import EventDetails from './components/EventDetails.jsx'
import CreateEventPage from './components/CreateEventPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/create-event" element={<CreateEventPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
