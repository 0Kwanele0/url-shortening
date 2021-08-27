import React, {useRef, useEffect} from 'react'
import './styles/nav.css'

function Nav() {
    
    return (
        <div className="nav">
            <h1 className="nav__logo">Shortly</h1>
            <div className="nav__list">
                <ul>
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
                <div className="btns">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <img className="nav__icon" src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menu"/>
        </div>
    )
}

export default Nav
