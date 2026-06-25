import {Link} from "react-router-dom";

const EventCard = ({event}) => {
    return (
        <article className="glass-card relative rounded-xl overflow-hidden flex flex-col group">
            <div className="h-48 relative overflow-hidden bg-surface-container-highest">
                {event.image && (
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70" style={{backgroundImage: `url('${event.image}')`}}></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded bg-surface/80 backdrop-blur-md border border-white/10 font-label-sm text-label-sm text-on-surface">Event</span>
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm mb-3">
                    <span className="material-symbols-outlined" style={{fontSize: "16px"}}>calendar_today</span>
                    <time dateTime={event.date}>{new Date(event.date).toLocaleDateString()}</time>
                </div>
                
                <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2 group-hover:text-secondary transition-colors">{event.title}</h3>
                
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1 line-clamp-2">
                    {event.description || "Join us for an exciting event filled with fun and competition."}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                    <span className="font-label-sm text-label-sm text-on-surface-variant truncate mr-4">Loc: {event.location || "TBA"}</span>
                    <Link
                        to={`/events/${event.id}`}
                        className="font-body-md text-body-md text-primary font-medium hover:text-secondary transition-colors flex items-center gap-1 shrink-0 before:absolute before:inset-0">
                        View Details <span className="material-symbols-outlined" style={{fontSize: "18px"}}>chevron_right</span>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default EventCard;