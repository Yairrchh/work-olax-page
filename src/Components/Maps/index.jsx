import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';
// import icon from "leaflet/dist/images/marker-icon.png"
// import iconShadow from "leaflet/dist/images/marker-icon.png"

// let iconUbication = new L.icon({
//     iconUrl : icon,
//     iconShadow: iconShadow,
//     iconSize: [60,55],
//     iconAnchor: [22,94],
//     shadowAnchor: [22,94],
//     popupAnchor: [-3,-76]
// })


const Maps = () => {
    return (
        <div>
            <MapContainer center={[25.83336, -80.354200]} zoom={15} scrollWheelZoom={false} className='map-container'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[25.83336, -80.354200]} >
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export {Maps};
