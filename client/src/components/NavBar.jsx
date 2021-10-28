import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function NavBar() {
    return (
        <div id="navbar">


            <nav>
                <Link to="/">
                    <a href="">
                        <h3>Home</h3>
                    </a>
                </Link>
                <Link to="/product">
                    <a href="">
                        <h3> Product</h3>
                    </a>
                </Link>
                <Link to="/user">
                    <a href="">
                        <h3> Profil </h3>
                    </a>
                </Link>
                <Link to="/users/register">
                    <a href="">
                        <h3> Register</h3>
                    </a>
                </Link>
                <Link to="/product/admin">
                    <a href="">
                        <h3> Admin product</h3>
                    </a>
                </Link>
        <SearchBar/>
            </nav>
        </div>
    )
}
