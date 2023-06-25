import React from 'react';
import ResumePDF from './JaredTjahjadi.pdf';

export default function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <a href={ResumePDF} target="_blank" rel="noreferrer">View Resume PDF</a>
            <h2>Education</h2>
            <div>
                <p class="edu-name">Stony Brook University</p>
                <p class="edu-date">May 2024</p>
                Bachelor of Science in Computer Science
            </div>
            <p class="edu-name">Forest Hills High School</p>
            <p class="edu-date">Sep 2016 — Jun 2020</p>
            <br />
            <h2>Experience</h2>
        </div>
    )
}