import React, { useState } from 'react'
import Form from '../components/Form'
import NavBar from '../components/NavBar'

export default function UserRegister() {
    const [data, setData] = useState([])

    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',   
        },
        body: JSON.stringify({info: data})
    }

    console.log(data);

    return (
        <div id="user">
            <NavBar />
            <h1>User Register</h1>
            
            <Form register={true} fetch={(e) => {
                e.preventDefault()
                fetch("http://localhost:4000/users/register", requestOptions)
                .then(res=> res.json())
                .then(result => setData(result))
            

            }} />
        </div>
    )
}