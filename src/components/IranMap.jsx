// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import { useState, useContext } from "react";
// import "leaflet/dist/leaflet.css";
// import { GlobalContext } from "../Contexts/GlobalContext";

// const iranBounds = [
//     [25.0, 44.0],
//     [40.0, 63.5],
// ];

// const isInsideIran = (lat, lng) => {
//     return lat >= 25.0 && lat <= 40.0 && lng >= 44.0 && lng <= 63.5;
// };

// const LocationMarker = ({ setPosition, setAddress }) => {

//     const { setIsAlert, setAlertMsg } = useContext(GlobalContext)

//     const [markerPosition, setMarkerPosition] = useState(null);

//     useMapEvents({
//         click(e) {
//             const { lat, lng } = e.latlng;

//             if (!isInsideIran(lat, lng)) {
//                 setIsAlert('warning')
//                 setAlertMsg("آدرس انتخاب شده معتبر نمی باشد")
//                 return;
//             }

//             setMarkerPosition([lat, lng]);
//             setPosition([lat, lng]);

//             fetch(
//                 `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=fa`
//             )
//                 .then((res) => res.json())
//                 .then((data) => setAddress(data.display_name))
//                 .catch(() => setAddress("نامشخص"));
//         },
//     });

//     return markerPosition ? <Marker position={markerPosition} /> : null;
// };

// const IranMap = ({ setAddress,  }) => {
//     const [position, setPosition] = useState([35.6892, 51.389])

//     return (
//         <>
//             <div className="w-full h-full">
//                 <MapContainer
//                     center={position}
//                     zoom={6}
//                     maxBounds={iranBounds}
//                     maxBoundsViscosity={1.0}
//                     className="w-full h-full rounded-b-lg"
//                 >
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                     <LocationMarker setPosition={setPosition} setAddress={setAddress} />
//                 </MapContainer>
//             </div>
//         </>
//     );
// };

// export default IranMap;


import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

const iranBounds = [
    [25.0, 44.0],
    [40.0, 63.5],
];

const isInsideIran = (lat, lng) => {
    return lat >= 25.0 && lat <= 40.0 && lng >= 44.0 && lng <= 63.5;
};

const LocationMarker = ({ setPosition, setAddress }) => {
    const [markerPosition, setMarkerPosition] = useState(null);

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;

            if (!isInsideIran(lat, lng)) {
                alert("آدرس انتخاب شده معتبر نمی باشد");
                return;
            }

            setMarkerPosition([lat, lng]);
            setPosition([lat, lng]);

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=fa`)
                .then((res) => res.json())
                .then((data) => setAddress(data.display_name))
                .catch(() => setAddress("نامشخص"));
        },
    });

    return markerPosition ? <Marker position={markerPosition} /> : null;
};

const IranMap = ({ setAddress, mapRef }) => {
    const [position, setPosition] = useState([35.6892, 51.389]);

    function SetMapRef({ mapRef }) {
        const map = useMap();
        useEffect(() => {
            if (mapRef) {
                mapRef.current = map;
            }
        }, [map]);
        return null;
    }

    return (
        <div className="w-full h-full">
            <MapContainer
                center={position}
                zoom={6}
                maxBounds={iranBounds}
                maxBoundsViscosity={1.0}
                className="w-full h-full rounded-b-lg"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker setPosition={setPosition} setAddress={setAddress} />
                <SetMapRef mapRef={mapRef} />
            </MapContainer>
        </div>
    )
};

export default IranMap;