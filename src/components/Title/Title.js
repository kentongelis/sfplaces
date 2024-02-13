import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
    return (
        <div className="Title">
            <header>
            <div className='Title-Text'>
                <h1>SFPOPOS</h1> 
                <div className='Title-Subtitle'>San Fransiscos Privately Owned Public Spaces</div>
            </div>
            <div>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-activate" : "nav-link" }
                        to="/">List</NavLink>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-activate" : "nav-link" }
                        to="/about">About</NavLink>
            </div>

            </header>
        </div>
    )
}

export default Title