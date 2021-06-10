import React from 'react'
import '../style/home.scss'
import IntroV from '../video/introStarWars.mp4'
import { Link } from 'react-router-dom'

export default function Intro() {


    return (
        <section id='video-container'>
            <div>
                <video autoPlay={true} muted={false}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: '-1',
                    }}>
                    <source src={IntroV} type='video/mp4' />

                </video>
              
                <button id='start-button' onClick={()=>window.location.reload()}>start</button>
                
            <Link to='/Home'><button id='skip-button'>next</button></Link>   
            </div>
        </section>
    )
}
