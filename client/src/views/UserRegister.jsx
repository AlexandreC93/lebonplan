import React, { useState } from 'react'
import Form from '../components/Form'
import NavBar from '../components/NavBar'

export default function UserRegister() {
   

    return (
        <div id="user">
            <NavBar/>
            <h1>User Register</h1>
            <Form register={true}/>
        </div>
    )
}
