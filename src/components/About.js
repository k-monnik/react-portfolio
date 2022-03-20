import {
    FaGithub,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare


} from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>Hi! I'm Kristen, a front-end developer based in Montréal, Canada.</p>
            <p>I'm passionate about creating user-friendly websites and software projects...</p>
            <h2>Skills</h2>
            <div className='flex flex-row mx-auto justify-center'>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJsSquare />
                <FaReact />
                <FaGithub />
            </div>


        </div>
    )
}

export default About
