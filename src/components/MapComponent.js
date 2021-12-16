import React from "react";
import {TileLayer, MapContainer, Marker, Popup} from "react-leaflet";
import L from "leaflet";

import osm from "../osm-providers";
import "leaflet/dist/leaflet.css";
import CatPaw from "../icons/pawprint.png";


export const MapComponent = (props) => {
    const {catCoords} = props;

    const cords = [
        {
            id: 1,
            time: "11.48.55",
            lat: 52.20477,
            lng: 21.06587,
        },
        {
            id: 2,
            time: "16.49.55",
            lat: 52.20081,
            lng: 21.06703,
        },
        {
            id: 3,
            time: "16.48.55",
            lat: 52.20387,
            lng: 21.06833,
        },
        {
            id: 4,
            time: "16.38.55",
            lat: 52.20216,
            lng: 21.05907,
        },
    ];

    const newCoords = [];

    try {
        if (catCoords) {
            catCoords.forEach(item => {

                let cos = {};
                cos.id = item.id;
                cos.time = item.date
                cos.lat = parseFloat(item.latitude);
                cos.lng = parseFloat(item.longitude);

                newCoords.push(cos)

            })
        }
    } catch (e) {
        console.log(e)
    }


    const catPaw = L.icon({
        iconUrl: CatPaw,

        iconSize: [26, 26], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [13, 26], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -75], // point from which the popup should open relative to the iconAnchor
    });


    const Markers = () => {
        return newCoords.map((item) => (
            <Marker position={[item.lat, item.lng]} icon={catPaw} key={item.id}>
                <Popup>Kot był tutaj o godzinie {item.time}</Popup>
            </Marker>
        ));
    };

    const center = newCoords.length >0? {lat: newCoords[0].lat, lng: newCoords[0].lng} : {lat: cords[0].lat, lng: cords[0].lng};
    console.log('center to',center)

    return (
        <div style={{width: "100%", height: "100%"}}>
            <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    url={osm.maptiler.url}
                    attribution={osm.maptiler.attribution}
                />
                <Markers/>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
