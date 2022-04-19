import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import Markers from "./Marker/Markers";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Mapa = () => {

  const [dbcasas, setdbcasas] = useState([])
  const [location, setLocation] = useState({
      currentLocation : {"lat": "-33.386740", "lng":"-70.624847"}
  })

  
  useEffect(()=>{
    axios
    .get("https://isnft-prod.azurewebsites.net/api/houses")
    .then((rep) =>{
      setdbcasas(rep.data.result)
      setLocation({currentLocation: { "lat" : dbcasas[4].latitude , "lng": dbcasas[4].longitude}})
    })  
  })  


  return (
    <>
   
    <MapContainer center={location.currentLocation} zoom={96}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
     {
      dbcasas.map((item, index) =>(
        <div key={index}>
          <Markers data={item} />
        </div>
      ))
    }
    </MapContainer>
  </>
    
  );
};

export default Mapa;
