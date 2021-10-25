import React from 'react'

export default function Form({register}) {
    return (
        <div id="form">
            <h1>Form</h1>
            {register ?
                <form action="" onSubmit={register}>
                    <div id="input-form">
                        <input type="text" className="input" name="firstName" placeholder="First Name..." />
                        <input type="text" className="input" name="lastName" placeholder="Last Name..." />
                        <input type="email" className="input" name="email" placeholder="Email..." />
                        <input type="password" className="input" name="password" placeholder="Password..." />
                        <input type="password" className="input" name="confirmPassword" placeholder="Confirm password..." />
                        <input type="date" className="input" name="birthdate" />
                        <input type="submit" value="Register" />
                    </div>
                </form>
                :
                <form action="">
                    <h1>login</h1>
                </form>
            }
        </div>
    )
}
