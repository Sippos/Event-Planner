import { useState, useEffect } from 'react';
import EventGrid from "./components/EventGrid"; 
import Spinner from "./components/Spinner";

const App = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL;

                const token = localStorage.getItem('token');

                const response = await fetch(`${API_URL}/api/events`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : token ? `Bearer ${token}` : ''
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                console.log("Data from API:", data);
                setEvents(data.results);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            {/* Hero Section */}
            <section className="relative rounded-xl overflow-hidden mb-12 min-h-[400px] flex items-end p-8 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJm3Xitje3plqC74F9dNMfhFjoVnRkNsI5wtw6THPR_JITBnZaog4GudZtwBaA0WyLzMleMr60ujNEEfo3Ctwb1PO_wXcRhcqIldlg0a0q-vypr4vzEzw4p63OWzbGeWgeUra0EwJ6iXBb3s3h5Kr5nxcV1Zlr-Kd4fdTuH_XmEP_tFpy3StOyvJfFVuuFtqczHSM2dk1ZLmwfu3jJ-rWjdOTp7ESIyRZcnP5Ij0JeNU-J0uBq6OXRzBt8gVDlWpQrcM2pnfq7k5IM')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                
                <div className="relative z-10 w-full max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-md">Featured Event</span>
                        <span className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/50 text-secondary font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-md">Premier Tier</span>
                    </div>
                    <h1 className="font-display-lg text-display-lg text-on-surface mb-2 neon-text-primary">Mythic Championship MMXXIV</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl">The ultimate proving ground. Assemble your deck, refine your strategy, and compete for glory in the most anticipated tournament of the season.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="h-12 px-8 rounded-lg bg-gradient-to-r from-primary to-secondary text-surface-container-lowest font-body-md font-bold hover:shadow-[0_0_20px_rgba(236,178,255,0.4)] transition-all hover:-translate-y-1 duration-300">
                            Register Now
                        </button>
                        <button className="h-12 px-6 rounded-lg glass-panel font-body-md text-on-surface hover:bg-white/10 transition-colors flex items-center gap-2">
                            <span>View Details</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Grid Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div className="flex items-center gap-4">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Upcoming Events</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Discover local and global gatherings.</p>
                    </div>
                    <button 
                        onClick={() => {
                            const token = localStorage.getItem('token');
                            if (!token) {
                                alert("You must be logged in to create an event!");
                            } else {
                                window.location.href = '/create-event';
                            }
                        }}
                        className="ml-4 h-10 px-4 rounded-lg bg-surface-container-high border border-white/10 text-primary font-body-md font-bold hover:bg-surface-variant transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined" style={{fontSize: '20px'}}>add</span>
                        <span>Add Event</span>
                    </button>
                </div>
                {/* Filtering/Sorting Mockup */}
                <div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-1 border border-white/5">
                    <button className="px-4 py-2 rounded-md bg-surface-variant text-on-surface font-label-sm text-label-sm shadow-sm">All</button>
                    <button className="px-4 py-2 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">Tournaments</button>
                    <button className="px-4 py-2 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">Casual</button>
                </div>
            </div>

            {loading ? <Spinner /> : <EventGrid events={events} />}
        </>
    );
};

export default App;
