import React, { useState } from 'react'
import NavBar from '../components/navBar'
import {Link} from 'react-router-dom'
import { GreenLightSaber, RedLightSaber, PurpleLightSaber } from '../components/lightSaber'
import emailjs from 'emailjs-com';
import gitHub from '../images/GitHub-Mark-Light-64px.png'
import linkedin from '../images/linkedin-64.ico'
import '../style/contact.css'



export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_42wcai8', 'template_pacrvr9', e.target, 'user_2GGglIWKLZaKHdfcHpWH0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

const [popup, setPopup] = useState(false)

    return (
        <div className='contact-page'>
            <NavBar/>
            <h1 id='contact-title'>Contact me</h1>
            
            <form onSubmit={sendEmail}>
                <input className='contact-name' type="text" name="_name" required placeholder='Your Name' />
                <GreenLightSaber/>
                <input className='contact-email' type="email" name="_email" required placeholder='Your email' />
                <RedLightSaber/>
                <textarea rows="5" cols="30" name="message" required placeholder='Your message' />
                <PurpleLightSaber/>
                <input onClick={()=> setPopup(!popup)} className="send-button" type="submit" value="send" />
            </form>
            <img onClick={() => window.open('https://github.com/Befa222', '_blank')} className='github-img' src={gitHub} alt='github-logo'/>
            <img onClick={() => window.open('https://www.linkedin.com/in/fabien-lallement-b10386204/', '_blank')} className='linkedin-img' src={linkedin} alt='linkedin-logo'/>
            {popup && (
                <div className='thanks-popup'>
                    <h2>Thank you very much!</h2>
                    <h3>I will come back to you quickly!</h3>
                 <Link to='/Home'><button id='popup-button'>close</button></Link>
                </div>
            )}
        </div>
    )
}
