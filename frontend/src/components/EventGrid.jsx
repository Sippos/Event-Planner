import EventCard from "./EventCard";

const EventGrid = ({events}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    )
}

export default EventGrid;