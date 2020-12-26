import { useState } from 'react';
import { Link } from 'react-router-dom'
import { MenuItems } from './menuItems'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import '../assets/scss/navigation.scss'
import '../assets/scss/dropdown.scss'

function Navigation() {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const onMouseEnter = () => {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

    const iconStyle = {
        fontSize: 40,
        color: '#ffffff'
    }

    return(
        <nav className="site-navigation">
            <div  className="menu-icon" onClick={handleClick}>
                {click ? <CloseIcon style={iconStyle} /> : <MenuIcon style={iconStyle} />}
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/news' className="nav-links" onClick={closeMobileMenu}>News</Link>
                </li>
                <li className="nav-item">
                    <Link to='/price-analysis' className="nav-links" onClick={closeMobileMenu}>Price Analysis</Link>
                </li>
                <li className="nav-item">
                    <Link to='/predictions' className="nav-links" onClick={closeMobileMenu}>Predictions</Link>
                </li>
                <li 
                    className="nav-item" 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onMouseEnter}
                >
                    <Link className="nav-links cryptopedia">Cryptopedia <KeyboardArrowDownIcon /></Link>
                    {dropdown && 
                    <ul 
                        onClick={handleClick}
                        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}  
                    >
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to={item.path} className={item.cName} onClick={() => setClick(false)}>{item.title}</Link>
                                </li>
                            ) 
                        })}
                    </ul>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navigation