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
    <div className="max-w-3xl mx-auto p-8 glass-panel mt-10 rounded-xl">
        <h1 className="text-4xl font-display font-bold mb-2 text-primary tracking-tight">{event.title}</h1>
        <div className="flex flex-col text-on-surface-variant mb-8 border-b border-white/10 pb-4 font-mono">
            <span className="font-semibold text-secondary mb-1">
                {event.location}
            </span>
            <span className="text-sm">
                {new Date(event.date).toLocaleDateString([], { hour: '2-digit', minute: '2-digit'})}
            </span>
        </div>
        <div className="text-lg leading-relaxed text-on-surface font-sans mb-6">{event.description}</div>
        {event.latitude && event.longitude && (
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg">
                <EventMap
                    latitude={event.latitude}
                    longitude={event.longitude} />
            </div>
        )}
        <p className="text-on-surface-variant mt-4 font-mono text-sm">{event.location}</p>
    </div>
)
}

export default EventDetails