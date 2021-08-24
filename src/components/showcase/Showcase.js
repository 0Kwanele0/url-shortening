import React from 'react'
import './styles/showcase.css'
import Illustration from '../../images/illustration-working.svg'
import Button from '../button/Button'

function Showcase() {
    return (
        <div className="showcase">
            <div className="showcase__img">
                <img src={Illustration} alt="illustration"/>
            </div>
            <div className="showcase__text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are perfoming.</p>
                <Button text="Get Started"/>
            </div>
        </div>
    )
}

export default Showcase
