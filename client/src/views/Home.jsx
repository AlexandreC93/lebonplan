import React from 'react'
import NavBar from '../components/NavBar'
// import carteFrance from '../img/carte-france.jpg'
<<<<<<< HEAD
import Map from '../img/france.svg'
import '../App.css'
=======
import Map from '../components/Map'
>>>>>>> 0cee70742c564fbe404892e11f12b9f4940fe4ed

export default function Home() {
    return (
        <div id="home">

            <NavBar />
            <div id="head-home">
            <h1 className="title">Le Bon Plan</h1>
            {/* <img className="map" src={carteFrance} alt="carte-de-france"/> */}
            <Map/>
            </div>

        </div>
    )
}
