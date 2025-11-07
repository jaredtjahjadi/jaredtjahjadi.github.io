import ResumePDF from '../JaredTjahjadi.pdf';
import ResumeCard from './ResumeCard';

export default function Resume() {
    return (
        <div className="resume-wrapper">
            <div className="resume">
                <h1>Resume</h1>
                <div className="pdf-button">
                    <a href={ResumePDF} target="_blank" rel="noreferrer"><button>View Resume PDF</button></a>
                </div>
                <h2>Education</h2>
                <ResumeCard
                    name={"Stony Brook University"}
                    date={"Aug 2020 — May 2024"}
                    addl_text={"Bachelor of Science in Computer Science"}
                    courseworkTitle={"Relevant coursework: "}
                    courseworkContent={"Object-Oriented Programming, Data Structures, Discrete Mathematics, Theory of Computation, Computer Networks, Analysis of Algorithms, Compiler Design, Natural Language Processing, Full-Stack Web Development, Software Engineering"}
                />
                <ResumeCard
                    name={"Forest Hills High School"}
                    date={"Sep 2016 — Jun 2020"}
                    courseworkTitle={"AP coursework: "}
                    courseworkContent={"AP World History, AP U.S. History, AP Spanish Language, AP Calculus BC, AP Physics C: Mechanics, AP Computer Science A"}
                />
                <h2>Experience</h2>
                <ResumeCard
                    name={"Associate Modeling & Simulation Engineer, MITRE"}
                    date={"Oct 2024 — Present"}
                    listItem1={"Developed an identification service for a program interacting with a middleware that sends and receives aircraft messages and events, allowing for accurate identification of platforms in a scenario and contributing towards the key goals of federal sponsors"}
                    listItem2={"Created a full-stack web app using Flask and Plotly Dash that interacts with the OpenAI API to display an artificial intelligence-backed analysis on user-implemented aircraft simulations, accomplishing the sponsor priority of increased usage of AI"}
                    listItem3={"Collaborated with a Chief Engineer to orchestrate a script that models airline routes and determines route regions based on real-time airport and flight data, which will be used by the United States government to test new platform capabilities"}
                />
                <ResumeCard
                    name={"Undergraduate Teaching Assistant, Stony Brook University"}
                    date={"Aug 2022 — May 2023"}
                    listItem1={"Held office hours and supervised lab sessions of 30 students for Object-Oriented Programming in Java"}
                    listItem2={"Discussed lecture material, answered questions regarding assignments, and provided feedback on homework"}
                />
                <ResumeCard
                    name={"Computer Science Team Intern, Sparks Within Reach"}
                    date={"Jul 2021 — Aug 2021"}
                    listItem1={"Collaborated with seven developers to create a minimum viable product of a website that hosts educational resources for homeless children in New York City"}
                    listItem2={"Leveraged Firebase as the backend to display curriculum materials and assign role-based permissions for users"}
                    listItem3={"Integrated the website with Firebase Authentication and React to provide login functionality"}
                />
            </div>
        </div>
    )
}