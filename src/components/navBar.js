import React, { useState } from 'react'
import '../style/navBar.scss'
import { Link } from 'react-router-dom'


export default function NavBar() {

    const [list, setList] = useState(false)

    function DropDown() {
        (list) ? setList(false) : setList(true)
    }

    return (

        <div className='navBar'>
            <Link to='/Home'><h1 id='initials'>fL</h1></Link>
            <ul>
                <Link to='/About-me'><li>About</li></Link>
                <Link to='/Contact-me'><li>contact</li></Link>
                <li onClick={DropDown}>projects</li>
                <Link to='/Credits-to-artists'><li>credits</li></Link>

            </ul>
            {list && (
                <div className='nav-project-list'>
                    <Link to='/Pick-a-Chew'><h2>Pick a Chew</h2></Link>
                    <Link to='/Tempera'><h2>Tempera</h2></Link>
                    <Link to='/Weather-app'><h2>Weather app</h2></Link>
                    <Link to='/Wild-Universe'><h2>Wild universe</h2></Link>
                </div>
            )}
        </div>

    )
}

