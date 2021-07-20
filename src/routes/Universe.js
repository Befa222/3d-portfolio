import React from 'react'
import NavBar from '../components/navBar'
import '../style/allProjects.css'

export default function Universe() {
    return (
        <section className='project-container4'>
            <NavBar/>
            <h1 className='project-title'>WILD UNIVERSE</h1>

            <div className='universe'></div>

            <button className='netlify-button-universe' onClick={() => window.open('https://stoic-mcnulty-b4f347.netlify.app/')}>NETLIFY LINK</button>
            <div className='text-container'>
                <p>Simple website about our universe.</p>
                <p>First project ever made.</p>
                <p>We were a team of 4.</p>
                <p>Fully responsive.</p>
                <p>STACK : HTML, CSS, JS.</p>
            </div>
        </section>
    )
}

