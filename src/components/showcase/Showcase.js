import './styles/showcase.scss'
import Illustration from '../../images/illustration-working.svg'

function Showcase() {
    return (
        <div className="showcase">
            <div className="showcase__img">
                <img src={Illustration} alt="illustration"/>
            </div>
            <div className="showcase__text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition through shorte links which are easily sharable.</p>
            </div>
        </div>
    )
}

export default Showcase
