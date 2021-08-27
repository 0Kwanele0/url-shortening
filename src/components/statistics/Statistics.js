import React from 'react'
import './styles/statistics.css'
import branded from '../../images/icon-brand-recognition.svg'
import records from '../../images/icon-detailed-records.svg'
import custo from '../../images/icon-fully-customizable.svg'

function Statistics() {
    return (
        <div className="stats">
            <h2 className="stats__title">Advanced Statistics</h2>
            <p className="stats__sub-title">Track how your links are perfoming across
                the web with our advanced statistics dashboard</p>
            <div className="stats__cards">
                <div className="indi">
                    <div className="img-cont"><img src={branded} alt="icon" /></div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recopgnition with each click.
                        Generic links don't mean a thing. Branded links
                        help instill confidance in your content</p>
                </div>
                <div className="indi">
                    <div className="img-cont"><img src={records} alt="icon" /></div>
                    <h3>Detailed Records</h3>
                    <p>Get insight into who is clicking your links.
                        Knowing where and when people engage with your content helps inform better decision.
                    </p>
                </div>
                <div className="indi">
                    <div className="img-cont"><img src={custo} alt="icon" /></div>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discovarability through customizable links. Supercharging audiance engagement.</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics
