import React, { useState } from "react";
import { TileLayer, MapContainer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";

import osm from "../osm-providers";
import "leaflet/dist/leaflet.css";
import CatPaw from "../icons/pawprint.png";
import styled from "styled-components";


const DisplayButton = styled.button`
  width: 30%;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px 1em;
  font-weight: 700;
  border-radius: 5px;
  background-color: #326295;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #fff;
    color: #326295;
  }

  &:focus {
    outline: none;
  }
`

const MapWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 5px;
  flex-wrap: wrap;
`
const ControlDiv = styled.div`
  display: flex;
  width: 100%;
   align-items: center;
  justify-content: center;
  margin: 5px;
`

export const MapComponent = (props) => {
const {catCoords, position } = props;
    console.log('poss', props.position)
    const [display, setDisplay] = useState('polygon');

    /// paw section
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
                <Popup>Kot był tutaj: {item.time}</Popup>
            </Marker>
        ));
    };

      // end of paw section

    // polygon section
    const newPolygon = [];

    props.catCoords.forEach(item => {
        const tempItem = [Number(item.latitude), Number(item.longitude)]
        newPolygon.push(tempItem)
    })
    const purpleOptions = { color: 'purple' }
    // end of polygon section

    const center = {
        lat: cords[0].lat,
        lng: cords[0].lng
    }

    if (display === 'paws') {
        return (
            <MapWrapper>
                <ControlDiv>
                    <DisplayButton onClick={() => setDisplay('paws')}>Dokładne info</DisplayButton>
                    <DisplayButton onClick={() => setDisplay('polygon')}>Teren Łowiecki </DisplayButton>
                </ControlDiv>
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
            </MapWrapper>
        )
    }
    if (display === 'polygon') {
        return (
            <MapWrapper>
                <ControlDiv>
                    <DisplayButton onClick={() => setDisplay('paws')}>Dokładne info</DisplayButton>
                    <DisplayButton onClick={() => setDisplay('polygon')}>Teren Łowiecki </DisplayButton>
                </ControlDiv>
                <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Polygon pathOptions={purpleOptions} positions={newPolygon}/>
                </MapContainer>
            </MapWrapper>

        );
    }

};

export default MapComponent;
