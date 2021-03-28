import React, { useRef, useState } from 'react';
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import osm from './osm-providers'
import "leaflet/dist/leaflet.css"
import CatPaw from './icons/pawprint.png'

const cords = [
  {
    id: 1,
    time: '11.48.55',
    lat: 52.20477,
    lng: 21.06587,
  },
  {
    id: 2,
    time: '16.49.55',
    lat: 52.20081,
    lng: 21.06703,
  },
  {
    id: 3,
    time: '16.48.55',
    lat: 52.20387,
    lng: 21.06833,
  },
  {
    id: 4,
    time: '16.38.55',
    lat: 52.20216,
    lng: 21.05907,
  }
]

// const markerIcon = L.Icon({
//   iconUrl: "./icons/pawprint.png",
//   iconSize: [10, 10],
// })

const catPaw = L.icon({
  iconUrl: CatPaw,


  iconSize: [25, 25], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const Markers = () => {
  return (
    cords.map(item => <Marker position={[item.lat, item.lng]} icon={catPaw} key={item.id} ><Popup>
      Kot był tutaj o godzinie {item.time}
    </Popup></Marker>)
  )
}

const App = () => {

  const [center, setCenter] = useState({ lat: 52.1544363, lng: 20.9860718 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <div style={{ width: 1200, height: "100%" }}>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />


        <Markers />
      </MapContainer>

    </div >
  );
};

export default App;