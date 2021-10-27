import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div id="navbar">


            <nav>
                <Link to="/">
                    <button>
                        <h3>Home</h3>
                    </button>
                </Link>
                <Link to="/products">
                    <button>
                        <h3> Product</h3>
                    </button>
                </Link>
                <Link to="/users/register">
                    <button>
                        <h3> Register</h3>
                    </button>
                </Link>
                <Link to="/product/admin">
                    <button>
                        <h3> Admin product</h3>
                    </button>
                </Link>

            </nav>
        </div>
    )
}
