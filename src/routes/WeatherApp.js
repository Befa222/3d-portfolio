import React from 'react'
import NavBar from '../components/navBar'
import '../style/allProjects.css'

export default function WeatherApp() {
    return (
        <section className='project-container3'>
            <NavBar/>
            <h1 className='project-title'>WEATHER APP</h1>

            <div className='weather-app'></div>

            <button className='netlify-button-weather' onClick={() => window.open('https://loving-raman-112067.netlify.app/', '_blank')}>NETLIFY LINK</button>
            <div className='text-container'>
                <p>Simple weather app with two different UI.</p>
                <p>App made for training purpose with Neumorphism and Glassmorphism style.</p>
                <p>STACK : React, NPM, JS, Styled components, Open-weather API.</p>
            </div>
        </section>
    )
}
