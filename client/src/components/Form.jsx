import React from 'react'

export default function Form({ register, fetch, firstName, lastName,
    password, handleFirst, handleLast, email, handleEmail, handlePassword, surname, handleSurname }) {
    return (
        <div id="form-register">
            
            {register ?
                <form onSubmit={fetch}>
                    <div id="input-form">

                        <p className="text-form">Enter your first name.</p>
                        <input type="text"

                            value={firstName} onChange={handleFirst}
                            className="input" name="firstName" placeholder="First Name..." />
                        <p className="text-form">Enter your last name</p>
                        <input type="text"

                            value={lastName} onChange={handleLast}
                            className="input" name="lastName" placeholder="Last Name..." />
                        <p className="text-form">Enter your surname</p>
                        <input type="text"

                            value={surname} onChange={handleSurname}
                            className="input" name="surname" placeholder="Surname..." />
                        <p className="text-form">Enter your email</p>
                        <input type="email"

                            value={email} onChange={handleEmail}
                            className="input" name="email" placeholder="Email..." />
                        <p className="text-form">Enter your password</p>
                        <input type="password"

                            value={password} onChange={handlePassword}
                            className="input" name="password" placeholder="Password..." />

                        <p className="text-form">Confirm your password</p>
                        <input type="password" className="input" name="confirmPassword" placeholder="Confirm password..." />

                        <p className="text-form">Enter your birthdate</p>
                        <input type="date" className="input" name="birthdate" />
                        <input className="product-submit" type="submit" value="Register" />
                    </div>
                </form>
                :
<div id="form-login">
                <form onSubmit={fetch}>
                    <h1 className="login-title">Login</h1>
                    <p className="text-form">Enter your surname</p>
                    <input className="input" type="text" name="surname" placeholder="Surname..." />
                    <p className="text-form">Enter your password</p>
                   
                    <input className="input" type="password" name="password" placeholder="Password" />
                    
                    <input className="input" type="submit" value="Login" />
                </form>
                </div>

            }
        </div>
    )
}
