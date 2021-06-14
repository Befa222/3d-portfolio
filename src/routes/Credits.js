import React from 'react'
import NavBar from '../components/navBar'
import '../style/credits.css'


export default function Credits() {
    return (
        <div className='credits'>
            <NavBar/>
            <h1>thank you</h1>
            <div className='credits-text'>
            <p>I would love to thanks the 3d artists who shared their models for free and therefore helped me to make this project.</p>
            <p>All the models have been downloaded on:</p> 
            <a href='https://sketchfab.com/feed' target='_blank' rel="noreferrer">Sketchfab</a>
            </div>
            <h2>Artists page links</h2>
            <div className='artists-links'>
            <h3>X-wing, Tie Bomber :</h3>
            <a href='https://sketchfab.com/SWU' target='_blank' rel="noreferrer">SWU</a>
            <h3>Death Star : </h3>
            <a href='https://sketchfab.com/nathanmlange' target='_blank' rel="noreferrer">N8</a>
            <h3>Cockpit : </h3>
            <a href='https://sketchfab.com/DanielAndersson' target='_blank' rel="noreferrer">Daniel</a>
            </div>
        </div>
    )
}
