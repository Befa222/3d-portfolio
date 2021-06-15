import React from 'react'
import myPicture from '../images/me.png'
import NavBar from '../components/navBar'
import '../style/aboutMe.css'

export default function AboutMe() {
    return (
        <div className='about-me-container'>
            <NavBar/>
            <h1>About me</h1>
            <img src={myPicture} alt='Fab' />
            <div className='about-text'>
            <h2>WELCOME!</h2>
            <br></br>
            <p>After working in the hospitality industry for 15 years and losing my job to Covid in 2020, I decided that a career change was my best option.</p>
            <p>I initially used Free Code Camp for a month and enjoyed it a lot! So much that I decided to push myself further by taking on a 5 month Full Stack Web Dev course with Wild Code School.
                During that time, I realized that I enjoy the Front End part of the job, React, CSS and animations.</p>
            <p>I recently started to learn React Three Fiber as I found the idea of bringing 3d into a website totally amazing!
                I am having a lot of fun with it while it's making me work on my Javascript too!
                It took me 2 weeks of daily practice before starting this portfolio.</p>
            <p>But being a gamer, spending 10+ consecutive hours in front of a screen is a second nature to me.</p>
            <p>I would love to find an internship or a junior web dev position in a company where I can practice and improve my skills.</p>
        </div>
        </div>
    )
}
