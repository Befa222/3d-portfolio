import React, {useState} from 'react'
import '../style/navBar.scss'
import { Link } from 'react-router-dom'


export default function NavBar() {

    const [projectsList, setProjectList] = useState(false)


    return (

        <div className='navBar'>
        <Link to='/Home'><h1 id='initials'>FL</h1></Link> 
            <ul>
                <Link to='/About-me'><li>About</li></Link>
                <Link to='/Contact-me'><li>contact</li></Link>
                <li className='ppp'>projects</li>
                
                    <div >
                        <ul className='listP'>
                        <li>Pick a Chew</li>
                        <li>Tempera</li>
                        <li>Weather App</li>
                        <li>Wild Universe</li>
                        </ul>
                    </div>
                
                <Link to='/Credits-to-artists'><li>credits</li></Link>
            </ul>
        </div>

    )
}

