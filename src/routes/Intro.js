import React from 'react'
import '../style/home.scss'
import IntroV from '../video/introStarWars.mp4'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Intro() {

    const [videoI, setVideoI] = useState(false)

    const [startButton, setStartButton] = useState(true)

    function startVideo() {
        (videoI) ? setVideoI(false) : setVideoI(true)
    }


    return (
        <section id='video-container'>
            {startButton && (
                <button id='start-button' onClick={startVideo}>start</button>
            )}
            {videoI && (
                <div>
                    <video autoPlay={true} muted={false} onPlay={() => setStartButton(!startButton)}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: '-1',
                        }}>
                        <source src={IntroV} type='video/mp4' />
                    </video>
                    <Link to='/Home'><button id='next-button'>next</button></Link>
                </div>
            )}
        </section>
    )
}
