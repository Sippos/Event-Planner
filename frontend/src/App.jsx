import { useState, useEffect } from 'react';
import EventGrid from "./components/EventGrid"; 
import Spinner from "./components/Spinner";

const BASE_URL = 'http://localhost:3001/api';

const App = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await fetch(`${BASE_URL}/events`, {
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
            {loading ? <Spinner /> : <EventGrid events={events} />}
        </>
    );
};

export default App;
