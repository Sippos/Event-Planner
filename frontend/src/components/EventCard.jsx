import {Link} from "react-router-dom";

const EventCard = ({event}) => {
    return (
        <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
            {event.image && <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded" />}

            <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
            <p className="text-gray-600 mt-2"> {new Date(event.date).toLocaleDateString()}</p>

            <Link
                to={`/events/${event.id}`}
                className="text-blue-500 font-semibold mt-4 block">
                View Details
            </Link>
            </div>
    )
}

export default EventCard;