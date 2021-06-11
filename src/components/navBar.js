import React from 'react'
import '../style/navBar.scss'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (

        <div className='navBar'>
            <h1>FL</h1>
            <ul>
                <Link to='/About-me' target='blank'><li>About</li></Link>
                <Link to='/Contact-me' target='blank'><li>Contact</li></Link>
                <Link to='/Credits-to-artists' target='blank'><li>3d models credits</li></Link>
            </ul>
        </div>

    )
}

