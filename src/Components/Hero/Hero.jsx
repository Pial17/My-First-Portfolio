import React from 'react';
import './Hero.css';
import profile from '../../assets/profile_icon.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile} alt=''/>
            <h1><span>I'm Pial Rafsan,</span> frontend web Developer in Bangladesh.</h1>
            <p>I am a beginner frontend developer learning by myself and creating new projects everyday.</p>
            <div className="hero-action">   
                <div className="hero-connect">
                    Contact With Me
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div> 
        </div>
    );
};

export default Hero;