import React from 'react'
import NavBar from '../components/navBar'
import pikaMobile from '../images/pikaMobile1.png'
import pikaDesktop from '../images/pikaDesktop1.png'
import '../style/allProjects.css'

export default function PickAChew() {
    return (
        <section className='project-container1'>
            <NavBar/>
            <h1 className='project-title'>Pick a Chew</h1>
            <button className='netlify-button-pickachew' onClick={() => window.open('https://pick-a-chew.netlify.app/')}>NETLIFY LINK</button>
            

            <div className='pika-image-container'>
            <img src={pikaMobile} className='pickachew-mobile' alt='mobile-homescreen'/>
            <img src={pikaDesktop} className='pickachew-desktop' alt='desktop-homescreen'/>
            </div>


            <div className='text-container'>
            <p>Total revamp of a project made during my time studying web development.</p>
            <p>Food app that let you find receipes with the ingredients you have at home!</p>
            <p>Mobile and desktop version have a different UI.</p>
            <p>STACK : React, Spoonacular API, JS, Axios, Hooks, CSS, React Router.</p>
            </div>
        </section>
    )
}

