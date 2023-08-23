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
                    My name is Jared Tjahjadi. I am a senior undergraduate student from Queens, NY, currently studying Computer Science at Stony Brook University. My main coding languages are Java, JavaScript, and Python. I am currently looking for and would be interested in any part-time or full-time job opportunities or internships.
                    <br /><br />
                    In my free time, I enjoy listening to pop, rock, or rap music, going to the gym, and taking walks. On campus, I am the President of the Pokemon GO Club and the Co-Head Activities Coordinator of the Science Fiction Forum!
                    <br /><br />
                    All photos in the background of this website were taken by me during my 2016 family vacation to Indonesia 🇮🇩 and Singapore 🇸🇬!
                </div>
            </div>
        </div>
    )
}