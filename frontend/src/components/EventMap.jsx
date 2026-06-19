import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

const EventMap = ({ latitude, longitude }) => {
    const position = {
        lat: latitude,
        lng: longitude,
    }

return (
    <div className="w-full h-80 rounded-lg overflow-hidden mt-8 shadow-sm border">
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE"}>
            <Map defaultCenter={position} defaultZoom={15}>
                <Marker position={position} />
            </Map>
        </APIProvider>
    </div>
)
} 

export default EventMap