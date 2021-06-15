import React from 'react'
import NavBar from '../components/navBar'

export default function PickAChew() {
    return (
        <div className='project-container1'>
            <NavBar/>
            <h1 className='project-title'>Pick a Chew</h1>
            
            <div className='pika1'></div>
            <div className='pika2'></div>
            <div className='pika3'></div>
            <div className='pika4'></div>
            
            <div className='text-container'>
            <p>First React project ever made.</p>
            <p>Food app that let you find receipes with the ingredients you have at home!</p>
            <p>We were a team of 3.</p>
            <p>STACK : React, Spoonacular API, JS</p>
            </div>
        </div>
    )
}

