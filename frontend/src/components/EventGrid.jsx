import EventCard from "./EventCard";

const EventGrid = ({events}) => {
    const sortedEvents = [...events].sort((a, b) => {
        const timeA = new Date(a.date).getTime()
        const timeB = new Date(b.date).getTime()

        if (isNaN(timeA)) return 1
        if (isNaN(timeB)) return -1

        return timeB - timeA
    })

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {sortedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    )
}

export default EventGrid;