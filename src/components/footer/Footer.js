import React from 'react'
import './styles/footer.css'
import insta from '../../images/icon-instagram.svg'
import fb from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pin from '../../images/icon-pinterest.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <h1>Shortly</h1>
            </div>
            <div className="footer__features">
                <h3>Features</h3>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="footer__resources">
                <h3>Resources</h3>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="footer__company">
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Carrers</li>
                    <li>Contact</li>
                </ul>

            </div>
            <div className="footer__icons">
                <img src={fb} alt="fb icon" />
                <img src={twitter} alt="twitter icon" />
                <img src={pin} alt="pintrest icon" />
                <img src={insta} alt="insta icon" />
            </div>
        </div>
    )
}

export default Footer
