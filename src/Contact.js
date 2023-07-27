import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            Feel free to contact me!
            <div className="social-icons">
                <SocialIcon className="icon" url='mailto:jaredtjahjadi@gmail.com' />
                <SocialIcon className="icon" url='https://linkedin.com/in/jaredtjahjadi' />
                <SocialIcon className="icon" url='https://github.com/jaredtjahjadi' />
            </div>
        </div>
    )
}