import React from 'react'

export default function NavBar() {
    
    return (
        <div>
            <nav>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cities</a></li>
                    <li><button class="login-button" href="#">Login</button></li>
                    <li><button class="register-button" href="#">Register</button></li>
                </ul>
            </nav>
        </div>
    )
}
