import React,{useState} from 'react'
import './styles/url.css'

function Url() {
    let [link, setlink] = useState("")
    let mystore = window.localStorage
    
    function shorten(ev) {
        let links = []
        ev.preventDefault()
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(res => res.json())
        .then(data => {
            links = JSON.parse(mystore.getItem('links')) || []
            links.push(data.result)
            mystore.setItem('links', JSON.stringify(links))
            let stored = JSON.parse(mystore.getItem('links'))
            window.location.reload()
            console.log(stored)
        })
        setlink("")
    }
    
    function change(e) {
        setlink(e.target.value)
    }
    return (
        <div className="url">
            <div className="url__input">
                <form onSubmit={shorten}>
                    <input type="url" required={true} onChange={change} value={link} placeholder="Shorten a link here..."/>
                    <button type="submit">shorten it!</button>
                </form>
            </div>
            <div className="url__list">
            </div>
        </div>
    )
}

export default Url
