import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Title() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    };

    return (
        <div className="Title">
            <header>
            <li className='menu-item-trigger' onClick={toggleMenu}>≡</li>
            <div className={`Title-Text ${isOpen ? "is-open" : ""}`}>
                <h1>SFPOPOS</h1> 
                <div className="Title-Subtitle">San Fransiscos Privately Owned Public Spaces</div>
            </div>
            <div className={`Menu ${isOpen ? "is-open" : ""}`}>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-activate" : "nav-link" }
                        to="/">List</NavLink>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-activate" : "nav-link" }
                        to="/about">About</NavLink>
                <RandomSpace />
            </div>
            </header>
        </div>
    )
}

export default Title