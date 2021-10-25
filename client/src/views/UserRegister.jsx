import React, { useState } from 'react'
import Form from '../components/Form'

export default function UserRegister() {
    const [register, setRegister] = useState(true)

    const isRegister = ()=>{
        setRegister(false)
    }

    return (
        <div id="user">
            <h1>User Register</h1>
            <Form register={isRegister}/>
        </div>
    )
}
