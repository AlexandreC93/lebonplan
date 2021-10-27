import React, { useState } from 'react'
import Form from '../components/Form'
import NavBar from '../components/NavBar'

export default function UserRegister() {
    // const [data, setData] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [surname, setSurname] = useState("")

    const handleFirst = (e) => {
        setFirstName(e.target.value)
    }
    const handleLast = (e) => {
        setLastName(e.target.value)
    }
    const handleSurname = (e) => {
        setSurname(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            surname: surname,
            email: email,
            password: password
        })
    }

    console.log(firstName);
    return (
        <div id="user">
            <NavBar />
            <h1>User Register</h1>

            <Form register={true}

                firstName={firstName} handleFirst={handleFirst}
                lastName={lastName} handleLast={handleLast}
                email={email} handleEmail={handleEmail}
                password={password} handlePassword={handlePassword}
                surname={surname} handleSurname={handleSurname}

                fetch={(e) => {
                    e.preventDefault();

                    fetch("http://localhost:4000/users/register", requestOptions)
                        .then(res => {
                            console.log(res);
                            res.json()
                            console.log(firstName);
                        })


                }} />
        </div>
    )
}