import React from 'react';
import AboutImage from './img/about.JPG';

export default function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <div className='about-content'>
                <div className='about-image'>
                    <img src={AboutImage} alt="Jared Tjahjadi" />
                </div>
                <div id="about-text">
                    My name is Jared Tjahjadi. I am a senior undergraduate student from Queens, NY, currently studying Computer Science at Stony Brook University. My main coding languages are Java, JavaScript, and Python.
                    <br /><br />
                    In my free time, I enjoy listening to music, going to the gym, and taking walks.
                </div>
            </div>
        </div>
    )
}