import { useState} from 'react'
import './styles/url.scss'

function Url() {
    let [link, setlink] = useState("")
    let [done, setdone] = useState(true)
    let mystore = window.localStorage
    
    const shorten = (ev) => {
        setdone(false)
        let links = []
        ev.preventDefault()
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(res => res.json())
        .then(data => {
            links = JSON.parse(mystore.getItem('links')) || []
            links.push(data.result)
            mystore.setItem('links', JSON.stringify(links))
            window.location.reload()
            setdone(true)
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
                {!done && 
                <h3 className='load'>Loading please wait...</h3>}
            </div>
            <div className="url__list">
            </div>
        </div>
    )
}

export default Url
