import React from 'react'
import NavBar from '../components/navBar'
import '../style/allProjects.css'

export default function Tempera() {
    return (
        <section className='project-container2'>
            <NavBar/>
            <h1 className='project-title'>TEMPERA</h1>
            
            <div className='tempera1'></div>
            <div className='tempera2'></div>
            <div className='tempera3'></div>
            <div className='tempera4'></div>
            
            <div className='text-container'>
            <p>24 hour hackathon (Winners).</p>
            <p>Tablets only app which 'takes' pictures in black and white and colorize them!</p>
            <p>We were a team of 5.</p>
            <p>STACK : React, React-router, NPM, Unsplash API, JS.</p>
            </div>
        </section>
    )
}
