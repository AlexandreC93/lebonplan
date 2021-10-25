import React, { useState } from 'react'
import Form from '../components/Form'

export default function UserRegister() {
   

    return (
        <div id="user">
            <h1>User Register</h1>
            <Form register={true}/>
        </div>
    )
}
