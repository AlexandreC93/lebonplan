import React from 'react'
import NavBar from '../components/NavBar'
// import carteFrance from '../img/carte-france.jpg'
import Map from '../img/france.svg'

export default function Home() {
    return (
        <div id="home">

            <NavBar />
            <div id="head-home">
            <h1 className="title">Le Bon Plan</h1>
            {/* <img className="map" src={carteFrance} alt="carte-de-france"/> */}
            <img id="map" src={Map} alt="map" />
            </div>

        </div>
    )
}
