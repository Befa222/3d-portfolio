import React from 'react'

export default function Universe() {
    return (
        <div className='project-container4'>

            <h1 className='project-title'>WILD UNIVERSE</h1>

            <div className='universe'></div>

            <button className='netlify-button-universe' onClick={() => window.open('https://stoic-mcnulty-b4f347.netlify.app/')}>NETLIFY LINK</button>
            <div className='text-container'>
                <p>Simple website about our universe.</p>
                <p>First project ever made at Wild Code School.</p>
                <p>We were a team of 4.</p>
                <p>Fully responsive.</p>
                <p>STACK : HTML, CSS, JS.</p>
            </div>
        </div>
    )
}

