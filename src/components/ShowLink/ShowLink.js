import React from 'react'
import './styles/showlink.css'

function ShowLink(props) {
    return (
        <div className="show">
            {props.list &&
                props.list.map((item, key) => {
                    console.log(item)
                    return (
                    <div key={key} className="show__indi">
                            <h5 className="long-link">{item.original_link}</h5>
                            <h5 className="short-link">{ item.short_link}</h5>
                            <button onClick={(e) => {
                                e.preventDefault()
                                navigator.clipboard.writeText(item.short_link)
                            }
                        }>Copy</button>
                    </div>
                    )
                })
            }
            
        </div>
    )
}

export default ShowLink
