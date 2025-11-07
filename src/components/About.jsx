import AboutImage from '../assets/about.jpg';

export default function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <div className='about-content'>
                <div className='about-image'>
                    <img src={AboutImage} alt="Jared Tjahjadi" />
                </div>
                <div id="about-text">
                    My name is Jared Christopher Tjahjadi. Born and raised in Queens, NY, I graduated from Stony Brook University with a Bachelor of Science in Computer Science.
                    Now, I work as an Associate Modeling & Simulation Engineer at MITRE.
                    <br />
                    My main coding languages are Java, JavaScript, and Python.
                    In addition to my programming experience, I adapt quickly to unfamiliar situations with an enthusiastic, can-do attitude.
                    <br /><br />
                    In my free time, I enjoy listening to pop, rock, or rap music, going to the gym, and taking walks. On campus, I was the President of the Pokemon GO Club and the Co-Head Activities Coordinator of the Science Fiction Forum!
                    <br /><br />
                    Fun fact: All photos in the background of this website were taken by me during my 2016 family vacation to Indonesia 🇮🇩 and Singapore 🇸🇬!
                </div>
            </div>
        </div>
    )
}