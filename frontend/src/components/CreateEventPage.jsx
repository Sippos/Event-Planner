import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEventPage = ({isOpen, isClose}) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    if (!isOpen) return null

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
            onclose()
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <h1 className='text-3xl font-bold mb-6'>Create New Event</h1>
            <div className='bg-white p-8 rounded-lg shadow-xl w-[32rem] relative overflow-y-auto max-h-[90vh]'>
        
            {error && (
                <div className='bg-red-100 text-red-600 p-3 rounded mb-4 text-sm'>
                    {error}
        </div>
            )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
                <label className='block text-gray-700 font-bold mb-2'>Title</label>
                    <input
                        type= "text"
                        value= {title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                        required
                        />
            </div>

            <div>
                <label className='block text-gray-700 font-bold mb-2'>Date & Time</label>
                    <input
                        type= "datetime-local"
                        value= {date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                        required
                        />
            </div>

            <div>
                <label className='block text-gray-700 font-bold mb-2'>Location</label>
                    <input
                        type= "text"
                        value= {location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                        />
            </div>

            <div>
                <label className='block text-gray-700 font-bold mb-2'>Description</label>
                    <input
                        type= "text"
                        value= {description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                        />
            </div>

            <button 
                type="submit"
                disabled={isLoading}
                className='bg-blue-600 text-white font-bold p-3 rounded hover:bg-blue-700 transition mt-4'
                >
                    {isLoading ? 'Create Event...' : 'Create Event'}
                </button>
        </form>
    </div>
</div>
    )}

export default CreateEventPage