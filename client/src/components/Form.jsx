import React from 'react'

export default function Form({ register, fetch }) {
    return (
        <div id="form">
            <h1>Form</h1>
            {register ?
                <form onSubmit={fetch}>
                    <div id="input-form">
                        <input type="text" className="input" name="firstName" placeholder="First Name..." />
                        <input type="text" className="input" name="lastName" placeholder="Last Name..." />
                        <input type="text" className="input" name="surname" placeholder="Surname..." />
                        <input type="email" className="input" name="email" placeholder="Email..." />
                        <input type="password" className="input" name="password" placeholder="Password..." />
                        <input type="password" className="input" name="confirmPassword" placeholder="Confirm password..." />
                        <input type="date" className="input" name="birthdate" />
                        <input type="submit" value="Register" />
                    </div>
                </form>
                :

                <form onSubmit={fetch}>
                    <h1>login</h1>
                    <input className="input" type="text" name="surname" placeholder="Surname..." />
                    <input className="input" type="password" name="password" placeholder="Password" />
                    <input className="input" type="submit" value="Login" />
                </form>

            }
        </div>
    )
}
