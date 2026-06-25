import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEventPage = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Form submitted")
        setError(null)
        setIsLoading(true)

        const token = localStorage.getItem('token')
        if (!token) {
            setError('You must be logged in to create an event.')
            setIsLoading(false)
            return
        }

        const payload = {
            title,
            description,
            date: new Date(date).toISOString(),
            location,
            latitude: latitude ? parseFloat(latitude) : null,
            longitude: longitude ? parseFloat(longitude) : null
        }

        try {
            const response = await fetch('http://localhost:3001/api/events', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

                body: JSON.stringify(payload)
            })

            const data = await response.json()

            if (!response.ok) {
                console.error('Backend Error Data:', JSON.stringify(data, null, 2))
                throw new Error(data.message || 'Failed to create event')
            }

            navigate(`/events/${data.id}`)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-[60vh] p-4'>
            <div className='glass-panel-heavy p-8 rounded-xl shadow-2xl w-[32rem] relative border-t-white/30'>
                <h1 className='text-3xl font-display font-bold mb-6 text-primary text-center'>Create New Event</h1>
        
            {error && (
                <div className='bg-red-100 text-red-600 p-3 rounded mb-4 text-sm'>
                    {error}
        </div>
            )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
                <label className='block text-on-surface font-sans font-bold mb-2 text-sm'>Title</label>
                    <input
                        type= "text"
                        value= {title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-surface-container-low/50 border border-white/10 p-3 rounded focus:outline-none focus:border-primary focus:shadow-glow-primary text-on-surface font-sans transition-all placeholder:text-outline"
                        required
                        />
            </div>

            <div>
                <label className='block text-on-surface font-sans font-bold mb-2 text-sm'>Date & Time</label>
                    <input
                        type= "datetime-local"
                        value= {date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-surface-container-low/50 border border-white/10 p-3 rounded focus:outline-none focus:border-primary focus:shadow-glow-primary text-on-surface font-sans transition-all placeholder:text-outline"
                        required
                        />
            </div>

            <div>
                <label className='block text-on-surface font-sans font-bold mb-2 text-sm'>Location</label>
                    <input
                        type= "text"
                        value= {location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-surface-container-low/50 border border-white/10 p-3 rounded focus:outline-none focus:border-primary focus:shadow-glow-primary text-on-surface font-sans transition-all placeholder:text-outline"
                        />
            </div>

            <div>
                <label className='block text-on-surface font-sans font-bold mb-2 text-sm'>Description</label>
                    <input
                        type= "text"
                        value= {description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-surface-container-low/50 border border-white/10 p-3 rounded focus:outline-none focus:border-primary focus:shadow-glow-primary text-on-surface font-sans transition-all placeholder:text-outline"
                        />
            </div>

            <button 
                type="submit"
                disabled={isLoading}
                className='bg-gradient-to-r from-primary to-secondary text-on-primary-container font-bold p-3 rounded hover:shadow-glow-primary transition-all mt-4'
                >
                    {isLoading ? 'Creating Event...' : 'Create Event'}
                </button>
        </form>
    </div>
</div>
    )}

export default CreateEventPage