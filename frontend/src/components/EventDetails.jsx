import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import EventMap from './EventMap'


const EventDetails = () => {
    const { id } = useParams() 

    const [event, setEvent] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEventDetails = async () => {
            setIsLoading(true)
            try {
                const response = await fetch (`http://localhost:3001/api/events/${id}`)

                if (!response.ok) {
                    throw new Error("Failed to fetch event data")
                }

            const data = await response.json()
            setEvent(data)
        } catch(err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }
    fetchEventDetails()
    }, [id])

if (isLoading) return <div className="p-8">Loading...</div>
if (error) return <div className="p-8 text-red-500">Error: {error}</div>
if (!event) return <div className="p-8">Event not found.</div>

return (
    <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <div className="flex flex-col text-gray-500 mb-8 border-b pb-4">
            <span className="font-semibold text-gray-700">
                {event.location}
            </span>
            <span>
                {new Date(event.date).toLocaleDateString([], { hour: '2-digit', minute: '2-digit'})}
            </span>
        </div>
        <div className="text-lg leading-relaxed text-gray-800">{event.description}</div>
        {event.latitude && event.longitude && (
            <EventMap
                latitude={event.latitude}
                longitude={event.longitude} />
        )}
        <p className="text-gray-600 mt-4">{event.location}</p>
    </div>
)
}

export default EventDetails