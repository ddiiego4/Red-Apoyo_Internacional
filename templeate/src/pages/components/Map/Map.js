import React from "react";
import './Map.css'

const Map = () =>{
    return (

        <div className="MapContainer">
            <div className="MapSections">
                <section>
                    <div className="Cabañas">
                        <p>Cabañas</p>
                    </div>
                    <div className="Casas">
                        <p>Casas</p>
                    </div>
                </section>
            </div>
            <div className="Map">
                <a href="./Mapa" >Mapa</a>
            </div>    
        </div>
    );
}

export default Map;