import React from 'react'

export default function WeatherApp() {
    return (
        <div className='project-container2'>

            <h1 className='project-title'>WEATHER APP</h1>

            <div className='weather-app'></div>

            <button className='netlify-button' onClick={() => window.open('https://loving-raman-112067.netlify.app/', '_blank')}>NETLIFY LINK</button>
            <div className='text-container'>
                <p>Simple weather app with two different UI.</p>
                <p>App made for training purpose with Neumorphism and Glassmorphism style.</p>
                <p>STACK : React, NPM, JS, Styled components, Open-weather API.</p>
            </div>
        </div>
    )
}
