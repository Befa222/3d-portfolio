import React from 'react'
import '../style/navBar.scss'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (

        <div className='navBar'>
        <Link to='/Home'><h1 id='initials'>FL</h1></Link> 
            <ul>
                <Link to='/About-me'><li>About</li></Link>
                <Link to='/Contact-me'><li>Contact</li></Link>
                <Link to='/Credits-to-artists'><li>3d models credits</li></Link>
            </ul>
        </div>

    )
}

