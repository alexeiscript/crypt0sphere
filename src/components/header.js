import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navigation from './navigation'
import Ticker from './ticker'
import '../assets/scss/header.scss'


function Header() {
    return(
        <header>
            <div className="header-top">
                <div className="containex">
                    <div className="logo-tickers">
                        <Router>
                            <Link id="logo" to='/'>CryptoSphere</Link>
                        </Router>
                        <Ticker />
                    </div>
                </div>
            </div>
            <div className="nav-background">
                <div className="containex">
                    <Router>
                        <Navigation />
                    </Router>
                </div>
            </div>
        </header>
    )
}

export default Header