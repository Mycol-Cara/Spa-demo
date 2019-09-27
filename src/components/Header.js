import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                {/* header>nav>ul>li*3>Link[to=$]{$} */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/roster">Roster</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                </ul>
            </ul>
        </nav>
    </header>
)

export default Header