import React from 'react';
import './Hero.css'; 
import hand_icon from '../Assert/hand_icon.png';
import arrow_icon from '../Assert/arrow.png';
import hero_image from '../Assert/hero_image.png'; 

const Hero = () => {
    return (
        <div className="hero"> 
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hand-hand-icon"> 
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <div>latest collections</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt=""/> 
            </div>
        </div>
    )
}

export default Hero;