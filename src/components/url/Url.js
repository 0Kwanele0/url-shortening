import React from 'react'
import './styles/url.css'

function Url() {
    return (
        <div className="url">
            <div className="url__input">
                <form>
                    <input placeholder="Shorten a link here..."/>
                    <button>shorten it!</button>
                </form>
                
            </div>
            <div className="url__list">

            </div>
        </div>
    )
}

export default Url
