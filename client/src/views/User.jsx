import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


export default function User() {
    return (
        <>
        <NavBar/>
        <div id="user">
            <h1 className="title">User</h1>
            <img src="" alt="Photo" />
            <h3 className="title">Surname</h3>
            <p className="title">FirstName LastName</p>
        </div>
        <Footer/>
        </>
    )
}
