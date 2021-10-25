import React from 'react'
import NavBar from '../components/NavBar'
import carteFrance from '../img/carte-france.jpg'


export default function Home() {
    return (
        <div>

            <h1>Le Bon Plan</h1>
            <NavBar />
            <img src={carteFrance} alt="carte-de-france"/>
        </div>
    )
}
