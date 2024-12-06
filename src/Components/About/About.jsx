import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/profile_icon1.jpg';
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt=''/>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile} alt=''/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am learning frontend web development. I have learnt CSS & HTML. After learning JavaScript I started learning ReactJS. After learning ReactJS I started to do frontend web projects from Youtube.</p>
                        <p>I have done several projects and they are mostly E-commerce, Gemini, Counter, Notebook, Menubar type projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width: "50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{width: "40%"}} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{width: "30%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{width: "60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>C & C++</p><hr style={{width: "70%"}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>13+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default About;