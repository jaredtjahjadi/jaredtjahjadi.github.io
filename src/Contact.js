import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            Feel free to contact me!<br />
            <SocialIcon url='mailto:jaredtjahjadi@gmail.com' />
            <SocialIcon url='https://linkedin.com/in/jaredtjahjadi' />
            <SocialIcon url='https://github.com/jaredtjahjadi' />
        </div>
    )
}